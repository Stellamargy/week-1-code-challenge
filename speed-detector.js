const speed=Number(prompt("Enter the speed? "))
function speedDetector(speed){
    let points;
    let licenseState;
    const speedLimit=70;
    if(speed<=70){
        licenseState= " OK ";

    }else if(speed>70){
        points=Math.floor((speed - speedLimit) / 5);
        licenseState= `You have ${points} points`;
        if (points>12){
            licenseState=`You have  ${points} points . Your license is suspended !`
        }

    }
   return licenseState; 
}

console.log(speedDetector(speed))