// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';

import Header from '../../components/Header';
import Section from '../../components/Section';
import Container from '../../components/Container';
import GitHub from '../../icons/GitHub';
import EMail from '../../icons/EMail';
import LinkedIn from '../../icons/LinkedIn';

import ContactLink from './ContactLink';

type Props = { +classes: { +container: string } };

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
            icon={EMail}
          />

          <ContactLink
            href="https://github.com/HenriBeck"
            label="GitHub Profile"
            icon={GitHub}
          />

          <ContactLink
            href="https://www.linkedin.com/in/henribeck/"
            label="LinkedIn Profile"
            icon={LinkedIn}
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
