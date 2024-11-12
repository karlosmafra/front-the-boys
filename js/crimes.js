const btnNewCrime = document.getElementById("btn-new-crime")
const dialogCrimes = document.getElementById("dialog-crimes")

const btnCloseDialogCrimes = document.getElementById("btn-close-dialog-crimes")
const btnSubmitCrime = document.getElementById("btn-submit-crime")

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


function submitCrime() {

    let crime = {
        "crime-name": inCrimeName.value,
        "crime-desc": inCrimeDesc.value,
        "crime-date": inCrimeDate.value,
        "crime-hero": inCrimeHero.value,
        "crime-level": inCrimeLevel.value,
    }

    alert(crime["crime-name"])

}

function openDialogCrimes() {

    dialogCrimes.showModal()

}