const btnNewHero = document.getElementById("btn-new-hero")
const dialogHeroes = document.getElementById("dialog-heroes")

/*
const listHeroes = document.getElementById("list-heroes")
let heroes = JSON.parse(localStorage.getItem("register")) || [];
let registerLocalStorage = getRegisterLocalStorage()
*/

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
const inStatus = document.getElementById("in-status")

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

  // Limpar inputs
  inRealName.value = ""
  inName.value = ""
  inHeight.value = ""
  inWeigth.value = ""
  inBirthDate.value = ""
  inBirthPlace.value = ""
  inPowerLevel.value = 50
  powerValue.textContent = 50
  inPopularity.value = 50
  popularityValue.textContent = 50
  inStatus.value = "ativo"

  dialogHeroes.showModal()

}

async function submitHero() {

  /*
    // Local storage
    let hero = {
      "real_name": inRealName.value,
      "name": inName.value,
      "height": inHeight.value,
      "weigth": inWeigth.value,
      "birth_date": inBirthDate.value,
      "birth_place": inBirthPlace.value,
      "power_level": inPowerLevel.value,
    }

    saveRegisterLocalStorage(hero)
  */

  if (verifyInputs()) {

    fetch('http://localhost:8000/herois', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome_real: inRealName.value,
        nome: inName.value,
        descricao: "", /* TO-DO */
        cidade: "", /* TO-DO */
        altura: inHeight.value,
        sexo: "", /* TO-DO */
        peso: inWeigth.value,
        data_nascimento: inBirthDate.value,
        nome_real: inRealName.value,
        local_nascimento: inBirthPlace.value,
        nivel_de_forca: inPowerLevel.value,
        // popularidade: inPopularity.value,
        status: inStatus.value,
        // fk_poderes_poderes_pk
        // fk_historico_de_batalhas_pk
      })
    })

    dialogHeroes.close()
    //getHeroesLocal()

  }

}

// Recuperar heróis e mostrar na tabela
async function getHeroes() {
  
}

function verifyInputs() {

  if (inRealName.value == "" || inName.value == "" || inBirthPlace.value == "") {
    alert("Todos os campos devem ser preenchidos")
    return false
  }

  if (inHeight.value == "" || inWeigth.value == "") {
    alert("A altura e o peso devem ser números válidos")
    return false
  }

  /*
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
  const inStatus = document.getElementById("in-status") 
  */

  return true

}

// Teste com dados no local storage
/*
function getHeroesLocal() {
  
  listHeroes.innerHTML = ""

  heroes.forEach((hero, index) => {
    const linha = document.createElement("tr")
    linha.innerHTML = `
        <td>${hero.real_name}</td>
        <td>${hero.name}</td>
        <td> "sex" </td>
        <td>${hero.height}</td>
        <td>${hero.weigth || ''}</td>
        <td>${hero.birth_date || ''}</td>
        <td>${hero.birth_place || ''}</td>
        <td> "" </td>
        <td> "" </td>
        <td> "" </td>
        <td> "" </td>
        <td> "" </td>
        `
    listHeroes.appendChild(linha)
})

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

getHeroesLocal()

*/ 

