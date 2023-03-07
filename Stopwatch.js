let p = document.querySelector("p");
let start = document.querySelectorAll("button")[0];
let pause = document.querySelectorAll("button")[1];
let reset = document.querySelectorAll("button")[2];
pause.style.display="none";
reset.style.display="none";
let milliseconds=0;
let seconds=0;
let minutes=0;
let hour=0;
let ms;
let sec;
let min;
let hr;
let is_pause = false;

function Stopwatch(){

ms = setInterval(function(){
milliseconds++;

p.innerHTML=`0${hour}:0${minutes}:0${seconds}:0${milliseconds}`

if(milliseconds>9){
p.innerHTML=`0${hour}:0${minutes}:0${seconds}:${milliseconds}`
}
if(milliseconds===60){
milliseconds=0;
p.innerHTML=`0${hour}:0${minutes}:0${seconds}:0${milliseconds}`}
},150)

sec=setInterval(function(){
seconds++;
p.innerHTML=`0${hour}:0${minutes}:${seconds}:0${milliseconds}`

if(seconds>9){
	p.innerHTML=`0${hour}:0${minutes}:${seconds}:0${milliseconds}`
}

if(seconds===60){
	seconds=0;
p.innerHTML=`0${hour}:0${minutes}:${seconds}:0${milliseconds}`

}

},1000)


min=
setInterval(function(){
minutes++;

if(minutes===60){
	minutes=0;
}
p.innerHTML=`0${hour}:0${minutes}:${seconds}:0${milliseconds}`
},60000)



hr=setInterval(function(){
hour++;
p.innerHTML=`0${hour}:0${minutes}:${seconds}:0${milliseconds}`
},360000)
}


start.addEventListener("click",()=>{
Stopwatch();
start.style.display="none"
pause.style.display="inline-block";
reset.style.display="inline-block";
})


let s1 = ()=>{ 

clearInterval(ms)
clearInterval(hr)
clearInterval(min)
clearInterval(sec)

}



pause.addEventListener("click",()=>{
if(!is_pause){
	s1();	
}
if(is_pause){
Stopwatch();
}
is_pause=!is_pause;
})


reset.addEventListener("click",()=>{
s1();
start.style.display="inline-block"
pause.style.display="none";
p.innerHTML=`00:00:00:00`

})