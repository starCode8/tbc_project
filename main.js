
const leftButton = document.querySelector('.btn-l');
const rightButton = document.querySelector('.btn-r');

const companiesDiv = document.querySelector('.companies');

const slider_dots = document.querySelector('.slider-dots')


const images = [
    ["image/usaid.png","image/spaceint.png","image/tineti.png"],
    ["image/tegeta.png","image/spectre.png","image/tbc-lizing.png"],
    ["image/ufc.png"]
]

let currentSlide = 0;

function showDots(){
    for(let i = 0; i < images.length; i++){
        const dot = document.createElement('div')
        dot.classList.add('dot')

        dot.addEventListener('click', () => {
            clearInterval(timer)
            currentSlide = i;
            showSlides(i)
            show()
        })

        slider_dots.append(dot)
    }
}

showDots()



function showSlides(index){
    companiesDiv.innerHTML = ''

    for(let i = 0; i < images[index].length; i++){
        [...slider_dots.children].forEach( el =>{
            el.style.background = '#e5e5e5'
        })



        const companyDiv = document.createElement('div')
        companyDiv.classList.add('company-div')

        const companyImg = document.createElement('img')
        companyImg.src = images[index][i];
        companyImg.id = `company-img-${index}-${i}`
        companyDiv.title = images[index][i].slice(6, images[index][i].length - 4)

        slider_dots.children[currentSlide].style.background = '#fff'

        companyDiv.append(companyImg)

        companiesDiv.append(companyDiv)
    }
}



let timer = null



showSlides(currentSlide)
currentSlide++
show()


function show(){
    clearInterval(timer)

    timer = setInterval(()=>{
        showSlides(currentSlide)

        if(currentSlide === images.length - 1){ // 2
            currentSlide = 0;
        }
        else{
            currentSlide++;
        }

    }, 5000)
}

rightButton.addEventListener('click', () => {
   
    clearInterval(timer)

    if(currentSlide === images.length - 1){
        currentSlide = 0;
    }
    else{
        currentSlide++;
    }

    showSlides(currentSlide)
    show()
});
leftButton.addEventListener('click', () => {
    
    clearInterval(timer)

    if(currentSlide === 0){
        currentSlide = images.length - 1;
    }
    else{
        currentSlide--;
    }

    showSlides(currentSlide)
    show()
});







//////////////// DROP DOWN //////////////////


const questions = document.querySelectorAll('.question-block')

questions.forEach( el =>{
    el.querySelector('.question-title').addEventListener('click', () =>{
        const option = parseInt(el.id.toString().slice(9))

        questions.forEach( ell =>{
            if(parseInt(ell.querySelector('.question-text').id.toString().slice(14)) !== option){
                ell.querySelector('.question-text').classList.remove("shown")
            }
        })

        const text_block = document.querySelector(`#question-text-${option}`)

        if(text_block.classList.contains("shown")){
            text_block.classList.remove("shown")
        }
        else{
            text_block.classList.add("shown")
        }
    })
})



// NAV BAR

  document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navBar");
    var lastScrollTop = 0;
  
    window.addEventListener("scroll", function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.background = "#242423";
        navbar.style.opacity = "0.95"; 
      } else {
        
        if (scrollTop === 0) {
          
          navbar.style.background = "#1a1e1f";
          navbar.style.opacity = "1";
        }
      }
  
      lastScrollTop = scrollTop;
    });
  });