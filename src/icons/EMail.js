// @flow

import React from 'react';

type Props = {
  className: string,
  color: string,
};

const path = [
  'M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,',
  '20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z',
].join('');

export default function EMail(props: Props) {
  return (
    <svg
      className={props.className}
      viewBox="0 0 24 24"
    >
      <path
        fill={props.color}
        d={path}
      />
    </svg>
  );
}
