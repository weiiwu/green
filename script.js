
const subHeader = document.querySelector(".sub-header");
const collapsableToggle = document.querySelector(".collapsable-menu");
let slideIndex = 0;
const links = document.querySelectorAll(".link");

function removeLinks(){
    for(let i=0; i<links.length; i++){
        links[i].addEventListener('click', ()=>{
            subHeader.classList.toggle('active');
            collapsableToggle.classList.toggle('active');
        });
    }
}

collapsableToggle.addEventListener('click', (e) => {
    collapsableToggle.classList.toggle('active');
    subHeader.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    const scroll = document.documentElement.scrollTop;

    if(scroll > 0){
        subHeader.classList.add('fixed');
    }else{
        subHeader.classList.remove('fixed');
    }
});

function carousel() {
let i;
let x = document.getElementsByClassName("mySlides");
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
}
slideIndex++;
if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); 
}

carousel();
removeLinks();