
    
const navbar = document.querySelector('.navbar');

function handleScroll() {
    if (window.scrollY > 20) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);
