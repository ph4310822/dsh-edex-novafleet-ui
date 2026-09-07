/**
 * Left bar: a vertical stack of swappable NovaFleet mission widgets — mission
 * dashboard (countdown + stats), mission stat tiles, and galactic
 * announcements. The composition lives in the LEFT_WIDGETS registry below:
 * add, remove, or reorder a widget by editing one line (its implementation
 * lives in its own folder under widgets/), and every section shares the same
 * chrome via WidgetSection.
 */
import type { LeftWidgetHooks, LeftWidgetSlot } from '../widgets/types.ts'
import { WidgetSection } from '../widgets/WidgetSection.tsx'
import { AnnouncementsWidget } from './widgets/AnnouncementsWidget.tsx'
import { MissionDashboardWidget } from './widgets/MissionDashboardWidget.tsx'
import { MissionStatsWidget } from './widgets/MissionStatsWidget.tsx'
import css from './LeftBar.module.css'

/** The left panel's widget composition (top to bottom). */
const LEFT_WIDGETS: LeftWidgetSlot[] = [
  { id: 'info', Component: MissionDashboardWidget },
  { id: 'cpu', title: 'MISSION METRICS', Component: MissionStatsWidget },
  // Flex-fills the leftover bar height so the announcement list runs into
  // the loadavg footer the widget itself renders.
  { id: 'processes', title: 'ANNOUNCEMENTS', fill: true, Component: AnnouncementsWidget },
]

/** The left column content (rendered inside the eDEX shell's left bar). */
export function LeftBar({ usePanel }: LeftWidgetHooks) {
  return (
    <div className={css.panel} data-testid="edex-left-bar">
      {LEFT_WIDGETS.map(widget => (
        <WidgetSection key={widget.id} slot={widget}>
          <widget.Component usePanel={usePanel} />
        </WidgetSection>
      ))}
    </div>
  )
}