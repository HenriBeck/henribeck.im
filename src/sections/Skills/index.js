// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';

import Header from '../../components/Header';
import Container from '../../components/Container';
import Section from '../../components/Section';

import Skill from './Skill';
import ReactIcon from './icons/ReactIcon';
import NodeJSIcon from './icons/NodeJSIcon';
import MongoDBIcon from './icons/MongoDBIcon';
import CSSinJSIcon from './icons/CSSinJSIcon';
import HTMLIcon from './icons/HTMLIcon';

type Props = { classes: { grid: string } };

const name = 'skills';
const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',

    '@media screen and (max-width: 800px)': { gridTemplateColumns: '1fr' },
  },
};

const skills = [{
  display: 'React JS',
  description: 'PWA and SPA and Component development with React JS (Redux etc.)',
  icon: ReactIcon,
}, {
  display: 'Node JS',
  description: 'Server Development and CLI tools with JavaScript',
  icon: NodeJSIcon,
}, {
  display: 'MongoDB + Mongoose',
  description: 'MongoDB development with mongoose or the native driver',
  icon: MongoDBIcon,
}, {
  display: 'CSSinJS',
  description: 'No, CSSinJS isn\'t a joke. It\'s actually pretty cool and performs well.',
  icon: CSSinJSIcon,
}, {
  display: 'HTML + CSS',
  description: 'Obviously, who doesn\'t know HTML and CSS?',
  icon: HTMLIcon,
}];

function Skills(props: Props) {
  return (
    <Section name={name}>
      <Container>
        <Header>
          Skills
        </Header>

        <div className={props.classes.grid}>
          {skills.map(skill => (
            <Skill
              key={skill.display}
              {...skill}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default {
  name,
  Component: injectSheet(styles)(Skills),
  NavItem: 'Skills',
};
