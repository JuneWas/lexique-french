# v12 → v13 の変更一覧

## 既存ファイルの変更

| ファイル | 変更内容 |
|---|---|
| dist/app.js | 教材範囲での検索・旧復習、番号表示、追加画面へのルーティング、起動順、保存データ破損時の上書き防止、設定の文言 |
| dist/index.html | 新規データ・学習モジュールの読み込み、4タブ構成、キャッシュバージョン |
| dist/style.css | 教材選択、絞り込み、30日進捗、暗記カード、スマートフォン用レイアウト |

## 新規ファイル

| ファイル | 役割 |
|---|---|
| dist/core1000.json / core1000.js | マスター全1000行・全列・バージョン・ハッシュ |
| dist/core-adapter.js | 元IDを保持した名前空間と表示用フィールド変換 |
| dist/learning-engine.js | 30日スケジュール、判定履歴、集計、専用苦手復習、入力検証 |
| dist/learning-ui.js | 教材切り替え、Zone・品詞、30日ホーム、暗記画面、保存・再開、v3バックアップと旧形式移行 |
| scripts/import-core.py | XLSXから再現可能なマスター抽出（Python標準ライブラリのみ） |
| tests/v13.cjs | データ・学習エンジンのテスト |
| tests/integration.cjs | 既存記録、検索、音声リクエスト、保存、バックアップ互換性の統合テスト |
| content/french_core1000_v1_1_qa.xlsx | 提供された編集・QA版の原本 |
| README.md / CHANGES.md / TEST_RESULTS.md | 起動・利用・更新手順、変更一覧、検証結果 |

既存の data.js、foucault.js、parts-of-speech.js、custom.js、fit-terms.js、思想100語の words.json、音声MP3、アイコン、マニフェスト、ホスティング設定は維持しています。学習記録はデータファイルに書き込まず、ブラウザ側に保存します。
