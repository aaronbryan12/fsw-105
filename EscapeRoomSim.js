var readlineSync = require ("readline-sync");

var name = readlineSync.question ( "Hello and welcome to the Escape Room!  What is your name? ");


readlineSync.keyInPause (`
Again, welcome the Escape Room, ${name},
you must find a way out of the Escape Room or meet certain death....
`);


readlineSync.keyInPause (`
In this room you will find a key hidden somewhere, this will unlock the door.
You will also notice a whole in the wall.
You must choose your action in the correct order to excape the room and survive.
`);


let IsAlive = true;
let IsDoorOpen = false;
let hasKey = false;


while ( IsAlive == true && IsDoorOpen == false){
    var chooseAction = readlineSync.keyIn (`
    Select a number to choose an action:
    1. Put your hand inside hole
    2. Find key
    3. Open door

    `, {limit:`$<1 - 3>`});


    if ( chooseAction == 1 ) {
        console.log (`
        wrong action, { $name }, you died. you LOSE.....
        `);
        IsAlive = false;
    } else if ( chooseAction == 2 && hasKey == false ) {
        console.log (`
        Congratulations.. you've found the key! 
        What would you like to do next?
        `);
        hasKey = true;
    } else if ( chooseAction == 2 && hasKey == true ) {
        console.log (`
        Use the key you have in you hand, to unlock the door if you want to escape.
        What next?
        `);
    } else if ( chooseAction == 3 && hasKey == false ) {
        console.log (`
        The door is locked now, where is the correct key? 
        What would you like to do next? 
        `);
    } else if ( chooseAction == 3 && hasKey == true ) {
        console.log (`
        You Win! You've found the key to unlock the door, safely escape avoid death!
        Ciao!
        `);
        IsDoorOpen = true;
    }
}