require("download-git-repo")("bancorprotocol/contracts_eos", "node_modules/bancor-contracts_eos", function (error) {
    if (error)
        throw error;

    const fs        = require("fs");
    const spawnSync = require("child_process").spawnSync;

    const nodeArgs   = ["node_modules/doxygen/bin/nodeDoxygen.js", "--docs", "--configPath=config/eos-smart-contracts/Doxyfile"];
    const pythonArgs = ["-m", "doxybook", "-i=tmp/xml", "-o=eos-contracts/eos-api-reference", "-t=gitbook"];

    const nodeResult = spawnSync("node", nodeArgs, {stdio: ["inherit", "inherit", "pipe"]});
    if (nodeResult.stderr.length > 0)
        throw new Error(nodeResult.stderr);

    const pythonResult = spawnSync("python", pythonArgs, {stdio: ["inherit", "inherit", "pipe"]});
    if (pythonResult.stderr.length > 0)
        throw new Error(pythonResult.stderr);

    for (const fileName of fs.readdirSync("eos-contracts/eos-api-reference"))
        if (!/^(modules|structmemo__x__transfer|group__.*).md$/.test(fileName))
            fs.unlinkSync("eos-contracts/eos-api-reference/" + fileName);

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

    fs.copyFileSync("node_modules/bancor-contracts_eos/README.md", "eos-contracts/eos-api-reference/README.md");
});
