// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';

import Container from '../Container';
import {
  FOOTER_BG_COLOR,
  LIGHT_TEXT_COLOR,
} from '../../colors';

import LegalInfo from './LegalInfo';
import MadeWith from './MadeWith';

type Props = {
  classes: {
    footer: string,
    container: string,
  },
};

const styles = {
  footer: {
    width: '100vw',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: FOOTER_BG_COLOR,
    padding: '16px 0',
  },

  container: { color: LIGHT_TEXT_COLOR },
};

function Footer(props: Props) {
  return (
    <footer className={props.classes.footer}>
      <Container className={props.classes.container}>
        <LegalInfo />

        <MadeWith />
      </Container>
    </footer>
  );
}

export default injectSheet(styles)(Footer);
