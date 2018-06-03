import EventListener from 'react-event-listener';
import {
  type Node,
  Component,
} from 'react';

declare module 'react-event-listener' {
  declare export default typeof EventListener;
}

declare module 'react-ga' {
  declare export default {
    initialize(id: string): void,
    pageview(url: string): void,
  }
}

declare module 'object.omit' {
  declare export default function omit<O: {}, K: string[]>(obj: O, keys: K): $Diff<O, { [key: K]: mixed }>;
}

declare module 'next/document' {
  declare export function Head(): Node;
  declare export function Main(): Node;
  declare export function NextScript(): Node;

  declare class Document extends Component {}

  declare export default Document;
}

declare module 'mdi-react/EmailIcon' {
  declare export default function EmailIcon(): Node;
}

declare module 'mdi-react/GithubCircleIcon' {
  declare export default function GithubCircleIcon(): Node;
}

declare module 'mdi-react/LinkedinIcon' {
  declare export default function LinkedinIcon(): Node;
}