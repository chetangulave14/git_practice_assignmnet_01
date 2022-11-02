let num = 13;
count=0;
for (let i=1;i<=num;i++){
if(num%i==0){
count++;
}
if(count==2){
console.log(num, "Is a prime number");
}else{
console.log("NA");
}

