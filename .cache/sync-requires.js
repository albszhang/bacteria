const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/albertzhang/Workspace/creation/2020/bacteria/fail/.cache/dev-404-page.js"))),
  "component---src-pages-2-js": hot(preferDefault(require("/Users/albertzhang/Workspace/creation/2020/bacteria/fail/src/pages/2.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/albertzhang/Workspace/creation/2020/bacteria/fail/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/albertzhang/Workspace/creation/2020/bacteria/fail/src/pages/index.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/albertzhang/Workspace/creation/2020/bacteria/fail/src/pages/using-typescript.tsx")))
}

