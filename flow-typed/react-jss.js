import type {
  ComponentType,
  ComponentProps,
} from 'react';
import {
  SheetsRegistry,
  JssProvider,
} from 'react-jss';

declare module 'react-jss' {
  declare type Styles = { [key: string]: {} };
  declare type ThemedStyles = (theme: {}) => Styles;
  declare function HoC<C: ComponentType<{}>>(comp: C): ComponentType<ComponentProps<C>>;
  declare function injectSheet<C>(styles: ThemedStyles | Styles): HoC<C>;

  declare export var SheetsRegistry: SheetsRegistry;
  declare export var JssProvider: JssProvider;

  declare export default typeof injectSheet;
}

declare module 'jss-normalize' {
  declare export default {};
}