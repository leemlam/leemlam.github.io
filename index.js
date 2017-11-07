money = 0;
moneyup = 1;
msec = 0;
upcost = 15;
catcost = 25;
workercost = 250;
catown = 0;
workerown = 0;
upown = 0;

function reloadall() {
  document.getElementById("click").innerHTML = "LB/click: " + moneyup + " | LB/sec: " + msec;
  document.getElementById("total").innerHTML = "LB: " + money;
  document.getElementById("cat").innerHTML = catown + "-clicker cat: " + catcost;
  document.getElementById("worker").innerHTML = workerown + "-worker: " + workercost;
  document.getElementById("upgrade").innerHTML = upown + "-main upgrade: " + upcost;
}

var myVar = setInterval(myTimer, 1000);

function save() {
  localStorage.setItem("money", money);
  localStorage.setItem("moneyup", moneyup);
  localStorage.setItem("msec", msec);
  localStorage.setItem("upcost", upcost);
  localStorage.setItem("catcost", catcost);
  localStorage.setItem("workercost", workercost);
  localStorage.setItem("catown", catown);
  localStorage.setItem("workerown", workerown);
  localStorage.setItem("upown", upown);
}

function load() {
  money = parseInt(localStorage.getItem("money"));
  moneyup = parseInt(localStorage.getItem("moneyup"));
  msec = parseInt(localStorage.getItem("msec"));
  upcost = parseInt(localStorage.getItem("upcost"));
  catcost = parseInt(localStorage.getItem("catcost"));
  workercost = parseInt(localStorage.getItem("workercost"));
  catown = parseInt(localStorage.getItem("catown"));
  workerown = parseInt(localStorage.getItem("workerown"));
  upown = parseInt(localStorage.getItem("upown"));
  reloadall()
}

function myTimer() {
  money += msec;
  document.getElementById("total").innerHTML = "LB: " + money;
}

function clicked() {
  money += moneyup;
  document.getElementById("total").innerHTML = "LB: " + money;
}

function upgrade(name) {
  if (name === "clicker cat") {
    if (money >= money) {
      msec += 1;
      catown += 1;
      money -= catcost;
      catcost = catcost * 2;
      reloadall()
    }
  }

  if (name === "worker") {
    if (money >= workercost) {
      msec += 15;
      workerown += 1;
      money -= workercost;
      workercost = workercost * 3;
      reloadall()
    }
  }

  if (name === "upgrade") {
    if (money >= upcost) {
      moneyup += upcost / 15;
      money -= upcost;
      upown += 1;
      upcost = upcost * 5;
      reloadall()
    }
  }

  document.getElementById("click").innerHTML = "LB/click: " + moneyup + " | LB/sec: " + msec;
  document.getElementById("total").innerHTML = "LB: " + money;
}
