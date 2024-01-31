# Simple Astro Frame

## 🚀 Project Structure

```text
/
├── src/
│   └── pages/
│       ├── api/
│           └── handleFrameCLick.js
│       └── index.astro
└── package.json
```

index.astro is the main file for the project. The magic happens when the page is loaded through Farcaster and the custom meta tags are parsed.

Try viewing the frame on this page and interacting with it: https://warpcast.com/~/developers/frames (https://simple-astro-frame.vercel.app/)

Variations of this SVG are base64 encoded for use as the `frame` image.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <rect fill="#fff" width="100%" height="100%" />
  <foreignObject width="600" height="500" x="300" y="65">
    <div
      xmlns="http://www.w3.org/1999/xhtml"
      style="font-size:24px;font-family:Arial,sans-serif;display:flex;align-items:center;height:100%"
    >
      This is a frame that displays a uri encoded svg.
      <br />
      <br />
      Text is displayed using a &lt;foreignObject&gt; tag. This lets us wrap the text if a line overflows.
    </div>
  </foreignObject>
</svg>
```

In this example, the SVG is pre-encoded, but you can handle the encoding however you like.

```html
<meta
  property="fc:frame:image"
  content="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDYzMCI+PHJlY3QgZmlsbD0iI2ZmZiIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjxmb3JlaWduT2JqZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNTAwIiB4PSIzMDAiIHk9IjY1Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZm9udC1zaXplOjI0cHg7Zm9udC1mYW1pbHk6QXJpYWwsc2Fucy1zZXJpZjtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2hlaWdodDoxMDAlIj5UaGlzIGlzIGEgZnJhbWUgdGhhdCBkaXNwbGF5cyBhIHVyaSBlbmNvZGVkIHN2Zy48YnIvPjxici8+VGV4dCBpcyBkaXNwbGF5ZWQgdXNpbmcgYSAmbHQ7Zm9yZWlnbk9iamVjdCZndDsgdGFnLiBUaGlzIGxldHMgdXMgd3JhcCB0aGUgdGV4dCBpZiBhIGxpbmUgb3ZlcmZsb3dzLjwvZGl2PjwvZm9yZWlnbk9iamVjdD48L3N2Zz4="
/>
```

OG images do not support SVGs, so you will need to provide a static fallback image or generate a PNG from the SVG using a tool like Sharp.

### NOTE

SVGs are not (currently) supported in Warpcast on iOS, rendering this exercise a bit moot. However, the concept is still valid for other platforms, and SVGKit has been proposed as a solution.

- https://warpcast.com/blankspace/0x594e127f
- https://warpcast.com/m0nt0y4/0xcf9e5451
- https://warpcast.com/m0nt0y4/0x8a294236

```html
## 🧞 Commands All commands are run from the root of the project, from a terminal: | Command | Action | |
:-------------------- | :----------------------------------------------- | | `bun install` | Installs dependencies | |
`bun dev` | Starts local dev server at `localhost:4321` | | `bun build` | Build your production site to `./dist/` | |
`bun preview` | Preview your build locally, before deploying | | `bun astro ...` | Run CLI commands like `astro add`,
`astro check` | | `bun astro -- --help` | Get help using the Astro CLI | ## 👀 Want to learn more? Feel free to check
the [Farcaster Frames documentation](https://warpcast.notion.site/Farcaster-Frames-4bd47fe97dc74a42a48d3a234636d8c5).
```
