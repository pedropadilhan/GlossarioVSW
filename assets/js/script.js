
//Seleciona os itens clicado
var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

//Expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')
var menuLogo = document.querySelector('.bi-list')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
    menuLogo.classList.toggle('bi-x')
})

function mudaMenu(){
    let menuLogo = document.querySelector('btn-expandir')
}