const path = require("path");
const BsonToJson = require("..");

const dirBson = path.join(__dirname, "bson");
const dirJson = path.join(__dirname, "json");

BsonToJson.convert(dirBson, dirJson);
