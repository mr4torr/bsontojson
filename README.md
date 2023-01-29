
# Convert multiple bson files to json files

<p align="center">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/bsontojson.svg">
    <a href="https://www.linkedin.com/in/mailontorres">
        <img alt="Made by Mailon Torres" src="https://img.shields.io/badge/made%20by-mr4torr-%2304D361">
    </a>
    <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

### 🚀 Installation

Npm
- npm install bsontojson

Yarn
- yarn add bsontojson

### 🚀 Example of use

```js
const path = require("path");
const bsontojson = require("bsontojson");

const directoryWhereTheBsonFilesAreLocated = path.join(__dirname, "bson");
const directoryWhereTheJsonFilesWillBeGenerated = path.join(__dirname, "json");

BsonToJson.convert(
    directoryWhereTheBsonFilesAreLocated, 
    directoryWhereTheJsonFilesWillBeGenerated
);

```

### 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/mr4torr/bsontojson/issues).
- Make a fork;
- Create a branck with your feature: `git checkout -b awesome-feature`;
- Commit changes: `git commit -m 'feat: My awesome feature'`;
- Make a push to your branch: `git push origin awesome-feature`.

After merging your receipt request to done, you can delete a branch from yours.

### Show your support

Give a ⭐️ if this project helped you!

### License

This project is under the MIT license. See the [LICENSE](LICENSE.md) for details.

---

Made with ♥ by Mailon Torres :wave: [Get in touch!](https://www.linkedin.com/in/mailontorres)