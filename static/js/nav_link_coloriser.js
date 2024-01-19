/**
 * Loop through links to add or remove 'active' class
 */
const addOrRemoveActiveClass = () => {

    let navbarLinks = document.querySelectorAll('.nav-links a')

    window.addEventListener('scroll', event => {
        scrollPos = window.scrollY

        navbarLinks.forEach((link) => {
            const section = document.querySelector(link.hash);
             if (scrollPos + 100 > section.offsetTop && scrollPos + 100 < section.offsetTop + section.offsetHeight) {
                link.classList.add('active')
             } else {
                link.classList.remove('active')
             }
        })
    })
}

/**
 * Update the background color of the navbar depending on the position the current section
 */
const updateNavbarBackgroundColor = () => {
    const sectionColors = {
        home: 'rgba(121, 191, 137, 0.3)', // #79bf89 avec une transparence de 70%
        about: 'rgba(133, 133, 200, 0.3)', // #79bf89 avec une transparence de 70%
        achievement: 'rgba(237, 229, 226, 0.3)', // #ede5e2 avec une transparence de 70%
        contact: 'rgba(245, 245, 245, 0.3)', // #f5f5f5 avec une transparence de 70%
    }

    let sectionLinks = document.querySelectorAll('#home,#about,#achievement,#contact')
    const navbar = document.querySelector('.container.navbar');

    window.addEventListener('scroll', event => {
        scrollPos = window.scrollY

        sectionLinks.forEach((section) => {
             if (scrollPos + 100 > section.offsetTop && scrollPos + 100 < section.offsetTop + section.offsetHeight) {
                navbar.style.backgroundColor = sectionColors[section.id]
             } else {
                
             }
        })
    })
}

addOrRemoveActiveClass()
updateNavbarBackgroundColor()