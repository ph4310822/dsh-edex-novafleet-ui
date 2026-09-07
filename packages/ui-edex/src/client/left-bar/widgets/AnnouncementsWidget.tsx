/**
 * Announcements widget: replaces the ProcessWidget (top-processes table).
 * Shows the NovaFleet Galactic Announcements list with colored status dots.
 */
import type { LeftWidgetHooks } from '../../widgets/types.ts'
import css from './AnnouncementsWidget.module.css'

/** Announcement data matching the reference. */
const ANNOUNCEMENTS: { title: string; summary: string; color: string; time: string }[] = [
  { title: 'Orion Explorer IV Mission Launch Confirmed', summary: 'Final launch window set for Q4 2026', color: '#ef4444', time: '2h ago' },
  { title: 'New Radiation Shielding Protocol', summary: 'Updated safety measures for deep-space ops', color: '#fbbf24', time: '5h ago' },
  { title: 'Fleet-wide Software Update', summary: 'Navigation and life support systems v4.2', color: '#fbbf24', time: '1d ago' },
  { title: 'Research Team Achievements', summary: 'Mars geology team completes sample analysis', color: '#22c55e', time: '2d ago' },
]

/** Announcements widget: list with colored status dots. */
export function AnnouncementsWidget({ usePanel }: LeftWidgetHooks) {
  const panel = usePanel(s => s)

  return (
    <>
      <div className={css.headerRow}>
        <span className={css.headerTitle}>GALACTIC ANNOUNCEMENTS</span>
        <span className={css.viewAll}>VIEW ALL</span>
      </div>
      <div className={css.list}>
        {ANNOUNCEMENTS.map((item, i) => (
          <div key={i} className={css.row}>
            <span className={css.dot} style={{ background: item.color }} />
            <div className={css.content}>
              <div className={css.title}>{item.title}</div>
              <div className={css.summary}>{item.summary}</div>
            </div>
            <span className={css.time}>{item.time}</span>
          </div>
        ))}
      </div>
      <div className={css.footer}>
        <span className={css.footText}>loadavg {panel.loadavg.map(v => v.toFixed(2)).join(' ')}</span>
      </div>
    </>
  )
}