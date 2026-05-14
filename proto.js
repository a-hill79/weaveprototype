var rows;
var storyMode;
let isColor = false;

function story(story){
    if (story == 1) {
        document.getElementById("activeStory").innerHTML = "RPG"; 
        storyMode = story;
    }
    else if (story == 2) {
        document.getElementById("activeStory").innerHTML = "Meditation"; 
        storyMode = story;
    }
    else {
        document.getElementById("activeStory").innerHTML = "none"; 
        storyMode = story;
    }
}

function initialize(mode, isColor) {
    if (mode == 8 && isColor == false) {
       document.getElementById("title").innerHTML = "8 tile"; 
       document.getElementById("play").innerHTML = ""; 
       rows = mode;
    }
    else if (mode == 8  && isColor == true)  {
        document.getElementById("title").innerHTML = "8 tile with color"; 
        document.getElementById("play").innerHTML = "";
        rows = mode;
    }
    else if (mode == 4  && isColor == false)  {
        document.getElementById("title").innerHTML = "4 tile"; 
        document.getElementById("play").innerHTML = "";
        rows = mode;
    }
    else if (mode == 4  && isColor == true)  {
        document.getElementById("title").innerHTML = "4 tile with color"; 
        document.getElementById("play").innerHTML = "";
        rows = mode;
    }
    else {
        document.getElementById("title").innerHTML = "choose mode"; 
        document.getElementById("play").innerHTML = "";
        rows = mode;
    }
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
        img.src = '/img/4tile1.png';
        }
        else if (pattern == 2) {
            img.src = "/img/4tile2.png";
        }
        else if (pattern == 3) {
            img.src = "/img/4tile3.png";
        }
        else if ( pattern == 4) {
            img.src = "/img/4tile4.png";
        }
    }
    else if (rows == 8) {
        if (pattern == 1) {
        img.src = '/img/8tile1.png';
        }
        else if (pattern == 2) {
            img.src = "/img/8tile2.png";
        }
        else if (pattern == 3) {
            img.src = "/img/8tile3.png";
        }
        else if ( pattern == 4) {
            img.src = "/img/8tile4.png";
        }
    }
}

function scenario() {
    //dialogue handler
}