#!/usr/bin/env sh

set -eu;

yarn run now deploy -e NODE_ENV=production --public --regions bru;
yarn run now alias;
yarn run now remove henribeck.im --yes --safe;