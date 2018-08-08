// @flow

// eslint-disable-next-line filenames/match-regex
import React from 'react';

type Props = {
  className: string,
  color: string,
};

const path = [
  'M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22',
  ',14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.',
  '2L12,21L5.5,19.2L4.07,3Z',
].join('');

export default function HTML(props: Props) {
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