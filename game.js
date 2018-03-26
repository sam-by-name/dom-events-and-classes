// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}
function makeBlue (evt) {
  evt.target.classList.toggle('blue')
  updateCounts()
}
function hide (evt) {
  evt.target.classList.toggle("invisible")
  updateCounts()
}

function updateCounts () {
  let dots = document.getElementsByClassName('board')[0].children
  let totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }
  for (let i = 0; i < dots.length; i++) {
    if (dots[i].classList.contains('blue')) totals.blue++
    if (dots[i].classList.contains('green')) totals.green++
    if (dots[i].classList.contains('invisible')) totals.invisible++
  }
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
