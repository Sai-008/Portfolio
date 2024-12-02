// Add event listeners to navbar links for smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetElement = document.querySelector(targetId);

        // Perform the scroll with a smooth effect
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Scroll to the top of the target element
        });
    });
});
