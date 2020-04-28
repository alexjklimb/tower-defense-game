console.log("Working")
let lt= document.getElementById("littletower")
let lt2= document.getElementById("secondlittletower")
var counter = 0;
let lp= [{
x:window.innerWidth-45,
y:window.innerHeight/2-25-window.innerHeight*.25-30,
width:30,
height:window.innerHeight*.25+30,
dx:0,
dy:-1
},{
  x:15,
  y:window.innerHeight/2-55-window.innerHeight*.25,
  width:window.innerWidth-30,
  height:30,
  dx:-1,
  dy:0
  },{
    x:15,
    y:window.innerHeight/2-25-window.innerHeight*.25-30,
    width:30,
    height:window.innerHeight*.25+30,
    dx:0,
    dy:1
  }]
let littababies=[]
lt.style.left=window.innerWidth-45+"px"
lt.style.top=window.innerHeight/2-25+"px"
lt2.style.left="15px"
lt2.style.top=window.innerHeight/2-25+"px"




document.addEventListener("keydown", function(e){
  if (e.key==";"){
    sendbackup()}
  else if(e.key=="f"){
    sendbackup2()
  }
})
function tinypath(){
    for (i of lp){
    var lp1= document.createElement("div")
    lp1.style.left=i.x+"px"
    lp1.style.top=i.y+"px"
    lp1.style.width=i.width+"px"
    lp1.style.height=i.height+"px"
    lp1.style.position="absolute"
    lp1.style.backgroundColor="orange"
    document.body.appendChild(lp1)
  }}

function tinypath2(){
    for (i of lp){
      counter += 1;
    var lp1= document.createElement("div")
    lp1.style.left=i.x+"px"
    lp1.style.top=i.y+50+window.innerHeight*.25+30+"px"
    lp1.style.width=i.width+"px"
    lp1.style.height=i.height+"px"
    lp1.style.position="absolute"
    lp1.style.backgroundColor="orange"
    if (counter==2){
    lp1.style.top=25+window.innerHeight*.75+"px"}
    document.body.appendChild(lp1)
  }}


  function sendbackup(){
    var tinymidge= document.createElement("div")
    var  midget = {
     x:window.innerWidth-37.5,
     y:window.innerHeight/2-40,
     width:15,
     height:15,
     tinymidge:tinymidge,
     path:0
    }
    tinymidge.style.left= midget.x + "px"
    tinymidge.style.top= midget.y +"px"
    tinymidge.style.width=midget.width+"px"
    tinymidge.style.height=midget.height+"px"
    tinymidge.style.position="absolute"
    tinymidge.style.backgroundColor="blue"
    document.body.appendChild(tinymidge)
    littababies.push(midget)
  }
  function sendbackup2(){
    var tinymidge= document.createElement("div")
    var  midget = {
     x:25,
     y:window.innerHeight/2+20,
     width:15,
     height:15,
     tinymidge:tinymidge,
     path:0
    }
    tinymidge.style.left= midget.x + "px"
    tinymidge.style.top= midget.y +"px"
    tinymidge.style.width=midget.width+"px"
    tinymidge.style.height=midget.height+"px"
    tinymidge.style.position="absolute"
    tinymidge.style.backgroundColor="blue"
    document.body.appendChild(tinymidge)
    littababies.push(midget)
  }
tinypath2()
tinypath()

setInterval(()=>{
  for (midget of littababies){
  if (midget.y>=lp[midget.path].y+6.5&& midget.x>=lp[midget.path].x+6.5){
  midget.y+=lp[midget.path].dy
  midget.x+=lp[midget.path].dx
  midget.tinymidge.style.top=midget.y+"px"
  midget.tinymidge.style.left=midget.x+"px"
  if(midget.path==lp.length-1 && midget.y>window.innerHeight/2-25){
    document.body.removeChild(midget.tinymidge)
    littababies.splice(littababies.indexOf(midget), 1);
  }
}
else{
  midget.y+=1
  midget.x+=1
  midget.tinymidge.style.top=midget.y+"px"
  midget.tinymidge.style.left=midget.x+"px"
  midget.path+=1
}
}

},10)
