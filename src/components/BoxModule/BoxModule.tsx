import styled from "@emotion/styled";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { ReactElement, ReactNode } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface BoxModuleProps {
    title?: ReactElement | string;
    children: ReactNode;
    bgc?: string;
}

const BoxIconStyle = styled(Box)({
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    display: "flex",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    zIndex: 100,
});

function BoxModule({ title = "DANH MỤC", children, bgc = "#FFFFFF" }: BoxModuleProps) {
    const handlePre = () => {
        console.log("first");
    };

    const handleNext = () => {
        console.log("first");
    };
    return (
        <Box sx={{ background: bgc, borderRadius: "12px", mt: "20px" }}>
            {(React.isValidElement(title) && title) || (
                <Typography component="h3" sx={{ fontSize: "1.6rem", p: "1.4rem 1.2rem 0", fontWeight: "650" }}>
                    {typeof title === "string" && title}
                </Typography>
            )}

            <Box
                sx={{
                    mt: "16px",
                    position: "relative",
                    minHeight: "200px",
                    "&:hover": {
                        "#box-icon-module": { bgcolor: "#fff", border: "1px solid #eaeaea", svg: { color: "#0093e2" } },
                    },
                }}
            >
                {children}

                <BoxIconStyle
                    id="box-icon-module"
                    className="swiper-categories-next"
                    sx={{ right: "0px" }}
                    onClick={handlePre}
                >
                    <ArrowForwardIosIcon sx={{ margin: "auto", color: "#2393e2" }} />
                </BoxIconStyle>
                <BoxIconStyle
                    id="box-icon-module"
                    className="swiper-categories-prev"
                    sx={{ left: "0" }}
                    onClick={handleNext}
                >
                    <ArrowBackIosNewIcon sx={{ margin: "auto", color: "#2393e2" }} />
                </BoxIconStyle>
            </Box>
        </Box>
    );
}

export default BoxModule;
