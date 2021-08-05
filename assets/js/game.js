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
    
    //repeat and excute as long as the enemy-robot is alive
    while (enemyHealth > 0 && playerHealth > 0) {
        //check to see if player wants to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
        //check reponse to see if they its valid or not.
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //if yes, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight. Goodbye!");
                playerMoney = playerMoney - 2;
                console.log(playerMoney)
                break;
            }
            //if no, ask question again by running fight() again
            else {
                fight();
            }
        }
        else if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
        
            // check enemy's health
            if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney = playerMoney + 10;
            break;
            } 
            else {
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
            break;
            } 
            else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }  
        else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
};

// function to start a new game
var startGame = function() {
    //reset the player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {

            // Alert players that they are starting the round
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            //reset robots health
            enemyHealth = 50;
            
            //call fight function with enemy-robot
            fight(pickedEnemyName);
            //if we're not on the last enemy in the array
            if (i < enemyNames.length - 1 && playerHealth > 0) {
                //ask player if they want to visit the shop
                var storeConfirm = confirm("The fight is over, visit the store before the next fight?");
                //if yes, take them to store
                if (storeConfirm) {
                    shop();
                }
            }
        }
        else {
            window.alert("Game Over!");
            break;
        }  
    }
    endGame();
};

var endGame = function() {
    // if the player is still alive
    if (playerHealth > 0) {
        alert ( "Great job, you've survied the game. You now have a score of " + playerMoney + ".")
        //check if player would like to play again.
        var playAgain = confirm("Would you like to play again?");
        if (playAgain === true) {
            //restart game
            startGame();
        }
        else {
            alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
    }
    else {
        alert("You've lost your robot in battle.")
        //check if player would like to play again.
        var playAgain = confirm("Would you like to play again?");
        if (playAgain === true) {
            //restart game
            startGame();
        }
        else {
            alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
    }
};

//create a player store function
var shop = function() {
    console.log("entered the shop");
};

// start the game when the page loads
startGame();
