// Cache the DOM
var button = document.getElementById("button")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var img = document.getElementById("rounded-img")


// Add event listener
button.addEventListener("click", altaViata)


// Define function
function altaViata() {
       nume.innerHTML = "Engineer"
       prenume.innerHTML = "Microsoft"

     educatie.innerHTML = "Experiente"
     asteptari.innerHTML = "<ul><li>Libertate Financiara</li><li>Educatie superioara</li></ul>"

     img.src ="images/michael.jpg"
     img.style.opacity = "70%"
     img.style.width = "200px"
     img.style.height = "300px"
     img.style.border = "3px solid black"



}
