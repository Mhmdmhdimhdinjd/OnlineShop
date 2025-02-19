import React from 'react';
import { InputBase , AppBar, Box, Toolbar, Typography, Button, IconButton, Tooltip, Avatar, styled, alpha } from '@mui/material';
import { Menu as MenuIcon, ShoppingCartOutlined as ShoppingCartOutlinedIcon, SearchOutlined as SearchOutlinedIcon , LoginOutlined as LoginOutlinedIcon} from '@mui/icons-material';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.15),
  },
  direction:'rtl',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display:'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color:'#90A4AE'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  fontFamily:'gandom',
  fontSize:12,
  color: 'inherit',
  direction:'rtl',
  width: '200px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const WhiteButton = styled(Button)(() => ({
  backgroundColor: '#ffffff70',
  color: 'black',
  '&:hover': {
    backgroundColor: '#ffffff90',
  },
}));

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, borderBottom: '2px solid black', backdropFilter:'blur(40px)' , bgcolor:'#ffffff90' }}>
      <AppBar position="static" color='white' elevation={0}>
        <Toolbar>

          <Box sx={{ display: 'flex' }}>
            <IconButton
              size="large"
              edge='start'
              color="inherit"
              aria-label="shopping Basket"
              sx={{ mr: 2 }}
            >
              <ShoppingCartOutlinedIcon />
            </IconButton>

            <WhiteButton size='small' sx={{display:{sm:'inline-flex' , xs:'none'}}} endIcon={<LoginOutlinedIcon/>}>

              <Typography fontFamily={'gandom'} fontSize={14}>ثبت نام  |  ورود</Typography>

            </WhiteButton>


          </Box >

          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'right' , alignItems:'center' }}>
            <Search >
              <SearchIconWrapper>
                <SearchOutlinedIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="جستجو ..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            <img src='https://www.digikala.com/brand/full-horizontal.svg' alt="Logo" style={{ maxWidth: '100px', margin: '0 0 0 1rem' }} />

          </Box >

        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default  NavBar