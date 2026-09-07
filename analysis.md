# NovaFleet Mission Control — Reference Analysis

**Reference**: `novafleet-mission-control` (web-discovered — live Vercel demo
https://frontend-challange-five.vercel.app/)
**Source**: vision (gpt-5.5 via scripts/vision-call.sh)
**Variant**: `dsh-edex-ui-novafleet`

## Theme

| Token | Value | Notes |
|---|---|---|
| background | `#0f1726` | Dark navy page canvas |
| panelTone | `#1e2938` | Blue-gray card surface (sidebar + cards) |
| primaryAccent | `#3b82f6` | Bright blue — active nav, icons, links, buttons |
| secondaryAccent | `#64748b` | Muted slate-blue — dim icons, captions, inactive labels |
| textPrimary | `#f8fafc` | Near-white headings/titles |
| textSecondary | `#94a3b8` | Soft blue-gray descriptions |
| success | `#22c55e` | Green — PRE-LAUNCH pill, 100% systems, green dots |
| warn | `#fbbf24` | Yellow — warning announcement dots |
| error | `#ef4444` | Red — critical announcement dot |
| info | `#3b82f6` | Blue — active state, links, icons |

## Border Language

- **Cards**: plain `1px solid #334155` full rectangles, corner radius ≈ 10px,
  no glow, no brackets. Low-contrast containment lines on dark surfaces.
- **Dividers**: thin `1px #334155` horizontal lines between announcement rows,
  under card headers, and above the footer.
- **Inputs**: dark inset rounded rectangle (≈ 8px radius), `1px #334155` border.
- **Active nav**: filled blue row (`#3b82f6`, ≈ 6px radius, white text + small
  white dot) — a filled active state, not a left accent bar.
- **Frame**: no outer page frame — the canvas is the background; cards carry
  the borders.

## Widgets

Reference widgets and their reconciliation onto the eDEX shell slots:

| Reference widget | eDEX slot | Match |
|---|---|---|
| MISSION DASHBOARD (countdown + stat tiles) | `info` | partial — clock/specs → mission countdown + stats |
| Stat tiles (Crew/Duration/Altitude/Systems) | `cpu` | partial — gauges → 4 compact metric tiles |
| GALACTIC ANNOUNCEMENTS (status-dot list) | `processes` | high — top-processes table → announcement list |
| MISSION RESOURCES (file badges list) | `traffic` | partial — traffic chart → resource list |
| **FLEET CALENDAR** | `globe` | **featured** — weekly-events card replaces WORLD VIEW |

The reference's left sidebar nav + Need Help? card is the reference's own
navigation structure; the eDEX left bar keeps its info/cpu/processes
composition (themed + reconciled) rather than becoming a nav rail, since the
center region always hosts the original DSH workspace.
