(function () {
  // to get the value of an input: document.getElementById("element-id").value

  //perso1
  document.getElementById("validBtn1").addEventListener("click", function () {
    let race = document.getElementById("races1");
    let strrace = race.options[race.selectedIndex].value;
    switch (strrace) {
      case "humans":
        strrace = humans;
        break;

      case "elves":
        strrace = elves;
        break;

      case "vampires":
        strrace = vampires;
        break;

      case "orcs":
        strrace = orcs;
        break;

      default:
        break;
    }
    let item = document.getElementById("items1");
    let stritem = item.options[item.selectedIndex].value;
    switch (stritem) {
      case "sword":
        stritem = sword;
        break;

      case "staff":
        stritem = staff;
        break;

      case "boots":
        stritem = boots;
        break;

      case "bow":
        stritem = bow;
        break;

      default:
        break;
    }
    perso1 = new Person(
      document.getElementById("name1").value,
      strrace,
      stritem
    );
    if (perso1.race.item === "Orcs") {
      perso1.maxHealth = 140;
      perso1.currenthealth = 140;
      document.getElementById("health").value = perso1.currenthealth;
      document.getElementById("health").max = perso1.maxHealth;
      document.getElementById("life1").textContent = `${document.getElementById("health").value}/${document.getElementById("health").max}`;
    }
    if (perso1.race.item === "Humans") {
      perso1.resistance = perso1.resistance * 0.8;
    }
    if (perso1.race.item === "Elves") {
      perso1.reflect = perso1.reflect + 30;
    }
    if (perso1.item.item === "Sword") {
      perso1.boostDamage = perso1.boostDamage * 1.3;
    }
    if (perso1.item.item === "Staff") {
      perso1.boostHeal = perso1.boostHeal * 1.2;
    }
    if (perso1.item.item === "Boots") {
      perso1.bootsdodge = perso1.bootsdodge + 29;
    }
    if (perso1.item.item === "Bow") {
      perso1.bowatttwi = perso1.bowatttwi + 30;
    }
    document.getElementById("validBtn1").classList.add("btn-success");
    document.getElementById("validBtn1").classList.remove("btn-primary");
    document.getElementById("form1").classList.add("hide");
    document.getElementById("table1").classList.remove("hide");
    document.getElementById("btn1").classList.remove("hide");
    document.getElementById("healthbar1").classList.remove("hide");
    document.getElementById("tdname1").innerHTML = perso1.name;
    document.getElementById("tditem1").innerHTML = perso1.item.item;
    document.getElementById("tdrace1").innerHTML = perso1.race.item;
    document.getElementById("tditemdesc1").innerHTML = perso1.item.desc;
    document.getElementById("tdracedesc1").innerHTML = perso1.race.desc;
    document.getElementById('tdImg').src =perso1.race.newImg ;
    if (
      document.getElementById("validBtn1").classList.contains("btn-success") &&
      document.getElementById("validBtn2").classList.contains("btn-success")
    ) {
      if (Math.floor(Math.random() * 2) + 1 === 1) {
        document.getElementById("hit").disabled = false;
        document.getElementById("heal").disabled = false;
        document.getElementById("yield").disabled = false;
      } else {
        document.getElementById("hit2").disabled = false;
        document.getElementById("heal2").disabled = false;
        document.getElementById("yield2").disabled = false;
      }
    }
    addMsgLog(`I am ${perso1.name}, a ${perso1.race.item}, I wield a ${perso1.item.item}, my total health point are ${perso1.maxHealth}`);
  });

  //perso2
  document.getElementById("validBtn2").addEventListener("click", function () {
    let race = document.getElementById("races2");
    let strrace = race.options[race.selectedIndex].value;
    switch (strrace) {
      case "humans":
        strrace = humans;
        break;

      case "elves":
        strrace = elves;
        break;

      case "vampires":
        strrace = vampires;
        break;

      case "orcs":
        strrace = orcs;
        break;

      default:
        break;
    }
    let item = document.getElementById("items2");
    let stritem = item.options[item.selectedIndex].value;
    switch (stritem) {
      case "sword":
        stritem = sword;
        break;

      case "staff":
        stritem = staff;
        break;

      case "boots":
        stritem = boots;
        break;

      case "bow":
        stritem = bow;
        break;

      default:
        break;
    }
    perso2 = new Person(
      document.getElementById("name2").value,
      strrace,
      stritem
    );
    if (perso2.race.item === "Orcs") {
      perso2.maxHealth = 140;
      perso2.currenthealth = 140;
      document.getElementById("health2").value = perso2.currenthealth;
      document.getElementById("health2").max = perso2.maxHealth;
      document.getElementById("life2").textContent = `${document.getElementById("health2").value}/${document.getElementById("health2").max}`;
    }
    if (perso2.race.item === "Humans") {
        perso2.resistance = perso2.resistance * 0.8;
    }
    if (perso2.race.item === "Elves") {
      perso2.reflect = perso2.reflect + 30;
    }
    if (perso2.item.item === "Sword") {
      perso2.boostDamage = perso2.boostDamage * 1.3;
    }
    if (perso2.item.item === "Staff") {
    perso2.boostHeal = perso2.boostHeal * 1.2;
    }
    if (perso2.item.item === "Boots") {
      perso2.bootsdodge = perso2.bootsdodge + 29;
    }
    if (perso2.item.item === "Bow") {
      perso2.bowatttwi = perso2.bowatttwi + 30;
    }
    document.getElementById("validBtn2").classList.add("btn-success");
    document.getElementById("validBtn2").classList.remove("btn-primary");
    document.getElementById("form2").classList.add("hide");
    document.getElementById("table2").classList.remove("hide");
    document.getElementById("btn2").classList.remove("hide");
    document.getElementById("healthbar2").classList.remove("hide");
    document.getElementById("tdname2").innerHTML = perso2.name;
    document.getElementById("tditem2").innerHTML = perso2.item.item;
    document.getElementById("tdrace2").innerHTML = perso2.race.item;
    document.getElementById("tditemdesc2").innerHTML = perso2.item.desc;
    document.getElementById("tdracedesc2").innerHTML = perso2.race.desc;
    document.getElementById('tdImg2').src =perso2.race.newImg ;
    if (
      document.getElementById("validBtn1").classList.contains("btn-success") &&
      document.getElementById("validBtn2").classList.contains("btn-success")
    ) {
      if (Math.floor(Math.random() * 2) + 1 === 1) {
        document.getElementById("hit").disabled = false;
        document.getElementById("heal").disabled = false;
        document.getElementById("yield").disabled = false;
      } else {
        document.getElementById("hit2").disabled = false;
        document.getElementById("heal2").disabled = false;
        document.getElementById("yield2").disabled = false;
      }
    }
    addMsgLog(`I am ${perso2.name}, a ${perso2.race.item}, I wield a ${perso2.item.item}, my total health point are ${perso2.maxHealth}`);
  });

  var allbtn = document.querySelectorAll(".actbtn");
  allbtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      document.getElementById("hit").disabled = true;
      document.getElementById("heal").disabled = true;
      document.getElementById("hit2").disabled = false;
      document.getElementById("heal2").disabled = false;
      document.getElementById("yield").disabled = true;
      document.getElementById("yield2").disabled = false;
      if (perso2.race.item === 'Vampires') {
        lifesteal(perso2,perso1);
        updLifeBox(perso1,perso2);
      }
    });
  });
  var allbtn2 = document.querySelectorAll(".actbtn2");
  allbtn2.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      document.getElementById("hit").disabled = false;
      document.getElementById("heal").disabled = false;
      document.getElementById("hit2").disabled = true;
      document.getElementById("heal2").disabled = true;
      document.getElementById("yield").disabled = false;
      document.getElementById("yield2").disabled = true;
      if (perso1.race.item === 'Vampires') {
        lifesteal(perso1,perso2);
        updLifeBox(perso1,perso2);
      }
    });
  });

  document.getElementById("hit2").addEventListener("click", function () {
    if (atttwi(perso2)) {
      hit(perso2,perso1);
      updLifeBox(perso1,perso2);
      
    }
    hit(perso2,perso1);
    updLifeBox(perso1,perso2);
    if (perso1.currenthealth <= 0) {
      alert(`${perso1.name} has no more life ${perso2.name} won! The game will restart`)
      window.location.reload(false); 
    }
    if (perso2.currenthealth <= 0) {
      alert(`${perso2.name} has no more life ${perso1.name} won! The game will restart`)
      window.location.reload(false); 
    }
  });
  document.getElementById("hit").addEventListener("click", function () {
    if (atttwi(perso1)) {
      hit(perso1,perso2);
      updLifeBox(perso1,perso2);
    }
    hit(perso1,perso2);
    updLifeBox(perso1,perso2);
    if (perso2.currenthealth <= 0) {
      alert(`${perso2.name} has no more life ${perso1.name} won! The game will restart`)
      window.location.reload(false); 
    }
    if (perso1.currenthealth <= 0) {
      alert(`${perso2.name} has no more life ${perso1.name} won! The game will restart`)
      window.location.reload(false); 
    }
  });
  document.getElementById("heal").addEventListener("click", function () {
    heal(perso1);
    updLifeBox(perso1,perso2);
  });
  document.getElementById("heal2").addEventListener("click", function () {
    heal(perso2);
    updLifeBox(perso1,perso2);
  });
  document.getElementById("yield").addEventListener("click", function () {
    perso1.currenthealth = 0;
    alert(`${perso1.name} gave up, he has no more life ${perso2.name} won! The game will restart`)
    window.location.reload(false); 
  });
  document.getElementById("yield2").addEventListener("click", function () {
    perso2.currenthealth = 0;
    alert(`${perso2.name} gave up, he has no more life ${perso1.name} won! The game will restart`)
    window.location.reload(false); 
  });

  function updLifeBox(perso1,perso2) {
    document.getElementById("health").textContent = perso1.currenthealth;
    document.getElementById("health").value = perso1.currenthealth;
    document.getElementById("life1").textContent = `${document.getElementById("health").value}/${document.getElementById("health").max}`;
    document.getElementById("health2").textContent = perso2.currenthealth;
    document.getElementById("health2").value = perso2.currenthealth;
    document.getElementById("life2").textContent = `${document.getElementById("health2").value}/${document.getElementById("health2").max}`;
  }

  function atttwi(obj1) {
    let random = Math.floor((Math.random() * 100) + 1);
    if (random <= obj1.bowatttwi) {
      addMsgLog("Double attack!");
      return true;
    }
    return false;
  }
  function hasReflect(obj1) {
    let random = Math.floor((Math.random() * 100) + 1);
    if (random <= obj1.reflect) {
      return true;
    }
    return false;
  }

  function gotoBottom(id){
    var element = document.getElementById(id);
    element.scrollTop = element.scrollHeight - element.clientHeight;
 }

  function addMsgLog(msg){
    let e = document.getElementById("log");
    let li = document.createElement('li');
    let id = "scrollbox";
    e.appendChild(li);
    li.innerHTML=msg;
    gotoBottom(id);
  }
  function hit(obj1, obj2){
    let randomDamage = Math.floor(Math.random() * (obj1.maxDamage - obj1.min + 1)) + obj1.min;
    if (obj2.hasDodge()) {
      randomDamage = 0;
      addMsgLog(`${obj2.name} dodged`);
      obj2.currenthealth = obj2.currenthealth - Math.round(randomDamage * obj2.resistance);
      addMsgLog(`${obj2.name} was damaged by ${obj1.name} from ${Math.round(randomDamage * obj2.resistance)} damages`);
    }else if (hasReflect(obj2)) {
      randomDamage = randomDamage / 2;
      addMsgLog(`${obj2.name} reflects!`);
      addMsgLog(`${obj1.name} was damaged by the reflection from ${Math.round(randomDamage * obj1.resistance)} damages`);
      obj1.currenthealth -= (Math.round(randomDamage * obj1.resistance));
    } else {
      obj2.currenthealth = obj2.currenthealth - Math.round(randomDamage * obj2.resistance);
      addMsgLog(`${obj2.name} was damaged by ${obj1.name} from ${Math.round(randomDamage * obj2.resistance)} damages`);
    }
  }
    
    
  
  function heal(obj1){
    let randomHeal = Math.floor(Math.random() * (obj1.maxHealing - obj1.min + 1)) + obj1.min;
    if ((obj1.currenthealth + Math.round(randomHeal * obj1.boostHeal)) < obj1.maxHealth) {
      obj1.currenthealth += Math.round(randomHeal * obj1.boostHeal);
      addMsgLog(`${obj1.name} was heald by ${Math.round(randomHeal * obj1.boostHeal)}`);
    } else if ((obj1.currenthealth + Math.round(randomHeal * obj1.boostHeal)) > obj1.maxHealth ){
      obj1.currenthealth = obj1.maxHealth;
      addMsgLog(`${obj1.name} was heald by ${Math.round(randomHeal * obj1.boostHeal)} but his life is full`);
    }
  }
  function lifesteal(obj1, obj2){
    let lifesteal = Math.round(obj2.currenthealth / 10 );
    if ((obj1.currenthealth +lifesteal) < obj1.maxHealth ) {
      obj1.currenthealth += lifesteal;
      //obj2.currenthealth -= lifesteal;
      addMsgLog(`${obj1.name} stole life from ${obj2.name} : ${lifesteal}`);
    } else if ((obj1.currenthealth +lifesteal) > obj1.maxHealth) {
      obj1.currenthealth = obj1.maxHealth;
      //obj2.currenthealth -= lifesteal;
      addMsgLog(`${obj1.name} stole life from ${obj2.name} : ${lifesteal} but life of ${obj1.name} is full`);
    } 
    
   
    
  }
})();
