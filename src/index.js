const { readMissionsData, writeNewMissionData } = require("./utils/fsUtils.js");

async function main () {
    writeNewMissionData({
        "id": 100,
        "name": "Tryber 1",
        "year": "2019",
        "country": "Brasil",
        "destination": "Marte"
    })
}

main();