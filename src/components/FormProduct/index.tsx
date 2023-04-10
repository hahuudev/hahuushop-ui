import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { ReactElement, ReactNode, useRef } from "react";
import { useForm, FieldError } from "react-hook-form";

import * as yup from "yup";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Editor from "./Editor";
import { IProduct } from "@/types";
import { useMutation, useQuery } from "react-query";
import { newProduct, updateProduct } from "@/apis/products";
import { getAllCategories } from "@/apis/category";
import MenuItem from "@mui/material/MenuItem";
import { uploadFiles } from "@/apis/upload";
import { Avatar, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
// import LinearProgressWithLabel from "./Progress";

const schema = yup.object().shape({
    name: yup.string().required(),
    price: yup.string().required(),
    original_price: yup.string().required(),
    images: yup
        .array()
        .required()
        .of(yup.object({ url: yup.string().required() })),
    categoryId: yup.string().required(),
    description: yup.string().min(20).required(),
});

interface FormProductProps extends IProduct {
    edit?: boolean;
    // product: IProduct;
}

const FormProduct = ({ edit = false, ...product }: FormProductProps) => {
    const { _id, name, slug, images, description, price, original_price } = product;
    const router = useRouter();
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<IProduct>({
        mode: "onSubmit",
        resolver: yupResolver(schema),
        defaultValues: product ? { name, slug, images, description, price, original_price } : {},
    });

    const { mutate: postProduct } = useMutation(newProduct);
    const { mutate: patchProduct } = useMutation(updateProduct);
    const { data: categories } = useQuery("categories", getAllCategories);

    const handleUploadImages = async (e: any) => {
        const files = e.target.files;
        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
            formData.append("images", files[i]);
        }

        const res = await uploadFiles(formData);
        setValue("images", res.data.urls);
    };

    const onSubmit = async (data: IProduct) => {
        if (edit) {
            console.log(data);
            patchProduct(
                { _id, ...data },
                {
                    onSuccess: (data) => {
                        router.push("/admin/products");
                    },
                }
            );
        }

        if (edit === false) {
            postProduct(data, {
                onSuccess: (data) => {
                    toast.success("Thêm mới sản phẩm thành công");
                    router.push("/admin/products");
                },
                onError: (error) => {
                    console.log(error);
                },
            });
        }
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
                        error={!!errors.name}
                        helperText={!!errors.name ? (errors.name as FieldError).message : ""}
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
                        error={!!errors.price}
                        helperText={!!errors.price ? (errors.price as FieldError).message : ""}
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
                        error={!!errors.original_price}
                        helperText={!!errors.original_price ? (errors.original_price as FieldError).message : ""}
                    />

                    {/* Hình ảnh */}

                    <Typography sx={{ fontSize: "1.4rem", my: "10px" }}>
                        Mời chọn hình ảnh
                        <Typography component="span" color="red">
                            {!!errors.images ? `( ${(errors.images as FieldError).message}) ` : ""}
                        </Typography>
                    </Typography>

                    {/* <LinearProgressWithLabel value={40} /> */}
                    <Stack direction="row" spacing="20px">
                        <TextField
                            type="file"
                            InputLabelProps={{ shrink: true }}
                            onChange={handleUploadImages}
                            inputProps={{ accept: ".jpg, .png, .jpeg", multiple: true }}
                        />

                        <Avatar src={watch("images")?.[0]?.url || product?.images?.[0]?.url} />
                    </Stack>

                    {/*  */}
                    <Typography sx={{ fontSize: "1.4rem", my: "10px" }}>
                        Mời chọn thể loại sản phẩm
                        <Typography component="span" color="red">
                            {!!errors.categoryId ? `( ${(errors.categoryId as FieldError).message}) ` : ""}
                        </Typography>
                    </Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        select
                        label="Native select"
                        defaultValue={categories?.data?.categories?.[0]._id || ""}
                        {...register("categoryId")}
                        helperText="Please select your currency"
                    >
                        {categories?.data?.categories?.map((category: any) => (
                            <MenuItem key={category._id} value={category._id}>
                                {category.name}
                            </MenuItem>
                        ))}
                    </TextField>
                    {/*  */}
                    <Typography sx={{ fontSize: "1.4rem", my: "10px" }}>
                        Chi tiết về sản phẩm{" "}
                        <Typography component="span" color="red">
                            {!!errors.description ? `( ${(errors.description as FieldError).message}) ` : ""}
                        </Typography>
                    </Typography>
                    <Editor setValue={setValue} watch={watch} />
                    {/*  */}
                    <Button type="submit" fullWidth variant="contained" sx={{ my: 3, py: "10px", fontSize: "1.23rem" }}>
                        {edit ? "Update sản phẩm" : "Thêm mới sản phẩm"}
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
