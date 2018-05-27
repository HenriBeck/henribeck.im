// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';
import {
  Typography,
  type ThemeType,
} from 'materialize-react';

import Container from '../../components/Container';
import Section from '../../components/Section';

type Props = {
  classes: {
    section: string,
    title: string,
    caption: string,
  },
};

const styles = (theme: ThemeType) => {
  return {
    section: {
      marginTop: 0,
      height: '65vh',
      backgroundColor: theme.primary.base,
      width: '100vw',
      color: '#ffffff',
    },

    title: { marginTop: '20vh' },

    caption: { marginLeft: '50px' },
  };
};
const name = 'hero';

function Hero(props: Props) {
  return (
    <Section
      className={props.classes.section}
      name={name}
    >
      <Container>
        <Typography
          typography="headline3"
          className={props.classes.title}
        >
          I&apos;m Henri
        </Typography>
        <Typography
          typography="headline4"
          className={props.classes.caption}
        >
          A 19 year old JS Developer from Hamburg
        </Typography>
      </Container>
    </Section>
  );
}

export default {
  name,
  Component: injectSheet(styles)(Hero),
  NavItem: 'Henri Beck',
};
