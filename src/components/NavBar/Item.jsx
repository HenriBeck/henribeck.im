// @flow strict

import React, { type Node } from 'react';
import injectSheet from 'react-jss';

import { scrollToSection } from './utils';

type Props = {
  createRef: (name: string, elem: HTMLElement | null) => void,
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
  },

  text: {
    fontSize: '1.5em',
    lineHeight: 1,
    transition: 'transform 140ms linear',
    cursor: 'pointer',
    transform: props => `scale(${props.isSelected ? 1.1 : 1})`,
  },
};

class Item extends React.PureComponent<Props> {
  createRef = (elem: HTMLElement | null) => {
    this.props.createRef(this.props.name, elem);
  };

  handleClick = () => {
    scrollToSection(this.props.name);
  };

  render() {
    return (
      <div
        className={this.props.classes.container}
        ref={this.createRef}
      >
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
