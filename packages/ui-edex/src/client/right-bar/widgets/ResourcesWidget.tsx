/**
 * Resources widget: replaces the TrafficWidget (right bar, bottom, fill).
 * Shows the NovaFleet Mission Resources list with file badges.
 */
import type { RightWidgetHooks } from '../../widgets/types.ts'
import css from './ResourcesWidget.module.css'

/** Resource items matching the reference. */
const RESOURCES: { name: string; icon: string; badge: string; updated: string }[] = [
  { name: 'Mission Manual', icon: '📄', badge: 'PDF', updated: '2 days ago' },
  { name: 'Training Materials', icon: '📘', badge: 'DOCS', updated: '5 days ago' },
  { name: 'Star Charts', icon: '🌐', badge: 'APP', updated: '1 week ago' },
  { name: 'Equipment Specs', icon: '📄', badge: 'PDF', updated: '3 days ago' },
] as const

/** Resources widget: list of resource items with file badges. */
export function ResourcesWidget({ useNetwork }: RightWidgetHooks) {
  const network = useNetwork(s => s)

  return (
    <>
      <div className={css.headerRow}>
        <span className={css.headerTitle}>MISSION RESOURCES</span>
      </div>
      <div className={css.list}>
        {RESOURCES.map((item, i) => (
          <div key={i} className={css.row}>
            <span className={css.icon}>{item.icon}</span>
            <div className={css.content}>
              <div className={css.name}>{item.name}</div>
              <div className={css.meta}>
                <span className={css.badge}>{item.badge}</span>
                <span className={css.updated}>Last updated: {item.updated}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={css.footer}>
        <button className={css.viewAllBtn}>VIEW ALL RESOURCES</button>
      </div>
      <div className={css.netHint}>
        <span className={css.netKey}>UP</span>
        <span className={css.netVal}>{network.upMbs.toFixed(1)} MB/s</span>
        <span className={css.netKey}>DOWN</span>
        <span className={css.netVal}>{network.downMbs.toFixed(1)} MB/s</span>
      </div>
    </>
  )
}