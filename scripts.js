let redSquare = document.querySelector('#red')
let blueSquare = document.querySelector('#blue')
let greenSquare = document.querySelector('#green')
let color
let cloud
let redCloud = false
let blueCloud = false
let greenCloud = false

redSquare.addEventListener('click', () => {
    if (redCloud) {
        redSquare.innerHTML = ''
        redCloud = false
    }
    else {
        color = 'red'
        cloud = ` <div class="cloud">This is ${color} color<div class="small"></div></div>`
        redSquare.innerHTML = cloud
        redCloud = true
    }
})

blueSquare.addEventListener('click', () => {
    if (blueCloud) {
        blueSquare.innerHTML = ''
        blueCloud = false
    }
    else {
        color = 'blue'
        cloud = ` <div class="cloud">This is ${color} color<div class="small"></div></div>`
        blueSquare.innerHTML = cloud
        blueCloud = true
    }
})

greenSquare.addEventListener('click', () => {
    if (greenCloud) {
        greenSquare.innerHTML = ''
        greenCloud = false
    }
    else {
        color = 'green'
        cloud = ` <div class="cloud">This is ${color} color<div class="small"></div></div>`
        greenSquare.innerHTML = cloud
        greenCloud = true
    }
})

