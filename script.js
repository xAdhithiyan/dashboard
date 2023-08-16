let sidebar = document.querySelectorAll("#sidebar");
sidebar.forEach(n => n.addEventListener("mouseover", function(){
    n.childNodes[0].classList.add("reverseColor")
}))

sidebar.forEach(n => n.addEventListener("mouseout", function(){
    n.childNodes[0].classList.remove("reverseColor")
}))