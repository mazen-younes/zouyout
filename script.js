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
// Function to toggle the sidebar visibility
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar'); // Get the sidebar element
    sidebar.classList.toggle('active'); // Toggle the 'active' class to show or hide the sidebar
}

// Function to close the sidebar when clicking outside of it
function closeSidebarOnOutsideClick(event) {
    const sidebar = document.querySelector('.sidebar');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    // If the click is outside the sidebar and hamburger menu, close the sidebar
    if (!sidebar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        sidebar.classList.remove('active');
    }
}

// Event listener to close sidebar when clicking outside it
document.addEventListener('click', closeSidebarOnOutsideClick);

// Only activate sidebar toggle functionality if screen width is 768px or less
window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        // Remove sidebar toggle functionality on larger screens
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.remove('active');  // Ensure sidebar is not active on larger screens
        document.removeEventListener('click', closeSidebarOnOutsideClick); // Remove the outside click listener
    } else {
        // Add sidebar toggle functionality on small screens (<=768px)
        document.addEventListener('click', closeSidebarOnOutsideClick); // Re-add the outside click listener
    }
});

// Initialize for current screen size
if (window.innerWidth <= 768) {
    document.addEventListener('click', closeSidebarOnOutsideClick);
}
