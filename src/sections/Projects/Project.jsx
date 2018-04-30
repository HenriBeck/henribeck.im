// @flow

import React, { type Node } from 'react';
import injectSheet from 'react-jss';

import {
  blackTextColor,
  primaryBase,
} from '../../styles';
import createLink from '../../components/create-link';

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

const Link = createLink(blackTextColor);
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
    marginBottom: '10px',

    '&:hover': { color: primaryBase },
  },

  description: {
    fontSize: '1.15em',
    lineHeight: '1.5em',
    textAlign: 'center',
  },
};

function Project(props: Props) {
  return (
    <div className={props.classes.container}>
      <Link
        className={props.classes.title}
        href={props.link}
      >
        {props.title}
      </Link>

      <span className={props.classes.description}>
        {props.children}
      </span>
    </div>
  );
}

export default injectSheet(styles)(Project);
