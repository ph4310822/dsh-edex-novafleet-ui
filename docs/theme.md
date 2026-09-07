# NovaFleet Theme Tokens

Themed from the web-discovered NovaFleet mission-control dashboard
(https://frontend-challange-five.vercel.app/). Vision-analyzed; all values from
`analysis.json`.

## Palette

| Token | Value | Role |
|---|---|---|
| background | `#0f1726` | Dark navy canvas |
| panel / card surface | `#1e2938` | Blue-gray card + workspace surface |
| primaryAccent | `#3b82f6` | Bright blue — active nav, icons, links, buttons |
| secondaryAccent | `#64748b` | Muted slate — dim icons, captions |
| textPrimary | `#f8fafc` | Near-white headings |
| textSecondary | `#94a3b8` | Soft blue-gray descriptions |
| success | `#22c55e` | PRE-LAUNCH pill, 100% systems, green dots |
| warn | `#fbbf24` | Warning announcement dots |
| error | `#ef4444` | Critical announcement dots |
| info | `#60a5fa` | Light-blue info accent |

## Border language

- Cards: `1px solid #334155`, radius ~10px, no glow, no brackets
- Dividers: `1px #334155` between list rows / under card headers
- Inputs: dark inset rounded rectangle (~8px radius), `1px #334155`
- Active nav item: filled blue row (`#3b82f6`, ~6px radius, white label)

## Widget reconciliation

| Reference widget | eDEX slot |
|---|---|
| MISSION DASHBOARD (countdown + stats) | info |
| Stat tiles | cpu → MISSION METRICS |
| GALACTIC ANNOUNCEMENTS | processes → ANNOUNCEMENTS |
| FLEET CALENDAR (featured) | globe (replaces WORLD VIEW) |
| MISSION RESOURCES | traffic → MISSION RESOURCES |

The center region always presents the original DSH workspace, framed as a
`NOVAFLEET WORKSPACE` title-bar card with the same 1px border chrome.
