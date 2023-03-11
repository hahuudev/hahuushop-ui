import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Link from "next/link";

function Cart() {
    return (
        <Tooltip
            placement="bottom-end"
            title={
                <Box sx={{ p: "10px" }}>
                    <Typography component="h4" fontSize="1.6rem">
                        Sản phẩm mới thêm
                    </Typography>
                    <Stack direction="column" my="1rem" spacing="1rem" sx={{ overflowY: "auto", maxHeight: "400px" }}>
                        <Link href="/">
                            <Stack
                                direction="row"
                                spacing="10px"
                                alignItems="center"
                                sx={{ color: "#e7e7e7", fontSize: { md: "1.3rem" } }}
                            >
                                <Avatar />
                                <Typography flex="1" component="p">
                                    Củ sạc nhanh macbook air promax xịn 20 w
                                </Typography>
                                <Typography minWidth="80px" color="red" fontSize="1.3rem">
                                    20.000 đ
                                </Typography>
                            </Stack>
                        </Link>
                        <Link href="/">
                            <Stack
                                direction="row"
                                spacing="10px"
                                alignItems="center"
                                sx={{ color: "#e7e7e7", fontSize: { md: "1.3rem" } }}
                            >
                                <Avatar />
                                <Typography flex="1" component="p">
                                    Củ sạc nhanh macbook air promax xịn 20 w
                                </Typography>
                                <Typography minWidth="80px" color="red" fontSize="1.3rem">
                                    20.000 đ
                                </Typography>
                            </Stack>
                        </Link>
                    </Stack>
                    <Stack mt="1.8rem" direction="row" justifyContent="space-between" fontSize="1.2rem">
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
    );
}

export default Cart;
