let p = document.querySelector("p");
let start = document.querySelectorAll("button")[0];
let pause = document.querySelectorAll("button")[1];
let reset = document.querySelectorAll("button")[2];
pause.style.display="none";
reset.style.display="none";
let milliseconds=0;
let seconds=00;
let minutes=00;
let hour=00;


let timer = {

ms:()=>{setInterval(function(){
milliseconds++;
p.innerHTML=`${hour}:${minutes}:${seconds}:${milliseconds}`.padStart(2, '0');

if(milliseconds===60){
milliseconds=0;
}


},150)},
sec:()=>{setInterval(function(){
seconds++;
p.innerHTML=`${hour}:${minutes}:${seconds}:${milliseconds}`
if(seconds===60){
	seconds=00;
}

},1000)},

min:()=>{setInterval(function(){
minutes++;
if(minutes===60){
	minutes=00;
}
p.innerHTML=`${hour}:${minutes}:${seconds}:${milliseconds}`
},60000)},

hour:()=>{setInterval(function(){
hour++;
p.innerHTML=`${hour}:${minutes}:${seconds}:${milliseconds}`
},360000)}

}

start.addEventListener("click",()=>{

timer.ms()
timer.sec()
timer.min()
timer.hour()
pause.style.display="inline-block";
reset.style.display="inline-block";
})


pause.addEventListener("click",()=>{alert("Click Ok to continue")})

reset.addEventListener("click",()=>{ 

clearInterval(()=>{
timer.ms()
timer.sec()
timer.min()
timer.hour()
})

milliseconds=00;
seconds=00;
minutes=00;
let hour=00;

})