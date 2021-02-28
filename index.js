// Code your solutions in this file

function writeCards(names,eventName){
    var newArray=[]
     for(let i=0;i<names.length;i++){
     newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
 
     }
 return newArray
 }

function countDown(n){
    let i=n+1;
while(i>0){
console.log(--i)
}

}