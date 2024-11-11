document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.scroll-text');
    scrollContainer.innerHTML = Array(5).fill(scrollContainer.innerHTML).join(' • ');
});

document.querySelector('.footer input[type="email"]').addEventListener('blur', function() {
    const email = this.value;
    if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
        alert('Please enter a valid email address.');
    }
});
function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('active');
}
