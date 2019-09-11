var fs = require('fs');
fs.readFile('dist/package.json', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/\"main\": \"index.ts\"/g, '"main": "index.js"');

  fs.writeFile('dist/package.json', result, 'utf8', function(err) {
    if (err) return console.log(err);
    console.log('Successfully edited package.json for release');
  });
});
