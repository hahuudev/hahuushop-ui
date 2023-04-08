import Link from "next/link";
import { ReactElement, ReactNode } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Editor from "./Editor";

const schema = yup.object().shape({
    // email: yup.string().required("Required").email("Email invalid"),
    // password: yup.string().min(6).required("Required"),
});

interface FormProductProps {
    edit?: boolean;
}

const FormProduct = ({ edit = false }: FormProductProps) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({ mode: "onSubmit", resolver: yupResolver(schema) });

    const onSubmit = async (data: any) => {
        console.log(data);
    };

    return (
        <Container component="main" sx={{ fontSize: "1.4rem", width: { md: "1056px" } }}>
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h4">
                    {edit ? "Chỉnh sửa sản phẩm" : "Thêm mới sản phẩm"}
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }} width="100%">
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        inputProps={{
                            style: {
                                fontSize: "1.4rem",
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                fontSize: "1.3rem",
                                marginTop: "1.4px",
                            },
                        }}
                        label="Tên sản phẩm"
                        autoFocus
                        {...register("name")}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        {...register("price")}
                        label="Price"
                        type="number"
                        inputProps={{
                            style: {
                                fontSize: "1.4rem",
                                marginTop: "1.4px",
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                fontSize: "1.3rem",
                            },
                        }}
                        id="price"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        {...register("original_price")}
                        label="original_price"
                        type="number"
                        inputProps={{
                            style: {
                                fontSize: "1.4rem",
                                marginTop: "1.4px",
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                fontSize: "1.3rem",
                            },
                        }}
                        id="original_price"
                    />

                    <Editor setValue={setValue} />

                    <Button type="submit" fullWidth variant="contained" sx={{ my: 3, py: "10px", fontSize: "1.23rem" }}>
                        Update sản phẩm
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#">Forgot password?</Link>
                        </Grid>
                        <Grid item sx={{ display: "flex" }}>
                            {"Don't have an account ? "}
                            <Link href="/signup" style={{ marginLeft: "3px" }}>
                                Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default FormProduct;
