// @flow strict-local

import React, { type Node } from 'react';
import injectSheet from 'react-jss';

import Link from '../../components/Link';

type Props = {
  +title: Node,
  +description: string,
  +link: string,
  +classes: {
    +container: string,
    +title: string,
    +description: string,
  },
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    textDecoration: 'none',
    marginBottom: '10px',
    fontSize: '1.5rem',
  },

  description: { textAlign: 'center' },
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
        {props.description}
      </span>
    </div>
  );
}

export default injectSheet(styles)(Project);
