import Link from "next/link";
import { ReactElement } from "react";
import { FieldError, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { NextPageWithLayout } from "../_app";
import { useMutation } from "react-query";
import { signin } from "@/apis/auth";
import { CurrentUserType } from "@/types/user";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const schema = yup.object().shape({
    email: yup.string().required("Required").email("Email invalid"),
    password: yup.string().min(6).required("Required"),
});

const Login: NextPageWithLayout = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CurrentUserType>({ mode: "onSubmit", resolver: yupResolver(schema) });

    const { mutate } = useMutation(signin);

    const handleLogin = async (data: CurrentUserType) => {
        mutate(data, {
            onSuccess: (data) => {
                localStorage.setItem("token", JSON.stringify(data.data?.access_token));

                router.push("/");
            },
            onError(error: any) {
                toast.error(error?.response?.data.message);
            },
        });
    };

    return (
        <Container component="main" maxWidth="xs" sx={{ fontSize: "1.4rem" }}>
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h4">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit(handleLogin)} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
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
                        label="Email Address"
                        autoComplete="email"
                        autoFocus
                        error={!!errors.email}
                        helperText={!!errors.email ? (errors.email as FieldError).message : ""}
                        {...register("email")}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        {...register("password")}
                        label="Password"
                        type="password"
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
                        id="password"
                        autoComplete="current-password"
                        error={!!errors.password}
                        helperText={!!errors.password ? (errors.password as FieldError).message : ""}
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ my: 3, py: "10px", fontSize: "1.23rem" }}>
                        Sign In
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

Login.getLayout = (page: ReactElement) => {
    return <>{page}</>;
};
export default Login;
