/*==== SHOW MENU =====*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')  

      /*====MENU SHOW ====*/
      /*Vlidate if constant exist*/
      if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
      }

      /*==== MENU HIDDEN ====*/
      /*Vlidate if constant exist*/
      if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
      }

      /*====REMOVE MENU MOBILE ====*/
      const navLink = document.querySelectorAll('.nav__link')

      const linkAction = () =>{
        const navMenu = document.getElementById('nav-menu')
        //When we click on each nav__link, we remove the show-menu 
        navMenu.classList.remove('show-menu')
      }
      navLink.forEach(n => n.addEventListener('click', linkAction))

      /*==== SHADOW HEADER ==== */
      const shadowHeader = () =>{
        const header = document.getElementById('header')

        this.scrollY >= 50 ? header.classList.add('shadow-header')
                           : header.classList.remove('shadow-header')
      }
      window.addEventListener('scroll', shadowHeader)

      /*==== EMAIL JS ==== */
      const contactForm = document.getElementById('contact-form'),
            contactMessage = document.getElementById('contact-message')

      const sendEmail = (e) =>{
            e.preventDefault()

            // serviceID - templateID - #form - publicKey
            emailjs.sendForm('service_bmspg7h','template_ewcvr68','#contact-form','w5Tw8NtqXe8erwl8B')
            .then(() =>{
              //show sent message
              contactMessage.textContent = 'Message sent successfully'

              //Remove message after five seconds
              setTimeout(() => {
                contactMessage.textContent = ''
              }, 5000)

              //clear input fields
              contactForm.reset()
            },() =>{
              // show error message
              contactMessage.textContent = 'Message not sent (Service Error)'
            })
      }
      contactForm.addEventListener('submit', sendEmail)

       /*==== SCROLL UP ==== */
       const scrollUp = () =>{
        const scrollUp = document.getElementById('scroll-up')

        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            : scrollUp.classList.remove('show-scroll')
       }
       window.addEventListener('scroll', scrollUp)

      /*==== SCROLL SECTION ACTIVE LINK ==== */
      const sections = document.querySelectorAll('section[id]')

      const scrollActive = () =>{
        const scrollDown = window.scrollY

        sections.forEach(current =>{
          const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetHeight - 58,
                sectionId = current.getAttribute('id'),
                sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

          if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
          }else{
            sectionClass.classList.remove('active-link')
          }
        })
      }
      window.addEventListener('scroll', scrollActive)

       /*==== DARK LIGHT THEME ==== */
       const themeButton = document.getElementById('theme-button')
       const darkTheme = 'dark-theme'
       const iconTheme = 'ri-sun-line'

       //Previously selected topic (if user selected)
       const selectedTheme = localStorage.getItem('selected-theme')
       const selectedIcon = localStorage.getItem('selected-icon')

       //We obtain the current theme that the interface has by validating the dark-theme class
       const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
       const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

       //We validate if the user previously chose a topic
       if (selectedTheme) {
        document.body.classList[selectedTheme == 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon == 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
       }

       //Activate / deactivate the theme manually with the button
       themeButton.addEventListener('click', () => {
        //Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        //We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
       })

      /*==== SCROLL REVEAL ANIMINATION ==== */
      const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
        //reset: true // Animation repeat
      })

      sr.reveal(`.home__profile, .about__image, .contact__mail`, {origin: 'right'})
      sr.reveal(`.home__name, .home__info, .about__container .section__title-1, about__info, .contact__social, .contact__data`, {origin: 'left'})
      sr.reveal(`.services__card, .projects__card`, {interval: 100})