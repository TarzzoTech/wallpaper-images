const fs = require("fs");

// https://raw.githubusercontent.com/TarzzoTech/wallpaper-images/v0.0.1/bikes/bikes-1.jpeg

const createJson = (fileName, length, label) => {
  const photos = [];
  for (let index = 0; index < length; index++) {
    photos.push({
      id: index,
      type: label,
      url: `https://raw.githubusercontent.com/TarzzoTech/wallpaper-images/v0.0.1/${label}/${label}-${
        index + 1
      }.jpeg`,
    });
  }
  var jsonContent = JSON.stringify(photos);
  fs.writeFile(fileName, jsonContent, "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("JSON file has been saved.");
  });
};

module.exports = {
  create: () => {
    // createJson("app/JSON/bikes.json", 23, "bikes");
    // createJson("app/JSON/cars.json", 79, "cars");
    // createJson("app/JSON/city.json", 183, "city");
    // createJson("app/JSON/nature.json", 197, "nature");
    // createJson("app/JSON/street-art.json", 133, "street-art");
    // createJson("app/JSON/wild-life.json", 169, "wild-life");
  },
};
