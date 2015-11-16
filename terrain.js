// creating the terrain constructor

function Tile (x, y){
    this.x = x;
    this.y = y;
    this.height = Math.floor((Math.random()*3)+1);
    this.type = function (){
        var options = Math.floor((Math.random()*3)+1);
        
        if (options === 1){
            return "grass";
        } else if (options === 2) {
            return "rocks";
        } else if (options === 3){
            return "water";
        }
    };
    this.condition = function (){
        var options = Math.floor((Math.random()*3)+1);
        
        if (options === 1){
            return "burning";
        } else if (options === 2) {
            return "normal";
        } else if (options === 3){
            return "frozen";
        }
    };
    this.freeze = function (){
        if (this.condition === "burning"){
            this.condition = "normal"
        } else if (this.condition === "normal"){
            this.condition = "frozen"
        } else if (this.condition === "frozen"){
            this.height = y + 1;
        }
    }
    this.burn = function (){
        if (this.condition === "frozen"){
            this.condition = "normal"
        } else if (this.condition === "normal"){
            this.condition = "burning"
        } else if (this.condition === "burning"){
            this.height = y - 1;
        }
    }
    
}

var map = new Tile [(20,20),(20,20),(20,20),(20,20),(20,20)];


for (var i = 0; i < map.length; i++){
    var icon = map[i].height;
    }

console.log(icon);