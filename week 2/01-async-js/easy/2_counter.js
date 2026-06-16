let a = 0;
let interval =1000;
for(let i=0;i<10000;i++){
    setTimeout(() => {
    a++;
    console.log(a);
}, interval+=1000);
}
