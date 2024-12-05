const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();

// JSONボディパーサーのサイズ制限を増やす（WhatsAppの添付ファイルなども考慮）
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' })); // この行を追加


// ログ保存用のディレクトリ
const LOGS_DIR = path.join(__dirname, 'webhook_logs');

// 起動時にログディレクトリを作成
async function ensureLogDir() {
    try {
        await fs.mkdir(LOGS_DIR, { recursive: true });
        console.log(`Log directory created: ${LOGS_DIR}`);
    } catch (err) {
        console.error('Error creating log directory:', err);
        process.exit(1);
    }
}

// Webhookエンドポイント
app.post('/webhook', async (req, res) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = path.join(LOGS_DIR, `webhook-${timestamp}.json`);

    const logData = {
        timestamp: new Date().toISOString(),
        headers: req.headers,
        body: req.body,
        method: req.method,
        url: req.url
    };

    try {
        await fs.writeFile(filename, JSON.stringify(logData, null, 2));
        console.log(`Webhook logged to: ${filename}`);
        res.status(200).json({ status: 'success' });
    } catch (err) {
        console.error('Error writing webhook log:', err);
        res.status(500).json({ status: 'error', message: err.message });
    }
});

// サーバー起動
const PORT = 3005;

async function startServer() {
    await ensureLogDir();
    app.listen(PORT, () => {
        console.log(`Webhook logger server running on port ${PORT}`);
        console.log(`POST http://localhost:${PORT}/webhook`);
        console.log(`Logs will be saved to: ${LOGS_DIR}`);
    });
}

startServer().catch(console.error);