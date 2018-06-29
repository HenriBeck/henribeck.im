// @flow strict-local

import React from 'react';

import Link from '../Link';

export default function createLink(text: string, href: string) {
  return (
    <Link
      href={href}
      typography="body2"
    >
      {text}
    </Link>
  )
}