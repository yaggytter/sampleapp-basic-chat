#!/bin/bash -x

npm install
npm run tailwind:css
npx tsc; npm run dev