// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';
import { Icon } from 'antd';

import Link from '../../components/Link';
import { ACTIVE_COLOR } from '../../colors';

type Props = {
  +href: string,
  +label: string,
  +icon: string,
  +classes: {
    +iconContainer: string,
    +icon: string,
  },
};

const styles = {
  iconContainer: { margin: '16px 32px' },

  icon: {
    fontSize: '64px',

    '&:hover': { color: ACTIVE_COLOR },
  },
};

function ContactLink(props: Props) {
  return (
    <Link
      className={props.classes.iconContainer}
      href={props.href}
      aria-label={props.label}
    >
      <Icon
        className={props.classes.icon}
        type={props.icon}
      />
    </Link>
  );
}

export default injectSheet(styles)(ContactLink);
