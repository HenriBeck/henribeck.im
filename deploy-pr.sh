#!/usr/bin/env bash

set -eu;

yarn run now deploy -e NODE_ENV=production --public;
yarn run now alias "pr-$CIRCLE_PR_NUMBER-henribeck";
yarn run now remove henribeck.im --yes --safe;