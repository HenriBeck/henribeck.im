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
const projects = [{
  title: 'Jss',
  link: 'https://github.com/cssinjs',
  description: 'JSS is an authoring tool for CSS which uses JavaScript as a host language',
}, {
  title: 'check-flow',
  link: 'https://github.com/HenriBeck/check-flow',
  description: 'A better flow check cli with only ignoring errors from certain files',
}, {
  title: 'react-context-subscriber',
  link: 'https://github.com/HenriBeck/react-context-subscriber',
  description: 'A Higher-Order-Component for the new React Context',
}, {
  title: 'react-get-not-declared-props',
  link: 'https://github.com/HenriBeck/react-get-not-declared-props',
  description: 'A utility function to get the not declared props from a component',
}, {
  title: 'TF2Pickup (RIP)',
  link: 'https://github.com/TF2PickupNET',
  description: 'A webapp for a Pickup-System for Team Fortress 2',
}, {
  title: 'eslint-config-henribeck',
  link: 'https://github.com/HenriBeck/eslint-config-henribeck',
  description: 'My personal ESLint config',
}];

function Projects(props: Props) {
  return (
    <Section name="projects">
      <Container>
        <Header>
          Projects
        </Header>

        <div className={props.classes.grid}>
          {projects.map(project => (
            <Project
              key={project.title}
              {...project}
            />
          ))}
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
