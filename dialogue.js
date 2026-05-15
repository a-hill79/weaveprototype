var rpgText = {
    one : "in this story you will use the woven rows to record your actions in an adventure. <p><button onclick='rpgStory(1)'>next</button></p>",
    two : "you find yourself in a mysterious maze. what do you do? <p><button onclick='rpgStory(4);createPattern(1)'>go forward</button><button onclick='rpgStory(2);createPattern(2)'>go left</button><button onclick='rpgStory(2);createPattern(3)'>go right</button><button onclick='rpgStory(3);createPattern(4)'>attack</button></p>",
    three : "there's a wall here! <p><button onclick='rpgStory(5)'>next</button></p>",
    four : "there's nothing to attack! <p><button onclick='rpgStory(5)'>next</button></p>",
    five : "you continue on... <p><button onclick='rpgStory(6)'>next</button></p>",
    six : "what do you do? <p><button onclick='rpgStory(4);createPattern(1)'>go forward</button><button onclick='rpgStory(2);createPattern(2)'>go left</button><button onclick='rpgStory(2);createPattern(3)'>go right</button><button onclick='rpgStory(3);createPattern(4)'>attack</button></p>",
    seven : "you come to a fork in the path. what do you do? <p><button onclick='rpgStory(2);createPattern(1)'>go forward</button><button onclick='rpgStory(7);createPattern(2)'>go left</button><button onclick='rpgStory(8);createPattern(3)'>go right</button><button onclick='rpgStory(3);createPattern(4)'>attack</button></p>",
    eight: "a monster appeared! what do you do? <p><button onclick='rpgStory(11);createPattern(1)'>go forward</button><button onclick='rpgStory(11);createPattern(2)'>go left</button><button onclick='rpgStory(11);createPattern(3)'>go right</button><button onclick='rpgStory(9);createPattern(4)'>attack</button></p>",
    nine : "you attacked! the monster died. <p><button onclick='rpgStory(10)'>next</button></p>",
    ten : "it's a dead end...<p><button onclick='rpgStory(6)'>next</button></p>",
    eleven : "your sample is finished.",
    twelve : "can't run away! <p><button onclick='rpgStory(8)'>next</button></p>",
};

var medText = {
    one : "in this story you will use the woven rows to record your reflections. <p><button onclick='medStory(1)'>next</button></p>",
    two : "picture something in your mind. <p><button onclick='medStory(2)'>next</button></p>",
    three : "was the thing you pictured a: <p><button onclick='medStory(3);createPattern(1)'>person</button></p> <p><button onclick='medStory(3);createPattern(2)'>object</button></p> <p><button onclick='medStory(3);createPattern(3)'>place</button></p> <p><button onclick='medStory(3);createPattern(4)'>living thing</button></p>",
    four : "very well. <p><button onclick='medStory(4)'>next</button></p>",
    five : "what sort of feelings do you have about your image?: <p><button onclick='medStory(5);createPattern(1)'>happy</button></p> <p><button onclick='medStory(5);createPattern(2)'>sad</button></p> <p><button onclick='medStory(5);createPattern(3)'>angry</button></p> <p><button onclick='medStory(5);createPattern(4)'>apathetic</button></p>",
    six : "very well. <p><button onclick='medStory(6)'>next</button></p>",
    seven : "and from what point in time is you image from? <p><button onclick='medStory(7);createPattern(1)'>the past</button></p> <p><button onclick='medStory(7);createPattern(2)'>the present</button></p> <p><button onclick='medStory(7);createPattern(3)'>the future</button></p> <p><button onclick='medStory(7);createPattern(4)'>outside time</button></p>",
    eight : "very well. <p><button onclick='medStory(8)'>next</button></p>",
    nine : "and finally, what would you change about your image? <p><button onclick='medStory(9);createPattern(1)'>its appearance</button></p> <p><button onclick='medStory(9);createPattern(2)'>its behavior</button></p> <p><button onclick='medStory(9);createPattern(3)'>its purpose</button></p> <p><button onclick='medStory(9);createPattern(4)'>nothing</button></p>",
    ten : "your sample is finished."
};

var expText = {
    a : "this is an experiment combining pattern with color; i.e. using two axes of data. <p><button onclick='experiment(1)'>next</button></p>",
    b : 'the first part of this experiment will test a "movement" action. <p><button onclick="experiment(2);createPattern(2)">next</button></p>',
    c : "because this is a movement turn, we will use this pattern (arbitrary decision for testing purposes).<p><button onclick='experiment(3)'>next</button></p>",
    d : "now we will fill in details about this turn using color.<p><button onclick='experiment(4)'>next</button></p>",
    e : "the bottom row holds info about the directon. <p>which way will you move?</p><p><button onclick='color(1,1);experiment(5)'>forwards</button> <button onclick='color(1,2);experiment(5)'>left</button> <button onclick='color(1,3);experiment(5)'>right</button> <button onclick='color(1,4);experiment(5)'>backwards</button></p>",
    f : "the next row records any action you take. <p><button onclick='color(2,1);experiment(6)'>do nothing</button> <button onclick='color(2,2);experiment(6)'>investigate</button> <button onclick='color(2,4);experiment(6)'>special action</button></p>",
    g : "the next row records the outcome of the action. <p><button onclick='color(3,3);experiment(7)'>success</button> <button onclick='color(3,1);experiment(7)'>failure</button>",
    h : "and the last row records any hp loss at the end of the turn. <p><button onclick='color(4,1);experiment(8)'>no damage</button> <button onclick='color(4,2);experiment(8)'>trap damage</button> <button onclick='color(4,3);experiment(8)'>status damage</button> <button onclick='color(4,4);experiment(8)'>dead</button></p>",
    i : "the second part of this expermient will test using color to hold info in binary. <p><button onclick='experiment(9);createPattern(3)'>next</button></p>",
    j : "let's create a new pattern. let's say it represents... collecting coins. <p><button onclick='experiment(10)'>next</button></p>",
    k : "now let's see how many coins you picked up. <p><button onclick='experiment(11);binary(1)'>1</button> <button onclick='experiment(11);binary(3)'>3</button> <button onclick='experiment(11);binary(5)'>5</button> <button onclick='experiment(11);binary(9)'>9</button></p>",
    l : "color A represents a 0, and color B represents a 1, creating a number in binary. <p><button onclick='experiment(12);createPattern(3)'>next</button></p>",
    m : "pick up some more coins. <p><button onclick='experiment(13);binary(1)'>1</button> <button onclick='experiment(13);binary(3)'>3</button> <button onclick='experiment(13);binary(5)'>5</button> <button onclick='experiment(13);binary(9)'>9</button></p>",
    n : "this experiment is now finished.",
};