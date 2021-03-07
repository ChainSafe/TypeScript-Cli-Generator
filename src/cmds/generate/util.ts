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
      .pipe(fs.createWriteStream(zipDest))
      .on('finish', () => {
        const zipFile = new admZip(zipDest);
        zipFile.extractAllTo(configFolder);
        console.log('Finished unzip');
    
        fse.copy(extractOutputDir, installPath, (err: any) => {
          if (err) reject(err)
          console.log(`Copied template to: ${installPath}`)
          // TODO Cleanup
          resolve(null);
        });
      });
  });
};