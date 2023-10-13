const chooseColor = document.querySelectorAll('.choose__color-btm')
const chooseItem = document.querySelectorAll('.content-item')


chooseColor.forEach(function(element){
    element.addEventListener('click', open)
})

function open(evt){
    const target = evt.currentTarget;

    chooseColor.forEach(function(item){
        item.classList.remove('choose__color-btn--active')
    })

    target.classList.add('choose__color-btn--active')




}