// @flow strict-local

import React, { type Node } from 'react';
import omit from 'object.omit';
import injectSheet from 'react-jss';
import { Typography } from 'materialize-react';

type Props = {|
  children: Node,
  classes: { link: string },
|};

const styles = { link: { textDecoration: 'none' } };

function Link(props: Props) {
  return (
    <Typography
      typography="body1"
      element="a"
      className={props.classes.link}
      {...omit(props, ['classes', 'children'])}
    >
      {props.children}
    </Typography>
  );
}

export default injectSheet(styles)(Link);
