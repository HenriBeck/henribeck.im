// @flow

import React from 'react';
import injectSheet from 'react-jss';
import {
  EmailIcon,
  GithubCircleIcon,
  XingCircleIcon,
} from 'mdi-react';

import Header from '../../components/Header';
import Section from '../../components/Section';
import Container from '../../components/Container';
import { blackTextColor } from '../../styles';
import Link from '../../components/Link';

type Props = {
  classes: {
    container: string,
    iconContainer: string,
  },
};

const name = 'contact';
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  iconContainer: { padding: 16 },
};

function Contact(props: Props) {
  return (
    <Section name="contact">
      <Container>
        <Header color={blackTextColor}>
          Contact
        </Header>

        <div className={props.classes.container}>
          <span className={props.classes.iconContainer}>
            <Link
              href="mailto:henribeck.dev@gmail.com"
              color={blackTextColor}
            >
              <EmailIcon
                size={64}
                color={blackTextColor}
              />
            </Link>
          </span>

          <span className={props.classes.iconContainer}>
            <Link
              href="https://github.com/HenriBeck"
              color={blackTextColor}
            >
              <GithubCircleIcon
                size={64}
                color={blackTextColor}
              />
            </Link>
          </span>

          <span className={props.classes.iconContainer}>
            <Link
              href="https://www.xing.com/profile/Henri_Beck2/cv"
              color={blackTextColor}
            >
              <XingCircleIcon
                size={64}
                color={blackTextColor}
              />
            </Link>
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
