import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar, Badge, Popover, Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, styled } from "@mui/system";
import Link from "next/link";
import { useState } from "react";
import Search from "./Search";
import PersonIcon from "@mui/icons-material/Person";

function Header() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: any): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <AppBar sx={{ height: "80px", padding: "0 10rem", backgroundColor: "#fff", color: "#1976d2" }}>
            <Stack direction="row" sx={{ height: "100%" }} alignItems="center" justifyContent="space-between">
                <Typography variant="h1" sx={{ fontSize: "2rem" }}>
                    <Link style={{ color: "#1976d2", fontWeight: 700 }} href="/">
                        HSHOP
                    </Link>
                </Typography>

                <Search />

                <Stack direction="row" alignItems="center" spacing={4}>
                    <Tooltip
                        placement="bottom-end"
                        title={
                            <Box sx={{ p: "10" }}>
                                <Typography component="h4" fontSize="1.6rem">
                                    Sản phẩm mới thêm
                                </Typography>
                                <Stack direction="column">
                                    <Link href="/">
                                        <Stack direction="row" spacing="4">
                                            <Avatar />
                                            <Typography component="p">Củ sạc nhanh 20 w</Typography>
                                            <Typography>20.000 đ</Typography>
                                        </Stack>
                                    </Link>
                                </Stack>
                                <Stack>
                                    <Box> 6 sản phẩm</Box>
                                    <Link href="/cart">Xem giỏ hàng</Link>
                                </Stack>
                            </Box>
                        }
                    >
                        <Link href="/cart">
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartIcon fontSize="large" />
                            </Badge>
                        </Link>
                    </Tooltip>

                    <Box>
                        <Link href="/login">
                            <Stack direction="row" alignItems="center" sx={{ color: "red" }}>
                                <PersonIcon fontSize="large" />
                                <Box sx={{ ml: "6px" }}>
                                    <Typography>Đăng nhập</Typography>
                                    <Typography>Đăng Ký</Typography>
                                </Box>
                            </Stack>
                        </Link>
                    </Box>

                    <Box>
                        <div className="" aria-describedby={id} onClick={handleClick}>
                            <Avatar sx={{ cursor: "pointer" }} variant="circular" />
                        </div>

                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                        >
                            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                        </Popover>
                    </Box>
                </Stack>
            </Stack>
        </AppBar>
    );
}

export default Header;
