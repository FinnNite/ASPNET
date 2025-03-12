const sectionHero = {
    id: "hero",
    type: "hero",
    title: "Добро пожаловать в мир настольных игр!",
    description: "Откройте для себя увлекательный мир настольных игр.",
    buttonText: "Узнать больше"
};
const sectionAbout = {
    id: "about",
    type: "about",
    title: "О нас",
    description: "Мы - команда энтузиастов, которая помогает людям находить лучшие настольные игры для любого случая."
};
const sectionFeatures = {
    id: "features",
    type: "features",
    title: "Особенности",
    items: [
        { icon: "fas fa-dice", text: "Широкий выбор игр" },
        { icon: "fas fa-users", text: "Игры для всей семьи" },
        { icon: "fas fa-trophy", text: "Соревновательные игры" }
    ]
};
const sectionGallery = {
    id: "gallery",
    type: "gallery",
    title: "Галерея",
    images: ["image1.jpg", "image2.jpg"]
};
const sectionContact = {
    id: "contact",
    type: "contact",
    title: "Контакты",
    formFields: [
        { type: "text", placeholder: "Ваше имя", id: "name" },
        { type: "email", placeholder: "Ваш email", id: "email" },
        { type: "textarea", placeholder: "Ваше сообщение", id: "message" }
    ],
    contactInfo: [
        "Адрес: ул. Пушкина, 123",
        "Телефон: +7 (123) 456-78-90",
        "Email: info@example.com"
    ]
};

function createSection(section) {
    let html = '';

    switch (section) {
        case "hero":
            html = `
                <h1>${sectionHero.title}</h1>
                <p>${sectionHero.description}</p>
                <button id="learn-more">${sectionHero.buttonText}</button>
            `;
            break;
        case "about":
            html = `
                <h2>${sectionAbout.title}</h2>
                <p>${sectionAbout.description}</p>
            `;
            break;
        case "features":
            html = `
                <h2>${sectionFeatures.title}</h2>
                <div class="features-grid">`
                sectionFeatures.items.forEach(feature => {
                    html += `<div class="feature-item">
                                <i class="${feature.icon}"></i>
                                <p>${feature.text}</p>
                            </div>`
                });
                html += `</div>`;
            break;
        case "gallery":
            html = `
                <h2>${sectionGallery.title}</h2>
                <div class="gallery-grid">`
            sectionGallery.images.forEach(image => {
                html += `<img src="${image}" alt="Игра">`
            });
            html += `</div>`;
            break;
        case "contact":
            html = `
                <h2>${sectionContact.title}</h2>
                <form id="contact-form">
                    <input type="${sectionContact.formFields[0].text}" id="${sectionContact.formFields[0].id}" placeholder="${sectionContact.formFields[0].placeholder}" required>
                    <input type="${sectionContact.formFields[1].text}" id="${sectionContact.formFields[1].id}" placeholder="${sectionContact.formFields[1].placeholder}" required>
                    <textarea id="${sectionContact.formFields[2].id}" placeholder="${sectionContact.formFields[2].placeholder}" required></textarea>
                    <button type="submit">Отправить</button>
                </form>
                <div class="contact-info">
                    <p>${sectionContact.contactInfo[0]}</p>
                    <p>${sectionContact.contactInfo[1]}</p>
                    <p>${sectionContact.contactInfo[2]}</p>
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
    console.log(menuIcon);
    console.log(navUl);
    const featuresSection = document.getElementById('features');

    menuIcon.addEventListener('click', function() {
        navUl.classList.toggle('show');
    });

    const SectionHero = document.getElementById('hero');
    if (SectionHero != null) {
        SectionHero.insertAdjacentHTML('afterbegin', createSection('hero'));
    }
    const SectionAbout = document.getElementById('about');
    if (SectionAbout != null) {
        SectionAbout.insertAdjacentHTML('afterbegin', createSection('about'));
    }
    const SectionFeatures = document.getElementById('features');
    if (SectionFeatures != null) {
        SectionFeatures.insertAdjacentHTML('afterbegin', createSection('features'));
    }
    const sectionGallery = document.getElementById('gallery');
    if (sectionGallery != null) {
        sectionGallery.insertAdjacentHTML('afterbegin', createSection('gallery'));
    }
    const sectionContact = document.getElementById('contact');
    if (sectionContact != null) {
        sectionContact.insertAdjacentHTML('afterbegin', createSection('contact'));
    }

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
            const contact = {
                name: name,
                email: email,
                message: message
            }
            alert(`Спасибо за ваше сообщение!
                Name: ${contact.name}
                Email: ${contact.email}
                Message: ${contact.message}`);
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