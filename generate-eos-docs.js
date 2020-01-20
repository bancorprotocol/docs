const fs        = require("fs");
const spawnSync = require("child_process").spawnSync;

const nodeArgs   = ["node_modules/doxygen/bin/nodeDoxygen.js", "--docs", "--configPath=config/eos-smart-contracts/Doxyfile"];
const pythonArgs = ["-m", "doxybook", "-i=tmp/xml", "-o=api-reference/eos-smart-contracts", "-t=gitbook"];

const nodeResult = spawnSync("node", nodeArgs, {stdio: ["inherit", "inherit", "pipe"]});
if (nodeResult.stderr.length > 0)
    throw new Error(nodeResult.stderr);

const pythonResult = spawnSync("python", pythonArgs, {stdio: ["inherit", "inherit", "pipe"]});
if (pythonResult.stderr.length > 0)
    throw new Error(pythonResult.stderr);

for (const fileName of fs.readdirSync("api-reference/eos-smart-contracts"))
    if (!fileName.startsWith("group__"))
        fs.unlinkSync("api-reference/eos-smart-contracts/" + fileName);

function remove(pathName) {
    if (fs.lstatSync(pathName).isDirectory()) {
        for (const fileName of fs.readdirSync(pathName))
            remove(pathName + "/" + fileName);
        fs.rmdirSync(pathName);
    }
    else {
        fs.unlinkSync(pathName);
    }
}

remove("tmp");

fs.copyFileSync("node_modules/bancor-contracts_eos/README.md", "api-reference/eos-smart-contracts/README.md");
