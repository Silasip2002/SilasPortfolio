import React from 'react'
import {
    Typography,Avatar,Grid,Box
}from "@material-ui/core"
import silas_image from "../images/Silas.jpg"
import  Typed from "react-typed"
import { makeStyles } from '@material-ui/core/styles';

//make css style
const useStyles = makeStyles(theme => ({
    avatar :{
        height: theme.spacing(20),
        width : theme.spacing(18),
        margin : theme.spacing(1),
    },
    title:{
        color:"tomato"    
    },
    subtitle:{
        color:"tan",
        marginBottom: '3rem' ,   
    },
    typedContainer:{
        position:"absolute",
        left:"50%",
        top:"50%",
        transform:'translate(-50%,-50%)',
        textAign:"center",
        zIndex:1
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
           <Grid container justify="center" >
              <Avatar className={classes.avatar} src={silas_image} alt="Silas"/>
           </Grid>
           <Grid container justify="center" >
           <Typography variant="h4" className={classes.title}> 
                <Typed strings={['IP PUI KIT, SILAS']} typeSpeed={40}/>
            </Typography>
           </Grid>
           
            <br/>
            <Typography variant="h5" className={classes.subtitle}>
                <Typed strings={[' Are you looking for a Web Developer ?','Contact Me Now!']}
                 typeSpeed={40} 
                 backSpeed={60}
                 loop/>
            </Typography>
        </Box> 
    )
}

export default Header