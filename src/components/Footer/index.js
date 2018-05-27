// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';
import {
  createTheme,
  Typography,
} from 'materialize-react';

import Link from '../Link';
import Container from '../Container';

type Props = {
  classes: {
    footer: string,
    container: string,
    imprint: string,
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

  imprint: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '4px',
    textAlign: 'center',
  },

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
        <div className={props.classes.imprint}>
          <Typography typography="body1">
            Impressum
          </Typography>

          <Typography typography="body2">
            <strong>Owner: </strong>Henri Beck
          </Typography>

          <Typography typography="body2">
            <strong>Address: </strong>Stiefmütterchenweg 14,  22607 Hamburg
          </Typography>

          <Typography typography="body2">
            <strong>Phone: </strong>+49 151 70118484
          </Typography>

          <Typography typography="body2">
            <strong>E-Mail: </strong>henribeck.dev@gmail.com
          </Typography>
        </div>

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
