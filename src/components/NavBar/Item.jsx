// @flow strict-local

import React, { type Node } from 'react';
import injectSheet from 'react-jss';
import { Typography } from 'materialize-react';

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

    '@media screen and (max-width: 700px)': { display: props => !props.isSelected && 'none' },
  },

  text: {
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
        <Typography
          typography="headline5"
          className={this.props.classes.text}
          onClick={this.handleClick}
        >
          {this.props.children}
        </Typography>
      </div>
    );
  }
}

export default injectSheet(styles)(Item);
