gsap.from("#text1 h1",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.4
})
function scrollToNextPage() {
    var currentScroll = window.scrollY;
    var pageHeight = window.innerHeight;
    var nextPageScroll = Math.ceil((currentScroll + 1) / pageHeight) * pageHeight;
    window.scrollTo({
      top: nextPageScroll,
      behavior: 'smooth'
    });
  }
function scrollTwoPages() {
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    window.scrollBy(0, viewportHeight * 2);
  }
 
function animateElement() {
    gsap.from("#ready", {
    opacity:0,
    delay:2,
    duration:2,
    stagger:0.4
    });
  }

  // Add a click event listener to the button
  document.getElementById("buttonToThirdPage").addEventListener("click", animateElement);
 
  
  function displayText1() {
    var textElement = document.getElementById('c21');
    textElement.style.visibility = (textElement.style.visibility === 'visible') ? 'hidden' : 'visible';
  }
  function displayText2() {
    var textElement = document.getElementById('c31');
    textElement.style.visibility = (textElement.style.visibility === 'visible') ? 'hidden' : 'visible';
  }
  function displayText3() {
    var textElement = document.getElementById('c32');
    textElement.style.visibility = (textElement.style.visibility === 'visible') ? 'hidden' : 'visible';
  }
  function displayText4() {
    var textElement = document.getElementById('c41');
    textElement.style.visibility = (textElement.style.visibility === 'visible') ? 'hidden' : 'visible';
  }
  function displayText5() {
    var textElement = document.getElementById('c42');
    textElement.style.visibility = (textElement.style.visibility === 'visible') ? 'hidden' : 'visible';
  }
  function displayText6() {
    var textElement = document.getElementById('c51');
    textElement.style.visibility = (textElement.style.visibility === 'visible') ? 'hidden' : 'visible';
  }
  function displayText7() {
    var textElement = document.getElementById('c52');
    textElement.style.visibility = (textElement.style.visibility === 'visible') ? 'hidden' : 'visible';
  }



  
