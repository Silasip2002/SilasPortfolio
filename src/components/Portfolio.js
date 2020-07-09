import React from 'react'
import Navbar from "./Navbar"
import {Box, Grid,CardActionArea, CardMedia, CardContent, Typography,CardActions,Button,Card} from "@material-ui/core"
import {makeStyles} from "@material-ui/styles"
import fypImage from "../images/fyp.jpg"
import portfolioImage from "../images/porfotlioImage.jpg"

const useStytles = makeStyles({
    MainClassContainer : {
       height : "50%",
    },
    cardContiner:{
        maxWidth:400,
        margin:"3rem auto"
    }, 
    media: {
        //width:"100px", /* you can use ,% */
            // width:"auto",
         height: "auto" ,
  },
})

function Portfolio() {
    const classes = useStytles()

    return (
        <>
            <Box component="div" className={classes.MainClassContainer}>
                <Navbar></Navbar>
                <Grid container justify="center" >
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContiner}>
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={fypImage}
                            title="Contemplative Reptile"
                            component ="img"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Fuzzy Logic Trading System
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Fuzzy logic is a form of many-valued logic in which the truth values of variables may be any real number between 0 and 1 inclusive. 
                                It is employed to handle the concept of partial truth, where the truth value may range between
                                completely true and completely false. For this theory, the indicator will be combined with fuzzy 
                                logic, just can help to find out a trading balance for improving performance.
                                </Typography>
                                <Typography gutterBottom variant="h6">
                                   Involved teacnologies
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Python, Fuzzy logic theory, Yahoo Finanice Data
                                </Typography>
                            </CardContent>
                                <CardActions>
                                <Button size="small" color="primary"  href="https://github.com/Silasip2002/PytonInFinance">
                                    Source Code 
                                </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    {/* project tow */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContiner}>
                        <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={portfolioImage}
                            title="Contemplative Reptile"
                            component ="img"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Personal Online CV
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                It is Silas personal page, which contains my personal information, poftfolio and contact methods.
                                If you have anyquestions or opportunities, please contact me.
                                </Typography>
                                <Typography gutterBottom variant="h6">
                                   Involved teacnologies
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    HTML5, CSS, ReactJS, 
                                </Typography>
                            </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary" href="https://github.com/Silasip2002/SilasPortfolio">
                                       Source Code
                                    </Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
 
export default Portfolio; 

