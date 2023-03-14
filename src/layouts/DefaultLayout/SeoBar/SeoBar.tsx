import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Fade from "@mui/material/Fade";

const SEOS = [
    {
        logo: "FREESHIP",
        title: "mọi đơn từ 149K",
        description: "Áp dụng cho cả HSHOPnow 2h",
        link: "/",
    },
    {
        logo: "SALE TOÀN SÀN",
        title: "ngày 15 hàng tháng",
        description: "Hàng ngàn voucher và quà tặng hấp dẫn",
        link: "/",
    },
];

function SeoBar() {
    const [activePost, setActivePost] = useState(0);

    const handleAdver = () => {
        setActivePost((activePost) => {
            if (activePost >= SEOS?.length - 1) return 0;
            return activePost + 1;
        });
    };
    useEffect(() => {
        const id = setInterval(handleAdver, 6500);

        return () => {
            clearInterval(id);
        };
    });
    return (
        <Box height="42px" bgcolor="#FFE880">
            {SEOS.map((item, index) => (
                <Link
                    key={index}
                    href={item.link}
                    style={{ height: "100%", display: activePost === index ? "block" : "none" }}
                >
                    <Fade in={activePost === index} timeout={{ enter: 1200, exit: 100 }}>
                        <Stack
                            height="100%"
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            spacing="10px"
                            sx={{ color: "black", fontSize: "1.6rem", "&:hover": { opacity: "0.9" } }}
                        >
                            <Typography component="span" color="#0A68FF" fontSize="1.4rem" fontWeight="600">
                                {item.logo}
                            </Typography>
                            <Typography component="h5" fontSize="1.4rem">
                                {item.title}
                            </Typography>
                            <Typography
                                className="text-vertical vertical-1"
                                component="h4"
                                fontSize="1.4rem"
                                color="gray"
                                maxWidth="400px"
                            >
                                {item.description}
                            </Typography>
                            <KeyboardArrowRightIcon fontSize="large" />
                        </Stack>
                    </Fade>
                </Link>
            ))}
        </Box>
    );
}

export default SeoBar;
