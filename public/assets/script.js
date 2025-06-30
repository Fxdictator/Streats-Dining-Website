document.addEventListener('DOMContentLoaded', (event) => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.onclick = function() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        };
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.onclick = function() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        };
    }

    // --- START: New Modal Logic ---
    const modal = document.getElementById('reservation-modal');
    const closeButton = document.getElementById('modal-close-button');
    const reservationButtons = document.querySelectorAll('.reservation-button');

    if (modal) {
        // Function to open the modal
        const openModal = () => {
            modal.classList.remove('hidden');
        };

        // Function to close the modal
        const closeModal = () => {
            modal.classList.add('hidden');
        };

        // Add event listeners to all reservation buttons
        reservationButtons.forEach(button => {
            button.addEventListener('click', openModal);
        });

        // Add event listener to the close button
        if (closeButton) {
            closeButton.addEventListener('click', closeModal);
        }

        // Add event listener to close when clicking the overlay
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    // --- END: New Modal Logic ---
});