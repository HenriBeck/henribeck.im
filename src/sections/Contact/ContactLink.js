// @flow strict-local

import React, { type ComponentType } from 'react';
import injectSheet from 'react-jss';
import {
  Icon as IconWrapper,
  type ThemeType,
} from 'materialize-react';

type Props = {
  href: string,
  label: string,
  icon: ComponentType<{}>,
  classes: {
    iconContainer: string,
    icon: string,
  },
};

const styles = (theme: ThemeType) => {
  return {
    iconContainer: { margin: '16px 32px' },

    icon: { '&:hover': { fill: theme.primary.base } },
  };
};

function ContactLink(props: Props) {
  const Icon = props.icon;

  return (
    <a
      className={props.classes.iconContainer}
      href={props.href}
      aria-label={props.label}
    >
      <IconWrapper
        className={props.classes.icon}
        size={64}
      >
        <Icon />
      </IconWrapper>
    </a>
  );
}

export default injectSheet(styles)(ContactLink);
