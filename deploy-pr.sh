#!/usr/bin/env bash

set -eu;

yarn run now deploy -t $NOW_TOKEN -e NODE_ENV=production --public;
yarn run now alias "pr-$CIRCLE_PR_NUMBER-henribeck" -t $NOW_TOKEN;
yarn run now remove henribeck.im --yes --safe -t $NOW_TOKEN;