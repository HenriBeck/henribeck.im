// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';

import createLink from './create-link';

type Props = { classes: { container: string } };

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 16,
    fontSize: '0.9rem',
  },
};

function MadeWith(props: Props) {
  return (
    <div className={props.classes.container}>
      <span>
        Made with {createLink('ReactJS', 'https://reactjs.org/')}{' '}
        and {createLink('react-jss', 'https://github.com/cssinjs/react-jss')}{' '}
        and {createLink('Webpack', 'https://webpack.js.org/')}
      </span>

      <span>© 2018</span>
    </div>
  );
}

export default injectSheet(styles)(MadeWith);
