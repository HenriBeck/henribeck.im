// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';

import Header from '../../components/Header';
import Container from '../../components/Container';
import Section from '../../components/Section';
import ReactJS from '../../icons/ReactJS';
import NodeJS from '../../icons/NodeJS';
import MongoDB from '../../icons/MongoDB';
import CSSinJS from '../../icons/CSSinJS';
import HTML from '../../icons/HTML';

import Skill from './Skill';

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
  icon: ReactJS,
}, {
  display: 'Node JS',
  description: 'Server Development and CLI tools with JavaScript',
  icon: NodeJS,
}, {
  display: 'MongoDB + Mongoose',
  description: 'MongoDB development with mongoose or the native driver',
  icon: MongoDB,
}, {
  display: 'CSSinJS',
  description: 'No, CSSinJS isn\'t a joke. It\'s actually pretty cool and performs well.',
  icon: CSSinJS,
}, {
  display: 'HTML + CSS',
  description: 'Obviously, who doesn\'t know HTML and CSS?',
  icon: HTML,
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
