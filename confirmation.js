// confirmation.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('confirmForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Extract form data if needed for any processing
        const formData = new FormData(form);
        const name = formData.get('name');
        const address = formData.get('address');
        const confirmAddress = formData.get('confirm-address');
        const mobileNumber = formData.get('mobile-number');
        const otherMobileNumber = formData.get('other-mobile-number');

        // Redirect to the main page
        window.location.href = 'index.html';

        // Show thank you message
        alert('Thank you for purchasing from Hetvi\'s Fashion.');
    });
});
