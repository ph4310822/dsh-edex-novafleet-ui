/**
 * Mission Stats widget: replaces the CpuWidget slot. Shows the 4 stat tiles
 * (Crew/Duration/Altitude/Systems) from the NovaFleet reference dashboard.
 */
import type { LeftWidgetHooks } from '../../widgets/types.ts'
import css from './MissionStatsWidget.module.css'

/** Mission stat tiles: compact metric cards. */
export function MissionStatsWidget({ usePanel }: LeftWidgetHooks) {
  const panel = usePanel(s => s)

  return (
    <>
      <div className={css.statsGrid}>
        <div className={css.statBox}>
          <div className={css.statValue}>6</div>
          <div className={css.statLabel}>CREW</div>
        </div>
        <div className={css.statBox}>
          <div className={css.statValue}>142d</div>
          <div className={css.statLabel}>DURATION</div>
        </div>
        <div className={css.statBox}>
          <div className={css.statValue}>408km</div>
          <div className={css.statLabel}>ALTITUDE</div>
        </div>
        <div className={css.statBox}>
          <div className={css.statValueGreen}>100%</div>
          <div className={css.statLabel}>SYSTEMS</div>
        </div>
      </div>
      <div className={css.cpuHint}>
        <span className={css.cpuKey}>CPU LOAD</span>
        <span className={css.cpuPct}>{panel.cpuBusy.length > 0 ? `${Math.round(panel.cpuBusy.reduce((a, b) => a + b, 0) / panel.cpuBusy.length)}%` : '--'}</span>
      </div>
    </>
  )
}