document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Sticky Navbar Styling on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
        } else {
            navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        }
    });

    // Form Handling (for booking and contact)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate form submission
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;

            btn.innerText = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                alert('ขอบคุณ! คำขอของคุณถูกส่งเรียบร้อยแล้ว');
                form.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1500);
        });
    });

    // Room Search Functionality
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const roomTypeFilter = document.getElementById('roomTypeFilter');
            const guestFilter = document.getElementById('guestFilter');

            if (!roomTypeFilter || !guestFilter) return;

            const roomType = roomTypeFilter.value;
            const guests = guestFilter.value;
            const roomCards = document.querySelectorAll('.room-card');

            roomCards.forEach(card => {
                const cardType = card.getAttribute('data-type');
                const cardGuests = parseInt(card.getAttribute('data-guests') || '0');

                const typeMatch = (roomType === 'all') || (roomType === cardType);

                let guestMatch = true;
                if (guests !== 'all') {
                    guestMatch = cardGuests >= parseInt(guests);
                }

                if (typeMatch && guestMatch) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});
