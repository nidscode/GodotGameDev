function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:'smooth'})
}

window.onload=()=>{
document.querySelector('.xp-fill').style.width='82%'
}

// Modal
function openModal(id){
document.getElementById(id).style.display='flex'
}
function closeModal(id){
document.getElementById(id).style.display='none'
}

// Starfield
const canvas=document.getElementById('bg')
const ctx=canvas.getContext('2d')
canvas.width=window.innerWidth
canvas.height=window.innerHeight

let stars=[]
for(let i=0;i<120;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
d:Math.random()*0.5
})
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height)
ctx.fillStyle="#00f5ff"
stars.forEach(s=>{
ctx.beginPath()
ctx.arc(s.x,s.y,s.r,0,Math.PI*2)
ctx.fill()
s.y+=s.d
if(s.y>canvas.height)s.y=0
})
requestAnimationFrame(draw)
}
draw()
