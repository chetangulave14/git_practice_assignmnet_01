function checkprime(num){

count=0;
for (let i=1;i<=num;i++){
if(num%i==0){
count++;
}
}if(count==2){
return true ;
}else{
return false;
}
}

let bag  = checkPrime(13)
if(bag=true){
console.log("prime")
}else{
console.log("Not prime")
}


