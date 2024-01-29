const fs = require("fs");

const packageJsonPath = "./package.json";

fs.readFile(packageJsonPath, "utf-8", (error, data) => {
  if (error) {
    console.error("Error reading package.json file:", error);
    return;
  }

  const packageJson = JSON.parse(data);

  const versionParts = packageJson.version.split(".");
  versionParts[2] = (parseInt(versionParts[2]) + 1).toString();
  const newVersion = versionParts.join(".");

  packageJson.version = newVersion;

  // Scrivi il nuovo contenuto nel file
  fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2), (err) => {
    if (err) {
      console.error("Error writing package.json file:", err);
      return;
    }

    console.log(`Version of ${packageJson.name} updated to ${newVersion}`);
  });
});
