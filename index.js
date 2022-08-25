let hPoints = document.getElementById("homePoints")
let gPoints = document.getElementById("guestPoints")
let homeScore = 0
let guestScore = 0

function plusOneH() {
    homeScore += 1
    hPoints.textContent = homeScore
    
}

function plusTwoH() {
    homeScore += 2
    hPoints.textContent = homeScore
    
}

function plusThreeH() {
    homeScore += 3
    hPoints.textContent = homeScore
    
}

function plusOneG() {
    homeScore += 1
    gPoints.textContent = homeScore
    
}

function plusTwoG() {
    homeScore += 2
    gPoints.textContent = homeScore
    
}

function plusThreeG() {
    homeScore += 3
    gPoints.textContent = homeScore
    
}

function newGame() {
    homeScore = 0
    guestScore = 0
    gPoints.textContent = 0
    hPoints.textContent = 0
}