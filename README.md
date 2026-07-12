# Ryutaro Tachibana | 3D Portfolio

橘 龍太朗の採用・受注向けポートフォリオです。現場で得た一次情報をAIとWebで再現可能な仕組みに変える力を、3Dインタラクションで表現しています。

## 公開サイト

[https://ryutaro-portfolio-orpin.vercel.app](https://ryutaro-portfolio-orpin.vercel.app)

## コンセプト

`FIELD SIGNAL CORE`

中央の3Dコアは、現場の断片的な情報が整理・接続され、実装可能な仕組みに変わる過程を表します。スクロールに連動して分解と再構成が起き、実績、プロフィール、相談導線へ進みます。

## 主な実装

- Three.jsによるリアルタイム3Dコア、ノード、粒子表現
- GSAP / ScrollTriggerによるスクロール連動演出
- ヒーロー限定のシグナルスポットライトと実績カードの3D傾斜
- 浮遊ナビゲーションとスクロール進行を示すSIGNAL RAIL
- 実績カードの横方向ストーリーテリング
- 実績ごとの「課題・実装・成果」と画像拡大ダイアログ
- `MOTION ON / OFF`による演出停止
- モバイル向け描画負荷軽減とスクロールスナップ
- WebGL非対応時と`prefers-reduced-motion`のフォールバック
- 専用OGP、構造化データ、sitemap、robots
- 既存画像をトリミングせず原寸比率で表示

## 掲載内容

- クライアント導入済みの案件精算Webアプリ
- 地域サービス業向けWebサイト
- 世界経済リスクダッシュボード
- 家電修理・工事の現場経験とAI業務改善

## 技術構成

- HTML / CSS / JavaScript
- Three.js
- GSAP / ScrollTrigger
- WebP
- Vercel

依存ライブラリは`assets/vendor/`に固定しているため、3D部分もCDN障害の影響を受けにくい構成です。

## ファイル構成

```text
.
├── index.html                 # 内容・SEO・セクション構造
├── styles.css                 # レイアウト・色・レスポンシブ
├── tokens.css                 # Hallmark準拠のデザイントークン
├── main.js                    # UI・スクロール演出
├── scene.js                   # Three.js 3Dシーン
├── Portfolio-original.html    # 変更前のポートフォリオ
├── assets/                    # 写真・OGP・ローカルライブラリ
├── 01_docs/MASTER.md          # デザインシステム
├── 01_docs/project-notes.md   # 制作意図と更新メモ
├── 05_feedback/feedback-log.md
├── scripts/build-static.mjs   # Vercel用ビルド
└── scripts/generate-ogp.py    # OGP生成
```

## ローカル確認

```bash
npm run build
npx serve dist
```

元デザインは`Portfolio-original.html`からいつでも確認できます。
