let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeCount = 0;
let guestCount = 0;

function add1ToHome() {
    homeCount += 1;
    homeScore.textContent = homeCount;
}

function add2ToHome() {
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function add3ToHome() {
    homeCount += 3;
    homeScore.textContent = homeCount;
}

function add1ToGuest() {
    guestCount += 1;
    guestScore.textContent = guestCount;
}

function add2ToGuest() {
    guestCount += 2;
    guestScore.textContent = guestCount;
}

function add3ToGuest() {
    guestCount += 3;
    guestScore.textContent = guestCount;
}

function reset() {
    guestCount = 0;
    homeCount = 0;
    guestScore.textContent = 0;
    homeScore.textContent = 0;
}