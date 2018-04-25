// @flow

import React from 'react';
import injectSheet from 'react-jss';

import Section from '../Section';
import Container from '../Container';
import Link from '../Link';
import { whiteTextColor } from '../../styles';

type Props = {
  classes: {
    section: string,
    container: string,
  },
};

const styles = {
  section: {
    backgroundColor: '#282B2E',
    margin: 0,
    padding: '16px 0',
    height: 64,
  },

  container: {
    lineHeight: '32px',
    fontSize: '1em',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    color: whiteTextColor,
  },
};

function Footer(props: Props) {
  return (
    <Section className={props.classes.section}>
      <Container className={props.classes.container}>
        <span>
          Made with
          <Link
            href="https://reactjs.org/"
            color={whiteTextColor}
          >
            ReactJS
          </Link>,
          <Link
            href="https://github.com/cssinjs/react-jss"
            color={whiteTextColor}
          >
            react-jss
          </Link>
          and
          <Link
            href="https://github.com/zeit/next.js/"
            color={whiteTextColor}
          >
            NextJS
          </Link>
        </span>

        <span>
          © 2018
        </span>
      </Container>
    </Section>
  );
}

export default injectSheet(styles)(Footer);
