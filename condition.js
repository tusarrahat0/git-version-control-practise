
// odd/even => 10 % 2 => 0 => even||oddfunction condition(){
/* function condition(){
   const data =55;
   if (data % 2 ==0){
      console.log (data + "is a even number.");
   } else if(data%2==1){
      console.log (data +" is a odd number. ");
   } else {
      console.log("Enter a valid number. ");
   }
}
condition();
*/
/* 
function condition(data){
   
   const a=5;
   const b ="5"; 
   if (data %2 ==0){
   console.log(`${data}   is a  even number.`);
   } else if (data%2==1){
      console.log(`${data} is a odd number.`);
   } else if ( data==0){
      console.log("The number is zero.");
   } else{
      console.log("Enter a valid number. ");
   }
}
condition(5);
*/
function condition (){
   const data = 85;
   if (data>=100){
      console.log ("Got a grade A+.");
   } else if (data>=70){
      console.log ("Got a grade A.");
   } else if (data>=60){
      console.log ("Got a grade A-.");
   }  else if(data>=50){
      console.log ("Got a grade B.");
   } else if (data<50){
      console.log ("Failed.");
   }  else {
      console.log ("Enter a valid number.");
   }
}
condition();