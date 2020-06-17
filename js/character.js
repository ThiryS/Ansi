//Use this script to generate your character
class Person {
    constructor(name, race, item) {
        this.name = name;
        this.race = race;
        this.item = item;
        this.currenthealth = 100;
        this.maxHealth = 100;
  
        this.min = 3;
        this.maxDamage = 20;
        this.maxHealing = 30;
        this.resistance = 1;
        this.boostDamage = 1;
        this.boostHeal = 1;
  
        this.heal = function () {  };
  
        this.damage = function () {

         };
  
        this.totalDamage = this.damage();
  
        this.displayChar = function () {
            return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
        };
        
    }
    
    
  }

  const sword = {item:"Sword", desc:"30% more damage"};
  const boots = {item:"Boots", desc:"30% chance to dodge an attack"};
  const staff = {item:"Staff", desc:"20% increase in healing"};
  const bow = {item:"Bow", desc:"30% chance to attack twice"};

  const humans = {item:"Humans", desc:"20% less damage taken", img:"src='../assets/fonts/image.ico"};
  const orcs = {item:"Orcs", desc:"40% more max health"};
  const elves = {item:"Elves", desc:"30% chance to deflect the attack back to the opponent. The attacker takes damage equal to 50% of the original hit. The elf takes no damage."};
  const vampires = {item:"Vampires", desc:"10% lifesteal from opponents current health at start of the vampire's turn."};