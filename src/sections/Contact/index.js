// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';
import EmailIcon from 'mdi-react/EmailIcon';
import GithubCircleIcon from 'mdi-react/GithubCircleIcon';
import LinkedInIcon from 'mdi-react/LinkedinIcon';

import Header from '../../components/Header';
import Section from '../../components/Section';
import Container from '../../components/Container';

import ContactLink from './ContactLink';

type Props = { classes: { container: string } };

const name = 'contact';
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
};

function Contact(props: Props) {
  return (
    <Section name="contact">
      <Container>
        <Header>
          Contact
        </Header>

        <div className={props.classes.container}>
          <ContactLink
            href="mailto:henribeck.dev@gmail.com"
            label="E-Mail"
            icon={EmailIcon}
          />

          <ContactLink
            href="https://github.com/HenriBeck"
            label="GitHub Profile"
            icon={GithubCircleIcon}
          />

          <ContactLink
            href="https://www.linkedin.com/in/henribeck/"
            label="LinkedIn Profile"
            icon={LinkedInIcon}
          />
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
