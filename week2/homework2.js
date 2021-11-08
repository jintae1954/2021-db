const jsTitle = document.querySelector("span");
const jsRange = document.getElementById("js-range");
const jsGuess = document.getElementById("js-guess");
const jsResult = document.getElementById("js-result");
var u;
var m;
var max;

function machine(upper) {
    return Math.floor(Math.random() * (upper));
}

function gameResult(u,m){
    jsResult.innerHTML = `You choose ${u}, 
    the machine choose ${m}.`;

    if (u > m ) {
        jsResult.innerHTML += `<br><b>You win!</b>`;
    } else {
        jsResult.innerHTML += `<br><b>You Lost!</b>`;
    }
}

jsRange.oninput = function (event) {
    event.preventDefault();
    jsTitle.innerHTML = this.value;

    max = this.value;
    console.log(`max is:`,max);
    m = machine(max);
    console.log(`machine is: `,m);
}

jsGuess.onsubmit = function (event) {
    event.preventDefault();

    u = jsGuess.elements[0].value;
    console.log(u);
    gameResult(u,m);
}