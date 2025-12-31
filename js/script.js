document.addEventListener('DOMContentLoaded', () => {
    
    // --- Dynamic Logo Text ---
    const logoText = document.getElementById('logo-text');
    
    function updateLogo() {
        if (window.innerWidth < 480) {
            logoText.textContent = 'Shu.';
        } else {
            logoText.textContent = 'SmartHubUtility';
        }
    }

    // Initial check and listener
    if (logoText) {
        updateLogo();
        window.addEventListener('resize', updateLogo);
    }

    // --- Scroll Animations (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- Mobile Menu Logic ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
            }
        });
    });

    // --- ScrollSpy (Active Link Highlighting) ---
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // 150px offset to trigger highlight a bit before the section hits top
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Reset errors
            document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
            document.querySelectorAll('input').forEach(el => el.style.borderColor = '#ddd');

            // Name Validation
            const name = document.getElementById('name');
            if (name.value.trim().length < 3) {
                document.getElementById('nameError').style.display = 'block';
                name.style.borderColor = 'var(--error)';
                isValid = false;
            }

            // Email Validation
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                document.getElementById('emailError').style.display = 'block';
                email.style.borderColor = 'var(--error)';
                isValid = false;
            }

            // Phone Validation
            const phone = document.getElementById('phone');
            if (phone.value.trim().length < 8) {
                document.getElementById('phoneError').style.display = 'block';
                phone.style.borderColor = 'var(--error)';
                isValid = false;
            }

            // Privacy Validation
            const privacy = document.getElementById('privacy');
            if (!privacy.checked) {
                document.getElementById('privacyError').style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                // Simulation of API Call
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerText;
                
                submitBtn.disabled = true;
                submitBtn.innerText = 'Invio in corso...';

                setTimeout(() => {
                    document.getElementById('formSuccess').style.display = 'block';
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalText;
                    
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        document.getElementById('formSuccess').style.display = 'none';
                    }, 5000);
                }, 1500);
            }
        });
    }
});

    // --- Career Form Validation ---
    const careerForm = document.getElementById('careerForm');

    if (careerForm) {
        careerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Reset errors specific to career form
            careerForm.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
            careerForm.querySelectorAll('input').forEach(el => el.style.borderColor = '#e2e8f0');

            // Name
            const name = document.getElementById('c_name');
            if (name.value.trim().length < 3) {
                document.getElementById('c_nameError').style.display = 'block';
                name.style.borderColor = 'var(--error)';
                isValid = false;
            }

            // Email
            const email = document.getElementById('c_email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                document.getElementById('c_emailError').style.display = 'block';
                email.style.borderColor = 'var(--error)';
                isValid = false;
            }

            // Phone
            const phone = document.getElementById('c_phone');
            if (phone.value.trim().length < 8) {
                document.getElementById('c_phoneError').style.display = 'block';
                phone.style.borderColor = 'var(--error)';
                isValid = false;
            }
            
            // CV File
            const cv = document.getElementById('c_cv');
            if (cv.files.length === 0) {
                 document.getElementById('c_cvError').style.display = 'block';
                 isValid = false;
            }

            // Privacy
            const privacy = document.getElementById('c_privacy');
            if (!privacy.checked) {
                document.getElementById('c_privacyError').style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                const submitBtn = careerForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerText;
                
                submitBtn.disabled = true;
                submitBtn.innerText = 'Invio...';

                setTimeout(() => {
                    document.getElementById('careerSuccess').style.display = 'block';
                    careerForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalText;
                    
                    setTimeout(() => {
                        document.getElementById('careerSuccess').style.display = 'none';
                    }, 5000);
                }, 1500);
            }
        });
    }

    // --- Helper function for "Richiedi Info" buttons ---// Declared outside DOMContentLoaded to be accessible globally
function selectService(serviceValue) {
    const serviceSelect = document.getElementById('service');
    const contactSection = document.getElementById('contatti');
    
    if (serviceSelect && contactSection) {
        // Set the value
        serviceSelect.value = serviceValue;
        
        // Scroll to contact section
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}
