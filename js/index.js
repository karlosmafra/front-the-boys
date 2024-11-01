const btnNewHero = document.getElementById("btn-new-hero")
const dialogHeroes = document.getElementById("dialog-heroes")

const btnCloseDialogHeroes = document.getElementById("btn-close-dialog-heroes")
const btnSubmitHero = document.getElementById("btn-submit-hero")

const inRealName = document.getElementById("in-real-name")
const inName = document.getElementById("in-name")
const inHeight = document.getElementById("in-height")
const inWeigth = document.getElementById("in-weigth")
const inBirthDate = document.getElementById("in-birth-date")
const inBirthPlace = document.getElementById("in-birth-place")
const inPowerLevel = document.getElementById("in-power-level")
const powerValue = document.getElementById("power-value")
const inPopularity = document.getElementById("in-popularity")
const popularityValue = document.getElementById("popularity-value")


btnNewHero.addEventListener('click', openDialogHeroes)
btnCloseDialogHeroes.addEventListener("click", ()=> dialogHeroes.close())
btnSubmitHero.addEventListener("click", submitHero)

inPowerLevel.addEventListener("input", (event) => {
    powerValue.textContent = event.target.value;
  })
  inPopularity.addEventListener("input", (event) => {
    popularityValue.textContent = event.target.value;
  })


function submitHero() {

    let hero = {
        "real-name": inRealName.value,
        "name": inName.value,
        "height": inHeight.value,
        "weigth": inWeigth.value,
        "birth-date": inBirthDate.value,
        "birth-place": inBirthPlace.value
    }

    alert(hero.name)

}

function openDialogHeroes() {

    dialogHeroes.showModal()

}