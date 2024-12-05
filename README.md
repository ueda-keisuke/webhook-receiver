# Webhook Logger

[日本語訳はこちら](#日本語訳)

## Overview

Webhook Logger is a simple Node.js application that provides an endpoint to receive webhook events and saves the incoming requests as JSON files. This tool is ideal for debugging and analyzing webhook payloads.

## Features

- Receives webhook events through a POST endpoint.
- Saves webhook payloads (headers, body, etc.) into organized JSON files.
- Automatically creates a directory for storing logs.
- Configurable request size limit for large payloads.

## Prerequisites

- Node.js v14 or later
- npm (Node.js package manager)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/webhook-logger.git
    cd webhook-logger
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create an environment file if needed (e.g., `.env`) to customize configurations like port and log directory:
    ```bash
    PORT=3005
    LOGS_DIR=webhook_logs
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```

2. Send a POST request to the webhook endpoint:
    ```bash
    curl -X POST http://localhost:3005/webhook \
         -H "Content-Type: application/json" \
         -d '{"example": "data"}'
    ```

3. Check the `webhook_logs` directory for saved logs.

## Configuration

- **PORT**: The port number the server will listen on (default: `3005`).
- **LOGS_DIR**: Directory where webhook logs will be stored (default: `webhook_logs`).
- **Payload Limit**: Default is set to `10MB`. Modify in the code if necessary.

## Security Notes

- Avoid logging sensitive information like API keys or authentication tokens.
- Always use HTTPS for production environments.
- Set appropriate permissions for the log directory to prevent unauthorized access.

## Contributing

Feel free to submit issues and pull requests. Contributions are welcome!

---

## 日本語訳

### [English Version Above](#webhook-logger)

## 概要

Webhook Loggerは、Node.jsで作られたシンプルなアプリケーションです。このツールはWebhookイベントを受信し、リクエストデータをJSONファイルとして保存します。Webhookペイロードのデバッグや分析に最適です。

## 特徴

- WebhookイベントをPOSTエンドポイントで受信。
- Webhookのペイロード（ヘッダー、ボディなど）をJSONファイルに整理して保存。
- ログ保存用ディレクトリを自動作成。
- 大容量ペイロードに対応したリクエストサイズの制限設定。

## 必要条件

- Node.js v14以上
- npm (Node.js パッケージマネージャ)

## インストール方法

1. リポジトリをクローンする:
    ```bash
    git clone https://github.com/your-repo/webhook-logger.git
    cd webhook-logger
    ```

2. 依存関係をインストールする:
    ```bash
    npm install
    ```

3. 環境設定ファイルを作成してカスタマイズ（例: `.env`）:
    ```bash
    PORT=3005
    LOGS_DIR=webhook_logs
    ```

## 使用方法

1. サーバーを起動する:
    ```bash
    npm start
    ```

2. WebhookエンドポイントにPOSTリクエストを送信する:
    ```bash
    curl -X POST http://localhost:3005/webhook \
         -H "Content-Type: application/json" \
         -d '{"example": "data"}'
    ```

3. `webhook_logs`ディレクトリで保存されたログを確認。

## 設定

- **PORT**: サーバーが待ち受けるポート番号（デフォルト: `3005`）。
- **LOGS_DIR**: Webhookログが保存されるディレクトリ（デフォルト: `webhook_logs`）。
- **ペイロード制限**: デフォルトは`10MB`。必要に応じてコード内で変更。

## セキュリティ上の注意点

- APIキーや認証トークンなどの機密情報をログに記録しないようにしてください。
- 本番環境では必ずHTTPSを使用してください。
- ログディレクトリの適切なアクセス権限を設定して、不正アクセスを防止してください。

## 貢献

問題やプルリクエストはお気軽に送ってください。貢献を歓迎します！