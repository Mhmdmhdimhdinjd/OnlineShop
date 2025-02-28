// import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import ProductGrid from "../../Components/shoppigbasket/shoppingbasketgrid/shoppingbasketgrid";
// import Navbar from "../../Components/Navbar/Navbar";
// import Footer from "../../Components/Footer/Footercontaier";
// import { Box, Container, Button , Typography } from "@mui/material";
// import { clearCart } from "../../redux/reducers/CartReducer";



// const Shoppingbasketcontainer = () => {

//     const dispatch = useDispatch();

//     const cartItems = useSelector((state) => state.cart.items);


//     return (
//         <>

//             <Navbar />

//             <Container>

//                 <ProductGrid cartItem={cartItems} />

//                 <Box
//                     sx={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         gap: 4,
//                         mb: 10,
//                     }}
//                 >

//                     {cartItems.length !== 0 ?

// <>
//                         <Button
//                         variant="contained"
//                         color="error"
//                         onClick={() => dispatch(clearCart())}
//                         sx={{ fontFamily: 'gandom' }}
//                     >
//                         خالی کردن سبد خرید
//                     </Button>


//                     <Button
//                         variant="contained"
//                         color="primary"
//                         onClick={() => dispatch()}
//                         sx={{ fontFamily: 'gandom' }}
//                     >
//                         تکمیل خرید
//                     </Button>

//                     </>
//                         :

//                         <Typography
//                             component="h1"
//                             sx={{
//                                 textAlign: 'center',
//                                 color: 'red',
//                                 fontSize: '2rem',
//                                 fontWeight: 'bold',
//                                 fontFamily: 'gandom'
//                             }}
//                         >
//                             بزن بریم خرید!
//                         </Typography>
//                     }

//                 </Box>

//             </Container>

//             <Footer />

//         </>
//     )

// }


// export default Shoppingbasketcontainer