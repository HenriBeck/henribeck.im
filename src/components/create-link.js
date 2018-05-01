// @flow

import React, { type Node } from 'react';
import injectSheet from 'react-jss';

type Props = {
  href: string,
  children: Node,
  className?: string,
  classes: { link: string },
};

export default function createLink(color: string) {
  function Link({
    href,
    classes,
    className,
    children,
    ...props
  }: Props) {
    return (
      <a
        className={`${classes.link} ${className || ''}`}
        rel="noopener noreferrer"
        href={href}
        {...props}
      >
        {children}
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
