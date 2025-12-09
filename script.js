const clickSFX = new Audio("Assets/SFX/Click.wav");
clickSFX.volume = 0.2;
const buySFX = new Audio("Assets/SFX/Purchase.wav");
buySFX.volume = 0.15;

clickSFX.preload = "auto";
buySFX.preload = "auto";

let clicks = document.querySelector('.click-count')
let parsedClicks = parseFloat(clicks.innerHTML)

let leekCost = document.querySelector('.leek-cost')
let parsedleekCost = parseFloat(leekCost.innerHTML)
let leekLevel = document.querySelector('.leek-level')
let leekIncrease = document.querySelector('.leek-increase')
let parsedleekIncrease = parseFloat(leekIncrease.innerHTML)

let mikublessingCost = document.querySelector('.mikublessing-cost')
let parsedmikublessingCost = parseFloat(mikublessingCost.innerHTML)
let mikublessingLevel = document.querySelector('.mikublessing-level')
let mikublessingIncrease = document.querySelector('.mikublessing-increase')
let parsedmikublessingIncrease = parseFloat(mikublessingIncrease.innerHTML)

let tetobaguetteCost = document.querySelector('.tetobaguette-cost')
let parsedtetobaguetteCost = parseFloat(tetobaguetteCost.innerHTML)
let tetobaguetteLevel = document.querySelector('.tetobaguette-level')
let tetobaguetteIncrease = document.querySelector('.tetobaguette-increase')
let parsedtetobaguetteIncrease = parseFloat(tetobaguetteIncrease.innerHTML)

let tetoblessingCost = document.querySelector('.tetoblessing-cost')
let parsedtetoblessingCost = parseFloat(tetoblessingCost.innerHTML)
let tetoblessingLevel = document.querySelector('.tetoblessing-level')
let tetoblessingIncrease = document.querySelector('.tetoblessing-increase')
let parsedtetoblessingIncrease = parseFloat(tetoblessingIncrease.innerHTML)

let neruphoneCost = document.querySelector('.neruphone-cost')
let parsedneruphoneCost = parseFloat(neruphoneCost.innerHTML)
let neruphoneLevel = document.querySelector('.neruphone-level')
let neruphoneIncrease = document.querySelector('.neruphone-increase')
let parsedneruphoneIncrease = parseFloat(neruphoneIncrease.innerHTML)

let nerublessingCost = document.querySelector('.nerublessing-cost')
let parsednerublessingCost = parseFloat(nerublessingCost.innerHTML)
let nerublessingLevel = document.querySelector('.nerublessing-level')
let nerublessingIncrease = document.querySelector('.nerublessing-increase')
let parsednerublessingIncrease = parseFloat(nerublessingIncrease.innerHTML)

let goldenleekCost = document.querySelector('.goldenleek-cost')
let parsedgoldenleekCost = parseFloat(goldenleekCost.innerHTML)
let goldenleekLevel = document.querySelector('.goldenleek-level')
let goldenleekIncrease = document.querySelector('.goldenleek-increase')
let parsedgoldenleekIncrease = parseFloat(goldenleekIncrease.innerHTML)

let rpcText = document.getElementById("rpc-text")
let rpsText = document.getElementById("rps-text")

let rpc = 1;
let rps = 0;

const bgm = document.getElementById('bgm');
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
bgm.volume = 0.2;

startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    bgm.currentTime = 0;
    bgm.play().catch(err => {
        console.log('Audio play blocked:', err);
    });
});

const creditsBtn = document.getElementById('credits-btn');
const creditsOverlay = document.getElementById('credits-overlay');

let creditsOpen = false;

creditsBtn.addEventListener('click', () => {
    creditsOpen = !creditsOpen;

    if (creditsOpen) {
        creditsOverlay.classList.add('visible');
    } else {
        creditsOverlay.classList.remove('visible');
    }
});

creditsOverlay.addEventListener('click', (e) => {
    if (e.target === creditsOverlay) {
        creditsOpen = false;
        creditsOverlay.classList.remove('visible');
    }
});

function incrementClick() {
    clickSFX.currentTime = 0;
    clickSFX.play();
    clicks.innerHTML = Math.round(parsedClicks += rpc);
}

function buyLeek () {
    if (parsedClicks >= parsedleekCost) {

    buySFX.currentTime = 0;
    buySFX.play();

    clicks.innerHTML = Math.round(parsedClicks -= parsedleekCost)

    leekLevel.innerHTML ++

    parsedleekIncrease = parseFloat((parsedleekIncrease * 1.05).toFixed(2))
    leekIncrease.innerHTML = parsedleekIncrease
    rpc += parsedleekIncrease

    parsedleekCost *= 1.15
    leekCost.innerHTML = Math.round(parsedleekCost) }
}

function buyMikuBlessing () {
    if (parsedClicks >= parsedmikublessingCost) {

    buySFX.currentTime = 0;
    buySFX.play();

    clicks.innerHTML = Math.round(parsedClicks -= parsedmikublessingCost)

    mikublessingLevel.innerHTML ++

    parsedmikublessingIncrease = parseFloat((parsedmikublessingIncrease * 1.05).toFixed(2))
    mikublessingIncrease.innerHTML = parsedmikublessingIncrease
    rps += parsedmikublessingIncrease

    parsedmikublessingCost *= 1.15
    mikublessingCost.innerHTML = Math.round(parsedmikublessingCost) }
}

function buyTetoBaguette () {
    if (parsedClicks >= parsedtetobaguetteCost) {

    buySFX.currentTime = 0;
    buySFX.play();

    clicks.innerHTML = Math.round(parsedClicks -= parsedtetobaguetteCost)

    tetobaguetteLevel.innerHTML ++

    parsedtetobaguetteIncrease = parseFloat((parsedtetobaguetteIncrease * 1.05).toFixed(2))
    tetobaguetteIncrease.innerHTML = parsedtetobaguetteIncrease
    rpc += parsedtetobaguetteIncrease

    parsedtetobaguetteCost *= 1.15
    tetobaguetteCost.innerHTML = Math.round(parsedtetobaguetteCost) }
}

function buyTetoBlessing () {
    if (parsedClicks >= parsedtetoblessingCost) {

    buySFX.currentTime = 0;
    buySFX.play();

    clicks.innerHTML = Math.round(parsedClicks -= parsedtetoblessingCost)

    tetoblessingLevel.innerHTML ++

    parsedtetoblessingIncrease = parseFloat((parsedtetoblessingIncrease * 1.05).toFixed(2))
    tetoblessingIncrease.innerHTML = parsedtetoblessingIncrease
    rps += parsedtetoblessingIncrease

    parsedtetoblessingCost *= 1.15
    tetoblessingCost.innerHTML = Math.round(parsedtetoblessingCost) }
}

function buyNeruPhone () {
    if (parsedClicks >= parsedneruphoneCost) {

    buySFX.currentTime = 0;
    buySFX.play();

    clicks.innerHTML = Math.round(parsedClicks -= parsedneruphoneCost)

    neruphoneLevel.innerHTML ++

    parsedneruphoneIncrease = parseFloat((parsedneruphoneIncrease * 1.05).toFixed(2))
    neruphoneIncrease.innerHTML = parsedneruphoneIncrease
    rpc += parsedneruphoneIncrease

    parsedneruphoneCost *= 1.15
    neruphoneCost.innerHTML = Math.round(parsedneruphoneCost) }
}

function buyNeruBlessing () {
    if (parsedClicks >= parsednerublessingCost) {

    buySFX.currentTime = 0;
    buySFX.play();

    clicks.innerHTML = Math.round(parsedClicks -= parsednerublessingCost)

    nerublessingLevel.innerHTML ++

    parsednerublessingIncrease = parseFloat((parsednerublessingIncrease * 1.05).toFixed(2))
    nerublessingIncrease.innerHTML = parsednerublessingIncrease
    rps += parsednerublessingIncrease

    parsednerublessingCost *= 1.15
    nerublessingCost.innerHTML = Math.round(parsednerublessingCost) }
}

function buyGoldenLeek () {
    if (parsedClicks >= parsedgoldenleekCost) {

    buySFX.currentTime = 0;
    buySFX.play();

    clicks.innerHTML = Math.round(parsedClicks -= parsedgoldenleekCost)

    goldenleekLevel.innerHTML ++

    parsedgoldenleekIncrease = parseFloat((parsedgoldenleekIncrease * 1.05).toFixed(2))
    goldenleekIncrease.innerHTML = parsedgoldenleekIncrease
    rpc += parsedgoldenleekIncrease

    parsedgoldenleekCost *= 1.15
    goldenleekCost.innerHTML = Math.round(parsedgoldenleekCost) }
}


setInterval (() =>{
    parsedClicks += rps / 10
    clicks.innerHTML = Math.round(parsedClicks)
    rpcText.innerHTML = Math.round(rpc)
    rpsText.innerHTML = Math.round(rps)
}, 100)