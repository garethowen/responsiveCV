#!/bin/bash

node generateLanguageView.js languageStrings.txt 0 englishGeneratedView.json
node generateLanguageView.js languageStrings.txt 1 germanGeneratedView.json

mustache englishGeneratedView.json indexTemplate.mustache > indexEnglish.html
mustache germanGeneratedView.json indexTemplate.mustache > indexGerman.html
