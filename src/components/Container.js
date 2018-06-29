// @flow strict-local

import React, { type Node } from 'react';
import injectSheet from 'react-jss';

type Props = {
  children: Node,
  className: string,
  classes: { container: string },
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '800px',
    width: '100%',
    padding: '0 32px',
    margin: 0,
  },
};

function Container(props: Props) {
  return (
    <div className={`${props.classes.container} ${props.className}`}>
      {props.children}
    </div>
  );
}

Container.defaultProps = { className: '' };

export default injectSheet(styles)(Container);
