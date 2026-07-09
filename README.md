# Ryutaro Tachibana Portfolio

橘 龍太朗の採用・受注向けポートフォリオです。

## 公開サイト

[https://ryutaro-portfolio-orpin.vercel.app](https://ryutaro-portfolio-orpin.vercel.app)

## 表示仕様

- PCでは、従来の10枚構成のスライド型ポートフォリオをそのまま表示します。
- 768px以下では、スマートフォン専用の縦長レイアウトへ切り替わります。
- スマホ版は見出しの意図しない改行を防ぎ、写真を元の1:1比率で表示します。
- スマホでは非表示のPCスライドを読み込まないため、不要な通信と実行を抑えています。

## 掲載内容

- フィールドサービスとAI業務改善を組み合わせた強み
- 家電修理・エアコン修理・工事の現場経験
- クライアント導入済みの案件精算ウェブアプリ
- 地域サービス業向けWebサイト
- 世界経済リスクダッシュボード
- LINE導線、MEO、AI返信・見積テンプレート
- GitHub、Wantedly、既存ポートフォリオへの連絡導線

## 技術構成

- HTML / CSS / JavaScript
- 外部フレームワークなし
- レスポンシブ切り替え
- WebP画像
- Vercel静的デプロイ

## ディレクトリ

```text
.
├── index.html                 # レスポンシブ表示の入口
├── Portfolio-original.html    # PC用の元スライド
├── assets/                    # スマホ版で使用するWebP画像
├── scripts/build-static.mjs   # Vercel用ビルド
├── package.json
└── vercel.json
```

## ローカル確認

```bash
npm run build
npx serve dist
```

`index.html` を直接開いても確認できます。
