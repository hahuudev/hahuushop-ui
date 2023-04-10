import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactElement } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { CurrentUserType } from "@/types/user";
import { useMutation } from "react-query";
import { signup } from "@/apis/auth";
import { toast } from "react-toastify";
import { useForm, FieldError } from "react-hook-form";

const theme = createTheme();

const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().required("Required").email("Email invalid"),
    password: yup.string().min(6).required("Required"),
});

const SignUp = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CurrentUserType>({ mode: "onSubmit", resolver: yupResolver(schema) });

    const { mutate } = useMutation(signup);

    const handleSignUp = async (data: CurrentUserType) => {
        mutate(
            { confirmPassword: data.password, ...data },
            {
                onSuccess: (data) => {
                    router.push("/login");
                },
                onError(error: any) {
                    toast.error(error?.response?.data.message);
                },
            }
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(handleSignUp)} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    {...register("username")}
                                    autoFocus
                                    error={!!errors.username}
                                    helperText={!!errors.username ? (errors.username as FieldError).message : ""}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    autoComplete="email"
                                    {...register("email")}
                                    error={!!errors.email}
                                    helperText={!!errors.email ? (errors.email as FieldError).message : ""}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    {...register("password")}
                                    label="Password"
                                    type="password"
                                    id="password"
                                    error={!!errors.password}
                                    helperText={!!errors.password ? (errors.password as FieldError).message : ""}
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/signin" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

SignUp.getLayout = (page: ReactElement) => {
    return <>{page}</>;
};

export default SignUp;
