const fs = require("fs").promises;
const path = require("path");

async function readMissionsData() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, "../../data/missions.json"));
    const missions = JSON.parse(data);
    return missions;
  } catch (err) {
    console.error(`Erro na leitura do arquivo: ${err}`);
  }
}

module.exports = { readMissionsData };