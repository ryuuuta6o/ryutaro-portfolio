# Deploy

## Production

- URL: https://ryutaro-portfolio-orpin.vercel.app
- Repository: https://github.com/ryuuuta6o/ryutaro-portfolio
- Platform: Vercel
- Branch: `main`
- Build: `npm run build`
- Output: `dist`

## Update

```bash
git push origin main
vercel --prod --yes
```

本番反映前に`npm run build`とブラウザQAを実行する。
