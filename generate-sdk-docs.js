require("download-git-repo")("bancorprotocol/bancor-sdk", "node_modules/bancor-sdk", function (error) {
    if (error)
        throw error;

    const spawnSync = require("child_process").spawnSync;

    const args = [
        "--inputFiles", "node_modules/bancor-sdk/src/index.ts",
        "--inputFiles", "node_modules/bancor-sdk/src/conversion_paths.ts",
        "--inputFiles", "node_modules/bancor-sdk/src/history.ts",
        "--inputFiles", "node_modules/bancor-sdk/src/pricing.ts",
        "--inputFiles", "node_modules/bancor-sdk/src/utils.ts",
        "--inputFiles", "node_modules/bancor-sdk/src/types.ts",
        "--exclude", "**/blockchains/**/*.ts",
        "--exclude", "**/core.ts",
        "--exclude", "**/helpers.ts",
        "--exclude", "**/sdk_module.ts",
        "--excludeExternals",
        "--excludeNotExported",
        "--excludePrivate",
        "--excludeProtected",
        "--mode", "modules",
        "--name", "Bancor SDK",
        "--hideGenerator",
        "--out", "sdk/sdk-api-reference"
    ];

    const res = spawnSync("node_modules/typedoc/bin/typedoc", args);
    console.log(String(res.stdout));
});
