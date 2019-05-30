const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
function scrollAppear() {
    var introText = document.querySelector('intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    if(introPosition < screenPosition) {
        introText.classList.add('intro-appear');
    }
    console.log(introPosition);
}
window.addEventListener('scroll', scrollAppear);