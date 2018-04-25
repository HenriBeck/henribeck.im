#!/usr/bin/env bash

set -eu;

echo $CIRCLE_BRANCH;

yarn run now deploy -e NODE_ENV=production --public --regions bru;
yarn run now alias "$CIRCLE_BRANCH-henribeck";
yarn run now remove henribeck.im --yes --safe;