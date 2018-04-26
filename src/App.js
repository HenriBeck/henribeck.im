// @flow

import 'normalize.css';

import React, { Fragment } from 'react';
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

export default class App extends React.Component<{}> {
  componentDidMount() {
    ReactGA.initialize('UA-118280928-1');
  }

  render() {
    return (
      <Fragment>
        <NavBar sections={sections} />

        {sections.map(({
          Component,
          name,
        }) => (
          <Component key={name} />
        ))}

        <Footer />
      </Fragment>
    );
  }
}
