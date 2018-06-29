// @flow strict-local

import React, { type Node } from 'react';
import injectSheet from 'react-jss';

import { scrollToSection } from './utils';

type Props = {
  name: string,
  children: Node,
  classes: {
    container: string,
    text: string,
  },
};

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,

    '@media screen and (max-width: 700px)': { display: props => !props.isSelected && 'none' },
  },

  text: {
    transition: 'transform 140ms linear',
    cursor: 'pointer',
    fontSize: '1.5rem',
    transform: props => `scale(${props.isSelected ? 1.1 : 1})`,
  },
};

class Item extends React.PureComponent<Props> {
  handleClick = () => {
    scrollToSection(this.props.name);
  };

  render() {
    return (
      <div className={this.props.classes.container}>
        <span
          className={this.props.classes.text}
          onClick={this.handleClick}
        >
          {this.props.children}
        </span>
      </div>
    );
  }
}

export default injectSheet(styles)(Item);
