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
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Tên sản phẩm</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Original Price</TableCell>
                        <TableCell align="right">Thông tin sản phẩm</TableCell>
                        <TableCell align="right">Options</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products?.map((product) => (
                        <TableRow key={product._id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {product.name}
                            </TableCell>
                            <TableCell align="right"> {product.price}</TableCell>
                            <TableCell align="right"> {product.original_price}</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right">
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
