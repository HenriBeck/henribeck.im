// @flow strict-local

import React, { type Node } from 'react';
import injectSheet from 'react-jss';

type Props = {
  classes: { section: string },
  children: Node,
  name: string,
  className: string,
};

const styles = {
  section: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    margin: '0 0 75px 0',
  },
};

function Section(props: Props) {
  return (
    <section
      className={`${props.classes.section} ${props.className}`}
      data-name={props.name}
    >
      {props.children}
    </section>
  );
}

Section.defaultProps = { className: '' };

export default injectSheet(styles)(Section);
