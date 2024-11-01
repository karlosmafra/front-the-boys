const btnNewHero = document.getElementById("btn-new-hero")
const dialogHeroes = document.getElementById("dialog-heroes")

const btnCloseDialogHeroes = document.getElementById("btn-close-dialog-heroes")
const btnSubmitHero = document.getElementById("btn-submit-hero")

btnNewHero.addEventListener('click', openDialogHeroes)
btnCloseDialogHeroes.addEventListener("click", ()=> dialogHeroes.close())
btnSubmitHero.addEventListener("click", )

function openDialogHeroes() {

    dialogHeroes.showModal()

}