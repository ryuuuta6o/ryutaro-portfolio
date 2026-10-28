import type { Locale } from "@/data/portfolio";
import { seoPeriods, seoRankExamples, seoReportCopy } from "@/data/ouchi-seo-report";

export function SeoProgressReport({ locale }: { locale: Locale }) {
  const t = seoReportCopy[locale];
  const first = seoPeriods[0];
  const last = seoPeriods[seoPeriods.length - 1];
  const number = (value: number) => value.toLocaleString(locale === "ja" ? "ja-JP" : "en-US");
  return (
    <section className="seo-report" aria-labelledby="seo-report-title" tabIndex={-1}>
      <p className="seo-report-eyebrow">{t.eyebrow}</p>
      <h3 id="seo-report-title">{locale === "ja" ? t.title.split("、").map((part, index) => <span className="seo-report-title-part" key={part}>{part}{index === 0 ? "、" : ""}</span>) : t.title}</h3>
      <p>{t.intro}</p>
      <div className="seo-report-metrics">
        {[
          { label: t.clicks, before: first.clicks, after: last.clicks, ratio: t.double },
          { label: t.impressions, before: first.impressions, after: last.impressions, ratio: t.impressionRatio },
        ].map((metric) => (
          <div className="seo-report-metric" key={metric.label}>
            <h4>{metric.label}</h4>
            <p className="seo-report-values"><span>{number(metric.before)}</span><span className="seo-report-arrow" aria-label={locale === "ja" ? "から" : "to"}>→</span><strong>{number(metric.after)}</strong></p>
            <p className="seo-report-ratio">{metric.ratio}</p>
          </div>
        ))}
      </div>
      <p className="seo-report-period">{t.comparison}</p>
      <p className="seo-report-source">{t.scope}</p>
      <h4>{t.tableTitle}</h4>
      <div className="seo-report-periods">
        {seoPeriods.map((period, index) => (
          <section className="seo-period" key={period.start} aria-label={t.periodLabels[index]}>
            <h5>{t.periodLabels[index]}</h5>
            <p className="seo-period-date"><span>{t.period}</span>{period.start.slice(5).replace("-", "/")} – {period.end.slice(5).replace("-", "/")}</p>
            <dl>
              <div><dt>{t.clicks}</dt><dd>{number(period.clicks)}</dd></div>
              <div><dt>{t.impressions}</dt><dd>{number(period.impressions)}</dd></div>
              <div><dt>{t.ctr}</dt><dd>{period.ctr}</dd></div>
              <div><dt>{t.position}</dt><dd>{period.position}</dd></div>
            </dl>
          </section>
        ))}
      </div>
      <p className="seo-report-note">{t.reading}</p>
      <h4>{t.rankTitle}</h4>
      <p className="seo-report-source">{t.rankScope}</p>
      <table className="seo-rank-table">
        <caption className="sr-only">{t.rankTitle}</caption>
        <thead><tr><th scope="col">{t.keyword}</th><th scope="col">{t.rankBefore}</th><th scope="col">{t.rankAfter}</th></tr></thead>
        <tbody>{seoRankExamples.map((rank) => (
          <tr key={rank.keyword}><th scope="row"><span lang="ja">{rank.keyword}</span>{locale === "en" && <small>{rank.translation}</small>}</th><td>{rank.before}</td><td><strong>{rank.after}</strong></td></tr>
        ))}</tbody>
      </table>
      <p className="seo-report-note">{t.rankNote}</p>
      <div className="seo-report-technical"><h4>{t.technicalTitle}</h4><p>{t.technicalBody}</p></div>
      <details className="seo-report-conditions">
        <summary>{t.conditions}</summary>
        <ul>{t.notes.map((note) => <li key={note}>{note}</li>)}</ul>
      </details>
    </section>
  );
}
