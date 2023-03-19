import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const Navigation = () => {
    return (
        <List sx={{ display: "flex" }}>
            <ListItem sx={{ p: 0, width: "max-content" }}>
                <Link href="/" className="flex-center">
                    <Typography sx={{ fontSize: "1.6rem", color: "gray", "&:hover": { color: "#ccc" } }}>
                        Home
                    </Typography>
                    <KeyboardArrowRightIcon sx={{ fontSize: "2rem", m: "0 8px" }} />
                </Link>
            </ListItem>
            <ListItem sx={{ p: 0, width: "max-content" }}>
                <Link href="/" className="flex-center">
                    <Typography sx={{ fontSize: "1.6rem", color: "gray", "&:hover": { color: "#ccc" } }}>
                        Thòi trang nam
                    </Typography>
                    <KeyboardArrowRightIcon sx={{ fontSize: "2rem", m: "0 8px" }} />
                </Link>
            </ListItem>
            <ListItem sx={{ p: 0, width: "max-content" }}>
                <Link href="/" className="flex-center">
                    <Typography sx={{ fontSize: "1.6rem", color: "gray", "&:hover": { color: "#ccc" } }}>
                        Quần nhung tăm lyly shop
                    </Typography>
                </Link>
            </ListItem>
        </List>
    );
};
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
function ProductDetail() {
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

    return (
        <Box sx={{ maxWidth: "1200px", m: "0 auto" }}>
            {/* Navigation */}
            <Navigation />
            {/*  */}
            <Grid container spacing="16px">
                <Grid item md={5}>
                    {/* Ảnh sp */}
                    <Swiper
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination',
                        }}
                    >
                        {slides.map((slide) => (
                            <SwiperSlide key={slide.id} style={{ display: "flex" }}>
                                <img src={slide.image} alt={slide.title} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Grid>

                <Grid item md={7}>
                    <Typography component="h1" sx={{ fontSize: "2rem", fontWeight: "650" }}>
                        Bình giữ nhiệt Lock&Lock Flat nắp gỗ 400ml - LHC4227
                    </Typography>

                    <Stack direction="row" alignItems="center" spacing="12px">
                        <Stack direction="row" alignItems="center">
                            <Typography component="span">4.6</Typography>
                            <Rating defaultValue={4.5} precision={0.5} readOnly sx={{ mt: "-1px" }} />
                        </Stack>

                        <span>|</span>

                        <Stack direction="row" alignItems="center">
                            <Typography component="span">807</Typography>
                            <Typography component="span">Đánh giá</Typography>
                        </Stack>

                        <span>|</span>

                        <Stack direction="row" alignItems="center">
                            <Typography component="span">2.1k</Typography>
                            <Typography component="span">Đã bán</Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProductDetail;
