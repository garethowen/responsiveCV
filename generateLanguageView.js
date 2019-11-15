/*
  Example usages:
    generateLanguageView languageStrings 0 englishView.json");
      -> creates the file englishView.json using the values in the first column of the languageStrings file.");
    generateLanguageView languageStrings 1 germanView.json");
      -> creates the file germanView.json using the values in the second column of the languageStrings file.");
*/

var languageStringsFile=process.argv[2];
var languageIndex = parseInt(process.argv[3]) + 1;
var languageName=process.argv[4];

var fs = require("fs");

var outputFileName = languageName;
var writeStream = fs.createWriteStream(outputFileName);

var languageStrings = fs.readFileSync(languageStringsFile).toString();

var lines = languageStrings.split(/[\n]+/);

var newLine = '\r\n';
writeStream.write("{" + newLine);
lines.forEach(function (line, linesIndex) {

  var parts=line.split('|');
  var key=parts[0];
  if (key) {

console.log(parts[1]);
    var value=parts[languageIndex];
    if (!value) {
      value=parts[1]; // default to first language
    }

    writeStream.write('"' + key.trim() + '":');
    writeStream.write('"' + value.trim() + '"');

    if (linesIndex < (lines.length-2)) {
      writeStream.write(',');
    }
    writeStream.write(newLine);
  }
})
writeStream.write("}" + newLine);

writeStream.end();

console.log("created file: " + outputFileName);
