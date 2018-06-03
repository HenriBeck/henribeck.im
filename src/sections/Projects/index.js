// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';

import Header from '../../components/Header';
import Section from '../../components/Section';
import Container from '../../components/Container';

import Project from './Project';

type Props = { classes: { grid: string } };

const name = 'projects';

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '48px 32px',

    '@media only screen and (max-width: 760px)': { gridTemplateColumns: '1fr' },
  },
};

function Projects(props: Props) {
  return (
    <Section name="projects">
      <Container>
        <Header>
          Projects
        </Header>

        <div className={props.classes.grid}>
          <Project
            title="materialize-react"
            link="https://github.com/HenriBeck/materialize-react"
          >
            A React component libary which implements the Material Design Language
          </Project>

          <Project
            title="Jss"
            link="https://github.com/cssinjs"
          >
            JSS is an authoring tool for CSS which uses JavaScript as a host language
          </Project>

          <Project
            title="check-flow"
            link="https://github.com/HenriBeck/check-flow"
          >
            A better flow check cli with only ignoring errors from certain files
          </Project>

          <Project
            title="TF2Pickup (RIP)"
            link="https://github.com/TF2PickupNET"
          >
            A webapp for a Pickup-System for Team Fortress 2
          </Project>
        </div>
      </Container>
    </Section>
  );
}

export default {
  name,
  Component: injectSheet(styles)(Projects),
  NavItem: 'Projects',
};
