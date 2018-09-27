money = 0;
moneyup = 1;
msec = 0;
upcost = 15;
catcost = 25;
workercost = 250;
catown = 0;
workerown = 0;
upown = 0;
catadd = 1;
workadd = 15;

window.onbeforeunload = closingCode;
function closingCode(){
   save();
   return null;
}

function reloadall() {
  document.getElementById("click").innerHTML = "LB/click: " + moneyup + " | LB/sec: " + msec;
  document.getElementById("total").innerHTML = "LB: " + money;
  document.getElementById("cat").innerHTML = catown + "-clicker cat: " + catcost + " | +" + catadd + "/sec";
  document.getElementById("worker").innerHTML = workerown + "-worker: " + workercost + " | +" + workadd + "/sec";
  document.getElementById("upgrade").innerHTML = upown + "-main upgrade: " + upcost;
}

function save() {
  localStorage.setItem("money", money);
  localStorage.setItem("moneyup", moneyup);
  localStorage.setItem("msec", msec);
  localStorage.setItem("upcost", upcost);
  localStorage.setItem("catcost", catcost);
  localStorage.setItem("catadd", catadd);
  localStorage.setItem("workercost", workercost);
  localStorage.setItem("workadd", workadd);
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
  upown = parseInt(localStorage.getItem("catadd"));
  workercost = parseInt(localStorage.getItem("workercost"));
  upown = parseInt(localStorage.getItem("workadd"));
  catown = parseInt(localStorage.getItem("catown"));
  workerown = parseInt(localStorage.getItem("workerown"));
  upown = parseInt(localStorage.getItem("upown"));
  
  reloadall()
}
function reset() {
  if (confirm("Are you sure you want to reset?") === true) {
    money = 0;
    moneyup = 1;
    msec = 0;
    upcost = 15;
    catcost = 25;
    workercost = 250;
    catown = 0;
    workerown = 0;
    upown = 0;
    reloadall()
  }
}

function myTimer() {
  money += msec;
  document.getElementById("total").innerHTML = "LB: " + money;
}
setInterval(myTimer, 1000);

function clicked() {
  money += moneyup;
  document.getElementById("total").innerHTML = "LB: " + money;
}

function upgrade(name) {
  if (name === "clicker cat") {
    if (money >= catcost) {
      if (catown < 10) {msec += catadd; catadd ++;}
      else if (catown < 25) {msec += 20*catadd; catadd ++} 
      else if (catown < 50) {msec += 500*catadd; catadd ++}
      else {msec += 1500*catadd; catadd ++}
      catown += 1;
      money -= catcost;
      catcost = catcost * 2;
      document.getElementById("cat").innerHTML = catown + "-clicker cat: " + catcost + " (+" + catadd + "/sec)";
    }
  }

  if (name === "worker") {
    if (money >= workercost) {
      if (workerown < 10) {msec += workadd; workadd ++;}
      else if (workerown < 25) {msec += 20*workadd; workadd ++}
      else if (workerown < 50) {msec += 500*workadd; workadd ++}
      else {msec += 1500 * workadd; workadd ++;}
      workerown += 1;
      money -= workercost;
      workercost = workercost * 3;
      document.getElementById("worker").innerHTML = workerown + "-worker: " + workercost + " (+" + workadd + "/sec)";
    }
  }

  if (name === "upgrade") {
    if (money >= upcost) {
      moneyup += upcost / 15;
      money -= upcost;
      upown += 1;
      upcost = upcost * 5;
      document.getElementById("upgrade").innerHTML = upown + "-main upgrade: " + upcost;
    }
  }

  document.getElementById("click").innerHTML = "LB/click: " + moneyup + " | LB/sec: " + msec;
  document.getElementById("total").innerHTML = "LB: " + money;
}
