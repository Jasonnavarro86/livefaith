import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeStyles } from '@material-ui/core';

import { auth } from '../../firebase/firebase.utils'
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Logo from '../../images/logo2.png'
import './header.styles.scss'

const useStyles = makeStyles( ( theme ) => ( {
    title: {
        flexGrow: 1,
    },
    link: {
        padding: '10px 15px',
        // fontWeight: 'Bold',
        fontSize: '18px',
        cursor: 'pointer',
        color: '#212121',
        letterSpacing: theme.spacing( 0.1 ),
        '&:hover': {
            color: theme.palette.primary.main,
        }
    }
} ) );

const Header = ( { currentUser, hidden } ) => {
        const classes = useStyles();

        return (
            <div className={ classes.root }>
                <AppBar className={ classes.appBar } position="static">
                    <Toolbar>
                        <Link className={ classes.title } to="/">
                            {/*<img className='logo-text' alt="Logo" height="115px" width="300px" src={Logo} />*/}
                            <img className="logo-text" alt="Logo" height="85px" width="240px" style={ { marginTop: '10px' } } src={ Logo } />
                        </Link>
                        <Link className={ classes.link } to="/shop">
                            VIDEOS
                        </Link>
                        <Link className={ classes.link } to="/shop">
                            ABOUT US
                        </Link>
                        <Link className={ classes.link } to="/shop">
                            THE GOSPEL
                        </Link>
                            <Link className={ classes.link } to="/shop">
                                SHOP
                            </Link>
                            <Link className={ classes.link } to="/shop">
                                CONTACT
                            </Link>
                            {
                                currentUser ?
                                    <div className={ classes.link } onClick={() => auth.signOut()}>SIGN OUT</div>
                                    :
                                    <Link className={ classes.link } to="/signin">SIGN IN </Link>
                            }
                            <CartIcon />
                    </Toolbar>
                </AppBar>
                { hidden ? null : <CartDropdown /> }
            </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);