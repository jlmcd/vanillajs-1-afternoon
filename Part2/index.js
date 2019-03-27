const id = document.getElementById('idInput')
const color = document.getElementById('colorInput')

console.log(id, color)

function setCard() {
  const card = document.getElementById(id.value)
  console.log(card)
  card.style.color = color.value
}

function reset() {
  const suits = document.getElementsByTagName('section')
  for (let i = 0; i < 4; i++) {
    suits[i].style.color = null
  }
}