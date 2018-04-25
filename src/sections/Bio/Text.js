// @flow

import React from 'react';
import injectSheet from 'react-jss';

import Link from '../../components/Link';
import { primaryBase } from '../../styles';

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '24px',

    '@media only screen and (max-width: 760px)': { gridTemplateColumns: '1fr' },
  },

  column: {
    fontSize: '1.25em',
    lineHeight: '1.4em',
  },
};

function Text(props) {
  return (
    <div className={props.classes.grid}>
      <div className={props.classes.column}>
        I got introduced to programming through my school
        and started writing websites when I was 15 years old.
        You know, those crappy school websites ;) <br />
        So I started programming in my free time
        and teaching myself the basics of the Web.
        <br />
        <br />
        At some point, I wanted to build something actually useful,
        so I started looking into Server Development and started
        learning NodeJS as I already knew JavaScript.
      </div>

      <div className={props.classes.column}>
        In 2016 I started learning ReactJS because I was tired of JQuery.
        I also joined TF2Pickup in 2016 and started building the new
        website with NodeJS and ReactJS. The project sadly died at the end of 2017.
        <br />
        <br />
        In the summer of 2017, I finally graduated from school.
        I started studying IT in the October of 2017 at
        <Link
          href="https://fh-wedel.de/"
          color={primaryBase}
        >
          FH Wedel
        </Link>.<br />
        In March 2018 I was a Coach at the<br />
        <Link
          href="https://code.design"
          color={primaryBase}
        >
          Code + Design
        </Link>
        Camp in Hamburg.
      </div>
    </div>
  );
}

export default injectSheet(styles)(Text);
