// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';

import Container from '../../components/Container';
import Section from '../../components/Section';
import {
  ACTIVE_COLOR,
  LIGHT_TEXT_COLOR,
} from '../../colors';

type Props = {
  classes: {
    section: string,
    title: string,
    caption: string,
  },
};

const styles = {
  section: {
    marginTop: 0,
    height: '65vh',
    backgroundColor: ACTIVE_COLOR,
    width: '100vw',
  },

  title: {
    color: LIGHT_TEXT_COLOR,
    margin: '20vh 0 0 0',
    fontSize: '4rem',
  },

  caption: {
    color: LIGHT_TEXT_COLOR,
    margin: '0 0 0 50px',
    fontSize: '3.3rem',
  },
};
const name = 'hero';

function Hero(props: Props) {
  return (
    <Section
      className={props.classes.section}
      name={name}
    >
      <Container>
        <h1 className={props.classes.title}>
          I&apos;m Henri
        </h1>

        <h2 className={props.classes.caption}>
          A 19 year old JS Developer from Hamburg
        </h2>
      </Container>
    </Section>
  );
}

export default {
  name,
  Component: injectSheet(styles)(Hero),
  NavItem: 'Henri Beck',
};
