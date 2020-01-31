import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'

import Logo  from '../../images/logo2.png'
import './header.styles.scss'

const Header = ({currentUser}) => (

    <div className="header">
        <Link className="logo-container" to="/">
           <img className='logo-text' alt="Logo" height="115px" width="300px" src={Logo}/>
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
                <div className="option" onClick={ () => auth.signOut()}>SIGN OUT</div>
                :
                <Link className="option" to="/signin">SIGN IN </Link>
            }
        </div>

    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);