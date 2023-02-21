const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')

const colors = [
    '#8A9597', '#bc9463', '#c93b79', '#c61a15', '#b992e0',
    '#b528bb', '#1d4450', ' #ED760E', '#999950', '#E63244',
    '#7E7B52', '#FF2301'
]


let score = 0
let time = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        screens[1].classList.add('up')
        time = +event.target.getAttribute('data-time')
        startGame()
    }
})


function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function decreaseTime() {
    if (time === 0) {
        console.log('Game over')
    }
    else {
        let current = --time
        if (current < 10){
            current = `0${current}`
        }
        setTime(current)
    }
}
function startGame(){
    setInterval(decreaseTime, 1000)
}