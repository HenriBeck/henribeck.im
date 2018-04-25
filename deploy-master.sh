#!/usr/bin/env sh

set -eu;

yarn run now deploy -t $NOW_TOKEN -e NODE_ENV=production --public;
yarn run now alias -t $NOW_TOKEN;
yarn run now remove henribeck.im --yes --safe -t $NOW_TOKEN;