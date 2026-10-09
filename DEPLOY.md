# Production release

- URL: https://ryutaro-portfolio-orpin.vercel.app/
- Repository: https://github.com/ryuuuta6o/ryutaro-portfolio
- Branch: `main`
- Vercel project: `ryutaro-portfolio` (`prj_dJqzUl2XDBXBjA2uWd81HvUoWc8p`)
- Framework: Next.js; Node.js 24

Run `npm ci` and `npm run check`, then verify `/` and `/en/` in desktop and phone widths. Push the reviewed commit to `origin/main`; the connected Vercel project builds the production deployment. Inspect the production deployment and both locales after release.

To restore the previous site quickly, use `vercel rollback <previous-production-deployment-id>` with the recorded deployment ID. To align Git with the restored site, revert the release commit on `main` and push the revert after checking the old source.
