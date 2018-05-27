// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';
import ReactGA from 'react-ga';
import {
  Theme,
  createTheme,
  Background,
} from 'materialize-react';

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

    'body, #app': {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      minHeight: '100vh',
    },
  },
};
const theme = createTheme({
  type: 'light',
  primary: 'blue',
  accent: 'yellow',
});

class App extends React.Component<{}> {
  componentDidMount() {
    ReactGA.initialize('UA-118280928-1');

    ReactGA.pageview('/');
  }

  render() {
    return (
      <Theme theme={theme}>
        <Background>
          <NavBar sections={sections} />

          <main>
            {sections.map(section => (
              <section.Component key={section.name} />
            ))}
          </main>

          <Footer />
        </Background>
      </Theme>
    );
  }
}

export default injectSheet(styles)(App);
