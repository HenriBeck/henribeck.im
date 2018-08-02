// @flow

import React, { type ComponentType } from 'react';
import injectSheet from 'react-jss';

import { DARK_TEXT_COLOR } from '../../colors';

type Props = {
  display: string,
  description: string,
  icon: ComponentType<{
    className: string,
    color: string,
  }>,
  classes: {
    icon: string,
    container: string,
    description: string,
    title: string,
  },
};

const styles = {
  container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  title: {
    margin: '10px 0',
    fontSize: '1.5rem',
  },

  description: { textAlign: 'center' },

  icon: {
    width: 56,
    height: 56,
  },
};

function Skill(props: Props) {
  const Icon = props.icon;

  return (
    <div className={props.classes.container}>
      <Icon
        color={DARK_TEXT_COLOR}
        className={props.classes.icon}
      />

      <span className={props.classes.title}>
        {props.display}
      </span>

      <span className={props.classes.description}>
        {props.description}
      </span>
    </div>
  );
}

export default injectSheet(styles)(Skill);
