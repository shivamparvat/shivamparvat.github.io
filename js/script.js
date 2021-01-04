const handBurger = document.querySelector('.handBurger')
const hander = document.querySelector('.headerNav')
document.querySelectorAll('.nev_item').forEach(item => {
  item.addEventListener('click', event => {
    handBurger.classList.remove('active')
    hander.classList.add('none')
  })
})


// handburger #######################################
handBurger.addEventListener('click', () => {
  if (handBurger.classList[1] == "active") {
    handBurger.classList.remove('active')
    hander.classList.add('none')
  }
  else {
  handBurger.classList.add('active')
    hander.classList.remove('none')
  }
})


// thame switch #############################################
document.querySelector('.lightDark').addEventListener('click', () => {
  const bodyRef =document.querySelector('body')
  bodyRef.classList.value == "light" ? bodyRef.classList.remove('light'): bodyRef.classList.add('light')
})



// popup card ##############################################################
const openGallery = document.querySelector(".gallery")
const openVideo = document.querySelector(".portfolio_video")
document.querySelector(".cardGallery")
.addEventListener("click", () => {
 openGallery.classList.remove('none')
})
document.querySelector(".cardVideo")
  .addEventListener("click", () => {
    openVideo.classList.remove('none')
  document.querySelector('.youtube-video').contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*')

})

document.querySelector('.cancelButton').addEventListener('click', (event) => {
  event.stopPropagation();
  openGallery.classList.add('none')
})

document.querySelector('.cancelVideoButton').addEventListener('click', (event) => {
  event.stopPropagation();
  openVideo.classList.add('none')
  document.querySelector('.youtube-video').contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
})


// slider #################################################
let slidePositon = 0;
const carouselItem = document.getElementsByClassName("carouselItem")
let slideNumber = carouselItem.length-1

function updatePosition() {
  for (let slide of carouselItem) {
    slide.classList.remove('carouselVisibal')
    slide.classList.add('none')
  }
  console.log(slidePositon)
  console.log(carouselItem)
  carouselItem[slidePositon].classList.add('carouselVisibal')
  carouselItem[slidePositon].classList.remove('none')
}

document.querySelector(".moveNext")
  .addEventListener("click", () => {
    slidePositon === 0 ? slidePositon = slideNumber : slidePositon--
    updatePosition()
  })

document.querySelector(".movePrev")
  .addEventListener("click", () => {
    slidePositon === slideNumber ? slidePositon = 0 : slidePositon++
    updatePosition()
  })





// live text ##############################################################
const wordElement = document.querySelector(".updating-text"),
  wordOne = ["Web Developer", "Graphic Designer"];

function removeTyping(randomPick, wordChoice, splitWord) {
 setTimeout(function () { 
  for (const [i, letter] of splitWord.entries()) {
     setTimeout(function () { 
      wordElement.textContent = wordElement.textContent.slice(0, wordElement.textContent.length - 1);
  }, 100 * i);
  }  }, 1000);
}


function restartType() {
  liveTyping();
}


function liveTyping() {
const randomPick = Math.floor(Math.random() * wordOne.length),
      wordChoice = wordOne[randomPick],
      splitWord = wordChoice.split("");
    for (const [i, letter] of splitWord.entries()) {
      setTimeout(function () {
        wordElement.textContent += letter;
        if (i === wordChoice.length - 1) {
          setTimeout(removeTyping(randomPick, wordChoice, splitWord), 400);
          setTimeout(restartType, 200 * wordChoice.length);
        }
      }, 200 * i);
    }
}
setInterval(liveTyping(), 20);