// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';
import { Typography } from 'materialize-react';

type Props = { classes: { legalInfo: string } };

const styles = {
  legalInfo: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '4px',
    textAlign: 'center',
  },
};

function LegalInfo(props: Props) {
  return (
    <div className={props.classes.legalInfo}>
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
  );
}

export default injectSheet(styles)(LegalInfo);
