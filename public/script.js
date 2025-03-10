const sectionsData = [
    {
        id: "hero",
        type: "hero",
        title: "Добро пожаловать в мир настольных игр!",
        description: "Откройте для себя увлекательный мир настольных игр.",
        buttonText: "Узнать больше"
    },
    {
        id: "about",
        type: "about",
        title: "О нас",
        description: "Мы - команда энтузиастов, которая помогает людям находить лучшие настольные игры для любого случая."
    },
    {
        id: "features",
        type: "features",
        title: "Особенности",
        items: [
            { icon: "fas fa-dice", text: "Широкий выбор игр" },
            { icon: "fas fa-users", text: "Игры для всей семьи" },
            { icon: "fas fa-trophy", text: "Соревновательные игры" }
        ]
    },
    {
        id: "gallery",
        type: "gallery",
        title: "Галерея",
        images: ["image1.jpg", "image2.jpg"]
    },
    {
        id: "contact",
        type: "contact",
        title: "Контакты",
        formFields: [
            { type: "text", placeholder: "Ваше имя", id: "name" },
            { type: "email", placeholder: "Ваш email", id: "email" },
            { type: "textarea", placeholder: "Ваше сообщение", id: "message" }
        ],
        contactInfo: [
            "Адрес: ул. Примерная, 123",
            "Телефон: +7 (123) 456-78-90",
            "Email: info@example.com"
        ]
    }
];

function createSection(section) {
    let html = '';

    switch (section.type) {
        case "hero":
            html = `
                <h1>${section.title}</h1>
                <p>${section.description}</p>
                <button id="learn-more">${section.buttonText}</button>
            `;
            break;
        case "about":
            html = `
                <h2>${section.title}</h2>
                <p>${section.description}</p>
            `;
            break;
        case "features":
            html = `
                <h2>${section.title}</h2>
                <div class="features-grid">
                    <div class="feature-item">
                        <i class="${section.items[0].icon}"></i>
                        <p>${section.items[0].text}</p>
                    </div>
                    <div class="feature-item">
                        <i class="${section.items[1].icon}"></i>
                        <p>${section.items[1].text}</p>
                    </div>
                    <div class="feature-item">
                        <i class="${section.items[2].icon}"></i>
                        <p>${section.items[2].text}</p>
                    </div>
                </div>
            `;
            break;
        case "gallery":
            html = `
                <h2>${section.title}</h2>
                <div class="gallery-grid">
                    <img src="${section.images[0]}" alt="Игра 1">
                    <img src="${section.images[1]}" alt="Игра 2">
                </div>
            `;
            break;
        case "contact":
            html = `
                <h2>${section.title}</h2>
                <form id="contact-form">
                    <input type="${section.formFields[0].text}" id="${section.formFields[0].id}" placeholder="${section.formFields[0].placeholder}" required>
                    <input type="${section.formFields[1].text}" id="${section.formFields[1].id}" placeholder="${section.formFields[1].placeholder}" required>
                    <textarea id="${section.formFields[2].id}" placeholder="${section.formFields[2].placeholder}" required></textarea>
                    <button type="submit">Отправить</button>
                </form>
                <div class="contact-info">
                    <p>${section.contactInfo[0]}</p>
                    <p>${section.contactInfo[1]}</p>
                    <p>${section.contactInfo[2]}</p>
                </div>
            `;
            break;
        default:
            html = '';
            break;
    }

    return html;
}

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navUl = document.querySelector('header nav ul');
    const featuresSection = document.getElementById('features');

    menuIcon.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });

    sectionsData.forEach(section => {
        const sectionHTML = createSection(section);
        const Section = document.getElementById(section.id);
        if (sectionHTML != null && Section != null) {
            Section.insertAdjacentHTML('afterbegin', sectionHTML);
        }
    });

    const learnMoreButton = document.getElementById('learn-more');
    learnMoreButton.addEventListener('click', function() {
        if (featuresSection) {
            featuresSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Спасибо за ваше сообщение!');
            contactForm.reset();
        } else {
            alert('Пожалуйста, заполните все поля.');
        }
    });

    document.querySelectorAll('header nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const sections = document.querySelectorAll('section');

    const checkVisibility = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            if (sectionTop < window.innerHeight && sectionBottom > 0) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});