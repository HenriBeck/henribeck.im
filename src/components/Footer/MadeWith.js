// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';
import { Typography } from 'materialize-react';

import createLink from './create-link';

type Props = { classes: { container: string } };

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 16,
  },
};

function MadeWith(props: Props) {
  return (
    <div className={props.classes.container}>
      <Typography typography="body2">
        Made with {createLink('ReactJS', 'https://reactjs.org/')}{' '}
        and {createLink('react-jss', 'https://github.com/cssinjs/react-jss')}{' '}
        and {createLink('Webpack', 'https://webpack.js.org/')}
      </Typography>

      <Typography typography="body2">© 2018</Typography>
    </div>
  );
}

export default injectSheet(styles)(MadeWith);
