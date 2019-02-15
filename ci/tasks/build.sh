#!/bin/bash

set -e +x

pushd source-code

./gradlew clean
./gradlew build -x test

ls
popd
cp -r source-code/* uiCode/

ls uiCode
exit 0
