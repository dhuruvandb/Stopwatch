let p = document.querySelector("p");
let start = document.querySelectorAll("button")[0];
let pause = document.querySelectorAll("button")[1];
let reset = document.querySelectorAll("button")[2];
let milliseconds=0;
let seconds=00;
let minutes=00;
let hour=00;


let timer = ()=>{

setInterval(function(){
milliseconds++;
if(milliseconds===60){
	milliseconds=00;
}
p.innerHTML=`${hour}:${minutes}:${seconds}:${milliseconds}`
},150)

setInterval(function(){
seconds++;
if(seconds===60){
	seconds=00;
}
p.innerHTML=`${hour}:${minutes}:${seconds}:${milliseconds}`
},1000)

setInterval(function(){
minutes++;
if(minutes===60){
	minutes=00;
}
p.innerHTML=`${hour}:${minutes}:${seconds}:${milliseconds}`
},60000)

setInterval(function(){
hour++;
p.innerHTML=`${hour}:${minutes}:${seconds}:${milliseconds}`
},360000)

}

start.addEventListener("click",timer)


pause.addEventListener("click",()=>{alert("Click Ok to continue")})

reset.addEventListener("click",()=>{ 
clearInterval(timer)
milliseconds=00;
seconds=00;
minutes=00;
let hour=00;

})