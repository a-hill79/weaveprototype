var rows = 0;

function reset() {
    document.getElementById("title").innerHTML = "select a mode"; 
    document.getElementById("play").innerHTML = ""; 
    document.getElementById("dialogue").innerHTML = ""; 
}

function freePlay() {
    document.getElementById("play").innerHTML = ""; 
    document.getElementById("title").innerHTML = "free play"; 
    let txt = document.getElementById("dialogue");
    txt.innerHTML = "freely place black and white patterns<p>8 tiles</p> <p><button onclick='rows = 8;createPattern(1)'>pattern 1</button> <button onclick='rows = 8;createPattern(2)'>pattern 2</button> <button onclick='rows = 8;createPattern(3)'>pattern 3</button> <button onclick='rows = 8;createPattern(4)'>pattern 4</button></p> 4 tiles<p><button onclick='rows = 4;createPattern(1)''>pattern 1</button> <button onclick='rows = 4;createPattern(2)'>pattern 2</button> <button onclick='rows = 4;createPattern(3)'>pattern 3</button> <button onclick='rows = 4;createPattern(4)'>pattern 4</button></p>";
}

function createPattern(pattern) {
    let img = document.createElement("img");
    let field = document.getElementById("play");
    
    let unit = document.createElement("div");
    unit.classList.add("pattern");
    unit.appendChild(img);
    
    for (let step = 0; step < rows; step++) {
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        unit.appendChild(newRow);
    }
    
    field.insertAdjacentElement('afterbegin', unit);
    
    if (rows == 4) {
        if (pattern == 1) {
        img.src = 'https://a-hill79.github.io/weaveprototype/img/4tile1.png';
        }
        else if (pattern == 2) {
            img.src = "https://a-hill79.github.io/weaveprototype/img/4tile2.png";
        }
        else if (pattern == 3) {
            img.src = "https://a-hill79.github.io/weaveprototype/img/4tile3.png";
        }
        else if ( pattern == 4) {
            img.src = "https://a-hill79.github.io/weaveprototype/img/4tile4.png";
        }
    }
    else if (rows == 8) {
        if (pattern == 1) {
            img.src = 'https://a-hill79.github.io/weaveprototype/img/8tile1.png';
        }
        else if (pattern == 2) {
            img.src = "https://a-hill79.github.io/weaveprototype/img/8tile2.png";
        }
        else if (pattern == 3) {
            img.src = "https://a-hill79.github.io/weaveprototype/img/8tile3.png";
        }
        else if ( pattern == 4) {
            img.src = "https://a-hill79.github.io/weaveprototype/img/8tile4.png";
        }
    }
}

function color(pos, col) {
    let first = document.querySelector(".pattern>div:nth-child(2)");
    let second = document.querySelector(".pattern>div:nth-child(3)");
    let third = document.querySelector(".pattern>div:nth-child(4)");
    let fourth = document.querySelector(".pattern>div:nth-child(5)");
    let fifth = document.querySelector(".pattern>div:nth-child(6)");
    let sixth = document.querySelector(".pattern>div:nth-child(7)");
    let seventh = document.querySelector(".pattern>div:nth-child(8)");
    let eighth = document.querySelector(".pattern>div:nth-child(9)");
    
    if (rows == 8) {
        if (pos == 1) {
            if (col == 1) {
                seventh.classList.add("red");
                eighth.classList.add("red");
            }
            if (col == 2) {
                seventh.classList.add("yellow");
                eighth.classList.add("yellow");
            }
            if (col == 3) {
                seventh.classList.add("blue");
                eighth.classList.add("blue");
            }
            if (col == 4) {
                seventh.classList.add("green");
                eighth.classList.add("green");
            }
        }
        if (pos == 2) {
            if (col == 1) {
                fifth.classList.add("red");
                sixth.classList.add("red");
            }
            if (col == 2) {
                fifth.classList.add("yellow");
                sixth.classList.add("yellow");
            }
            if (col == 3) {
                fifth.classList.add("blue");
                sixth.classList.add("blue");
            }
            if (col == 4) {
                fifth.classList.add("green");
                sixth.classList.add("green");
            }
        }
        if (pos == 3) {
            if (col == 1) {
                third.classList.add("red");
                fourth.classList.add("red");
            }
            if (col == 2) {
                third.classList.add("yellow");
                fourth.classList.add("yellow");
            }
            if (col == 3) {
                third.classList.add("blue");
                fourth.classList.add("blue");
            }
            if (col == 4) {
                third.classList.add("green");
                fourth.classList.add("green");
            }
        }
        if (pos == 4) {
            if (col == 1) {
                first.classList.add("red");
                second.classList.add("red");
            }
            if (col == 2) {
                first.classList.add("yellow");
                second.classList.add("yellow");
            }
            if (col == 3) {
                first.classList.add("blue");
                second.classList.add("blue");
            }
            if (col == 4) {
                first.classList.add("green");
                second.classList.add("green");
            }
        }
    }
    
    if (rows == 4) {
        if (pos == 1) {
            if (col == 1) {
                fourth.classList.add("red");
            }
            if (col == 2) {
                fourth.classList.add("yellow");
            }
            if (col == 3) {
                fourth.classList.add("blue");
            }
            if (col == 4) {
                fourth.classList.add("green");
            }
        }
        if (pos == 2) {
            if (col == 1) {
                third.classList.add("red");
            }
            if (col == 2) {
                third.classList.add("yellow");
            }
            if (col == 3) {
                third.classList.add("blue");
            }
            if (col == 4) {
                third.classList.add("green");
            }
        }
        if (pos == 3) {
            if (col == 1) {
                second.classList.add("red");
            }
            if (col == 2) {
                second.classList.add("yellow");
            }
            if (col == 3) {
                second.classList.add("blue");
            }
            if (col == 4) {
                second.classList.add("green");
            }
        }
        if (pos == 4) {
            if (col == 1) {
                first.classList.add("red");
            }
            if (col == 2) {
                first.classList.add("yellow");
            }
            if (col == 3) {
                first.classList.add("blue");
            }
            if (col == 4) {
                first.classList.add("green");
            }
        }
    }
}

function binary(num) {
    let first = document.querySelector(".pattern>div:nth-child(2)");
    let second = document.querySelector(".pattern>div:nth-child(3)");
    let third = document.querySelector(".pattern>div:nth-child(4)");
    let fourth = document.querySelector(".pattern>div:nth-child(5)");
    let fifth = document.querySelector(".pattern>div:nth-child(6)");
    let sixth = document.querySelector(".pattern>div:nth-child(7)");
    let seventh = document.querySelector(".pattern>div:nth-child(8)");
    let eighth = document.querySelector(".pattern>div:nth-child(9)");
    
    if (rows == 8) {
        if (num == 1) {
            first.classList.add("blue");
            second.classList.add("blue");
            third.classList.add("yellow");
            fourth.classList.add("yellow");
            fifth.classList.add("yellow");
            sixth.classList.add("yellow");
            seventh.classList.add("yellow");
            eighth.classList.add("yellow");
        }
        if (num == 3) {
            first.classList.add("blue");
            second.classList.add("blue");
            third.classList.add("blue");
            fourth.classList.add("blue");
            fifth.classList.add("yellow");
            sixth.classList.add("yellow");
            seventh.classList.add("yellow");
            eighth.classList.add("yellow");
        }
        if (num == 5) {
            first.classList.add("blue");
            second.classList.add("blue");
            third.classList.add("yellow");
            fourth.classList.add("yellow");
            fifth.classList.add("blue");
            sixth.classList.add("blue");
            seventh.classList.add("yellow");
            eighth.classList.add("yellow");
        }
        if (num == 9) {
            first.classList.add("blue");
            second.classList.add("blue");
            third.classList.add("yellow");
            fourth.classList.add("yellow");
            fifth.classList.add("yellow");
            sixth.classList.add("yellow");
            seventh.classList.add("blue");
            eighth.classList.add("blue");
        }
    }
    
    if (rows == 4) {
        if (num == 1) {
            first.classList.add("blue");
            second.classList.add("yellow");
            third.classList.add("yellow");
            fourth.classList.add("yellow");
        }
        if (num == 3) {
            first.classList.add("blue");
            second.classList.add("blue");
            third.classList.add("yellow");
            fourth.classList.add("yellow");
        }
        if (num == 5) {
            first.classList.add("blue");
            second.classList.add("yellow");
            third.classList.add("blue");
            fourth.classList.add("yellow");
        }
        if (num == 9) {
            first.classList.add("blue");
            second.classList.add("yellow");
            third.classList.add("yellow");
            fourth.classList.add("blue");
        }
    }
}
