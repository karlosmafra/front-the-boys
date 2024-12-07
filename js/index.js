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
const inMale = document.getElementById('in-male')
const inFemale = document.getElementById('in-female')
let selectedSex = document.querySelector('input[name="in-sex"]:checked')
const inHeight = document.getElementById("in-height")
const inWeigth = document.getElementById("in-weigth")
const inBirthDate = document.getElementById("in-birth-date")
const inBirthPlace = document.getElementById("in-birth-place")
const inPowerLevel = document.getElementById("in-power-level")
const powerValue = document.getElementById("power-value")
const inPopularity = document.getElementById("in-popularity")
const popularityValue = document.getElementById("popularity-value")
const inStatus = document.getElementById("in-status")

let heroesData = []; // Para armazenar os dados dos heróis

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
  inMale.checked = false
  inFemale.checked = false
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
        sexo: selectedSex.value,
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
  
  fetch('http://localhost:8000/herois')
  .then((metadata) => {
    console.log("Sucesso!")
    console.log(metadata)
    return metadata.json()
  })
  .then((data) => {
    console.log(data)
    heroesData = data
    renderHeroes(data)
  })
  .catch(error => {
    console.log(error)
  });

}

// Função para renderizar os heróis na tabela
function renderHeroes(data) {
  const listHeroes = document.getElementById('listHeroes')
  listHeroes.innerHTML = '' // Limpa a tabela antes de renderizar novamente
  data.forEach(heroi => {
      const linha = document.createElement("tr")
      linha.innerHTML = `
          <td>${heroi.nome_real || ''}</td>
          <td>${heroi.nome}</td>
          <td>${heroi.sexo || ''}</td>
          <td>${heroi.altura || ''}</td>
          <td>${heroi.peso || ''}</td>
          <td>${heroi.data_nascimento || ''}</td>
          <td>${heroi.local_nascimento || ''}</td>
          <td>${heroi.nivel_de_forca}</td>
          <td>${heroi.popularidade || ''}</td>
          <td>${heroi.status}</td>
          <td>${heroi.poderes || ''}</td>
          <td>${heroi.batalhas || ''}</td>
      `
      listHeroes.appendChild(linha)
  });
}

 // Função para ordenar a tabela
 function sortTable(columnIndex) {

  const sortedData = [...heroesData]
  const header = document.querySelectorAll('th')[columnIndex]
  const isNumeric = columnIndex === 3 || columnIndex === 4 || columnIndex === 7 || columnIndex === 8 // Altura, Peso, Força, Popularidade (numéricos)

  sortedData.sort((a, b) => {
    const aValue = a[header.textContent.toLowerCase().replace(/ /g, "_")] || ''
    const bValue = b[header.textContent.toLowerCase().replace(/ /g, "_")] || ''

    if (isNumeric) {
      return parseFloat(aValue) - parseFloat(bValue)
    } else {
      return aValue.localeCompare(bValue)
    }
  })

  renderHeroes(sortedData)
}

 // Função para filtrar heróis baseado na busca
 function filterHeroes() {
  
  const nameSearch = document.getElementById('search-name').value.toLowerCase()
  const statusSearch = document.getElementById('search-status').value.toLowerCase()
  const popularitySearch = document.getElementById('search-popularity').value.toLowerCase()

  const filteredHeroes = heroesData.filter(heroi => {
      return (
          heroi.nome.toLowerCase().includes(nameSearch) &&
          heroi.status.toLowerCase().includes(statusSearch) &&
          (heroi.popularidade || '').toString().toLowerCase().includes(popularitySearch)
      )
  })

  renderHeroes(filteredHeroes);
}

function verifyInputs() {

  selectedSex = document.querySelector('input[name="in-sex"]:checked') 

  if (inRealName.value == "" || inName.value == "" || inBirthPlace.value == "" || !selectedSex) {
    alert("Todos os campos devem ser preenchidos")
    return false
  }

  if (inHeight.value == "" || inWeigth.value == "") {
    alert("A altura e o peso devem ser números válidos")
    return false
  }

  return true

}

getHeroes()

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

