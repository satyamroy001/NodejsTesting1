
const Folder = __dirname;
const fs = require('fs');
var i=0;
fs.readdirSync(Folder).forEach(file => {
    i+=1;
  console.log(`File/Folder no.${i}- ${file}`);
});
console.log(`Total number of files/folders present- ${i}`);