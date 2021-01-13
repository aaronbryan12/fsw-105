
    var readlineSync = require( 'readline-sync' );


    var name = readlineSync.question('Welcome to the Wild Adventures, what is your name? ');
    
    
    var enemies = [ 'White Walker ', 'White Orc', 'Wild Dragon' ];

var skyQuest = function() {
    var self = this;
    var enemy;
    var generateRandomEnemy = function() {
        var randomInt = Math.floor(Math.random() * ((enemies.length - 1) - 0 + 1)) + 0;
        enemy = enemies[randomInt];
        return enemy;
    };
    this.user = name;
    this.userIsActive = true;
    this.userHp = 85;
    this.enemyHp = 85;
    this.enemyIsActive = null;
    this.enemyCount = 1;
    this.userAction = function(){
        var action= readlineSync.question('What do you want to do?, enter "r" to run or "a" to attack; ').toLowerCase();
        var userAttackPower = Math.floor(Math.randam() * (50 - 25 + 1) + 25);
        switch(action){
            case 'r':
                self.userIsActive = false;
                console.log('You\'re a chicken for running away or not killing me ' + enemy + '\nThe Lord of Light has struck will again');
                setTimeout(function(){
                    console.log(':)');
                }, 2000);
                setTimeout(function(){
                    console.log(':|');
                }, 3000);
                setTimeout(function(){
                    console.log(':o');
                }, 4000);
                setTimeout(function(){
                    console.log(':(');
                }, 5000);
                setTimeout(function(){
                    console.log('A hungry Orc has eaten you!!!');
                }, 6000);
                break;
            case 'a':
                self.enemyHp -= userAttackPower;
                console.log('You just attacked ' + enemy + ' for ' + userAttackPower + 'attack power');
                break;
            default:
                console.log('Please enter a valid key');
            }        
    }


this.enemyAction = function() {
    if(self.userIsActive === true && self.enemyHp > 0) {
        var enemyAttackPower = Math.floor(Math.random() * (50 - 25 + 1) + 25);
        self.userHp -= enemyAttackPower;
        console.log(enemy + ' is attacking you ' + enemyAttackPower + 'attack power');
        if(self.userHp <= 0) {
            self.userIsActive = false;
            console.log(enemy + 'has killed' + self.user + 'Your soul now belongs to Lizard Bael.');
        }
    } else if (self.enemyHP <= 0) {
            self.enemyIsActive = false;
            self.enemyCount++;
            console.log(self.user + ' has killed ' + enemy);
        }
};
this.restoreEnemy = function() {
        self.enemyIsActive = true;
        self.enemyHp = 50;
};
this.processAttack = function() {
        if(self.enemyIsActive) {
                while (self.enemyHp > 0 && self.userIsActive === true) {
                         self.userAction();
                         self.enemyAction();
                }
        }
};


this.initialize = function() {
        self.enemyIsActive = true;
        readlineSync.keyIn('Press a key to walk: ');
        generateRandomEnemy();
        console.log ('Walking...');
        console.log('DANGER, ' + enemy + 'has appeared');
        self.processAttack();
        while(self.enemyIsActive === false && self.enemyCount <= enemies.length) {
            console.log('============================================================');
            readlineSync.keyIn('Press a key to walk:');
            generateRandomEnemy();
            console.log('Walking...');
            console.log('DANGER,  ' + enemy + ' has appeared');
            self.restoreEnemy();
            self.processAttack();
        }
        if (self.enemyIsActive === false) {
            console.log(self.user + 'YOU ARE KING OF SKY QUEST!');
        }
    };
    this.initialize();
};
skyQuest();