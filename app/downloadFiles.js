const fs = require("fs");
const request = require("request");
const bikes = require("./json-data/bikes.json");
const cars = require("./json-data/cars.json");
const city = require("./json-data/city.json");
const nature = require("./json-data/nature.json");
const streetArt = require("./json-data/street-art.json");
const wildLife = require("./json-data/wild-life.json");

var download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    request(uri).pipe(fs.createWriteStream(filename)).on("close", callback);
  });
};

const extractData = (data = [], folderName, indexStart = 1) => {
  data.forEach((d, idx) => {
    const url = d.src.portrait;
    const filePath = `${folderName}/${folderName}-${idx + indexStart}.jpeg`;
    download(url, filePath, function () {
      console.log(filePath);
    });
  });
};

module.exports = {
  download: () => {
    // extractData(cars.slice(0, 60), "cars");
    // extractData(cars.slice(61, 120), "cars", 61);
    // extractData(cars.slice(121, 180), "cars", 121);
    // extractData(cars.slice(181, 241), "cars", 181);
    // extractData(city.slice(0, 60), "city");
    // extractData(city.slice(61, 120), "city", 61);
    // extractData(city.slice(121, 180), "city", 121);
    // extractData(city.slice(181, 241), "city", 181);
    // extractData(nature.slice(0, 60), "nature");
    // extractData(nature.slice(61, 120), "nature", 61);
    // extractData(nature.slice(121, 180), "nature", 121);
    // extractData(nature.slice(181, 241), "nature", 181);
    // extractData(streetArt.slice(0, 60), "street-art");
    // extractData(streetArt.slice(61, 120), "street-art", 61);
    // extractData(streetArt.slice(121, 180), "street-art", 121);
    // extractData(streetArt.slice(181, 241), "street-art", 181);
    // extractData(wildLife.slice(0, 60), "wild-life");
    // extractData(wildLife.slice(61, 120), "wild-life", 61);
    // extractData(wildLife.slice(121, 180), "wild-life", 121);
    // extractData(wildLife.slice(181, 241), "wild-life", 181);
  },
};
