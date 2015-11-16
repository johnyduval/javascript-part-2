// here's my comment line inside the warriors.js file

function Warrior (name, gender){
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sweord";
    this.power = Math.floor((Math.random()*100)+1);
    this.fight = function (){
        console.log (this.name + " rushes to the arena with " + this.weapon);
    };
    this.faceoff = function (opponent){
        if (opponent.power > this.power){
            console.log('Opponent defeats you!')
        } else {
            console.log("You win this time!")
        }
    };
}

var You = new Warrior ("You", "M");
var Opponent = new Warrior ("Opponent", "M");

You.faceoff(Opponent);