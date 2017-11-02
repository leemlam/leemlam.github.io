money = 0;
moneyup = 1;

upcost = 15;
catcost = 25;
workercost = 100;

function clicked() {
  money += moneyup;
  document.getElementById("total").innerHTML = money;
}

function upgrade(name) {
  
  if (name === "clicker cat") {
    if (money >= catcost) {
      moneyup += 1;
      money -= upcost;
      catcost = catcost * 2;
      document.getElementById("cat").innerHTML = "clicker cat: " + catcost;}
    }
    
    if (name === "worker") {
      if (money >= workercost) {
        moneyup += 10;
        money -= workercost;
        workercost = workercost * 2;
        document.getElementById("upgrade").innerHTML = "worker: " + workercost;}
      }
      
      if (name === "upgrade") {
        if (money >= upcost) {
          moneyup += upcost / 15;
          money -= upcost;
          upcost = upcost * 5;
          document.getElementById("upgrade").innerHTML = "upgrade: " + upcost;}
        }

document.getElementById("click").innerHTML = "click (" + moneyup + ")";
      document.getElementById("total").innerHTML = money;
}
