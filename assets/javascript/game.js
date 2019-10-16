var selectFighter = false;
var fighter = new Object();

var cleric = new Object();
cleric.healthPoints = 100;
cleric.attackPower = 10;
cleric.counterAttackPower = 10;

var warrior = new Object();
warrior.healthPoints = 100;
warrior.attackPower = 10;
warrior.counterAttackPower = 10;

var necromancer = new Object();
necromancer.healthPoints = 100;
necromancer.attackPower = 10;
necromancer.counterAttackPower = 10;

var mage = new Object();
mage.healthPoints = 100;
mage.attackPower = 10;
mage.counterAttackPower = 10;

$(document).ready(function(){
    $("#select1").on("click", function(){
        $("#select1").hide();
        $("#fight1").show();

if(selectFighter == false)
{
    this.fighter.healthPoints = this.cleric.healthPoints;
    this.fighter.attackPower = this.cleric.attackPower;
    this.fighter.counterAttackPower = this.cleric.counterAttackPower;
}
    });
  });

$(document).ready(function(){
    $("#select2").on("click", function(){
        $("#select2").hide();
        $("#fight2").show();
    });
});

$(document).ready(function(){
    $("#select3").on("click", function(){
        $("#select3").hide();
        $("#fight3").show();
    });
});

$(document).ready(function(){
    $("#select4").on("click", function(){
        $("#select4").hide();
        $("#fight4").show();
    });
});