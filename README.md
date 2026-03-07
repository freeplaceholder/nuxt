![FreePlaceholder](https://freeplaceholder.com/snippet.png)

# @freeplaceholder/nuxt

Nuxt module with auto-imported components and composables for [FreePlaceholder.com](https://freeplaceholder.com) — the free, open-source placeholder image and avatar service.

## Installation

```bash
npm install https://github.com/freeplaceholder/nuxt
```

```bash
yarn add https://github.com/freeplaceholder/nuxt
```

```bash
pnpm add https://github.com/freeplaceholder/nuxt
```

> **Peer dependency:** `nuxt >= 3`

## Setup

Add the module to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ["@freeplaceholder/nuxt"],

  // Optional: configure base URL for self-hosted instances
  freeplaceholder: {
    baseUrl: "https://freeplaceholder.com",
  },
});
```

## Quick Start

All components and composables are auto-imported — no explicit imports needed:

```vue
<template>
  <FpPlaceholder :width="600" :height="400" />
  <FpAvatar name="John Doe" />
</template>
```

## Auto-Imported Components

> **Tailwind naming:** All query parameters are named after Tailwind CSS utility classes (e.g. `text-color`, `text-size`, `font-weight`). Component props use camelCase.

### `<FpPlaceholder />`

Renders a placeholder image as an `<img>` element.

```vue
<FpPlaceholder
  :width="800"
  :height="600"
  format="png"
  bg="3b82f6"
  textColor="ffffff"
  text="Hero Image"
  :textSize="32"
  fontWeight="semibold"
  :opacity="100"
  :grayscale="false"
  :border="0"
  borderColor="000000"
  borderStyle="dashed"
  class="rounded-lg"
/>
```

#### Props

| Prop       | Type          | Required | Default               | Description                                                                 |
| ---------- | ------------- | -------- | --------------------- | --------------------------------------------------------------------------- |
| `width`    | `number`      | Yes      | —                     | Placeholder width in pixels (1–4096)                                        |
| `height`   | `number`      | Yes      | —                     | Placeholder height in pixels (1–4096)                                       |
| `format`   | `ImageFormat` | No       | `"svg"`               | Output format: `svg`, `png`, `jpg`, `webp`                                  |
| `bg`       | `string`      | No       | auto                  | Background color — hex without `#`                                          |
| `gradient` | `GradientDirection` | No   | —                     | Gradient direction: to-t, to-tr, to-r, to-br, to-b, to-bl, to-l, to-tl, radial |
| `from`     | `string`      | No       | —                     | Gradient start color — hex without `#`                                      |
| `via`      | `string`      | No       | —                     | Gradient middle color — hex without `#`                                     |
| `to`       | `string`      | No       | —                     | Gradient end color — hex without `#`                                        |
| `textColor`| `string`      | No       | auto                  | Text color — hex without `#`                                                |
| `text`     | `string`      | No       | `"{width}×{height}"`  | Overlay text                                                                |
| `textSize` | `number`      | No       | auto                  | Font size in pixels                                                         |
| `fontWeight` | `FontWeight` | No       | auto                  | Font weight: `thin`, `extralight`, `light`, `normal`, `medium`, `semibold`, `bold`, `extrabold`, `black` |
| `opacity`  | `number`      | No       | `100`                 | Opacity 0–100                                                               |
| `grayscale`| `boolean`     | No       | `false`               | Apply grayscale filter                                                      |
| `border`   | `number`      | No       | `0`                   | Border width in pixels                                                      |
| `borderColor` | `string`   | No       | —                     | Border color — hex without `#`                                              |
| `borderStyle` / `border-style` | `BorderStyle` | No | `"solid"` | Border style (solid, dashed, dotted, double, none)                    |
| `textAlign` / `text-align` | `TextAlign` | No | — | Text alignment (left, center, right)                                  |
| `textTransform` / `text-transform` | `TextTransform` | No | — | Transform: uppercase, lowercase, capitalize, none                     |
| `textDecoration` / `text-decoration` | `TextDecoration` | No | — | Decoration: underline, overline, line-through, none                   |
| `letterSpacing` / `letter-spacing` | `LetterSpacing \| string` | No | — | Spacing: tighter, tight, normal, wide, wider, widest, or px           |
| `blur`        | `number`      | No       | —        | Gaussian blur in px (0–100)                                           |
| `brightness`  | `number`      | No       | —        | Brightness 0–200 (100 = normal)                                       |
| `contrast`    | `number`      | No       | —        | Contrast 0–200 (100 = normal)                                         |
| `hueRotate` / `hue-rotate` | `number` | No | — | Hue rotation 0–360 degrees                                            |
| `invert`      | `boolean`     | No       | —        | Invert colors                                                         |
| `rounded`     | `Rounded \| number` | No  | —        | Border radius: none, sm, md, lg, xl, 2xl, 3xl, full, or px            |
| `saturate`    | `number`      | No       | —        | Saturation 0–200 (100 = normal)                                        |
| `sepia`       | `boolean`     | No       | —        | Sepia tone filter                                                     |
| `lazy`        | `boolean`     | No       | `true`   | Enable lazy loading with inline SVG placeholder                       |
| `alt`      | `string`      | No       | `"{width}×{height} placeholder"` | Alt text                                                           |

### `<FpAvatar />`

Renders an avatar image as an `<img>` element.

```vue
<FpAvatar
  name="Jane Smith"
  :size="64"
  format="webp"
  bg="10b981"
  textColor="ffffff"
  fontWeight="medium"
  :opacity="100"
  :grayscale="false"
  :border="2"
  borderColor="ffffff"
  class="rounded-full"
/>
```

#### Props

| Prop     | Type          | Required | Default  | Description                                                                 |
| -------- | ------------- | -------- | -------- | --------------------------------------------------------------------------- |
| `name`   | `string`      | Yes      | —        | Name used for initials and color                                            |
| `size`   | `number`      | No       | `128`    | Image size in pixels (1–1024)                                               |
| `format` | `ImageFormat` | No       | `"svg"`  | Output format: `svg`, `png`, `jpg`, `webp`                                  |
| `bg`     | `string`      | No       | auto     | Background color — hex without `#`                                          |
| `gradient` | `GradientDirection` | No | —        | Gradient direction: to-t, to-tr, to-r, to-br, to-b, to-bl, to-l, to-tl, radial |
| `from`   | `string`      | No       | —        | Gradient start color — hex without `#`                                      |
| `via`    | `string`      | No       | —        | Gradient middle color — hex without `#`                                     |
| `to`     | `string`      | No       | —        | Gradient end color — hex without `#`                                        |
| `textColor` | `string`    | No       | auto     | Text color — hex without `#`                                                |
| `fontWeight` | `FontWeight` | No     | auto     | Font weight: `thin`, `extralight`, `light`, `normal`, `medium`, `semibold`, `bold`, `extrabold`, `black` |
| `opacity`| `number`      | No       | `100`    | Opacity 0–100                                                               |
| `grayscale`| `boolean`    | No       | `false`  | Apply grayscale filter                                                      |
| `border` | `number`      | No       | `0`      | Border width in pixels                                                      |
| `borderColor` | `string`   | No       | —        | Border color — hex without `#`                                              |
| `borderStyle` / `border-style` | `BorderStyle` | No | `"solid"` | Border style (solid, dashed, dotted, double, none)                     |
| `textDecoration` / `text-decoration` | `TextDecoration` | No | — | Decoration: underline, overline, line-through, none                    |
| `letterSpacing` / `letter-spacing` | `LetterSpacing \| string` | No | — | Spacing: tighter, tight, normal, wide, wider, widest, or px            |
| `blur`         | `number`      | No       | —        | Gaussian blur in px (0–100)                                            |
| `brightness`   | `number`      | No       | —        | Brightness 0–200 (100 = normal)                                        |
| `contrast`     | `number`      | No       | —        | Contrast 0–200 (100 = normal)                                          |
| `hueRotate` / `hue-rotate` | `number` | No | — | Hue rotation 0–360 degrees                                             |
| `invert`       | `boolean`     | No       | —        | Invert colors                                                          |
| `saturate`     | `number`      | No       | —        | Saturation 0–200 (100 = normal)                                         |
| `sepia`        | `boolean`     | No       | —        | Sepia tone filter                                                      |
| `lazy`         | `boolean`     | No       | `true`   | Enable lazy loading with inline SVG placeholder                        |
| `alt`    | `string`      | No       | `name`   | Alt text                                                                    |

## Auto-Imported Composables

### `usePlaceholderUrl(options)`

Returns a computed ref with the placeholder URL.

```vue
<script setup>
const options = ref({ width: 400, height: 300, format: "png" });
const url = usePlaceholderUrl(options);
</script>
```

### `useAvatarUrl(options)`

Returns a computed ref with the avatar URL.

```vue
<script setup>
const options = ref({ name: "Alice", size: 48 });
const url = useAvatarUrl(options);
</script>
```

### `placeholderUrl(options)` / `avatarUrl(options)`

Direct URL builder functions, also auto-imported:

```vue
<script setup>
const src = placeholderUrl({ width: 300, height: 200, format: "png" });
const avatar = avatarUrl({ name: "Alice", size: 48 });
</script>
```

## Module Options

| Option    | Type     | Default                          | Description    |
| --------- | -------- | -------------------------------- | -------------- |
| `baseUrl` | `string` | `"https://freeplaceholder.com"`  | Service base URL |

```typescript
export default defineNuxtConfig({
  freeplaceholder: {
    baseUrl: "https://my-placeholder.example.com",
  },
});
```

## Documentation

Full API documentation and interactive examples are available at [freeplaceholder.com/docs](https://freeplaceholder.com/docs).

## Support

For issues specific to this package, please [open a GitHub issue](https://github.com/freeplaceholder/nuxt/issues). For general questions or support, contact [support@twentymileswest.com](mailto:support@twentymileswest.com).

## License

[MIT](./LICENSE)