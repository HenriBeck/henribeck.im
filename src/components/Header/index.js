// @flow strict-local-local

import React, { type Node } from 'react';
import injectSheet from 'react-jss';
import { Typography } from 'materialize-react';

type Props = {
  children: Node,
  className?: string,
  classes: {
    container: string,
    line: string,
    title: string,
  },
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '24px 0',
  },

  line: {
    height: 1,
    opacity: 0.8,
    maxWidth: 200,
    flex: 1,
    backgroundColor: 'currentColor',
  },

  title: { padding: '0 16px' },
};

function Header(props: Props) {
  return (
    <div className={`${props.classes.container} ${props.className || ''}`}>
      <div className={props.classes.line} />

      <Typography
        typography="headline4"
        className={props.classes.title}
      >
        {props.children}
      </Typography>

      <div className={props.classes.line} />
    </div>
  );
}

Header.defaultProps = { className: '' };

export default injectSheet(styles)(Header);
