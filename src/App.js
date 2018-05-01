// @flow strict

import 'normalize.css';

import React, { Fragment } from 'react';
import injectSheet from 'react-jss';
import ReactGA from 'react-ga';

import Hero from './sections/Hero';
import Bio from './sections/Bio';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

const sections = [
  Hero,
  Bio,
  Projects,
  Contact,
];
const styles = {
  '@global': {
    '*': {
      padding: 0,
      margin: 0,
      boxSizing: 'border-box',
    },

    'body, #root': {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '"Roboto", sans-serif',
      width: '100vw',
      minHeight: '100vh',
      fontSize: '16px',
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
      <Fragment>
        <NavBar sections={sections} />

        <main>
          {sections.map(section => (
            <section.Component key={section.name} />
          ))}
        </main>

        <Footer />
      </Fragment>
    );
  }
}

export default injectSheet(styles)(App);
