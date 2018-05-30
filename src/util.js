// lifted from https://github.com/jxnblk/styled-system/blob/v2.2.5/src/util.js
const get = (obj, path, fallback) =>
  path.split('.').reduce((a, b) => (a && a[b] ? a[b] : null), obj) || fallback

const themeGet = (keys, fallback) => props => get(props.theme, keys, fallback)

export const th = themeGet
