
(function () {
  // to get the value of an input: document.getElementById("element-id").value

  document.getElementById("validBtn1").addEventListener("click", function () {
    
    let race = document.getElementById("races1");
    let strrace = race.options[race.selectedIndex].value;
    let item = document.getElementById("items1");
    let stritem = item.options[item.selectedIndex].value;
    perso1 = new Person(
      document.getElementById("name1").value,
      strrace,
      stritem
    );
    
    document.getElementById("validBtn1").classList.add("btn-success");
    document.getElementById("validBtn1").classList.remove("btn-primary");
    document.getElementById("form1").classList.add("hide");
    document.getElementById("table1").classList.remove("hide");
    document.getElementById("tdname1").innerHTML = perso1.name;
    document.getElementById("tditem1").innerHTML = perso1.item;
    document.getElementById("tdrace1").innerHTML = perso1.race;

  });

  document.getElementById("validBtn2").addEventListener("click", function () {
    perso2 = new Person(
      document.getElementById("name2"),
      document.getElementById("races2"),
      document.getElementById("items2")
    );

    document.getElementById("validBtn2").classList.add("btn-success");

    document.getElementById("validBtn2").classList.remove("btn-primary");
  });

  document.getElementById("hit2").addEventListener("click", function () {
    let health = document.getElementById("health");
    health.value -= 10; //Or whatever you want to do with it.
  });
  document.getElementById("hit").addEventListener("click", function () {
    let health2 = document.getElementById("health2");
    health2.value -= 10; //Or whatever you want to do with it.
  });
  document.getElementById("heal").addEventListener("click", function () {
    let health = document.getElementById("health");
    health.value += 10; //Or whatever you want to do with it.
  });
  document.getElementById("heal2").addEventListener("click", function () {
    let health2 = document.getElementById("health2");
    health2.value += 10; //Or whatever you want to do with it.
  });
})();
