// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';
import {
  createTheme,
  Typography,
} from 'materialize-react';

import Link from '../Link';
import Container from '../Container';

import LegalInfo from './LegalInfo';

type Props = {
  classes: {
    footer: string,
    container: string,
    bottomContainer: string,
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

  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 16,
  },
};

function Footer(props: Props) {
  return (
    <footer className={props.classes.footer}>
      <Container className={props.classes.container}>
        <LegalInfo />

        <div className={props.classes.bottomContainer}>
          <Typography typography="body2">
            Made with{' '}
            <Link
              typography="body2"
              href="https://reactjs.org/"
            >
              ReactJS
            </Link>
            {' '}and{' '}
            <Link
              typography="body2"
              href="https://github.com/cssinjs/react-jss"
            >
              react-jss
            </Link>
            {' '}and{' '}
            <Link
              typography="body2"
              href="https://webpack.js.org/"
            >
              Webpack
            </Link>
          </Typography>

          <Typography typography="body2">
            © 2018
          </Typography>
        </div>
      </Container>
    </footer>
  );
}

export default injectSheet(styles)(Footer);
