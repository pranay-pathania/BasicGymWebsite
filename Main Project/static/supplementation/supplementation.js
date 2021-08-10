let learn = document.getElementById('learn')
let protein = document.getElementById('protein')
let fat = document.getElementById('fat')
let other = document.getElementById('other')
let main = document.getElementById('main')

function showLearn(){
    learn.style.display = 'block'
    protein.style.display = 'none'
    fat.style.display = 'none'
    other.style.display = 'none'
    main.style.display = 'none'
}

function showProtein(){
    learn.style.display = 'none'
    protein.style.display = 'block'
    fat.style.display = 'none'
    other.style.display = 'none'
    main.style.display = 'none'
}

function showFat(){
    learn.style.display = 'none'
    protein.style.display = 'none'
    fat.style.display = 'block'
    other.style.display = 'none'
    main.style.display = 'none'
}

function showOthers(){
    learn.style.display = 'none'
    protein.style.display = 'none'
    fat.style.display = 'none'
    other.style.display = 'block'
    main.style.display = 'none'
}