import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Badge, MenuItem } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getTotals } from '../../store/cartSlice';
export const Navbar =() => {

  const {cartTotalQuantity} = useAppSelector((state) => state.cart)
  const dispatch = useAppDispatch();
  dispatch(getTotals())
  return (
    <Box sx={{ flexGrow: 1 }}>
         <AppBar
       
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, position: 'fixed', top:0 }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
         
          <Link to='/'  style={{ flexGrow: 1 , fontSize: '1.2rem',fontWeight: '', color: 'green'}}>
            MyStore
          </Link>
          <nav>
            <Link to='/signin' style={{marginRight: '1.5rem', fontSize: '1.2rem'}}
            >
              SignIn
            </Link>
            <Link to='/signup' style={{marginRight: '1.5rem', fontSize: '1.2rem'}} 
            >
              SignUp
            </Link>
           
          </nav>
          <MenuItem>
          <Link to="/cart">
        <IconButton  color="secondary">
          <Badge badgeContent={cartTotalQuantity} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        </Link>
       
      </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}