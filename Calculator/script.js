let displayValue = document.querySelector('#inptValue');
let btns = document.querySelectorAll('.btns button');
console.log(btns);

for(let i = 0; i<btns.length; i++){
  let btn = btns[i]
  
  btn.addEventListener('click',function(e){
    let textValue = e.target.innerText;
   
    if(textValue === '='){
       displayValue.value = eval(displayValue.value)
    }
    else if(textValue === 'C'){
      displayValue.value = ''
    }
    else{
      displayValue.value += textValue
    }

  })
}
