// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';
import ReactGA from 'react-ga';

import Hero from './sections/Hero';
import Bio from './sections/Bio';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { DARK_TEXT_COLOR } from './colors';

const sections = [
  Hero,
  Bio,
  Projects,
  Skills,
  Contact,
];
const styles = {
  '@global': {
    'body, #app': {
      position: 'relative',
      width: '100vw',
      minHeight: '100vh',
      fontSize: '1.25rem',
      color: DARK_TEXT_COLOR,
      lineHeight: 1.25,
      fontFamily: '\'Roboto\', sans-serif',
    },
  },
};

class App extends React.Component<{}> {
  componentDidMount() {
    ReactGA.initialize('UA-118280928-1');

    ReactGA.pageview('/');
  }

  render() {
    return (
      <React.Fragment>
        <NavBar sections={sections} />

        <main>
          {sections.map(section => (
            <section.Component key={section.name} />
          ))}
        </main>

        <Footer />
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(App);
