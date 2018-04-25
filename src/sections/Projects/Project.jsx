// @flow

import React, { type Node } from 'react';
import injectSheet from 'react-jss';

import { blackTextColor, primaryBase } from '../../styles';

type Props = {
  title: Node,
  children: Node,
  link: string,
  classes: {
    container: string,
    title: string,
    description: string,
  },
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: blackTextColor,
  },

  title: {
    fontSize: '1.5em',
    lineHeight: 1.25,
    textDecoration: 'none',
    color: blackTextColor,
    marginBottom: '10px',

    '&:hover': { color: primaryBase },
  },

  description: {
    fontSize: '1.15em',
    lineHeight: '1.5em',
    textAlign: 'center',
  },
};

function Project({
  classes,
  title,
  children,
  link,
}: Props) {
  return (
    <div className={classes.container}>
      <a
        className={classes.title}
        href={link}
      >
        {title}
      </a>

      <span className={classes.description}>
        {children}
      </span>
    </div>
  );
}

export default injectSheet(styles)(Project);
