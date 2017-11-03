money = 0;
moneyup = 1;
msec = 0;
upcost = 15;
catcost = 25;
workercost = 250;
var myVar = setInterval(myTimer, 1000);

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
    if (money >= catcost) {
      msec += 1;
      money -= catcost;
      catcost = catcost * 2;
      document.getElementById("cat").innerHTML = "clicker cat: " + catcost;
    }
  }

  if (name === "worker") {
    if (money >= workercost) {
      msec += 15;
      money -= workercost;
      workercost = workercost * 3;
      document.getElementById("worker").innerHTML = "worker: " + workercost;
    }
  }

  if (name === "upgrade") {
    if (money >= upcost) {
      moneyup += upcost / 15;
      money -= upcost;
      upcost = upcost * 5;
      document.getElementById("upgrade").innerHTML = "main upgrade: " + upcost;
    }
  }

  document.getElementById("click").innerHTML = "LB/click: " + moneyup + " | LB/sec: " + msec;
  document.getElementById("total").innerHTML = "LB: " + money;
}
