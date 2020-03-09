import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import Logo from '../../images/logo2.png'
import './header.styles.scss'

const Header = ({ currentUser, hidden }) => (

    <div className="header">
        <Link className="logo-container" to="/">
            {/*<img className='logo-text' alt="Logo" height="115px" width="300px" src={Logo} />*/}
            <img className="logo-text" alt="Logo" height="85px" width="240px" style={ { marginTop: '10px' } } src={ Logo } />
        </Link>

        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className="option" to="/signin">SIGN IN </Link>
            }
            <CartIcon />
        </div>
            { hidden ? null : <CartDropdown /> }
       

    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);