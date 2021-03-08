const request = require('superagent');
const fs = require('fs');
const fse = require('fs-extra');
const admZip = require('adm-zip');
const path = require("path");
const homedir = require('os').homedir();

// Variables
const version = require("../../../package.json").version;
const repoName = "TypeScript-Cli-Generator";
const href = `https://github.com/chainsafe/${repoName}/archive/`;
const zipFile = `v${version}.zip`;
const source = `${href}/${zipFile}`;

// File locations
const configFolder = path.join(homedir, ".ts-cli/")
const zipDest = path.join(configFolder, zipFile);
const extractOutputDir = path.join(configFolder, `${repoName}-${version}`, "_template/");

export const installTemplate = (installPath: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    // First check for config directory
    if (!fs.existsSync(configFolder)) {
      fs.mkdirSync(configFolder);
    }

    // Pull down repo
    request
      .get(source)
      .on('error', (error: any) => reject(error))
      .pipe(fs.createWriteStream(zipDest)) // Download to ~/.ts-cli
      .on('finish', () => {
        try {
          // Unzip download into ~/.ts-cli
          const zipFile = new admZip(zipDest);
          zipFile.extractAllTo(configFolder);
          // Copy the template to the location chosen by the user
          fse.copySync(extractOutputDir, installPath);
          // Cleanup the cli directory
          fse.removeSync(configFolder);
          resolve(null);
        } catch (err) {
          reject(err)
        }
      });
  });
};