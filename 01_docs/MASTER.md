# Portfolio Design System

## Design Read

採用担当者・発注担当者向けの開発者ポートフォリオ。家電修理・施工の現場経験とAI・Web実装を、ダークテックの視覚言語で接続する。

- Redesign mode: targeted evolution
- DESIGN_VARIANCE: 7
- MOTION_INTENSITY: 8
- VISUAL_DENSITY: 4
- Theme: dark only
- Signature: FIELD SIGNAL CORE

## Color

### Primitive

- Cyan: 50 `#effaff`, 100 `#dff4ff`, 200 `#b7eaff`, 300 `#80d7ff`, 400 `#5bc8ff`, 500 `#22aef0`, 600 `#088bd0`, 700 `#076fa8`, 800 `#0b5c89`, 900 `#0d4c70`, 950 `#082f49`
- Neutral: 50 `#f4f7f8`, 100 `#e1e8eb`, 200 `#c3cfd5`, 300 `#a4b4bc`, 400 `#82949f`, 500 `#667985`, 600 `#4f5f69`, 700 `#3c4951`, 800 `#252f35`, 900 `#141b20`, 950 `#05080b`

### Semantic

- Background: Neutral 950
- Surface: translucent Neutral 900
- Foreground: Neutral 50
- Muted text: Neutral 300
- Primary: Cyan 400
- Primary strong: Cyan 200
- Border: Cyan-tinted 16% white
- Signal state: `#7cffc5`
- Destructive state: `#ff7a6f`

Body text and backgrounds must maintain WCAG AA contrast. Cyan is reserved for actions, active state, and the 3D signal.

## Typography

- Display Latin: Chakra Petch 500/600/700
- Japanese: Noto Sans JP 400/500/700/900
- Body minimum: 16px
- Supporting labels: 11px minimum, uppercase Latin only
- Heading scale: `clamp()` with a maximum of two lines in the hero
- Japanese body line-height: 1.7-1.95

## Spacing and Shape

- Base unit: 8px
- Main container: 1240px
- Section spacing: 96-150px
- Card radius: 6px
- Button radius: 3px
- Interactive target: minimum 44×44px

## Components

- Buttons: primary cyan fill and ghost dark fill. Visible hover, active, and focus state.
- Work cards: real screenshot, project title, summary, problem, implementation, outcome, and image enlargement action.
- Profile: portrait with a caption outside the image, followed by a three-part field-to-system narrative.
- Dialog: native `dialog`, focus managed by the browser, close button and backdrop click.

## Motion

- 3D core communicates transformation from field input to a repeatable system.
- Scroll illumination controls reading sequence.
- Click effects provide immediate interaction feedback.
- MOTION OFF disables non-essential motion and leaves all content visible.
- Motion must not delay navigation or hide text.

## Accessibility

- Keyboard access for navigation, CTA, work image enlargement, and dialog close.
- `:focus-visible` remains visible.
- All meaningful images have Japanese alternative text.
- No body copy below 16px.
- Mobile CTA respects the safe area.
