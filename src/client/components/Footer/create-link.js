// @flow strict-local

import React from 'react';

import Link from '../Link';
import { LIGHT_TEXT_COLOR } from '../../colors';

export default function createLink(text: string, href: string) {
  return (
    <Link
      href={href}
      color={LIGHT_TEXT_COLOR}
    >
      {text}
    </Link>
  );
}
