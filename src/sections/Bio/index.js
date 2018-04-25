// @flow

import React from 'react';

import Header from '../../components/Header';
import Container from '../../components/Container';
import { blackTextColor } from '../../styles';
import Section from '../../components/Section';

import Text from './Text';

const name = 'bio';

function Biography() {
  return (
    <Section name={name}>
      <Container>
        <Header color={blackTextColor}>
          Biography
        </Header>

        <Text />
      </Container>
    </Section>
  );
}

export default {
  name,
  Component: Biography,
  NavItem: 'Biography',
};
