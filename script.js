let counts = setInterval(updated);
let upto = 0;
function updated() {
    let count = document.getElementById("counter");
    count.innerHTML = ++upto;
    if (upto === 50000) {
        clearInterval(counts);
    }
}