document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default behavior of anchor tag
            const sectionId = link.getAttribute('href');
            const section = document.querySelector(sectionId);
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            section.classList.add('active');
        });
    });
});
