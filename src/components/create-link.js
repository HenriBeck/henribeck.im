// @flow strict

import React, { type Node } from 'react';
import injectSheet from 'react-jss';
import omit from 'object.omit';

type Props = {
  href: string,
  children: Node,
  className?: string,
  classes: { link: string },
};

export default function createLink(color: string) {
  function Link(props: Props) {
    return (
      <a
        className={`${props.classes.link} ${props.className || ''}`}
        rel="noopener noreferrer"
        href={props.href}
        {...omit(props, ['href', 'children', 'classes', 'className'])}
      >
        {props.children}
      </a>
    );
  }

  Link.defaultProps = { className: '' };

  return injectSheet({
    link: {
      textDecoration: 'none',
      color,
    },
  })(Link);
}
