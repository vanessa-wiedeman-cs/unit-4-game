/*Javascript Header
Description: In this program we will select a fighter with 3 variables attached.

*/


var selectFighter = 0;
var fight = 0;

//fighter object set to zero will be set to 4 choices later
var fighter = new Object();


//4 RPG character choices for fight game
var cleric = new Object();
cleric.healthPoints = 100;
cleric.attackPower = 10;
cleric.counterAttackPower = 10;

var warrior = new Object();
warrior.healthPoints = 120;
warrior.attackPower = 10;
warrior.counterAttackPower = 10;

var necromancer = new Object();
necromancer.healthPoints = 130;
necromancer.attackPower = 10;
necromancer.counterAttackPower = 10;

var mage = new Object();
mage.healthPoints = 140;
mage.attackPower = 10;
mage.counterAttackPower = 10;

$(document).ready(function(){
    $("#select1").on("click", function(){
        $("#select1").hide();
        if(selectFighter == 0) {
         $("#pick1").show();
         selectFighter = 1;
         setFighter(1);
        }
        else{
            $("#fight1").show();
            this.fight = 1;
        }
    });
  });

  $(document).ready(function(){
    $("#select2").on("click", function(){
        $("#select2").hide();
        if(selectFighter == 0) {
         $("#pick2").show();
         selectFighter = 1;
         setFighter(2);
        }
        else{
            $("#fight2").show();
            this.fight = 2;
        }
    });
  });

  $(document).ready(function(){
    $("#select3").on("click", function(){
        $("#select3").hide();
        if(selectFighter == 0) {
         $("#pick3").show();
         selectFighter = 1;
         setFighter(3);
        }
        else{
            $("#fight3").show();
            this.fight = 3;
        }
    });
  });

  $(document).ready(function(){
    $("#select4").on("click", function(){
        $("#select4").hide();
        if(selectFighter == 0) {
         $("#pick4").show();
         selectFighter = 1;
         setFighter(4);
        }
        else{
            $("#fight4").show();
            this.fight = 4;
        }
    });
  });

/*
  setFighter takes in number 1-4 and selects which fighter you are playing as.
  Uses a switch for the number pick.

  Doesn't return anything but sets fighter Obj to one of our character Objs. 
*/
function setFighter(x){
    var pick = x;
    switch(pick){
        case 1:
            this.fighter = Object.assign({}, this.cleric);
        break;

        case 2:
            this.fighter = Object.assign({}, this.warrior);
            break;
        case 3:
            this.fighter = Object.assign({}, this.necromancer);
            break;
        case 4:
            this.fighter = Object.assign({}, this.mage);
            break;
    }
}

