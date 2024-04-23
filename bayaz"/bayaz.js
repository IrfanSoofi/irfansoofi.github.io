const titles = document.querySelectorAll('.listing');
titles.forEach(title => {
  title.addEventListener('click', function handleClick(event) {
    let ctList = document.getElementById('container');
    ctList.style.display = 'none';
    let ctText = document.getElementById('contentText');
    ctText.style.display = 'block';
  });
});

let slideindex = 0;
showSlides(slideindex);

function showSlides(index) {
  let slides = document.querySelectorAll('.chapter');
  let dots = document.querySelectorAll('.listing');

  if (index >= slides.length) {
    slideindex = 0;
  } else if (index < 0) {
    slideindex = slides.length - 1;
  } else {
    slideindex = slideindex;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    dots[i].classList.remove('active');
  }
  slides[slideindex].style.display = 'block';
  dots[slideindex].classList.add('active');
};

document.querySelectorAll('.listing').forEach(function (element) {
  element.addEventListener('click', function () {
    let dots = Array.prototype.slice.call(this.parentElement.children);
    let dotIndex = dots.indexOf(element);
    showSlides(slideindex = dotIndex);
  });
});

// BUTTON NAVIGATION CODE
/* const Nbtns = document.querySelectorAll('.navigationN');
Nbtns.forEach(Nbtn => {
  Nbtn.addEventListener('click', function handleClick(event) {
    showSlides(--slideindex);
  });
});
const Bbtns = document.querySelectorAll('.navigationB');
Bbtns.forEach(Bbtn => {
  Bbtn.addEventListener('click', function handleClick(event) {
    showSlides(++slideindex);
  });
}); */

// CODE TO NAVIGATE NEXT & PREVIOUS SLIDES (FINGER TOUCH)

let imageSlider = document.getElementById('contentText');
let initialX, initialY, initialTime;

imageSlider.addEventListener('touchstart', function (e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
  initialTime = new Date();
});

imageSlider.addEventListener('touchend', function (e) {
  var deltaX = e.changedTouches[0].clientX - initialX;
  var deltaY = Math.abs(e.changedTouches[0].clientY - initialY);
  var deltaTime = new Date() - initialTime;

  if (deltaX >= 30 && deltaY <= 100 && deltaTime <= 300) {
    showSlides(++slideindex);
  }
  else if (deltaX <= -30 && deltaY <= 100 && deltaTime <= 300) {
    showSlides(--slideindex);
  }
});




