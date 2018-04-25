// @flow

import React, { type Node } from 'react';
import injectSheet from 'react-jss';

type Props = {
  href: string,
  color: string,
  children: Node,
  className?: string,
  classes: { link: string },
};

const styles = {
  link: {
    textDecoration: 'none',
    padding: '0 3px',
    color: props => props.color,
  },
};

function Link(props: Props) {
  return (
    <a
      className={`${props.classes.link} ${props.className || ''}`}
      rel="noopener noreferrer"
      color={props.color}
      href={props.href}
    >
      {props.children}
    </a>
  );
}

Link.defaultProps = { className: '' };

export default injectSheet(styles)(Link);
