let navigation = document.getElementById("nav");
let toggle = document.getElementById("js-navbar-toggle")
let links = document.querySelectorAll("#nav li")
let projects = document.querySelector(".project-container");
let greeting = document.querySelector(".greeting");

let total = 0;


// Toggling navigation menu MOBILE VIEW
toggle.addEventListener('click', function(){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); // Viewport Width
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); //Viewport Height
    console.log(w, h)
    if(navigation.classList.contains('nav-show')){
        navigation.style.maxHeight="0px";
        navigation.style.opacity="0";
        navigation.classList.remove("nav-show")
    } else {
        navigation.style.maxHeight="200px";
        navigation.style.opacity="1";
        navigation.classList.add("nav-show")
    }
});
// When a link is clicked this will collapse the menu
for(var i = 0; i < links.length; i++){
   links[i].addEventListener("click", function(){
        if(navigation.classList.contains('nav-show')){
            navigation.style.maxHeight="0px";
            navigation.style.opacity="0";
            navigation.classList.remove("nav-show")
        } 
       
   })

}

// Scroll

// get scroll position in px
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    greeting.style.opacity = 1 - (scrollTop * .01);
    console.log(scrollTop * .01);
    console.log(w, h)
}, false)

projects.addEventListener('click', function(){
    console.log(total);
})
console.log(projects.scrollLeft, projects.scrollTop);


window.addEventListener("resize", function(){
    let width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); // Viewport Width
    if(width>=768){
        navigation.style.opacity="1";
    } else {
        navigation.style.opacity="0";
    }
})