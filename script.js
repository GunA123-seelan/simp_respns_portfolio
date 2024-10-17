document.addEventListener('DOMContentLoaded', function () {
    const faders = document.querySelectorAll('.fade-in');
    const options = {
        threshold: 0.5, // Trigger animation when 50% of the element is in view
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        });
    }, options);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Contact form handling
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Message sent successfully!');
    });
});
