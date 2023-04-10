import { Avatar, Badge, Popover, Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box, styled } from "@mui/system";
import Link from "next/link";
import { useState } from "react";
import Search from "./Search";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Cart from "./Cart";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getCurrentUser, logout } from "@/apis/auth";
import { useRouter } from "next/router";

const Line = styled("div")({
    display: "flex",
    justifyContent: "flex-end",
    hr: {
        width: 'calc(100 % -"16rem")',
    },
});

function Header() {
    const queryClient = useQueryClient();
    const router = useRouter();
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const { data } = useQuery("currentUser", getCurrentUser);

    const handleClick = (event: any): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    const currentUser: boolean = !!data?.data?.user;

    const handleLogout = async () => {
        try {
            await logout();
            queryClient.setQueryData("currentUser", null);
            localStorage.removeItem("token");
            router.push("signin");
        } catch (error) {}
    };

    return (
        <AppBar sx={{ height: "90px", backgroundColor: "#fff", color: "#1976d2" }}>
            <div style={{ height: "100%" }}>
                <Stack
                    direction="row"
                    sx={{ height: "60%" }}
                    alignItems="center"
                    className="max-w-layout"
                    justifyContent="space-between"
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: "2rem", md: "2.6rem" },
                            minWidth: "180px",
                            height: "100%",
                            display: "flex",
                            mb: "-14px",
                            alignItems: "flex-end",
                        }}
                    >
                        <Link style={{ color: "#1976d2", fontWeight: 700 }} href="/">
                            HSHOP
                        </Link>
                    </Typography>

                    <Search />

                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="flex-end"
                        spacing={4}
                        sx={{ minWidth: "350px" }}
                    >
                        {/* Giỏ hàng */}
                        <Cart />

                        {/* Thông báo */}

                        <Box>
                            <div className="" aria-describedby="header-notify" onClick={handleClick}>
                                <Badge badgeContent={10} color="info">
                                    <NotificationsActiveIcon fontSize="large" />
                                </Badge>
                            </div>

                            <Popover
                                id="header-notify"
                                open={false}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "right",
                                }}
                            >
                                <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                            </Popover>
                        </Box>

                        {/* Avatar */}
                        {!currentUser ? (
                            <Box>
                                <Link href="/signin">
                                    <Stack direction="row" alignItems="center" sx={{ color: "#0d05e1" }}>
                                        <PersonIcon fontSize="large" />
                                        <Box sx={{ ml: "6px" }}>
                                            <Typography>Đăng nhập</Typography>
                                            <Typography>Đăng Ký</Typography>
                                        </Box>
                                    </Stack>
                                </Link>
                            </Box>
                        ) : (
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
                                    <Stack p="10px 14px">
                                        <Typography sx={{ fontSize: "1.4rem", color: "#2404b1" }}>
                                            {data?.data?.user.username}
                                        </Typography>
                                        {data?.data?.user.role === "admin" && (
                                            <Link href="/admin">
                                                <Typography sx={{ py: "6px", fontSize: "1.4rem" }}>
                                                    Quản trị website
                                                </Typography>
                                            </Link>
                                        )}
                                        <Typography
                                            sx={{ fontSize: "1.4rem", cursor: "pointer" }}
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </Typography>
                                    </Stack>
                                </Popover>
                            </Box>
                        )}
                    </Stack>
                </Stack>

                {/* Danh sách tìm kiếm */}
                <Line>
                    <hr />
                </Line>

                <Stack height="38%" direction="row" className="max-w-layout" justifyContent="space-between">
                    <Stack
                        paddingLeft={{ xs: "10rem", md: "16rem" }}
                        spacing="3.4rem"
                        direction="row"
                        flex="1"
                        alignItems="center"
                    >
                        <Link href="/">
                            <Typography
                                sx={{ color: "#ff424e", "&:hover": { color: "#1976d2" }, fontSize: "1.4rem" }}
                                component="span"
                            >
                                Điện tử
                            </Typography>
                        </Link>
                        <Link href="/">
                            <Typography
                                sx={{ color: "#ff424e", "&:hover": { color: "#1976d2" }, fontSize: "1.4rem" }}
                                component="span"
                            >
                                Điện tử
                            </Typography>
                        </Link>
                    </Stack>

                    <Stack direction="row" alignItems="center">
                        <span>
                            <LocationOnIcon fontSize="medium" />
                            Giao đến:
                        </span>
                        Tam Dương - Vĩnh Phúc
                    </Stack>
                </Stack>
            </div>
        </AppBar>
    );
}

export default Header;
