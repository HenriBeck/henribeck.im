// @flow strict-local

import React, { type Node } from 'react';
import omit from 'object.omit';
import injectSheet from 'react-jss';

import { DARK_TEXT_COLOR } from '../colors';

type Props = {|
  children: Node,
  href: string,
  className: string,
  classes: { link: string },
|};

const styles = {
  link: {
    textDecoration: 'none',
    fontSize: 'inherit',
    color: props => props.color || DARK_TEXT_COLOR,
  },
};

function Link(props: Props) {
  return (
    <a
      className={`${props.classes.link} ${props.className}`}
      href={props.href}
      {...omit(props, ['classes', 'children', 'href', 'color', 'className'])}
    >
      {props.children}
    </a>
  );
}

Link.defaultProps = { className: '' };

export default injectSheet(styles)(Link);
