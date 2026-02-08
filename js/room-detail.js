document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const roomId = urlParams.get('id');

    if (roomId && roomData && roomData[roomId]) {
        const room = roomData[roomId];

        // Update Page Title
        document.title = `${room.name} - สันติธรรม เชียงใหม่`;

        // Update Hero Background
        const hero = document.getElementById('room-hero');
        if (hero) hero.style.backgroundImage = `url('${room.image}')`;

        // Update content
        const nameEl = document.getElementById('room-name');
        if (nameEl) nameEl.textContent = room.name;

        const priceEl = document.getElementById('room-price');
        if (priceEl) priceEl.innerHTML = `${room.price} บาท <span style="font-size: 1rem; color: #666; font-weight: 400;">/ คืน</span>`;

        const descEl = document.getElementById('room-desc');
        if (descEl) descEl.textContent = room.description;

        // Update Meta Grid
        const metaGrid = document.getElementById('room-meta');
        if (metaGrid) {
            metaGrid.innerHTML = `
                <div class="room-meta-item">
                    <i class="fas fa-user-friends"></i>
                    <div>
                        <strong>ผู้เข้าพัก</strong>
                        <p>${room.guests}</p>
                    </div>
                </div>
                <div class="room-meta-item">
                    <i class="fas fa-vector-square"></i>
                    <div>
                        <strong>ขนาด</strong>
                        <p>${room.size}</p>
                    </div>
                </div>
                <div class="room-meta-item">
                    <i class="fas fa-bed"></i>
                    <div>
                        <strong>เตียง</strong>
                        <p>${room.bed}</p>
                    </div>
                </div>
                <div class="room-meta-item">
                    <i class="fas fa-eye"></i>
                    <div>
                        <strong>วิว</strong>
                        <p>${room.view}</p>
                    </div>
                </div>
            `;
        }

        // Update Amenities
        const amenitiesList = document.getElementById('room-amenities');
        if (amenitiesList && room.amenities) {
            amenitiesList.innerHTML = room.amenities.map(a =>
                `<div class="amenity"><i class="${a.icon}"></i> ${a.text}</div>`
            ).join('');
        }
    } else {
        // Fallback or default content (current content is for Superior, so we might just leave it or redirect)
        // Ideally if no ID is provided, it defaults to what's in HTML (Superior) which is fine.
    }
});
