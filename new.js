let $= document
let container=$.querySelector('.container')
let num=$.querySelectorAll('.number-item')
let modalElem =$.querySelector('.modal-container')
let spanElem=$.querySelector('.modal-selected')
let btn=$.querySelector('.submit-btn')
num.forEach(function(score){
score.addEventListener('click',function(event){
spanElem.innerHTML='You selected '+event.target.innerHTML+' out of 5'
})
})
btn.addEventListener('click',function(){
    container.style.display='none'
    modalElem.style.display='flex'
})
