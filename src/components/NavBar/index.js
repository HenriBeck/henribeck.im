// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';
import EventListener from 'react-event-listener';

import Container from '../Container';
import { ACTIVE_COLOR } from '../../colors';

import Item from './Item';
import {
  getCurrentSection,
  scrollToSection,
} from './utils';

type Props = {
  +sections: $ReadOnlyArray<{
    +name: string,
    +NavItem: string,
  }>,
  +classes: {
    +navbar: string,
    +container: string,
  },
};
type State = { +currentSection: string | null };

const styles = {
  navbar: {
    backgroundColor: ACTIVE_COLOR,
    height: 64,
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    color: '#ffffff',
  },

  container: { flexDirection: 'row' },
};

class NavBar extends React.Component<Props, State> {
  state = { currentSection: null };

  componentDidMount() {
    if (window.location.hash) {
      scrollToSection(window.location.hash.slice(1));
    }

    this.sections = [...document.querySelectorAll('section')];

    this.updateCurrentSection();
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (
      prevState.currentSection !== this.state.currentSection
      && this.state.currentSection !== null
    ) {
      window.location.hash = `#${this.state.currentSection}`;
    }
  }

  updateCurrentSection() {
    const activeSection = getCurrentSection(this.sections);

    if (activeSection.section === null) {
      return;
    }

    const sectionName = activeSection.section.getAttribute('data-name');

    this.setState((state) => {
      if (state.currentSection === sectionName) {
        return null;
      }

      return { currentSection: sectionName };
    });
  }

  handleScroll = () => {
    this.updateCurrentSection();
  };

  renderSectionItems() {
    return this.props.sections.map(section => (
      <Item
        name={section.name}
        createRef={this.createRef}
        key={section.name}
        isSelected={section.name === this.state.currentSection}
      >
        {section.NavItem}
      </Item>
    ));
  }

  render() {
    return (
      <nav className={this.props.classes.navbar}>
        <EventListener
          target="document"
          onScroll={this.handleScroll}
        />

        <Container className={this.props.classes.container}>
          {this.renderSectionItems()}
        </Container>
      </nav>
    );
  }
}

export default injectSheet(styles)(NavBar);
