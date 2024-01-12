const monetaryUnits = {
  "ONE HUNDRED": 100,
  "TWENTY": 20,
  "TEN": 10,
  "FIVE": 5,
  "ONE": 1,
  "QUARTER": 1 / 4,
  "DIME": 1 / 10,
  "NICKEL": 5 / 100,
  "PENNY": 1 / 100
};

function registerParcialPayment(cid, i, monetaryUnits, unit, toRetrieve, change) {
  change = parseFloat(change).toFixed(2);
  toRetrieve[unit] += monetaryUnits[unit];
  cid[i][1] = parseFloat(cid[i][1]).toFixed(2) - monetaryUnits[unit];
  change -= monetaryUnits[unit];

  return [change, cid, toRetrieve];
}

function assignMonetaryUnit(change, cid, toRetrieve) {

  let i = cid.length - 1;

  for (let unit in monetaryUnits) {
    if (change >= monetaryUnits[unit]) {
      if ((cid[i][1] - monetaryUnits[unit]) >= 0) {
        return registerParcialPayment(cid, i, monetaryUnits, unit, toRetrieve, change);
      }
    }
    i--;
  }
  return [-1, cid, toRetrieve];
}

function formatOpenChange(toRetrieve) {
  const formatedArray = [];

  for (let value in toRetrieve) {
    if (toRetrieve[value] > 0) {
      formatedArray.push([value, toRetrieve[value]]);
    }
  }
  return formatedArray;
}

function openFinalStatus(toRetrieve) {
  const changeArray = formatOpenChange(toRetrieve);

  return {
    status: "OPEN",
    change: changeArray
  };
}

function formatClosedChange(originalCid){
  const response = [];
for(let i=0; i< originalCid.length; i+=2){
  response.push([originalCid[i],originalCid[i+1]]);
}  
  return response;
}

function closeFinalStatus(originalCid) {
  const response = formatClosedChange(originalCid);

  return {
    status: "CLOSED",
    change: response
  };
}

function comprobateCloseStatus(cid) {
  const value = cid.filter((element) => element[1] != 0);
  if (value.length == 0) {
    return true;
  }
  return false;
}

function manageRightChange(cid, toRetrieve, originalCid) {
  if (comprobateCloseStatus(cid)) {
    return closeFinalStatus(originalCid);
  }
  return openFinalStatus(toRetrieve);
}

function notFundsStatus() {
  return {
    status: "INSUFFICIENT_FUNDS",
    change: []
  };
}

function verifyCashRegisterFinalStatus(change, cid, toRetrieve, originalCid) {
  if (change == -1) {
    return notFundsStatus();
  }
  else {
    return manageRightChange(cid, toRetrieve, originalCid);
  }
}


function checkCashRegister(price, cash, originalCid) {
  let cid = originalCid.slice();
  const base = [];
  const givenArray = base.concat(...originalCid);
  let change = cash - price;
  let toRetrieve = {
    "ONE HUNDRED": 0,
    "TWENTY": 0,
    "TEN": 0,
    "FIVE": 0,
    "ONE": 0,
    "QUARTER": 0,
    "DIME": 0,
    "NICKEL": 0,
    "PENNY": 0
  };

  while ((change > 0) && (change != -1)) {
    const response = assignMonetaryUnit(change, cid, toRetrieve);

    change = response[0];
    cid = response[1];
    toRetrieve = response[2];
  }

  return verifyCashRegisterFinalStatus(change, cid, toRetrieve, givenArray);
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);