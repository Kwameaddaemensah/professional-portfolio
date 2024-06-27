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
