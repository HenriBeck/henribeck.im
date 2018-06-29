// @flow strict-local

import React from 'react';

import Link from '../../components/Link';
import { ACTIVE_COLOR } from '../../colors';

export default function createLink(content: string, link: string) {
  return (
    <Link
      href={link}
      color={ACTIVE_COLOR}
    >
      {content}
    </Link>
  );
}
