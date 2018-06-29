// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';

import createLink from './create-link';

type Props = { classes: { grid: string } };

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '24px',

    '@media only screen and (max-width: 760px)': { gridTemplateColumns: '1fr' },
  },
};

function Text(props: Props) {
  return (
    <div className={props.classes.grid}>
      <span>
        I got introduced to programming through my school and started writing websites
        when I was 15 years old. You know, those crappy school websites ;)
        <br />So I started programming in my free time and teaching myself the basics of the Web.
        <br /><br />
        At some point, I wanted to build something actually useful, so I started looking into
        Server Development and started learning NodeJS as I already knew JavaScript.
      </span>

      <span>
        In 2016 I started learning ReactJS because I was tired of JQuery. I also joined TF2Pickup
        in 2016 and started building the new website with NodeJS and ReactJS.
        <br /><br />
        In the summer of 2017, I finally graduated from school.
        <br /><br />
        I started studying IT in the October of 2017 at {createLink('FH Wedel', 'https://fh-wedel.de')}.
        <br />
        In March 2018  I was a Coach at the {createLink('Code+Design', 'https://code.design')}{' '}
        Camp in Hamburg and also attended the {createLink('Code+Design', 'https://code.design')}{' '}
        Camp in May 2018 in Cologne as a Coach again.
      </span>
    </div>
  );
}

export default injectSheet(styles)(Text);
