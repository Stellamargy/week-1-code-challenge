// It is a function.
//prompt a user to input student marks 
//Check several events 
// 1. what happens if they cancel - null
// 2. The output has to be between 0-100
// 3 . It has to be a number - check what data type you get from the user and how you can convert it.

const gradeGenerator = function (){
    let gradeState=true;
    let marks;
    let grade;
    while (gradeState){
        marks=prompt("Enter student marks-(between 0-100? ");
        if(marks!==null && marks && marks >= 0 && marks <= 100){
            marks=Number(marks);
            gradeState=false
        }else{
            alert("Kindly enter a valid input (a number between 0 and 100)  ")
        }
    
       
    }

   if(marks>79){
    grade="A";
   }else if(marks>=60 && marks <=79){
    grade="B";
   }else if(marks>=50 && marks<=59){
    grade= "C";
   }else if (marks>=40 && marks <=49){
    grade= "D";

   }else{
    grade= "E";
   }
   return grade ;
}

 

 alert(gradeGenerator())