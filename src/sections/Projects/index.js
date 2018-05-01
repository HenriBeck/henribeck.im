// @flow strict

import React from 'react';
import injectSheet from 'react-jss';

import Header from '../../components/Header';
import Section from '../../components/Section';
import Container from '../../components/Container';
import { blackTextColor } from '../../styles';

import Project from './Project';

type Props = { classes: { grid: string } };

const name = 'projects';

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateAreas: 'auto auto auto',
    gridGap: '48px 32px',

    '@media only screen and (max-width: 760px)': {
      gridTemplateColumns: '1fr',
      gridTemplateAreas: 'auto',
    },
  },
};

function Projects(props: Props) {
  return (
    <Section name="projects">
      <Container>
        <Header color={blackTextColor}>
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
            title="react-smart-parallax"
            link="https://github.com/HenriBeck/react-smart-parallax"
          >
            A React Component which renders a smart Parallax
          </Project>

          <Project
            title="react-context-subscriber"
            link="https://github.com/HenriBeck/react-context-subscriber"
          >
            A Higher-Order-Component for the new React Context
          </Project>

          <Project
            title="TF2Pickup (RIP)"
            link="https://github.com/TF2PickupNET"
          >
            A website for a Pickup-System for Team Fortress 2
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
