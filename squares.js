let zIndexCounter = 1;

window.onload = function () {
    //onload already updated from the previous steps/commits
    var add = document.getElementById("add");
    add.onclick = addSquare;

    var buttonColor = document.getElementById("colors");
    buttonColor.onclick = changeColors;

    var squareCount = parseInt(Math.random() * 21) + 30

    for (let i = 0; i < squareCount; i++) {
        addSquare();
    }
}

function changeColors() {
    var allSquares = document.getElementsByClassName("square");

    for (var i = 0; i < allSquares.length; i++) {
        allSquares[i].style.backgroundColor = getRandomColor();
    }
}


function getRandomColor() {
    var possibilities = "0123456789ABCDEF";
    var result = "#";
    for (var i = 0; i < 6; i++) {
        result += possibilities.charAt(parseInt(Math.random() * possibilities.length));
    }
    return result;
}

function addSquare() {
    var squarearea = document.getElementById("squarearea");
    var newSquare = document.createElement('div');
    newSquare.className = "square";
    newSquare.style.left = parseInt(Math.random() * 651) + "px";
    newSquare.style.top = parseInt(Math.random() * 251) + "px";
    newSquare.style.backgroundColor = getRandomColor();
    // adding onclick behavior
    newSquare.onclick = squareOnClick;
    squarearea.appendChild(newSquare);
}

function squareOnClick() {
    var clickedSquare = this;

    if (parseInt(clickedSquare.style.zIndex) === zIndexCounter) {
        // delete square second click
        var parent = document.getElementById("squarearea");
        parent.removeChild(clickedSquare);
    }

    else {
        // bring square to forefront first click
        zIndexCounter++;
        clickedSquare.style.zIndex = zIndexCounter;
    }
}