money = 0;
moneyup = 1;
msec = 0;
upcost = 15;
catcost = 25;
workercost = 250;
catown = 0
workerown = 0
upown = 0
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
      catown += 1
      money -= catcost;
      catcost = catcost * 2;
      document.getElementById("cat").innerHTML = catown + "-clicker cat: " + catcost;
    }
  }

  if (name === "worker") {
    if (money >= workercost) {
      msec += 15;
      workerown += 1
      money -= workercost;
      workercost = workercost * 3;
      document.getElementById("worker").innerHTML = workerown + "-worker: " + workercost;
    }
  }

  if (name === "upgrade") {
    if (money >= upcost) {
      moneyup += upcost / 15;
      money -= upcost;
      upown += 1
      upcost = upcost * 5;
      document.getElementById("upgrade").innerHTML = upown + "-main upgrade: " + upcost;
    }
  }

  document.getElementById("click").innerHTML = "LB/click: " + moneyup + " | LB/sec: " + msec;
  document.getElementById("total").innerHTML = "LB: " + money;
}
