const fs = require("fs").promises;
const path = require("path");

const MISSION_DATA_PATH = "../../data/missions.json";

async function readMissionsData() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, MISSION_DATA_PATH));
    const missions = JSON.parse(data);
    return missions;
  } catch (err) {
    console.error(`Erro na leitura do arquivo: ${err}`);
  }
}

async function writeNewMissionData(newMission) {
  try {
    const oldMissions = await readMissionsData();
    const allMissions = JSON.stringify([...oldMissions, newMission]);
    await fs.writeFile(path.resolve(__dirname, MISSION_DATA_PATH), allMissions);
  } catch (err) {
    console.error(`Erro na escrita do arquivo ${err}`);
  }
}

module.exports = { readMissionsData, writeNewMissionData };
