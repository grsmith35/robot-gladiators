var fightOrSkip = function() {
    //ask player if they'd like to fight or skip using fightOrSkip fucntion
    var promptFight = window.prompt("Would yo like to FIGHT of SKIP this battle?");
    promptFight = promptFight.toLocaleLowerCase();
    // enter conditional recursive function call here!
    if (promptFight === '' || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip;
    }
    //if player picks skip confim and then stop the loop
    if(promptFight === 'skip') {
        //confirm they want to skip
        var confirmSkip = window.confirm("Are you sure you would like to skip this battle?");
        //if yes, leave fight
        if(confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            //subtract money
            playerInfo.money = playerInfo.money - 10;
            return true;
        }
    }
    return false;
}

var fight = function(enemy) {
    var isPlayerTurn = true;
    // flip coin to see who attacks first.
    var coin = Math.random();
    if (coin > .5) {
        isPlayerTurn = false;
    }
    //repeat and excute as long as the enemy-robot is alive
    while (enemy.health > 0 && playerInfo.health > 0) {
        if(isPlayerTurn === true) {
            
        }
        
        //check to see if player wants to fight or skip
        if(fightOrSkip()) {
            break;
        }

        //generate random damage value based on players attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );
    
        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            playerInfo.money = playerInfo.money + 10;
            break;
        } 
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        //generate random damage based on enemy's attack power
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        // remove player's health by subtracting the amount set in the enemy Attack variable
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );
    
        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        } 
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }  
    }
};

// function to start a new game
var startGame = function() {
    //reset the player stats
    playerInfo.reset();
    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {

            // Alert players that they are starting the round
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            //reset robots health
            pickedEnemyObj.health = randomNumber(40, 60);
            
            //call fight function with enemy-robot
            fight(pickedEnemyObj);
            //if we're not on the last enemy in the array
            if (i < enemyInfo.length - 1 && playerInfo.health > 0) {
                //ask player if they want to visit the shop
                var storeConfirm = confirm("The fight is over, visit the store before the next fight?");
                //if yes, take them to store
                if (storeConfirm === true) {
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

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var endGame = function() {
    // if the player is still alive
    if (playerInfo.health > 0) {
        alert ( "Great job, you've survied the game. You now have a score of " + playerInfo.money + ".")
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
    var shopOptionPrompt = prompt(
        "Would you like to REFILL(1) your health, UPGRADE(2) you attack, or LEAVE(3) the store?");
        // use switch to check user input
        switch (shopOptionPrompt) {
            case "1":
                playerInfo.refillHealth();
                break;
            case "2":
                playerInfo.upgradeAttack();
                break;
            case "3":
                alert("Leaving the store");
                break;
            default:
                alert("You did not pick a valid option. Try again.");
                //call shop again to force player to pick a valid option
                shop();
                break;
        }
};

var getPlayerName = function() {
    var name = "";
    while(name === "" || name === null){
        name = prompt("Please give your robot a valid name.");
    }
    console.log("Your robots name is " + name)
    return name;
}

var playerInfo = {
    //name: window.prompt("What is your robot's name?"),
    name : getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack - 10;
    },
    refillHealth: function() {
        if(this.money >= 7){
            alert("Refilling player's health by 20 for 7 dollars.")
            this.health += 20;
            this.money -= 7;
        }
        else {
            alert("You don't have enough money!")
        }
    },
    upgradeAttack: function() {
        if(this.money >= 7){
            alert("Upgrading player's attack by 6 for 7 dollars")
            this.attack += 6;
            this.money -= 7;
        }
        else {
            alert("You don't have enough money!")
        }
    }
};

// You can also log multiple values at once like this
console.log(playerInfo.name, playerInfo.attack, playerInfo.money);

//enemy's info
var enemyInfo = [
    {
        name:"Roborto",
        attack: randomNumber(10,14)
    },
    {
        name:"Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name:"Robo Trumble",
        attack: randomNumber(10,14)
    }
]

// start the game when the page loads
startGame();
