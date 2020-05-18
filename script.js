let names=['janet','jordyn','jaylin'];

for(let name=0; name <names.length ; name+= 1){
    console.log(names[name]);  
}


/*
let total=0;
for(index=0; index <=5 ;index += 1){
    total += index;
}
alert(total)
*/
/*
/// count by
let errors; 
let output;
let a=prompt('enter count to number');
let b=prompt('enter count by number');
if(a==='' && b===''){
    alert('enter value first');
}
else if(a < 0 || b < 0){
   alert("enter positive number");
}
else if(a<b){
    alert("count to should be greater than count by");
}
for (let c=1; c<=a; c+=1){
output =c * b;
if (output<=a){


    console.log(output);
}
}*/



// user inputs a year
let enterYear=prompt('enter a year');

if(enterYear%4===0){        // if the year is divisible by 4 the its true
    if(enterYear%100===0){      //if the year is divisible by 100 the year is not a leap year
        if(enterYear%400===0){        //if the year is divisible by 400 its true
            console.log('the year is  a leap year');
        }
        else{  //else if not divisible by 400 is not a leap year
            console.log('is  not a leap year');
        }
       
    }
   else{    // else if not divisible 100 is leap year
       console.log('the year is  a leap year ')}
}
else{   //if not divisible by 4 is not a leap year
    console.log('this is not  leap year');
}