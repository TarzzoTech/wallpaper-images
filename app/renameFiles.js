const fs = require("fs");
const path = require("path");

const renameFiles = async (folderPath, fileName) => {
  fs.readdir(folderPath, (error, files) => {
    if (error) {
      // Handle error here
      console.log(error);
    }
    let count = 1;
    for (const file of files) {
      const fileInfo = path.parse(file);
      if (fileInfo.name !== ".DS_Store") {
        const oldPath = path.join(__dirname, folderPath, file);
        const name = `${fileName}-${count}${fileInfo.ext}`;
        const newPath = path.join(__dirname, `new/${folderPath}`, name);

        fs.rename(oldPath, newPath, (error) => {
          if (error) {
            // Handle error here
            console.log(error);
          } else {
            console.log({
              oldPath,
              newPath,
            });
          }
        });
        count += 1;
      }
    }
  });
};

module.exports = {
  rename: () => {
    // renameFiles("wild-life", "wild-life");
  },
};
