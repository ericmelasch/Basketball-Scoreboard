let countHomeNumber = document.getElementById("count-home")
let countGuestNumber = document.getElementById("count-guest")

let countHome = 0
let countGuest = 0

function btnHome1() {
    countHome += 1
    countHomeNumber.textContent = countHome
    colorNumber()
}

function btnHome2() {
    countHome += 2
    countHomeNumber.textContent = countHome
    colorNumber()
}

function btnHome3() {
    countHome += 3
    countHomeNumber.textContent = countHome
    colorNumber()
}

function btnGuest1() {
    countGuest += 1
    countGuestNumber.textContent = countGuest
    colorNumber()
}

function btnGuest2() {
    countGuest += 2
    countGuestNumber.textContent= countGuest
    colorNumber()
}

function btnGuest3() {
    countGuest += 3
    countGuestNumber.textContent = countGuest
    colorNumber()
}

function resetcounter() {
    countHome = 0
    countGuest = 0
    countGuestNumber.textContent = countGuest
    countHomeNumber.textContent = countHome
    countGuestNumber.style.color = "#DF2935";
    countHomeNumber.style.color = "#DF2935";
}


function colorNumber() {
    if (countHome > countGuest) {
        countHomeNumber.style.color = "#44CF6C";
        countGuestNumber.style.color = "#DF2935";
    } else if (countHome < countGuest) {
        countGuestNumber.style.color = "#44CF6C";
        countHomeNumber.style.color = "#DF2935";
    } else {
        countGuestNumber.style.color = "#DF2935";
        countHomeNumber.style.color = "#DF2935";
    }
}