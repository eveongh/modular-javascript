/**** INHERITANCE BASICS ****/

/** EXAMPLE 1 - THE BASE PARENT CLASS **/

// DEMO: Define a generalized BaseCharacter class that has some properties
// and a method all characters should have in common.

constructor(characterName, initialHealth) {
    this.name = characterName;
    this.health = initialHealth; 
}

takeDamange(amount) {
    this.health -= amount; 
    return  `${this.name} takes ${amount} damage! Health: ${this.health}`;
}

/** EXAMPLE 2 - THE EXTENDED CHILD CLASS **/

// DEMO: Create a specific Wizard class that inherits from BaseCharacter
// but also has a magicPoints property and a castSpell() method.
class Wizard extends BaseCharacter {
    constructor(characterName, initialHealth, startingMagic){
        super(characterName, initialHealth);
        this.magicPoints = startingMagic; 
    }

    castSpell(){
        this.magicPoints -= 10; 
        return `${this.name} casts a spell! Magic remaning: ${this.magicPoints}`;
    }
}

// DEMO: Instantiate a Wizard character
const merlin = new Wizard("Merlin", 80, 50); 

// DEMO: Call both methods available for Wizard characters
console.log(merlin.takeDamage(15)); 
console.log(merlin.castSpell()); 

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
