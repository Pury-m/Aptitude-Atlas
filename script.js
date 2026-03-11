const questions=[

"I enjoy solving complex problems",
"I enjoy working with numbers",
"I like helping people emotionally",
"I like building or fixing things",
"I enjoy artistic activities",
"I like analysing systems",
"I enjoy teaching others",
"I like leadership roles",
"I enjoy technology",
"I enjoy research",
"I like organizing tasks",
"I enjoy creativity",
"I enjoy debates",
"I like designing things",
"I enjoy solving puzzles",
"I enjoy teamwork",
"I like planning projects",
"I enjoy learning languages",
"I enjoy business ideas",
"I like exploring science",
"I enjoy writing",
"I like working independently",
"I enjoy motivating people",
"I like financial planning",
"I enjoy investigating problems",
"I like psychology",
"I enjoy innovation",
"I like logical thinking",
"I enjoy public speaking",
"I like mentoring",
"I enjoy planning strategies",
"I like studying behaviour",
"I enjoy computers",
"I like creating solutions",
"I enjoy analysis",
"I like architecture",
"I enjoy entrepreneurship",
"I like design thinking",
"I enjoy data",
"I like problem solving"

]

let index=0
let scores=[0,0,0,0]

const messages=[

"Great start!",
"Keep going!",
"You're doing amazing!",
"Halfway there!",
"Almost done!",
"Final stretch!"

]

function startTest(){

document.querySelector(".intro").classList.add("hidden")
document.getElementById("quiz").classList.remove("hidden")

showQuestion()

}

function showQuestion(){

document.getElementById("question").innerText=questions[index]

document.getElementById("bar").style.width=
((index/questions.length)*100)+"%"

document.getElementById("motivation").innerText=
messages[Math.floor(Math.random()*messages.length)]

}

function answer(value){

scores[index%4]+=value

index++

if(index<questions.length){

showQuestion()

}else{

document.getElementById("quiz").classList.add("hidden")
document.getElementById("payment").classList.remove("hidden")

}

}

function pay(){

let handler=PaystackPop.setup({

key:"pk_live_27802e668bfb1ca435951da564513bada32fe452",

email:"user@email.com",

amount:1500*100,

currency:"KES",

callback:function(){

showResults()

}

})

handler.openIframe()

}

function showResults(){

document.getElementById("payment").classList.add("hidden")
document.getElementById("results").classList.remove("hidden")

let careers=[
"Software Engineer",
"Psychologist",
"Architect",
"Entrepreneur"
]

let best=scores.indexOf(Math.max(...scores))

document.getElementById("career").innerText=
"Recommended Career: "+careers[best]

document.getElementById("jobs").href=
"https://www.google.com/search?q="+careers[best]+" jobs"

new Chart(document.getElementById("chart"),{

type:"radar",

data:{

labels:["Logic","Empathy","Creativity","Leadership"],

datasets:[{

data:scores

}]

}

})

}