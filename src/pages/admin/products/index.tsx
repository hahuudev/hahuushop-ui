import { deleteProduct, getAllProducts } from "@/apis/products";
import AdminLayout from "@/layouts/AdminLayout";
import { IProduct } from "@/types";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "next/link";
import { ReactElement } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

type Props = {};

const ProductsAdmin = (props: Props) => {
    const queryClient = useQueryClient();
    const { data: products } = useQuery<IProduct[]>("products", async () => {
        const res = await getAllProducts();
        return res.data.products;
    });

    const { mutate } = useMutation(deleteProduct);

    const handleDeleteProduct = async (id: string) => {
        // mutate(id, {
        //     onSuccess: (data) => {
        //         queryClient.invalidateQueries("products");
        //     },
        // });
    };

    return (
        <TableContainer component={Paper} sx={{ maxWidth: "1250px", mx: "auto" }}>
            <Link href="/admin/new-product">
                <Button variant="outlined" sx={{ my: "20px" }}>
                    Thêm mới sản phẩm
                </Button>
            </Link>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ fontSize: "1.4rem" }}>
                        <TableCell sx={{ fontSize: "1.4rem" }}>Tên sản phẩm</TableCell>
                        <TableCell sx={{ fontSize: "1.4rem" }} align="center">
                            Price
                        </TableCell>
                        <TableCell sx={{ fontSize: "1.4rem" }} align="center">
                            Original Price
                        </TableCell>
                        <TableCell sx={{ fontSize: "1.4rem" }} align="center">
                            Thông tin sản phẩm
                        </TableCell>
                        <TableCell sx={{ fontSize: "1.4rem" }} align="center">
                            Options
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products?.map((product) => (
                        <TableRow key={product._id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell component="th" scope="row" sx={{ fontSize: "1.2rem" }}>
                                {product.name}
                            </TableCell>
                            <TableCell align="center" sx={{ fontSize: "1.2rem" }}>
                                {" "}
                                {product.price}
                            </TableCell>
                            <TableCell align="center" sx={{ fontSize: "1.2rem" }}>
                                {" "}
                                {product.original_price}
                            </TableCell>
                            <TableCell align="center" sx={{ fontSize: "1.2rem" }}></TableCell>
                            <TableCell align="center" sx={{ fontSize: "1.2rem" }}>
                                <Stack direction="row" alignItems="center">
                                    <Link href={`/admin/products/${product._id}/edit`}>Sửa</Link>
                                    <Button onClick={() => handleDeleteProduct(product._id.toString())}>Xóa</Button>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
ProductsAdmin.getLayout = function getLayout(page: ReactElement) {
    return <AdminLayout>{page}</AdminLayout>;
};

export default ProductsAdmin;
