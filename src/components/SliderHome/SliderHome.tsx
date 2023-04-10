import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Cài đặt các module của Swiper
SwiperCore.use([Navigation, Pagination, Autoplay]);

// Dữ liệu ví dụ
const slides = [
    {
        id: 1,
        title: "Slide 1",
        image: "https://salt.tikicdn.com/cache/w1080/ts/tikimsp/f0/82/8e/ac3f343496573f48aae60a4aba3d87ff.png.webp",
    },
    {
        id: 2,
        title: "Slide 2",
        image: "https://salt.tikicdn.com/cache/w1080/ts/tka/0d/e1/6f/7beb243488a74f0712a451fe8e8d3df8.png.webp",
    },
];

function SliderHome() {
    // Cấu hình của slider
    const config = {
        autoplay: true,
        delay: 3000,
        speed: 700,
        loop: true,
        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
        },
    };

    return (
        <Swiper {...config}>
            {slides.map((slide) => (
                <SwiperSlide key={slide.id} style={{ display: "flex" }}>
                    <img src={slide.image} alt={slide.title} />
                </SwiperSlide>
            ))}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </Swiper>
    );
}

export default SliderHome;
