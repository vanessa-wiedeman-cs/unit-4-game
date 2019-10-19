/*Javascript Header
Description: In this program we will select a fighter with 3 variables attached.

*/

var selectFighter = 0;
var roundNum = 1;

//fighter object set to zero will be set to 4 choices later
var fighter = new Object();
//enemy object set to zero will be remaining 3 choices later
var enemy = new Object();

//4 RPG character choices for fight game
var cleric = new Object();
cleric.healthPoints = 100;
cleric.attackPower = 25;
cleric.counterAttackPower = 10;
cleric.fight = 1;

var warrior = new Object();
warrior.healthPoints = 300;
warrior.attackPower = 15;
warrior.counterAttackPower = 20;
warrior.fight = 2;

var necromancer = new Object();
necromancer.healthPoints = 150;
necromancer.attackPower = 25;
necromancer.counterAttackPower = 10;
necromancer.fight = 3;

var mage = new Object();
mage.healthPoints = 140;
mage.attackPower = 30;
mage.counterAttackPower = 10;
mage.fight = 4;

/*4 document ready functions for clicking each photo.
If else used to pick fighter or fighting. 
Use a function call for setFighter() to set fighter
and a this.fight variable to set which obj we are fighting.
*/

$(document).ready(function() {
    $("#select1").on("click", function() {
        $("#select1").hide();
        if (selectFighter == 0) {
            $("#pick1").show();
            selectFighter = 1;
            setFighter(1);
            document.getElementById("prompt").innerHTML = "Pick who to Duel!";
        } else {
            $("#fight1").show();
            setEnemy(1);
            document.getElementById("prompt").innerHTML = "Fight!";
        }
    });
});

$(document).ready(function() {
    $("#select2").on("click", function() {
        $("#select2").hide();
        if (selectFighter == 0) {
            $("#pick2").show();
            selectFighter = 2;
            setFighter(2);
            document.getElementById("prompt").innerHTML = "Pick who to Duel!";
        } else {
            $("#fight2").show();
            setEnemy(2);
            document.getElementById("prompt").innerHTML = "Fight!";
        }
    });
});

$(document).ready(function() {
    $("#select3").on("click", function() {
        $("#select3").hide();

        if (selectFighter == 0) {
            $("#pick3").show();
            selectFighter = 3;
            setFighter(3);
            document.getElementById("prompt").innerHTML = "Pick who to Duel!";
        } else {
            $("#fight3").show();
            setEnemy(3);
            document.getElementById("prompt").innerHTML = "Fight!";
        }
    });
});

$(document).ready(function() {
    $("#select4").on("click", function() {
        $("#select4").hide();
        if (selectFighter == 0) {
            $("#pick4").show();
            selectFighter = 4;
            setFighter(4);
            document.getElementById("prompt").innerHTML = "Pick who to Duel!";
        } else {
            $("#fight4").show();
            setEnemy(4);
            document.getElementById("prompt").innerHTML = "Fight!";
        }
    });
});

//document.ready function for clicking the attack button

$(document).ready(function() {
    $("#attack").on("click", function() {
        attack();
    });
});

/*
setFighter takes in number 1-4 and selects which fighter you are playing as.
Uses a switch for the number pick.

Doesn't return anything but sets fighter Obj to one of our character Objs. 
Also displays intial health and attack
*/
function setFighter(x) {
    var pick = x;
    switch (pick) {
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

    document.getElementById("health").innerHTML =
        "Health: " + this.fighter.healthPoints;
    document.getElementById("power").innerHTML =
        "Attack: " + this.fighter.attackPower;
}
/*
setEnemy takes in number 1-4 and selects which fighter you are battling.
Uses a switch for the number pick.

Doesn't return anything but sets enemy Obj to one of our character Objs. 
Also displays intial health and attack
*/
function setEnemy(x) {
    var pick = x;
    switch (pick) {
        case 1:
            this.enemy = Object.assign({}, this.cleric);
            break;

        case 2:
            this.enemy = Object.assign({}, this.warrior);
            break;
        case 3:
            this.enemy = Object.assign({}, this.necromancer);
            break;
        case 4:
            this.enemy = Object.assign({}, this.mage);
            break;
    }

    document.getElementById("eHealth").innerHTML =
        "Health: " + this.enemy.healthPoints;
    document.getElementById("eAttack").innerHTML =
        "Attack: " + this.enemy.attackPower;
}

/*In the fight function the fighter and enemy will battle in a series of rounds.
For every attack done a different algorithm will be applied to the fighters base attack (this.attackPower).
There is no healing. Every enemy will always use the same counter attack stat (this.counterAttackPower). 
*/
function attack() {
    if (this.enemy.fight != 0 && roundNum != 4 && this.fighter.healthPoints !=0) {
        this.fighter.healthPoints =
            this.fighter.healthPoints - this.enemy.counterAttackPower;
        document.getElementById("health").innerHTML =
            "Health: " + this.fighter.healthPoints;
        document.getElementById("power").innerHTML =
            "Attack: " + this.fighter.attackPower;

        this.enemy.healthPoints =
            this.enemy.healthPoints - this.fighter.attackPower;
        document.getElementById("eHealth").innerHTML =
            "Health: " + this.enemy.healthPoints;
        document.getElementById("eAttack").innerHTML =
            "Attack: " + this.enemy.attackPower;

        switch (this.selectFighter) {
            case 1:
                this.fighter.attackPower += this.enemy.counterAttackPower;
                this.fighter.attackPower += this.enemy.counterAttackPower
                break;

            case 2:
                this.fighter.attackPower += this.fighter.counterAttackPower;
                break;
            case 3:
                if (this.fighter.healthPoints > 75) {
                    this.fighter.attackPower += this.fighter.counterAttackPower;
                } else {
                    this.fighter.attackPower += (this.fighter.counterAttackPower * 3 );
                }
                break;
            case 4:
                this.fighter.attackPower += Math.floor(Math.random() * 20) + 10;
                break;
        }

        if (this.enemy.healthPoints <= 0) {
            switch (this.enemy.fight) {
                case 1:
                    $("#fight1").hide();
                    break;
                case 2:
                    $("#fight2").hide();
                    break;
                case 3:
                    $("#fight3").hide();
                    break;
                case 4:
                    $("#fight4").hide();
                    break;
            }
            roundNum++;
            this.enemy.fight = 0;
            document.getElementById("round").innerHTML =
                "Round " + roundNum + "!";
            document.getElementById("prompt").innerHTML = "Pick who to Duel!";
            document.getElementById("eHealth").innerHTML = "Health: ";
            document.getElementById("eAttack").innerHTML = "Attack: ";
        }

        if (this.fighter.healthPoints <= 0) {
            document.getElementById("prompt").innerHTML = "You died in battle!";
        }
    }

    if (roundNum == 4) {
        document.getElementById("prompt").innerHTML = "You win!";
        document.getElementById("round").innerHTML = "Thanks!";
    }
}
