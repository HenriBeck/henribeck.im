// @flow strict-local

import React from 'react';

import Header from '../../components/Header';
import Container from '../../components/Container';
import Section from '../../components/Section';

import Text from './Text';

const name = 'bio';

function Biography() {
  return (
    <Section name={name}>
      <Container>
        <Header>
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
