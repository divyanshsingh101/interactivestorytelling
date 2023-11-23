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
 

 


