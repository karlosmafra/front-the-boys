const btnNewMission = document.getElementById("btn-new-mission")
const dialogMissions = document.getElementById("dialog-missions")

const btnCloseDialogMissions = document.getElementById("btn-close-dialog-missions")
const btnSubmitMission = document.getElementById("btn-submit-mission")

const listMissions = document.getElementById("list-missions")
let missions = JSON.parse(localStorage.getItem("missions")) || [];
let registerLocalStorage = getRegisterLocalStorage()

const inMissionName = document.getElementById("in-mission-name")
const inMissionDesc = document.getElementById("in-mission-desc")
const inMissionLevel = document.getElementById("in-mission-level")
const inMissionHeroes = document.getElementById("in-mission-heroes")
const inMissionResult = document.getElementById("in-mission-result")
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
        "result": inMissionResult.value,
        "reward": inMissionReward.value
    }

    saveRegisterLocalStorage(mission)

    dialogMissions.close()
}

function openDialogMissions() {

    // Limpar
    inMissionName.value = ""
    inMissionDesc.value = ""
    inMissionLevel.value = 1
    inMissionHeroes.value = ""
    inMissionResult.value = "sucesso"
    inMissionReward.value = ""
    missionLevelValue.textContent = 1

    dialogMissions.showModal()

}

function getMissionsLocal() {

    listMissions.innerHTML = ""

    missions.forEach((mission, index) => {
        const linha = document.createElement("tr")
        linha.innerHTML = `
            <td>${mission.name}</td>
            <td>${mission.desc}</td>
            <td>${mission.level}</td>
            <td>${mission.heroes || ''}</td>
            <td>${mission.result}</td>
            <td>${mission.reward}</td>
            `
        listMissions.appendChild(linha)
    })

}

function saveRegisterLocalStorage(register) {

    registerLocalStorage.push(register)
    localStorage.setItem("missions", JSON.stringify(registerLocalStorage))
}
  
function getRegisterLocalStorage(register) {
      
    let registers = JSON.parse(localStorage.getItem(register))
  
    if (!registers) {
        return []
    }
  
    return registers
  
}

getMissionsLocal()