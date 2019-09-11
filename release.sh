#!/bin/sh


#p=$(<package.json)
#echo "" > dist/package.json
#echo $p > dist/package.json
#sudo cp -f LICENSE dist/LICENSE
#sudo cp -f README.md dist/README.md
sudo node release.js

git subtree push --prefix dist origin release
