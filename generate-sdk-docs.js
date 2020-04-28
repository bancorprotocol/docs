require("download-git-repo")("bancorprotocol/bancor-sdk", "node_modules/bancor-sdk", function (error) {
    if (error)
        throw error;

    const fs = require("fs");
    const path = require("path");

    const spawnSync = require("child_process").spawnSync;

    const args = [
        "--mode", "file",
        "--name", "Bancor SDK",
        "--disableSources",
        "--stripInternal",
        "--hideGenerator",
        "--excludeExternals",
        "--excludeNotExported",
        "--excludePrivate",
        "--excludeProtected",
        "--out", "sdk/sdk-api-reference",
        "--plugin", "typedoc-plugin-markdown",
        "--inputFiles", "node_modules/bancor-sdk/src/index.ts",
        "--inputFiles", "node_modules/bancor-sdk/src/conversion_paths.ts",
        "--inputFiles", "node_modules/bancor-sdk/src/history.ts",
        "--inputFiles", "node_modules/bancor-sdk/src/pricing.ts",
        "--inputFiles", "node_modules/bancor-sdk/src/utils.ts",
        "--inputFiles", "node_modules/bancor-sdk/src/types.ts",
        "--exclude", "**/blockchains/**/*.ts",
        "--exclude", "**/core.ts",
        "--exclude", "**/helpers.ts",
        "--exclude", "**/sdk_module.ts"        
    ];

    const res = spawnSync("node_modules/typedoc/bin/typedoc", args);
    console.log(String(res.stdout));

    function addReadme(targetPath) {
        const readmePath = path.join(targetPath, "README.md");
        if (!fs.existsSync(readmePath))
            fs.writeFileSync(readmePath, " # " + path.basename(targetPath));

        for (const filename of fs.readdirSync(targetPath)) {
            const childPath = path.join(targetPath, filename);
            if (fs.lstatSync(childPath).isDirectory())
                addReadme(childPath);
        }
    }

    addReadme("sdk/sdk-api-reference");
});
