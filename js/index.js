const btnNewHero = document.getElementById("btn-new-hero")
const dialogHeroes = document.getElementById("dialog-heroes")

const listHeroes = document.getElementById("list-heroes")
let heroes = JSON.parse(localStorage.getItem("register")) || [];

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

let registerLocalStorage = getRegisterLocalStorage()

btnNewHero.addEventListener('click', openDialogHeroes)
btnCloseDialogHeroes.addEventListener("click", ()=> dialogHeroes.close())
btnSubmitHero.addEventListener("click", submitHero)

inPowerLevel.addEventListener("input", (event) => {
  powerValue.textContent = event.target.value;
})
inPopularity.addEventListener("input", (event) => {
  popularityValue.textContent = event.target.value;
})


function openDialogHeroes() {

  dialogHeroes.showModal()

}

async function submitHero() {

    // Local storage
    let hero = {
      "real-name": inRealName.value,
      "name": inName.value,
      "height": inHeight.value,
      "weigth": inWeigth.value,
      "birth-date": inBirthDate.value,
      "birth-place": inBirthPlace.value
    }

    saveRegisterLocalStorage(hero)
    

  fetch('http://localhost:8000/herois', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: inRealName.value,
      alias: inName.value,
      descricao: "", /* TO-DO */
      cidade: "", /* TO-DO */
      altura: inHeight.value,
      sexo: "", /* TO-DO */
      peso: inWeigth.value,
      data_nascimento: inBirthDate.value,
      nome_real: inRealName.value,
      local_nascimento: inBirthPlace.value,
      // fk_poderes_poderes_pk
      nivel_de_forca: 1, /* TO-DO */
      status: "", /* TO-DO */
      // fk_historico_de_batalhas_pk
    })
  })

  dialogHeroes.close()

}

async function getHeroes() {
  
  listHeroes.innerHTML = ""

  heroes.forEach((hero, index) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
        <td>${hero.real-name}</td>
        <td>${hero.name}</td>
        <td>${hero.height}</td>
        <td>${hero.weigth || ''}</td>
        <td>${hero.birth-date || ''}</td>
        <td>${hero.birth-place || ''}</td>
        `
    listHeroes.appendChild(linha);
});

}

function saveRegisterLocalStorage(register) {

  registerLocalStorage.push(register)
  localStorage.setItem("register", JSON.stringify(registerLocalStorage))
}

function getRegisterLocalStorage(register) {
    
  let registers = JSON.parse(localStorage.getItem(register))

  if (!registers) {
      return []
  }

  return registers

}

getHeroes()