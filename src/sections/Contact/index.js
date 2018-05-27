// @flow strict-local

import React from 'react';
import injectSheet from 'react-jss';
import {
  Typography,
  Icon,
  type ThemeType,
} from 'materialize-react';

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

    iconContainer: { padding: 16 },

    icon: { '&:hover': { color: theme.primary.base } },
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
          <span className={props.classes.iconContainer}>
            <Typography
              element="a"
              typography="body1"
              href="mailto:henribeck.dev@gmail.com"
              aria-label="E-Mail"
            >
              <Icon
                icon="email"
                className={props.classes.icon}
                size={64}
              />
            </Typography>
          </span>

          <span className={props.classes.iconContainer}>
            <Typography
              element="a"
              typography="body1"
              href="https://github.com/HenriBeck"
              aria-label="GitHub Profile"
            >
              <Icon
                icon="github-circle"
                className={props.classes.icon}
                size={64}
              />
            </Typography>
          </span>

          <span className={props.classes.iconContainer}>
            <Typography
              element="a"
              typography="body1"
              href="https://www.linkedin.com/in/henribeck/"
              aria-label="LinkedIn Profile"
            >
              <Icon
                icon="linkedin"
                className={props.classes.icon}
                size={64}
              />
            </Typography>
          </span>
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
