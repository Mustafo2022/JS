document.addEventListener('submit', (event)=>{
    event.preventDefault()
    let a = document.querySelector("#user").value
    let b = document.querySelector("#username")
    if(a.length >= 4){
        b.textContent = a
    } else {
        b.textContent = 'Username is less than 3!'
    }
})




let anArr = [];
for (let i = 1; i < 101; i++){
    let a = i
    anArr[i] = a
}

let createCards = y => {
    let match_container = document.querySelector("#mc");
    let matchElement = document.createElement('div');
  matchElement.classList.add('match-title'); 

  for(let i=0; i<y.length; i++){
    let infoDiv = document.createElement("div");
    infoDiv.classList.add("info");
    if(anArr[i] % 2 == 0){
    infoDiv.classList.add("green");
    }else{
    infoDiv.classList.add("yellow");
    }
    
    let numberSpan = document.createElement("span");
    numberSpan.classList.add("number");
    numberSpan.innerText = y[i];
    
    matchElement.appendChild(infoDiv);
    infoDiv.appendChild(numberSpan);
    match_container.appendChild(matchElement);
  }
}

createCards(anArr)

let display = document.querySelector('.display')
let btn = document.querySelector('.one')
let btn2 = document.querySelector('.two')
let btn3 = document.querySelector('.three')

function add_item(n){
    let value = display.textContent
    value = value - 0
    display.textContent = value + n
}

btn.addEventListener('click', ()=>{
    add_item(1)
})

btn2.addEventListener('click', ()=>{
    add_item(2)
})

btn3.addEventListener('click', ()=>{
    add_item(3)
})