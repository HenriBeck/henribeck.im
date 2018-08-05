// @flow

declare module 'react-ga' {
  declare export default {
    initialize(id: string): void,
    pageview(url: string): void,
  }
}
