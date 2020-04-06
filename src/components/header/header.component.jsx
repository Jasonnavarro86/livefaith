import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { auth } from '../../firebase/firebase.utils'
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../../images/logo2.png'
import './header.styles.scss'

const useStyles = makeStyles( ( theme ) => ( {
    title: {
        flexGrow: 1,
    },
    link: {
        padding: '28px 24px',
        fontWeight: '600',
        fontSize: '16px',
        cursor: 'pointer',
        color: '#212121',
        fontFamily: 'Montserrat',
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
                <AppBar className={ classes.appBar } position="fixed">
                    <Container>
                      <Toolbar>
                        <Link className={ classes.title } to="/">
                            {/*<img className='logo-text' alt="Logo" height="115px" width="300px" src={Logo} />*/}
                            <img className="logo-text" alt="Logo" height="85px" width="240px" style={ { marginTop: '10px' } } src={ Logo } />
                        </Link>
                        <Link className={ classes.link } to="/shop">
                            Videos
                        </Link>
                        <Link className={ classes.link } to="/shop">
                            About us
                        </Link>
                        <Link className={ classes.link } to="/shop">
                            The Gospel
                        </Link>
                            <Link className={ classes.link } to="/shop">
                                Shop
                            </Link>
                            <Link className={ classes.link } to="/shop">
                                Contact
                            </Link>
                            {
                                currentUser ?
                                    <div className={ classes.link } onClick={() => auth.signOut()}>Sign Out</div>
                                    :
                                    <Link className={ classes.link } to="/signin">Sign In </Link>
                            }
                            <CartIcon />
                      </Toolbar>
                    </Container>
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