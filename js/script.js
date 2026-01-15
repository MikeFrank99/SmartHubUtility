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

    // --- Cookie Banner Logic ---
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookies = document.getElementById('acceptCookies');
    const declineCookies = document.getElementById('declineCookies');

    if (cookieBanner) {
        // Show banner if choice not saved
        if (!localStorage.getItem('cookieConsent')) {
            setTimeout(() => {
                cookieBanner.classList.add('active');
            }, 2000);
        }

        acceptCookies.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieBanner.classList.remove('active');
        });

        declineCookies.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'declined');
            cookieBanner.classList.remove('active');
        });
    }

    // --- Floating CTA Visibility ---
    // Removed scroll logic as CTA is now always visible

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
                // Real Web3Forms API Call
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerText;
                const formData = new FormData(contactForm);
                const object = Object.fromEntries(formData);
                const json = JSON.stringify(object);
                
                submitBtn.disabled = true;
                submitBtn.innerText = 'Invio in corso...';

                fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                })
                .then(async (response) => {
                    let json = await response.json();
                    if (response.status == 200) {
                        document.getElementById('formSuccess').style.display = 'block';
                        contactForm.reset();
                    } else {
                        console.log(response);
                        alert("Si è verificato un errore. Riprova più tardi.");
                    }
                })
                .catch(error => {
                    console.log(error);
                    alert("Errore di connessione. Controlla la tua rete.");
                })
                .then(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalText;
                    setTimeout(() => {
                        document.getElementById('formSuccess').style.display = 'none';
                    }, 5000);
                });
            }
        });
    }

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
                name.style.borderColor = 'var(--error)';
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
                const formData = new FormData(careerForm);
                
                submitBtn.disabled = true;
                submitBtn.innerText = 'Invio...';

                fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                })
                .then(async (response) => {
                    if (response.status == 200) {
                        document.getElementById('careerSuccess').style.display = 'block';
                        careerForm.reset();
                    } else {
                        const res = await response.json();
                        alert("Errore: " + (res.message || "Non è stato possibile inviare la candidatura."));
                    }
                })
                .catch(error => {
                    alert("Errore di rete durante l'invio del file.");
                })
                .finally(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalText;
                    setTimeout(() => {
                        document.getElementById('careerSuccess').style.display = 'none';
                    }, 5000);
                });
            }
        });
    }

    // --- n8n Chat (Fully Custom Implementation) ---
    const chatToggleBtn = document.getElementById('chatToggleBtn');
    const closeChat = document.getElementById('closeChat');
    const chatPanel = document.getElementById('chatPanel');
    const chatInput = document.getElementById('chatInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');

    const WEBHOOK_URL = 'https://n8n.michaelfrancazzi.com/webhook/a3aa6054-2127-4ea6-b54c-ca6f84464c24/chat';
    let sessionId = localStorage.getItem('chatSessionId') || Math.random().toString(36).substring(7);
    localStorage.setItem('chatSessionId', sessionId);

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', sender);
        
        if (sender === 'bot') {
            // Parse Markdown for bot messages
            msgDiv.innerHTML = marked.parse(text);
        } else {
            msgDiv.textContent = text;
        }
        
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function handleChat() {
        const message = chatInput.value.trim();
        if (!message) return;

        addMessage(message, 'user');
        chatInput.value = '';

        // Show typing indicator (optional placeholder)
        const typingDiv = document.createElement('div');
        typingDiv.classList.add('message', 'bot', 'typing-indicator');
        typingDiv.textContent = '...';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    chatInput: message,
                    sessionId: sessionId,
                    action: 'sendMessage'
                })
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            chatMessages.removeChild(typingDiv);

            // Se n8n restituisce un array o un oggetto con 'output' o 'text'
            const botResponse = data.output || data.text || (Array.isArray(data) ? data[0].output : "Risposta ricevuta in formato non valido.");
            addMessage(botResponse, 'bot');

        } catch (error) {
            if (typingDiv.parentNode) chatMessages.removeChild(typingDiv);
            addMessage("Errore di connessione. Verifica che il webhook n8n sia attivo e accetti richieste CORS.", 'bot');
            console.error('Detailed Chat Error:', error);
        }
    }

    if (chatToggleBtn && chatPanel) {
        chatToggleBtn.addEventListener('click', () => {
            chatPanel.classList.toggle('active');
            const icon = chatToggleBtn.querySelector('i');
            if (chatPanel.classList.contains('active')) {
                icon.className = 'fas fa-times';
                chatInput.focus();
            } else {
                icon.className = 'fas fa-comments';
            }
        });
    }

    if (closeChat) {
        closeChat.addEventListener('click', () => {
            chatPanel.classList.remove('active');
            chatToggleBtn.querySelector('i').className = 'fas fa-comments';
        });
    }

    if (sendMessage) sendMessage.addEventListener('click', handleChat);
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleChat();
        });
    }
});

// --- Helper function for "Richiedi Info" buttons ---
// Declared outside DOMContentLoaded to be accessible globally
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