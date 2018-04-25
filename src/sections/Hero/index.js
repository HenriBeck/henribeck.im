// @flow

import React from 'react';
import injectSheet from 'react-jss';

import Container from '../../components/Container';
import Section from '../../components/Section';
import {
  primaryBase,
  whiteTextColor,
} from '../../styles';

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
    backgroundColor: primaryBase,
    width: '100vw',
    color: whiteTextColor,
  },

  title: {
    marginTop: '20vh',
    fontSize: '3.5em',
    lineHeight: 1.25,
  },

  caption: {
    fontSize: '2em',
    lineHeight: 1.25,
    marginLeft: '50px',
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
        <span className={props.classes.title}>
          I&apos;m Henri
        </span>
        <span className={props.classes.caption}>
          A 19 year old JS Developer from Hamburg
        </span>
      </Container>
    </Section>
  );
}

export default {
  name,
  Component: injectSheet(styles)(Hero),
  NavItem: 'Henri Beck',
};
