var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
setNumbers();

function setNumbers() {
    var boxes = document.getElementsByClassName("sTiles_text");
    for (i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = numbers[i];
    }
}


btnshuffle.onclick = shuffleNumbers;
btnsort.onclick = sortNumbers;

function shuffleNumbers() {
    for (var i = numbers.length - 1; i > 0; i--) {

        var j = Math.floor(Math.random() * (i + 1));

        var temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
    }

    setNumbers();
}


function sortNumbers() {
    numbers.sort(function (a, b) { return a - b });
    setNumbers();
}