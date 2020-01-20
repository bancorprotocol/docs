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
    if (fileName.startsWith("_") || fileName.startsWith("dir_"))
        fs.unlinkSync("api-reference/eos-smart-contracts/" + fileName);

fs.unlinkSync("api-reference/eos-smart-contracts/pages.md");
fs.unlinkSync("api-reference/eos-smart-contracts/files.md");
fs.unlinkSync("api-reference/eos-smart-contracts/macros.md");
fs.unlinkSync("api-reference/eos-smart-contracts/variables.md");
fs.unlinkSync("api-reference/eos-smart-contracts/functions.md");
fs.unlinkSync("api-reference/eos-smart-contracts/annotated.md");
fs.unlinkSync("api-reference/eos-smart-contracts/classes.md");
fs.unlinkSync("api-reference/eos-smart-contracts/hierarchy.md");
fs.unlinkSync("api-reference/eos-smart-contracts/class_members.md");
fs.unlinkSync("api-reference/eos-smart-contracts/class_member_functions.md");
fs.unlinkSync("api-reference/eos-smart-contracts/class_member_variables.md");
fs.unlinkSync("api-reference/eos-smart-contracts/class_member_typedefs.md");
fs.unlinkSync("api-reference/eos-smart-contracts/class_member_enums.md");
fs.unlinkSync("api-reference/eos-smart-contracts/namespaces.md");
fs.unlinkSync("api-reference/eos-smart-contracts/namespacestd.md");
fs.unlinkSync("api-reference/eos-smart-contracts/namespaceeosio.md");
fs.unlinkSync("api-reference/eos-smart-contracts/namespace_members.md");
fs.unlinkSync("api-reference/eos-smart-contracts/namespace_member_functions.md");
fs.unlinkSync("api-reference/eos-smart-contracts/namespace_member_variables.md");
fs.unlinkSync("api-reference/eos-smart-contracts/namespace_member_typedefs.md");
fs.unlinkSync("api-reference/eos-smart-contracts/namespace_member_enums.md");

fs.copyFileSync("node_modules/bancor-contracts_eos/README.md", "api-reference/eos-smart-contracts/README.md");
