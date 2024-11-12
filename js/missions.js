const btnNewMission = document.getElementById("btn-new-mission")
const dialogMissions = document.getElementById("dialog-missions")

const btnCloseDialogMissions = document.getElementById("btn-close-dialog-missions")
const btnSubmitMission = document.getElementById("btn-submit-mission")

const inMissionName = document.getElementById("in-mission-name")
const inMissionDesc = document.getElementById("in-mission-desc")
const inMissionLevel = document.getElementById("in-mission-level")
const inMissionHeroes = document.getElementById("in-mission-heroes")
const inMissionReward = document.getElementById("in-mission-reward")
const missionLevelValue = document.getElementById("mission-level-value")

btnNewMission.addEventListener('click', openDialogMissions)
btnCloseDialogMissions.addEventListener("click", ()=> dialogMissions.close())
btnSubmitMission.addEventListener("click", submitMission)

inMissionLevel.addEventListener("input", (event) => {
    missionLevelValue.textContent = event.target.value;
})


function submitMission() {

    let mission = {
        "name": inMissionName.value,
        "desc": inMissionDesc.value,
        "level": inMissionLevel.value,
        "heroes": inMissionHeroes.value,
        "reward": inMissionReward.value
    }

}

function openDialogMissions() {

    dialogMissions.showModal()

}