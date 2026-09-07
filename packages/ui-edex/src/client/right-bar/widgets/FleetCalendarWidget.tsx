/**
 * Fleet Calendar widget: featured widget replacing the WORLD VIEW globe slot.
 * Shows a weekly events calendar card in the NovaFleet reference style.
 * This is the signature widget for the NovaFleet mission-control variant.
 */
import type { RightWidgetHooks } from '../../widgets/types.ts'
import css from './FleetCalendarWidget.module.css'

/** Weekly events matching the reference. */
const EVENTS: { day: string; date: string; title: string; icon: string; time: string; variant: string }[] = [
  { day: 'MON', date: '12', title: 'Mission Briefing', icon: '▶', time: '09:00', variant: 'video' },
  { day: 'WED', date: '14', title: 'Crew Training', icon: '👤', time: '14:30', variant: 'crew' },
  { day: 'FRI', date: '16', title: 'System Review', icon: '📋', time: '11:00', variant: 'doc' },
]

/** Fleet Calendar widget: weekly events calendar. */
export function FleetCalendarWidget({ color }: RightWidgetHooks) {
  return (
    <div className={css.calendar}>
      <div className={css.headerRow}>
        <span className={css.headerTitle}>FLEET CALENDAR</span>
        <span className={css.headerSub}>Events This Week</span>
      </div>
      <div className={css.eventList}>
        {EVENTS.map((event, i) => (
          <div key={i} className={css.eventRow}>
            <div className={css.dayColumn}>
              <span className={css.dayName}>{event.day}</span>
              <span className={css.dayDate}>{event.date}</span>
            </div>
            <div className={css.eventIcon} data-variant={event.variant}>
              <span>{event.icon}</span>
            </div>
            <div className={css.eventContent}>
              <div className={css.eventTitle}>{event.title}</div>
              <div className={css.eventTime}>{event.time}</div>
            </div>
          </div>
        ))}
      </div>
      <button className={css.viewAllBtn}>VIEW FULL CALENDAR</button>
    </div>
  )
}