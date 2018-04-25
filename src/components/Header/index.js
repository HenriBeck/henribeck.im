// @flow

import React, { type Node } from 'react';
import injectSheet from 'react-jss';

type Props = {
  children: Node,
  className?: string,
  classes: {
    container: string,
    line: string,
    text: string,
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
    backgroundColor: props => props.color,
  },

  text: {
    fontSize: '3em',
    lineHeight: 1.25,
    padding: '0 16px',
    color: props => props.color,
  },
};

function Header(props: Props) {
  return (
    <div className={`${props.classes.container} ${props.className || ''}`}>
      <div className={props.classes.line} />

      <span className={props.classes.text}>
        {props.children}
      </span>

      <div className={props.classes.line} />
    </div>
  );
}

Header.defaultProps = { className: '' };

export default injectSheet(styles)(Header);
