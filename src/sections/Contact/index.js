// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';
import {
  Icon,
  type ThemeType,
} from 'materialize-react';
import EmailIcon from 'mdi-react/EmailIcon';
import GithubCircleIcon from 'mdi-react/GithubCircleIcon';
import LinkedinIcon from 'mdi-react/LinkedinIcon';

import Header from '../../components/Header';
import Section from '../../components/Section';
import Container from '../../components/Container';

type Props = {
  classes: {
    container: string,
    iconContainer: string,
    icon: string,
  },
};

const name = 'contact';
const styles = (theme: ThemeType) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },

    iconContainer: { margin: '16px 32px' },

    icon: { '&:hover': { fill: theme.primary.base } },
  };
};

function Contact(props: Props) {
  return (
    <Section name="contact">
      <Container>
        <Header>
          Contact
        </Header>

        <div className={props.classes.container}>
          <a
            className={props.classes.iconContainer}
            href="mailto:henribeck.dev@gmail.com"
            aria-label="E-Mail"
          >
            <Icon
              className={props.classes.icon}
              size={64}
            >
              <EmailIcon />
            </Icon>
          </a>

          <a
            className={props.classes.iconContainer}
            href="https://github.com/HenriBeck"
            aria-label="GitHub Profile"
          >
            <Icon
              className={props.classes.icon}
              size={64}
            >
              <GithubCircleIcon />
            </Icon>
          </a>

          <a
            className={props.classes.iconContainer}
            href="https://www.linkedin.com/in/henribeck/"
            aria-label="LinkedIn Profile"
          >
            <Icon
              className={props.classes.icon}
              size={64}
            >
              <LinkedinIcon />
            </Icon>
          </a>
        </div>
      </Container>
    </Section>
  );
}

export default {
  name,
  Component: injectSheet(styles)(Contact),
  NavItem: 'Contact',
};
