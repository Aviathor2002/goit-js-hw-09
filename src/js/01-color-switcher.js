const background = document.querySelector('body')
const start = document.querySelector(`[data-start]`)
const stop = document.querySelector(`[data-stop]`)


console.log(start)

start.addEventListener(`click`, bodyColor )








function bodyColor(){
    const randColor = getRandomHexColor()
    background.style.background = randColor
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }