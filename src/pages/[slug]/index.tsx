import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ProductDetail.module.scss";

import SwiperCore, { Pagination } from "swiper";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { IProduct } from "@/types";
import { getAllProducts, getProductBySlug } from "@/apis/products";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import BoxModule from "@/components/BoxModule/BoxModule";
import ProductItem from "@/components/ProductItem/ProductItem";
import Chip from "@mui/material/Chip";

SwiperCore.use([Pagination]);

const Navigation = () => {
    return (
        <List sx={{ display: "flex" }}>
            <ListItem sx={{ p: 0, width: "max-content" }}>
                <Link href="/" className="flex-center">
                    <Typography sx={{ fontSize: "1.4rem", color: "gray", "&:hover": { color: "#ccc" } }}>
                        Home
                    </Typography>
                    <KeyboardArrowRightIcon sx={{ fontSize: "2rem", m: "0 8px" }} />
                </Link>
            </ListItem>
            <ListItem sx={{ p: 0, width: "max-content" }}>
                <Link href="/" className="flex-center">
                    <Typography sx={{ fontSize: "1.4rem", color: "gray", "&:hover": { color: "#ccc" } }}>
                        Điện thoại
                    </Typography>
                    <KeyboardArrowRightIcon sx={{ fontSize: "2rem", m: "0 8px" }} />
                </Link>
            </ListItem>
            <ListItem sx={{ p: 0, width: "max-content" }}>
                <Link href="/" className="flex-center">
                    <Typography sx={{ fontSize: "1.4rem", color: "gray", "&:hover": { color: "#ccc" } }}>
                        Samsung Galaxy A73 (5G) 256GB
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
        image: "/Rectangle.png",
    },
    {
        id: 2,
        title: "Slide 2",
        image: "https://salt.tikicdn.com/cache/750x750/ts/product/38/d7/b4/cbecb1ea41220cb66dfc183f57b3424d.png.webp",
    },
    {
        id: 3,
        title: "Slide 1",
        image: "https://salt.tikicdn.com/cache/750x750/ts/product/7d/27/6c/96a9f8bef17097b1b468c7d0c78833a9.png.webp",
    },
    {
        id: 4,
        title: "Slide 2",
        image: "https://salt.tikicdn.com/cache/750x750/ts/product/38/d7/b4/cbecb1ea41220cb66dfc183f57b3424d.png.webp",
    },
];
interface PropsType {
    product: IProduct;
}

const config = {
    delay: 5000,
    speed: 400,
    slidesPerView: 6,
    slidesPerGroup: 3,
};
function ProductDetail({ product }: PropsType) {
    const { name, images, price, original_price, description } = product;
    const [explore, setExplore] = useState<boolean>(false);

    return (
        <Box sx={{ maxWidth: "1200px", m: "0 auto" }}>
            {/* Navigation */}
            <Navigation />

            {/*  */}
            <Grid container spacing="34px">
                <Grid item md={5}>
                    {/* Ảnh sp */}
                    <Swiper
                        pagination={{
                            el: "#product-slide-preview",
                            clickable: true,
                            renderBullet: function (index, className) {
                                if (index > 2) return `<div>hi</div>`;
                                return `<div class="${className}"><img src="${images[index].base_url}" alt="${name}"/></div>`;
                            },
                        }}
                    >
                        {images.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <Box sx={{ cursor: "pointer" }}>
                                    <Image
                                        src={slide.base_url}
                                        alt={name}
                                        layout="responsive"
                                        objectFit="cover"
                                        priority={true}
                                        className="img-product-detail"
                                        width={200}
                                        height={100}
                                    />
                                </Box>
                            </SwiperSlide>
                        ))}
                        <div id="product-slide-preview" className={styles["product-slide-preview"]}>
                            <span>hi</span>
                        </div>
                    </Swiper>
                </Grid>

                <Grid item md={7}>
                    <Typography component="h1" sx={{ fontSize: "2rem", fontWeight: "650" }}>
                        {name}
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

                    <Stack direction="row" spacing="2rem" alignItems="flex-end" my="2rem">
                        <Typography component="span" sx={{ fontSize: "2.2rem", fontWeight: "650", color: "red" }}>
                            {price.toLocaleString()} Đ
                        </Typography>
                        <Typography
                            component="span"
                            sx={{ fontSize: "1.6rem", textDecoration: "line-through", color: "#6b6b6b" }}
                        >
                            {original_price.toLocaleString()} Đ
                        </Typography>
                        <Typography
                            component="span"
                            sx={{
                                fontSize: "1.4rem",
                                p: "1px 6px",
                                borderRadius: "2px",
                                color: "#fff",
                                bgcolor: "#ff424e",
                            }}
                        >
                            {Math.floor((price * 100) / original_price) - 100} %
                        </Typography>
                    </Stack>

                    <Box>
                        <Typography component="h5" sx={{ fontSize: "1.5rem" }}>
                            2 mã giảm giá
                        </Typography>

                        <Stack direction="row" spacing="8px" mt="10px">
                            <Chip label="Giảm 15k" variant="outlined" clickable />
                            <Chip label="Giảm 15k" variant="outlined" clickable />
                            <Chip label="Giảm 15k" variant="outlined" clickable />
                        </Stack>
                    </Box>

                    {/* Seoler */}
                    <Stack
                        direction="row"
                        sx={{
                            border: "1px solid red",
                            borderRadius: "10px",
                            my: "12px",
                            width: "80%",
                            p: "14px 20px",
                            background: "linear-gradient(100deg, rgb(255, 66, 78), rgb(253, 130, 10))",
                            color: "#ffff",
                        }}
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Box>
                            <Typography sx={{ fontSize: "2.1rem" }}>52.000 đ</Typography>
                            <Stack direction="row" spacing="20px">
                                <Typography sx={{ textDecoration: "line-through" }}>52.000 đ</Typography>
                                <Typography>-14%</Typography>
                            </Stack>
                        </Box>
                        <Stack>
                            <Typography sx={{ fontSize: "1.3rem" }}>Kết thúc sau</Typography>
                            <Stack my="3px" direction="row" spacing="8px" alignItems="center">
                                <Typography
                                    component="span"
                                    sx={{ bgcolor: "#fff", borderRadius: "3px", color: "#e96a16", p: "0 2px" }}
                                >
                                    01
                                </Typography>
                                <span>:</span>
                                <Typography
                                    component="span"
                                    sx={{ bgcolor: "#fff", borderRadius: "1px", color: "#e96a16", p: "0 2px" }}
                                >
                                    42
                                </Typography>
                                <span>:</span>
                                <Typography
                                    component="span"
                                    sx={{
                                        bgcolor: "#fff",
                                        borderRadius: "1px",
                                        color: "#e96a16",
                                        p: "0 2px",
                                    }}
                                >
                                    36
                                </Typography>
                            </Stack>

                            <Typography sx={{ fontSize: "1.3rem" }}>Đã bán: 14</Typography>
                        </Stack>
                    </Stack>

                    {/*  */}
                    <Box>
                        Bảo hiểm:
                        <Typography component="span" ml="6px">
                            Bảo hiểm quyền lợi tiêu dùng bởi HSHOP
                        </Typography>
                    </Box>

                    {/*  */}
                    <Stack sx={{ my: "2rem" }} direction="row" spacing="2rem">
                        <Typography component="span">Số lượng | |</Typography>
                        <Typography component="span">1000 sản phẩm sẵn có</Typography>
                    </Stack>

                    <Stack direction="row" spacing="2rem">
                        <Button variant="outlined">
                            <ShoppingCartIcon sx={{ mr: "4px" }} /> Thêm vào giỏ hàng
                        </Button>
                        <Button variant="contained">Mua ngay</Button>
                    </Stack>
                </Grid>
            </Grid>

            {/* Sản phẩm tương tự */}
            <BoxModule title="Sản phẩm tương tự">
                <Swiper {...config} style={{ padding: "2px" }}>
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                        <SwiperSlide key={index}>
                            <Box p="0 10px">
                                <ProductItem {...product} />
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </BoxModule>

            {/* Thông tin sản phẩm */}

            <Card sx={{ my: { sx: "2rem", md: "4rem" }, p: "1.2rem 2rem", bgcolor: "#c2c2c2" }}>
                <Typography component="h3" sx={{ fontSize: "2.4rem", mb: "1.22rem", textAlign: "center" }}>
                    Chi tiết sản phẩm
                </Typography>
            </Card>

            {/* Giới thiệu về sản phẩm */}
            <Card sx={{ p: "1.2rem 2rem", maxHeight: explore ? "" : "500px", position: "relative" }}>
                <Typography component="h3" sx={{ fontSize: "2.4rem", mb: "1.2rem" }}>
                    Mô tả sản phẩm
                </Typography>
                <div dangerouslySetInnerHTML={{ __html: description }} className="product-description"></div>

                {!explore ? (
                    <Stack
                        sx={{
                            position: "absolute",
                            bottom: "0",
                            left: "0",
                            right: "0",
                            pb: "2rem",
                            height: "120px",
                            background:
                                "linear-gradient(to bottom,rgba(255 255 255/0),rgba(255 255 255/62.5),rgba(255 255 255/1));",
                        }}
                        alignItems="center"
                        justifyContent="flex-end"
                    >
                        <Button
                            variant="outlined"
                            sx={{ width: "340px", fontSize: "1.3rem", borderRadius: "10px" }}
                            onClick={() => setExplore(true)}
                        >
                            Xem thêm
                            <ArrowRightIcon fontSize="large" />
                        </Button>
                    </Stack>
                ) : (
                    <Stack>
                        <Button
                            variant="outlined"
                            sx={{ width: "340px", fontSize: "1.3rem", borderRadius: "10px", m: "10px auto" }}
                            onClick={() => setExplore(false)}
                        >
                            Thu nhỏ
                            <ArrowDropUpIcon fontSize="large" />
                        </Button>
                    </Stack>
                )}
            </Card>
        </Box>
    );
}

export default ProductDetail;

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await getAllProducts();

    const productIds = res.data.products.map((product: IProduct) => {
        return {
            params: {
                slug: product.slug ? product.slug.toString() : "",
            },
        };
    });
    return {
        paths: productIds,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await getProductBySlug(params?.slug as string);
    return {
        props: {
            product: res.data.product,
        },
    };
};
