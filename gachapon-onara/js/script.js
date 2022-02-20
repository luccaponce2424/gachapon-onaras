var p = 0;

function clicker() {
    updateDisplay(++p);
}

function updateDisplay(val) {
    document.getElementById("pitogemas").innerHTML = val;
}

function gachapon() {
    updateDisplay(p= p-60);
}
