// @flow

// eslint-disable-next-line no-unused-vars
import React, {
  type ComponentType,
  type ElementConfig,
} from 'react';
import Jss from 'jss/src/Jss';

declare module 'react-jss' {
  declare type Styles = { [key: string]: {} };

  declare export class JssProvider extends React.Component<{ jss: Jss }> {}

  declare type HOC<C> = ComponentType<ElementConfig<C>>;

  declare export default function styles(styles: Styles): <C: ComponentType<{}>>(comp: C) => HOC<C>;
}
