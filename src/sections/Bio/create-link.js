// @flow strict-local

import React from 'react';

import Link from '../../components/Link';

export default function createLink(link: string, content: string) {
  return (
    <Link
      href={link}
      color="primary"
    >
      {content}
    </Link>
  );
}
