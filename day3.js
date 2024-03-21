// if condition
let age = 18
if (age<18) {
    console.log("you are not eligible to vote");
}
else if(age>=18){
    console.log("you are eligible to vote");
}
else{
    console.log("Voting age is 18");
}
//if else
let isRaining = true
let isColudy = false
if (isRaining || isColudy) {
    console.log("Don't forgot to taken umberlla ");
}
else
{
    console.log("Weather is normal");
}

// switch case (jumping statement and continue )
switch("wednesday"){
    case "sunday" :
        console.log("1st day of the week");
        break;
    case "monday":
        console.log("2nd day of the week");
        break;
    case "tuesday":
        console.log("3rd day of the week");
        break;
    case "wednesday":
        console.log("4th day of the week");
        break;
    case "thursday":
        console.log("5th day of the week");
    case "friday":
        console.log("6th day of the week");
        break;
    default :
        console.log("7th day of the week");
}

// for loop
for(i=1; i<=5; i++){
    console.log(i);
}

let arr = [1,2,10,20,"keerthi"]
for(i=0; i<arr.length; i++){
console.log(arr[i]); 
}

// while loop
i=1;
while(i<=5){
    console.log(i);
    i++;
}

//do while loop 
i=10
do{
    console.log(i);
    i++;
}
while(i<=15);
