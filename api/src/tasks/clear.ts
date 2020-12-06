import fs from 'fs';

const buildFolder = "build";
const log = console.log;

export function removeBuildFolder() {
    fs.rmdirSync(buildFolder, { recursive: true });
    log("Limpeza realizada!")
}

removeBuildFolder();



