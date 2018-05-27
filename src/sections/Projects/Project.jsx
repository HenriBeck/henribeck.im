// @flow strict-local

import React, { type Node } from 'react';
import injectSheet from 'react-jss';
import { Typography } from 'materialize-react';

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
  },

  title: {
    textDecoration: 'none',
    marginBottom: '10px',
  },

  description: { textAlign: 'center' },
};

function Project(props: Props) {
  return (
    <div className={props.classes.container}>
      <Typography
        typography="headline5"
        element="a"
        className={props.classes.title}
        href={props.link}
      >
        {props.title}
      </Typography>

      <Typography
        typography="body1"
        className={props.classes.description}
      >
        {props.children}
      </Typography>
    </div>
  );
}

export default injectSheet(styles)(Project);
