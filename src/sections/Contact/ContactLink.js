// @flow strict-local

import React, { type ComponentType } from 'react';
import injectSheet from 'react-jss';

import Link from '../../components/Link';
import { ACTIVE_COLOR, DARK_TEXT_COLOR } from '../../colors';

type Props = {
  +href: string,
  +label: string,
  +icon: ComponentType<{}>,
  +classes: {
    +iconContainer: string,
    +icon: string,
  },
};

const styles = {
  iconContainer: { margin: '16px 32px' },

  icon: {
    width: 64,
    height: 64,
    fill: DARK_TEXT_COLOR,

    '&:hover': { fill: ACTIVE_COLOR },
  },
};

function ContactLink(props: Props) {
  const Icon = props.icon;

  return (
    <Link
      className={props.classes.iconContainer}
      href={props.href}
      aria-label={props.label}
    >
      <Icon className={props.classes.icon} />
    </Link>
  );
}

export default injectSheet(styles)(ContactLink);
