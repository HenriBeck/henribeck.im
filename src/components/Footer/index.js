// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';
import { createTheme } from 'materialize-react';

import Container from '../Container';

import LegalInfo from './LegalInfo';
import MadeWith from './MadeWith';

type Props = {
  classes: {
    footer: string,
    container: string,
  },
};

const theme = createTheme({
  type: 'dark',
  primary: 'blue',
  accent: 'yellow',
});
const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#282B2E',
    padding: '16px 0',
  },

  container: { color: theme.text.primary },
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
