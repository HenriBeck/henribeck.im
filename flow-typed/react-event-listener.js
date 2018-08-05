// @flow

// eslint-disable-next-line no-unused-vars
import React from 'react';

declare module 'react-event-listener' {
  declare class EventListener extends React.Component<{
    target: string,
  }> {}

  declare export default typeof EventListener;
}
