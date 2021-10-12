const menu = document.querySelector('.menu')
const menuva = document.querySelector('.menu-navegacion')

// console.log(menu)
// console.log(menuva)

menu.addEventListener('click', ()=>{
    menuva.classList.toggle("spread")
})


window.addEventListener('click', e=>{
    if(menuva.classList.contains('spread')
         &&  e.target !=menuva && e.target  !=menu){
            menuva.classList.toggle("spread")
        

    }
})