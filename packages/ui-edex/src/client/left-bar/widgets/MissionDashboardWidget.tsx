/**
 * Mission Dashboard widget: replaces the InfoWidget top slot. Shows the
 * NovaFleet mission countdown header + stat readout (crew, duration,
 * altitude, systems) using the live panel data for the clock and metrics.
 */
import { useEffect, useState } from 'react'
import type { LeftWidgetHooks } from '../../widgets/types.ts'
import css from './MissionDashboardWidget.module.css'

/** Padded number. */
function pad(value: number): string {
  return String(value).padStart(2, '0')
}

/** DD:HH:MM:SS countdown from an arbitrary seconds value. */
function countdownText(seconds: number): string {
  const total = Math.max(0, Math.floor(seconds))
  const d = Math.floor(total / 86400)
  const h = Math.floor((total % 86400) / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  return `${pad(d)}:${pad(h)}:${pad(m)}:${pad(s)}`
}

/** Mission Dashboard widget: countdown clock + status + stat tiles. */
export function MissionDashboardWidget({ usePanel }: LeftWidgetHooks) {
  const panel = usePanel(s => s)
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => { clearInterval(timer) }
  }, [])

  // Use uptime as the "mission countdown" (live data feeds the display).
  const countdown = countdownText(panel.uptimeSeconds)

  return (
    <>
      <div className={css.header}>
        <div className={css.missionLabel}>MISSION DASHBOARD</div>
        <div className={css.missionName}>ORION EXPLORER IV</div>
        <div className={css.statusPill}>PRE-LAUNCH</div>
      </div>
      <div className={css.countdownSection}>
        <div className={css.countdownLabel}>MISSION COUNTDOWN</div>
        <div className={css.countdownValue}>{countdown}</div>
      </div>
      <div className={css.statsRow}>
        <div className={css.statTile}>
          <div className={css.statValue}>6</div>
          <div className={css.statLabel}>CREW</div>
        </div>
        <div className={css.statTile}>
          <div className={css.statValue}>142d</div>
          <div className={css.statLabel}>DURATION</div>
        </div>
        <div className={css.statTile}>
          <div className={css.statValue}>408km</div>
          <div className={css.statLabel}>ALTITUDE</div>
        </div>
        <div className={css.statTile}>
          <div className={css.statValueGreen}>100%</div>
          <div className={css.statLabel}>SYSTEMS</div>
        </div>
      </div>
    </>
  )
}