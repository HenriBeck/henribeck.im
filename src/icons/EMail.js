// @flow

import React from 'react';

type Props = {
  className: string,
  color: string,
};

const path = [
  'M4,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,',
  '4M12,11L20,6H4L12,11M4,18H20V8.37L12,13.36L4,8.37V18Z',
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
