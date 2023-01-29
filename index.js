var fs = require("fs");
const path = require("path");
const BSON = require("bson");

class BsonToJson {
  static convert = (dirBson, dirJson) => {
    fs.readdir(dirBson, function (err, files) {
      if (err) {
        return console.log("Unable to scan directory: " + err);
      }

      files.forEach(function (file) {
        var pathFileBson = path.join(dirBson, file);
        var pathFileJson = path.join(dirJson, file.split(".")[0] + ".json");

        fs.readFile(pathFileBson, { encoding: null }, (err, data) => {
          if (err) {
            console.log(err.message);
            return;
          }

          var jsonContent = BsonToJson._deserialize(data);
          jsonContent = JSON.stringify(jsonContent);

          fs.writeFile(pathFileJson, jsonContent, "utf8", function (err) {
            if (err) {
              console.log(
                "An error occured while writing JSON Object to File."
              );
              return console.log(err);
            }

            console.log("JSON " + file + " has been saved.");
          });
        });
      });
    });
  };

  static _getNextObjectSize = (buffer) => {
    // this is how BSON
    return buffer[0] | (buffer[1] << 8) | (buffer[2] << 16) | (buffer[3] << 24);
  };

  static _deserialize = (buffer, options) => {
    let _buffer = buffer;
    let _result = [];

    while (_buffer.length > 0) {
      let nextSize = BsonToJson._getNextObjectSize(_buffer);
      if (_buffer.length < nextSize) {
        throw new Error("Corrupted BSON file: the last object is incomplete.");
      } else if (_buffer[nextSize - 1] !== 0) {
        throw new Error(
          `Corrupted BSON file: the ${
            _result.length + 1
          }-th object does not end with 0.`
        );
      }

      let obj = BSON.deserialize(_buffer, {
        ...options,
        allowObjectSmallerThanBufferSize: true,
        promoteBuffers: true, // Since BSON support raw buffer as data type, this config allows
        // these buffers as is, which is valid in JS object but not in JSON
      });
      _result.push(obj);
      _buffer = _buffer.slice(nextSize);
    }

    return _result;
  };
}

module.exports = BsonToJson;
