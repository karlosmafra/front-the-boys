const btnNewCrime = document.getElementById("btn-new-crime")
const dialogCrimes = document.getElementById("dialog-crimes")

const btnCloseDialogCrimes = document.getElementById("btn-close-dialog-crimes")
const btnSubmitCrime = document.getElementById("btn-submit-crime")

const listCrimes = document.getElementById("list-crimes")
let crimes = JSON.parse(localStorage.getItem("crimes")) || [];
let registerLocalStorage = getRegisterLocalStorage()

const inCrimeName = document.getElementById("in-crime-name")
const inCrimeDesc = document.getElementById("in-crime-desc")
const inCrimeDate = document.getElementById("in-crime-date")
const inCrimeHero = document.getElementById("in-crime-hero")
const inCrimeLevel = document.getElementById("in-crime-level")
const crimeLevelValue = document.getElementById("crime-level-value")

btnNewCrime.addEventListener('click', openDialogCrimes)
btnCloseDialogCrimes.addEventListener("click", ()=> dialogCrimes.close())
btnSubmitCrime.addEventListener("click", submitCrime)

inCrimeLevel.addEventListener("input", (event) => {
    crimeLevelValue.textContent = event.target.value;
})


async function submitCrime() {

    let crime = {
        "name": inCrimeName.value,
        "desc": inCrimeDesc.value,
        "date": inCrimeDate.value,
        "hero": inCrimeHero.value,
        "level": inCrimeLevel.value,
    }

    saveRegisterLocalStorage(crime)

    dialogCrimes.close()

    /*
    fetch('http://localhost:3000/crimes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: inCrimeName.value,
        })
    })    
    */

}

function openDialogCrimes() {

    inCrimeName.value = ""
    inCrimeDesc.value = ""
    inCrimeDate.value = ""
    inCrimeHero.value = ""
    inCrimeLevel.value = 1
    crimeLevelValue.textContent = 1

    dialogCrimes.showModal()

}

function getCrimesLocal() {

    listCrimes.innerHTML = ""

    crimes.forEach((crime, index) => {
        const linha = document.createElement("tr")
        linha.innerHTML = `
            <td>${crime.name}</td>
            <td>${crime.desc}</td>
            <td>${crime.date}</td>
            <td>${crime.hero}</td>
            <td>${crime.level}</td>
            `
        listCrimes.appendChild(linha)
    })

}

function saveRegisterLocalStorage(register) {

    registerLocalStorage.push(register)
    localStorage.setItem("crimes", JSON.stringify(registerLocalStorage))
}
  
function getRegisterLocalStorage(register) {
      
    let registers = JSON.parse(localStorage.getItem(register))
  
    if (!registers) {
        return []
    }
  
    return registers
  
}

getCrimesLocal()