import { Box, Grid, Button, InputLabel, createTheme, ThemeProvider, Typography } from "@mui/material";
import React, { useRef } from "react";
import loginimg from '../../assets/images/login.jpg';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { useDispatch } from "react-redux";
import LoginQuery__handler from "../../ReactQuery/LoginComponent"

const LoginComponent = () => {

    // const loged = useRef(false)

    const { mutate, isLoading } = LoginQuery__handler()


    const Submited = (data) => {

        mutate(data, {
            onSuccess: (Reference) => {
                if (Reference.status === 200) {
                    console.log('ُLogin successed')
                }
            },
        })

    }

    const theme = createTheme({
        components: {
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        color: 'white',
                        fontFamily: 'gandom',
                        marginTop: '1rem'
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: '20px',
                        fontFamily: 'gandom',
                        margin: '1rem'
                    }
                }
            }
        }
    });

    let userSchema = object({
        address: string().required('ورود این مقادیر الزامیست'),
        email: string().required('ورود این مقادیر الزامیست').email('مقدار ورودی نادرست است'),
    });


    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(userSchema),
        defaultValues: {
            email: "",
            address: ""
        }
    });



    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ pb: 16, maxWidth: '94rem', width: '100%', position: 'relative' }}>
                <div className="circle"></div>
                <Typography fontFamily={'gandom'} color="white" fontSize={32} textAlign={'center'} my={6}>ورودبه برنج نی نی</Typography>
                <Grid container sx={{ width: '80%', height: '20rem', mx: 'auto', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(30px)', border: '#fff solid 4px', borderRadius: '2rem', overflow: 'hidden' }}>
                    <Grid item xs={10} sm={8}>
                        <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} onSubmit={handleSubmit(Submited)}>
                            <InputLabel>ایمیل</InputLabel>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) =>
                                    <input disabled={isLoading} className="login__input" {...field} label="email" variant="outlined" />
                                }
                            />
                            {errors.email && <Typography fontFamily={'gandom'} fontSize={12} color="black">{errors.email.message}</Typography>}
                            <InputLabel>رمز عبور</InputLabel>
                            <Controller
                                name="address"
                                control={control}
                                render={({ field }) =>
                                    <input type="password" disabled={isLoading} className="login__input" {...field} label="address" variant="outlined" />
                                }
                            />
                            {errors.address && <Typography fontFamily={'gandom'} fontSize={12} color="black">{errors.address.message}</Typography>}
                            <Button size="large" variant="contained" sx={{ width: '50%', color: 'black', backgroundColor: '#fff' }} type="submit">تایید</Button>
                        </form>
                    </Grid>
                    <Grid item xs={4} sx={{ backgroundColor: 'white', height: '100%', display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                        <img style={{ width: '100%' }} src={loginimg} alt="login img" />
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

export default LoginComponent;
