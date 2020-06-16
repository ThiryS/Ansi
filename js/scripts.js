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
    if (perso1.item.item === "Sword") {
      perso1.maxDamage = perso1.maxDamage * 1.3;
    }
    if (perso1.item.item === "Staff") {
      perso1.maxHealing = perso1.maxHealing * 1.2;
    }
    document.getElementById("validBtn1").classList.add("btn-success");
    document.getElementById("validBtn1").classList.remove("btn-primary");
    document.getElementById("form1").classList.add("hide");
    document.getElementById("table1").classList.remove("hide");
    document.getElementById("btn1").classList.remove("hide");
    document.getElementById("tdname1").innerHTML = perso1.name;
    document.getElementById("tditem1").innerHTML = perso1.item.item;
    document.getElementById("tdrace1").innerHTML = perso1.race.item;
    document.getElementById("tditemdesc1").innerHTML = perso1.item.desc;
    document.getElementById("tdracedesc1").innerHTML = perso1.race.desc;
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
    if (perso2.item.item === "Sword") {
      perso2.maxDamage = perso2.boostDamage * 1.3;
    }
    if (perso2.item.item === "Staff") {
    perso2.maxHealing = perso2.boostHeal * 1.2;
    }
    document.getElementById("validBtn2").classList.add("btn-success");
    document.getElementById("validBtn2").classList.remove("btn-primary");
    document.getElementById("form2").classList.add("hide");
    document.getElementById("table2").classList.remove("hide");
    document.getElementById("btn2").classList.remove("hide");
    document.getElementById("tdname2").innerHTML = perso2.name;
    document.getElementById("tditem2").innerHTML = perso2.item.item;
    document.getElementById("tdrace2").innerHTML = perso2.race.item;
    document.getElementById("tditemdesc2").innerHTML = perso2.item.desc;
    document.getElementById("tdracedesc2").innerHTML = perso2.race.desc;
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
    });
  });

  document.getElementById("hit2").addEventListener("click", function () {
    let health = document.getElementById("health");
    health.value = hit(perso2,perso1);
    document.getElementById("health").textContent = health.value;
    document.getElementById("life1").textContent = `${document.getElementById("health").value}/${document.getElementById("health").max}`;
  });
  document.getElementById("hit").addEventListener("click", function () {
    let health2 = document.getElementById("health2");
    health2.value = hit(perso1,perso2); //Or whatever you want to do with it.
    document.getElementById("health2").textContent = health.value;
    document.getElementById("life2").textContent = `${document.getElementById("health2").value}/${document.getElementById("health2").max}`;
  });
  document.getElementById("heal").addEventListener("click", function () {
    let health = document.getElementById("health");
    health.value += 10; //Or whatever you want to do with it.
    document.getElementById("health").textContent = health.value;
  });
  document.getElementById("heal2").addEventListener("click", function () {
    let health2 = document.getElementById("health2");
    health2.value += 10; //Or whatever you want to do with it.
    document.getElementById("health2").textContent = health.value;
  });

  function addMsgLog(msg){
    let e = document.getElementById("log");
    let li = document.createElement('li');
    e.appendChild(li);
    li.innerHTML=msg;
  }
  function hit(obj1, obj2){
    let randomDamage = Math.floor(Math.random() * (obj1.maxDamage - obj1.min + 1)) + obj1.min;
    obj2.currenthealth = obj2.currenthealth - (randomDamage * obj2.resistance);
    addMsgLog(`${obj2.name} was damaged by ${obj1.name} from ${randomDamage * obj2.resistance} damages`)
    return obj2.currenthealth;
  }
  function heal(obj1){
    let randomHeal = Math.floor(Math.random() * (obj1.maxHealth - obj1.min + 1)) + obj1.min;
    obj1.currenthealth += (randomHeal * obj1.maxHealing);
    addMsgLog(`${obj1.name} was heald by ${randomHeal} damages`);
    return obj2.currenthealth;
  }
  
})();
