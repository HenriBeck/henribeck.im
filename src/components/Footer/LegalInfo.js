// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';

type Props = {
  +classes: {
    +legalInfo: string,
    +title: string,
  },
};

const styles = {
  legalInfo: {
    fontSize: '0.9rem',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '4px',
    textAlign: 'center',
  },

  title: { fontSize: '1rem' },
};

function LegalInfo(props: Props) {
  return (
    <div className={props.classes.legalInfo}>
      <span className={props.classes.title}>
        Impressum
      </span>

      <span>
        <strong>Owner: </strong>Henri Beck
      </span>

      <span>
        <strong>Address: </strong>Stiefmütterchenweg 14,  22607 Hamburg
      </span>

      <span>
        <strong>Phone: </strong>+49 151 70118484
      </span>

      <span>
        <strong>E-Mail: </strong>henribeck.dev@gmail.com
      </span>
    </div>
  );
}

export default injectSheet(styles)(LegalInfo);
