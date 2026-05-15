
let title = document.getElementById('title');
let txt = document.getElementById("dialogue");
let playField = document.getElementById("play");

function scenario(idee) {
    txt.innerHTML = '';
    playField.innerHTML = '';
    if (idee == 1) {
        rows = 8;
        title.innerHTML = "8 tile RPG";
        rpgStory();
    }
    else if (idee == 2) {
        rows = 4;
        title.innerHTML = "4 tile RPG";
        rpgStory();
    }
    else if (idee == 3) {
        rows = 8;
        title.innerHTML = "8 tile meditation";
        medStory();
    }
    else if (idee == 4) {
        rows = 4;
        title.innerHTML = "4 tile meditation";
        medStory();
    }
    else if (idee == 5) {
        rows = 8;
        title.innerHTML = "8 tile color experiment";
        experiment();
    }
    else if (idee == 6) {
        rows = 4;
        title.innerHTML = "4 tile color experiment";
        experiment();
    }
}

function medStory(prog) {
    if (prog == null) {
        txt.innerHTML = (medText.one);
    }
    else if (prog == 1) {
        txt.innerHTML = (medText.two);
    }
    else if (prog == 2) {
        txt.innerHTML = (medText.three);
    }
    else if (prog == 3) {
        txt.innerHTML = (medText.four);
    }
    else if (prog == 4) {
        txt.innerHTML = (medText.five);
    }
    else if (prog == 5) {
        txt.innerHTML = (medText.six);
    }
    else if (prog == 6) {
        txt.innerHTML = (medText.seven);
    }
    else if (prog == 7) {
        txt.innerHTML = (medText.eight);
    }
    else if (prog == 8) {
        txt.innerHTML = (medText.nine);
    }
    else if (prog == 9) {
        txt.innerHTML = (medText.ten);
    }
}

function rpgStory(prog) {
    if (prog == null) {
        txt.innerHTML = (rpgText.one);
    }
    else if (prog == 1) {
        txt.innerHTML = (rpgText.two);
    }
    else if (prog == 2) {
        txt.innerHTML = (rpgText.three);
    }
    else if (prog == 3) {
        txt.innerHTML = (rpgText.four);
    }
    else if (prog == 4) {
        txt.innerHTML = (rpgText.five);
    }
    else if (prog == 5) {
        txt.innerHTML = (rpgText.six);
    }
    else if (prog == 6) {
        txt.innerHTML = (rpgText.seven);
    }
    else if (prog == 7) {
        txt.innerHTML = (rpgText.ten);
    }
    else if (prog == 8) {
        txt.innerHTML = (rpgText.eight);
    }
    else if (prog == 9) {
        txt.innerHTML = (rpgText.nine);
    }
    else if (prog == 10) {
        txt.innerHTML = (rpgText.eleven);
    }
    else if (prog == 11) {
        txt.innerHTML = (rpgText.twelve);
    }
}

function experiment(prog) {
    if (prog == null) {
        txt.innerHTML = expText.a;
    }
    else if (prog == 1) {
        txt.innerHTML = expText.b;
    }
    else if (prog == 2) {
        txt.innerHTML = expText.c;
    }
    else if (prog == 3) {
        txt.innerHTML = expText.d;
    }
    else if (prog == 4) {
        txt.innerHTML = expText.e;
    }
    else if (prog == 5) {
        txt.innerHTML = expText.f;
    }
    else if (prog == 6) {
        txt.innerHTML = expText.g;
    }
    else if (prog == 7) {
        txt.innerHTML = expText.h;
    }
    else if (prog == 8) {
        txt.innerHTML = expText.i;
    }
    else if (prog == 9) {
        txt.innerHTML = expText.j;
    }
    else if (prog == 10) {
        txt.innerHTML = expText.k;
    }
    else if (prog == 11) {
        txt.innerHTML = expText.l;
    }
    else if (prog == 12) {
        txt.innerHTML = expText.m;
    }
    else if (prog == 13) {
        txt.innerHTML = expText.n;
    }
}