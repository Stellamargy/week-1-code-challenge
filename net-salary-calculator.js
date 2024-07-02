function calculateNetIncome(basicSalary,benefits) {
  // calculate taxable income
  // Gross income =basic salary+benefits

  //taxable income = Gross income -Allowed Deduction(nssf + nhif)
  // nssf= tierOne + tierTwo
  // above 36000  will be equal to 1080 + 1080
  // less than 36000 will be equal to 420 +1740
  // nhif ---- will be some range

  // Then use the taxable income to calculate payee
   //basicSalary; -passed as arguments
  //benefits; -passed as arguments
  let grossPay = basicSalary + benefits;
  let nssf;
  //Calculating NSSF Contribution
  let tierOne;
  let tierTwo;
  if (grossPay <= 36000) {
    tierOne = 420;
    tierTwo = 1020;
    nssf = tierOne + tierTwo;
  } else {
    tierOne = 1080;
    tierTwo = 1080;
    nssf = tierOne + tierTwo;
  }

  // calculating nhif
  // you will have to subtract  insurance relief
  if (grossPay >= 1 && grossPay <= 5999) {
    // calculates the amount of nhif to be deducted
    nhif = 150;
  } else if (grossPay >= 6000 && grossPay <= 7999) {
    //if grossPay is 6000- 7999, nhif = 300;
    nhif = 300;
  } else if (grossPay >= 8000 && grossPay <= 11999) {
    //if grossPay is 8000- 11999, nhif = 400;
    nhif = 400;
  } else if (grossPay >= 12000 && grossPay <= 14999) {
    //if grossPay is 12000- 14999, nhif = 500;
    nhif = 500;
  } else if (grossPay >= 15000 && grossPay <= 19999) {
    //if grossPay is 15000- 19999, nhif = 600;
    nhif = 600;
  } else if (grossPay >= 20000 && grossPay <= 24999) {
    //if grossPay is 20000- 24999, nhif = 750;
    nhif = 750;
  } else if (grossPay >= 25000 && grossPay <= 29999) {
    //if grossPay is 25000- 29999, nhif = 850;
    nhif = 850;
  } else if (grossPay >= 30000 && grossPay <= 34999) {
    //if grossPay is 30000- 34999, nhif = 900;
    nhif = 900;
  } else if (grossPay >= 35000 && grossPay <= 39999) {
    //if grossPay is 35000- 39999, nhif = 950;
    nhif = 950;
  } else if (grossPay >= 40000 && grossPay <= 44999) {
    //if grossPay is 40000- 44999, nhif = 1000;
    nhif = 1000;
  } else if (grossPay >= 45000 && grossPay <= 49999) {
    //if grossPay is 45000- 49999, nhif = 1100;
    nhif = 1100;
  } else if (grossPay >= 50000 && grossPay <= 59999) {
    //if grossPay is 50000- 59999, nhif = 1200;
    nhif = 1200;
  } else if (grossPay >= 60000 && grossPay <= 69999) {
    //if grossPay is 60000- 69999, nhif = 1300;
    nhif = 1300;
  } else if (grossPay >= 70000 && grossPay <= 79999) {
    //if grossPay is 70000- 79999, nhif = 1400;
    nhif = 1400;
  } else if (grossPay >= 80000 && grossPay <= 89999) {
    //if grossPay is 80000- 89999, nhif = 1500;
    nhif = 1500;
  } else if (grossPay >= 90000 && grossPay <= 99999) {
    //if grossPay is 90000- 99999, nhif = 1600;
    nhif = 1600;
  } else if (grossPay >= 100000) {
    //if grossPay is more than 100000, nhif = 1700;
    nhif = 1700;
  }

  // Getting the actual nhif pay
  // nhif = nhif -insurance relief
  let insuranceRelief = Math.round(nhif * 0.15);
  let totalNhif = nhif - insuranceRelief;
  let houseLevy=grossPay*(1.5/100)
  console.log(totalNhif)
  console.log(houseLevy)
  console.log(nssf)

  //calculate taable income
  let taxableIncome = grossPay - (nssf + totalNhif+houseLevy);

  // I will use the taxable income to calculatee payee
  
  if (taxableIncome <= 24000) {
    payee = Math.round(taxableIncome * 0.1 );
  } else if (taxableIncome >= 24001 && taxableIncome <= 32333) {
    payee = Math.round((24000 * 0.1) + ((taxableIncome - 24001)* 0.25 ) );
  } else if (taxableIncome >= 32334 && taxableIncome <= 500000) {
    payee = Math.round(
     ( 24000 * 0.1) + (8332 * 0.25) + ((taxableIncome - 32334) * 0.3 )
    );
  } else if (grossPay >= 500001 && taxableIncome <= 800000) {
    payee = Math.round(
     ( 24000 * 0.1) + (8332 * 0.25) +((500000-32334)*0.3) +((taxableIncome-500001)*32.5/100)
    );
  } else {
    payee=taxableIncome*0.35;
  }
  let personalRelief=2400;
  // a taxable income upto 24000 doesnt pay payee
  let totalPayee=payee-personalRelief
  
  console.log(totalPayee)
  // netSalary
  let netSalary=taxableIncome-totalPayee
  return netSalary;

}
console.log(calculateNetIncome(30000,0))