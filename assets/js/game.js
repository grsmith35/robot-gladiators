var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

//var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
var enemyNames = ["Amy Android", "Robo Trumble", "Roborto"];


var fight = function(enemyName) {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    //repeat and excute as long as the enemy-robot is alive
    while (enemyHealth > 0) {
        //check to see if player wants to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
        //check reponse to see if they its valid or not.
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
        
            // check enemy's health
            if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }
        
            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );
        
            // check player's health
            if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
            }
            // if player choses to skip
            } 
        else if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //if yes, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight. Goodbye!");
                playerMoney = playerMoney - 2;
            }
            //if no, ask question again by running fight() again
            else {
                fight();
            }
        } 
        else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
  };

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    //reset robots health
    enemyHealth = 50;
    //call fight function with enemy-robot
    fight(pickedEnemyName);
}
