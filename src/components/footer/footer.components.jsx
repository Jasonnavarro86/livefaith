import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../../images/logo2.png'

const useStyles = makeStyles( ( theme ) => ( {
    root: {
        marginTop: '120px',
        paddingBottom: '48px',
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
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
    },
    logo: {
        height: '58px',
        marginTop: '10px'
    },
    bottomRow:{
        display: 'flex',
        marginTop: '24px',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    socialWrapper:{
        display: 'flex',
    },
    social:{
        alignItems: 'center',
        borderRadius: '10px',
        backgroundColor: '#e8edf4',
        justifyContent: 'center',
        display: 'flex',
        width: '40px',
        height: '40px',
        minHeight: '40px',
        minWidth: '40px',
        marginRight: '12px',
        paddingRight: '12px',
        paddingLeft: '12px',
    },
} ) );

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={ classes.root }>
            <AppBar className={ classes.appBar } position="static">
                <Container>
                    <Toolbar>
                        <Grid container>
                                <Grid item>
                                    <Link className={ classes.title } to="/">
                                        {/*<img className='logo-text' alt="Logo" height="115px" width="300px" src={Logo} />*/}
                                        <img className={ classes.logo } alt="Logo"  src={ Logo } />
                                    </Link>
                                </Grid>
                            <Grid item>

                            </Grid>
                        </Grid>
                        <Grid item>

                        </Grid>
                    </Toolbar>
                    <div className={ classes.bottomRow }>
                        <div className={ classes.socialWrapper }>
                            <Link className={ classes.social } to="/">
                                <img
                                    src="https://uploads-ssl.webflow.com/5e1409032c28770d78bb9446/5e23b56b2e290c1f02ccb77a_twitter-dark.svg"
                                    alt=""/>
                            </Link>
                            <Link to="/" className={ classes.social }>
                                <img
                                    src="https://uploads-ssl.webflow.com/5e1409032c28770d78bb9446/5e23b56bcc9ad74b8c42c0f3_facebook-dark.svg"
                                    alt=""/>
                            </Link>
                            <Link to="/" className={ classes.social }>
                                <img
                                    src="https://uploads-ssl.webflow.com/5e1409032c28770d78bb9446/5e23b56b17bf31e18685a2f3_youtube-dark.svg"
                                    alt=""/>
                            </Link>
                            <Link to="/" className={ classes.social }>
                                <img
                                    src="https://uploads-ssl.webflow.com/5e1409032c28770d78bb9446/5e23b56a17bf31b96085a2f2_pinterest-dark.svg"
                                    alt=""/>
                            </Link>
                        </div>
                        <div className="text-small">©2020 All Right Reserved. </div>
                    </div>
                </Container>
            </AppBar>
        </div>
    );
};

export default Footer;