import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles( ( theme ) => ( {
    root: {
        flexGrow: 1,
    },
    section: {
        marginTop: '80px',
        marginBottom: '80px',
    },
    rightGrid: {
        position: 'relative',
    },
    imageDarken: {
    position: 'absolute',
    display: 'flex',
    width: '97.5%',
    height: '94.2%',
    alignItems: 'center',
    borderRadius: '10px',
    backgroundColor: 'rgba(19, 11, 44, 0.6)',
    },
    img: {
        overflow: 'hidden',
        borderRadius: '10px',
    },
    h1: {
        margin: '0px 0px 4px',
        color: '#130b2c',
        fontSize: '82px',
        lineHeight: '84px',
        fontWeight: '800',
        letterSpacing: '-0.02em',
        fontFamily: 'Montserrat',
    },
    subheader: {
        marginBottom: '0px',
        color: '#666a70',
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: '600',
        fontFamily: 'Montserrat',
        margin: '22px 0px 4px',
    },
    button: {
        padding: '12px 28px',
        borderRadius: '8px',
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        fontSize: '16px',
        fontWeight: '700',
        textAlign: 'center',
        cursor: 'pointer',
        marginTop: '40px',
        "&:hover":{
            marginTop: '38px',
            boxShadow: '#b9c5d0 2px 2px 5px 1px',
            backgroundColor: theme.palette.primary.dark,
        },
    },
    smallContainer: {
        maxWidth: '480px',
        marginRight: 'auto',
        marginLeft: '0px',
        direction: 'ltr',
    },
} ) );

const CustomLeftGridItem = withStyles( ( theme ) => ( {
    root: {
        paddingLeft: '0px !important',
        marginTop: '50px'
    },
} ) )( Grid );

const CustomRightGridItem = withStyles( ( theme ) => ( {
    root: {
        paddingRight: '0px !important',
    },
} ) )( Grid );

const ContentLayout = ( ) => {
    const classes = useStyles();

    return (
        <div className={ classes.section }>
            <Container>
                <Grid container className={ classes.root } spacing={ 4 }>
                    <CustomLeftGridItem item sm={12} lg={6}>
                        <div className={ classes.smallContainer }>
                        <h1 className={ classes.h1 }>A resource for daily discipline.</h1>
                        <h3 className={ classes.subheader }>Live Faith is a Online Resource made just for you. Checkout our VLOG for the latest episode. </h3>
                        <Button className={ classes.button }>
                            View on YouTube
                        </Button>
                        </div>
                    </CustomLeftGridItem>
                    <CustomRightGridItem item sm={12} lg={6} className={ classes.rightGrid }>

                        <div className={ classes.imageDarken } />
                        <img
                        src="https://uploads-ssl.webflow.com/5e1409032c28770d78bb9446/5e3da3c008d9660dbb15efae_video-placeholder.jpg"
                        width="100%"
                        className={ classes.img }/>
                        </CustomRightGridItem>
                </Grid>
            </Container>
        </div>
    );
};

export default ContentLayout;
