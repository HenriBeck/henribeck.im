// @flow strict

import React from 'react';
import injectSheet from 'react-jss';

import { primaryDark } from '../../styles';

type Props = { classes: { progress: string } };

const styles = {
  progress: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: primaryDark,
    transition: 'transform 260ms linear',
    transformOrigin: 'left center',

    '@media screen and (max-width: 700px)': { transform: 'scale(0)' },
    '@media screen and (min-width: 701px)': { transform: props => `scaleX(${props.scale})` },
  },
};

function Progress(props: Props) {
  return (
    <span className={props.classes.progress} />
  );
}

export default injectSheet(styles)(Progress);
