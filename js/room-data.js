const roomData = {
    'superior': {
        name: 'ห้องซูพีเรีย คิง',
        price: '850',
        guests: '2 ท่าน',
        size: '24 ตร.ม.',
        bed: '1 คิงไซส์',
        view: 'วิวเมือง',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
        description: 'สัมผัสความสะดวกสบายในห้องซูพีเรีย คิง ของเรา ออกแบบด้วยสไตล์ลอฟท์อินดัสเทรียล ผนังปูนเปลือยผสานกับแสงสีนวลและงานไม้ ให้ความรู้สึกอบอุ่นและสงบ เป็นที่พักผ่อนที่สมบูรณ์แบบใจกลางเมืองหลังจากเหนื่อยล้าจากการท่องเที่ยวเชียงใหม่',
        amenities: [
            { icon: 'fas fa-wifi', text: 'ฟรี Wi-Fi ความเร็วสูง' },
            { icon: 'fas fa-tv', text: 'แอลอีดี ทีวี 43"' },
            { icon: 'fas fa-snowflake', text: 'เครื่องปรับอากาศ' },
            { icon: 'fas fa-shower', text: 'เครื่องทำน้ำอุ่น' },
            { icon: 'fas fa-box', text: 'ตู้นิรภัย' },
            { icon: 'fas fa-tint', text: 'น้ำดื่มฟรี (2)' },
            { icon: 'fas fa-wind', text: 'ไดร์เป่าผม' },
            { icon: 'fas fa-mug-hot', text: 'กาต้มน้ำ' }
        ]
    },
    'deluxe': {
        name: 'ห้องดีลักซ์ ทวิน',
        price: '950',
        guests: '2 ท่าน',
        size: '28 ตร.ม.',
        bed: '2 เตียงเดี่ยว',
        view: 'วิวเมือง / วิวสวน',
        image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
        description: 'ห้องพักกว้างขวางที่มาพร้อมกับเตียงคู่สองเตียง เหมาะสำหรับเพื่อนหรือครอบครัวที่ต้องการพื้นที่ส่วนตัว แยกสัดส่วนมุมพักผ่อนและมุมทำงานอย่างลงตัว พร้อมหน้าต่างบานใหญ่ที่เปิดรับแสงธรรมชาติอย่างเต็มที่',
        amenities: [
            { icon: 'fas fa-wifi', text: 'ฟรี Wi-Fi ความเร็วสูง' },
            { icon: 'fas fa-tv', text: 'สมาร์ททีวี 50"' },
            { icon: 'fas fa-snowflake', text: 'เครื่องปรับอากาศ' },
            { icon: 'fas fa-shower', text: 'ฝักบัวเรนชาวเวอร์' },
            { icon: 'fas fa-couch', text: 'มุมนั่งเล่น' },
            { icon: 'fas fa-tint', text: 'น้ำดื่มฟรี (4)' },
            { icon: 'fas fa-wind', text: 'ไดร์เป่าผม' },
            { icon: 'fas fa-coffee', text: 'ชุดชา/กาแฟ' }
        ]
    },
    'suite': {
        name: 'เอ็กเซ็กคิวทีฟ สวีท',
        price: '1,200',
        guests: '3 ท่าน',
        size: '35 ตร.ม.',
        bed: '1 คิงไซส์ + 1 โซฟาเบด',
        view: 'วิวดอยสุเทพ',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
        description: 'ยกระดับการพักผ่อนของคุณในห้องสวีทสุดหรู ที่มอบพื้นที่กว้างขวางเป็นพิเศษ แบ่งสัดส่วนห้องนอนและห้องนั่งเล่นอย่างชัดเจน ตกแต่งอย่างพิถีพิถัน พร้อมสิ่งอำนวยความสะดวกระดับพรีเมียม เพื่อประสบการณ์ที่เหนือกว่า',
        amenities: [
            { icon: 'fas fa-wifi', text: 'ฟรี Wi-Fi ความเร็วสูง' },
            { icon: 'fas fa-tv', text: 'สมาร์ททีวี 55"' },
            { icon: 'fas fa-bath', text: 'อ่างอาบน้ำ' },
            { icon: 'fas fa-wine-glass', text: 'มินิบาร์' },
            { icon: 'fas fa-couch', text: 'ห้องนั่งเล่นแยก' },
            { icon: 'fas fa-user-tie', text: 'เสื้อคลุมอาบน้ำ' },
            { icon: 'fas fa-wind', text: 'ไดร์เป่าผม' },
            { icon: 'fas fa-coffee', text: 'เครื่องชงกาแฟแคปซูล' }
        ]
    },
    'family': {
        name: 'ห้องสำหรับครอบครัว',
        price: '1,500',
        guests: '4 ท่าน',
        size: '40 ตร.ม.',
        bed: '1 คิงไซส์ + 2 เตียงเดี่ยว',
        view: 'วิวเมือง',
        image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
        description: 'พื้นที่แห่งความสุขสำหรับทุกคนในครอบครัว ห้องพักขนาดใหญ่ที่รองรับสมาชิกได้ถึง 4 ท่าน พร้อมพื้นที่ทำกิจกรรมร่วมกัน และมุมส่วนตัวสำหรับทุกคน สิ่งอำนวยความสะดวกครบครันเพื่อให้วันพักผ่อนของคุณราบรื่นที่สุด',
        amenities: [
            { icon: 'fas fa-wifi', text: 'ฟรี Wi-Fi ความเร็วสูง' },
            { icon: 'fas fa-tv', text: 'ทีวี 2 เครื่อง' },
            { icon: 'fas fa-snowflake', text: 'เครื่องปรับอากาศ (2)' },
            { icon: 'fas fa-utensils', text: 'โต๊ะทานอาหาร' },
            { icon: 'fas fa-gamepad', text: 'มุมเด็กเล่น' },
            { icon: 'fas fa-box', text: 'พื้นที่เก็บของใหญ่' },
            { icon: 'fas fa-wind', text: 'ไดร์เป่าผม (2)' },
            { icon: 'fas fa-microwave', text: 'ไมโครเวฟส่วนกลาง' }
        ]
    }
};
