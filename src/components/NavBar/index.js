// @flow

import React from 'react';
import injectSheet from 'react-jss';
import EventListener from 'react-event-listener';

import {
  primaryBase,
  whiteTextColor,
} from '../../styles';
import Container from '../Container';

import Item from './Item';
import { scrollToSection } from './utils';
import Progress from './Progress';

type Props = {
  sections: $ReadOnlyArray<{
    name: string,
    NavItem: string,
  }>,
  classes: {
    navbar: string,
    container: string,
  },
};
type State = {
  scale: number,
  selectedSection: string | null,
};

const styles = {
  navbar: {
    backgroundColor: primaryBase,
    height: 64,
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    color: whiteTextColor,
    zIndex: 1,
  },

  container: { flexDirection: 'row' },
};

class NavBar extends React.Component<Props, State> {
  state = {
    scale: 0,
    selectedSection: null,
  };

  componentDidMount() {
    this.offsetTop = window.innerHeight * 0.15;
    this.offsetBottom = window.innerHeight * 0.75;
    this.maxViewport = window.innerHeight * 0.6;
    this.lastSectionName = this.props.sections[this.props.sections.length - 1].name;

    if (window.location.hash) {
      scrollToSection(window.location.hash.slice(1));
    }

    this.calculateNewScale();
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.selectedSection !== this.state.selectedSection && this.state.selectedSection) {
      window.location.hash = `#${this.state.selectedSection}`;
    }
  }

  offsetTop: number;

  offsetBottom: number;

  maxViewport: number;

  lastSectionName: string;

  items: Map<string, HTMLElement | null> = new Map();

  getActiveSection() {
    return [...document.querySelectorAll('section')].reduce((currentSection, section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top > this.offsetBottom || rect.bottom < this.offsetTop) {
        return currentSection;
      }

      const top = Math.max(this.offsetTop, rect.top);
      const bottom = Math.min(this.offsetBottom, rect.bottom);
      const calculatedSpace = (bottom - top) / this.maxViewport;

      if (calculatedSpace > currentSection.calculatedSpace) {
        return {
          calculatedSpace,
          section,
        };
      }

      return currentSection;
    }, {
      calculatedSpace: 0,
      section: null,
    });
  }

  calculateNewScale() {
    const activeSection = this.getActiveSection();

    if (activeSection.section === null) {
      return;
    }

    const sectionName = activeSection.section.getAttribute('data-name');

    if (!sectionName) {
      return;
    }

    this.setState((state) => {
      if (state.selectedSection === sectionName) {
        return null;
      }

      if (sectionName === this.lastSectionName) {
        return {
          selectedSection: sectionName,
          scale: 1,
        };
      }

      const navItem = this.items.get(sectionName);
      const right = navItem ? navItem.getBoundingClientRect().right : 0;

      return {
        selectedSection: sectionName,
        scale: right / window.innerWidth,
      };
    });
  }

  createRef = (name: string, element: HTMLElement | null) => {
    this.items.set(name, element);
  };

  handleScroll = () => {
    this.calculateNewScale();
  };

  render() {
    return (
      <div className={this.props.classes.navbar}>
        <EventListener
          target="document"
          onScroll={this.handleScroll}
        />

        <Progress scale={this.state.scale} />

        <Container className={this.props.classes.container}>
          {this.props.sections.map(section => (
            <Item
              name={section.name}
              createRef={this.createRef}
              key={section.name}
              isSelected={section.name === this.state.selectedSection}
            >
              {section.NavItem}
            </Item>
          ))}
        </Container>
      </div>
    );
  }
}

export default injectSheet(styles)(NavBar);
