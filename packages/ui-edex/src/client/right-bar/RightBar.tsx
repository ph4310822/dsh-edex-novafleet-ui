/**
 * Right bar: a vertical stack of swappable NovaFleet widgets — interface
 * status, the featured Fleet Calendar, and mission resources. The composition
 * lives in the RIGHT_WIDGETS registry below: add, remove, or reorder a widget
 * by editing one line (its implementation lives in its own folder under
 * widgets/), and every section shares the same chrome via WidgetSection.
 */
import type { RightWidgetHooks, RightWidgetSlot } from '../widgets/types.ts'
import { WidgetSection } from '../widgets/WidgetSection.tsx'
import { FleetCalendarWidget } from './widgets/FleetCalendarWidget.tsx'
import { NetworkStatusWidget } from './widgets/NetworkStatusWidget.tsx'
import { ResourcesWidget } from './widgets/ResourcesWidget.tsx'
import css from './RightBar.module.css'

/** The right panel's widget composition (top to bottom). */
const RIGHT_WIDGETS: RightWidgetSlot[] = [
  { id: 'network-status', title: 'NETWORK STATUS', Component: NetworkStatusWidget },
  // The featured NovaFleet widget: the Fleet Calendar replaces the WORLD
  // VIEW globe slot.
  { id: 'globe', title: 'FLEET CALENDAR', compact: true, Component: FleetCalendarWidget },
  // Flex-fills the bar's leftover height (screen − bottom panel − other sections).
  { id: 'traffic', title: 'MISSION RESOURCES', fill: true, Component: ResourcesWidget },
]

/** The right column content (rendered inside the eDEX shell's right bar). */
export function RightBar({ useNetwork, color }: RightWidgetHooks) {
  return (
    <div className={css.panel} data-testid="edex-right-bar">
      {RIGHT_WIDGETS.map(widget => (
        <WidgetSection key={widget.id} slot={widget}>
          <widget.Component useNetwork={useNetwork} color={color} />
        </WidgetSection>
      ))}
    </div>
  )
}