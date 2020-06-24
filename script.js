const toggleButton = document.getElementsByClassName('navbar_toggle')[0]
const navbarLinks = document.getElementsByClassName('navbar_links')[0]

toggleButton.addEventListener('click' , () => (
    navbarLinks.classList.toggle('active')
))