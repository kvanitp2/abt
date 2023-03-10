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
        gameOver()
    }
    else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}
function gameOver(){
    timeEl.parentElement.classList.add('hide')
}

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
}

board.addEventListener('click', (event)=>{
    if (event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)
    const { width, height } = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = getRandomColor()

    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}