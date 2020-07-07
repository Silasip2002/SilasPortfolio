import React,{useState} from 'react'
import {Link} from "react-router-dom"
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemText,
    ListItemIcon
} from "@material-ui/core";
import{
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import silasImage from '../images/Silas.jpg'
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSilder from "@material-ui/core/Drawer"

// CSS styles
const useStyle = makeStyles(theme=>({
    menuSilderContainer:{
        width:"10rem",
        background:"#511",
        height:"100%",
        
    },
    avatar:{
        display:"block",
        margin:'0.5rem auto',
        width:theme.spacing(13),
        height:theme.spacing(13),
    },
    listItem:{
        color:"tan"
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText:"Home",
        listPath:"/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText:"Resume",
        listPath:"/resume"
    },
    // {
    //     listIcon: <Apps/>,
    //     listText:"Portfolio",
    //     listPath:"/portfolio"
    // },
    // {
    //     listIcon: <ContactMail/>,
    //     listText:"Contacts",
    //     listPath:"/contacts"
    // }
]

// this function is the entra for the parent class
export const Navbar = () => { 

    //set the style 
    const classes = useStyle()


    //set the silder 
    const [state,setState] = useState({  //default the sildbar state is false
        right:false
    });
    const toggleSilder = (anchor,open) => () => {   // it controls the silder state
        setState({ ...state, [anchor]: open });
        }
    const sideList = (anchor) => (  // it is the silder content
        <Box className={classes.menuSilderContainer} compoent = "div" onClick={toggleSilder('right',false)}>
            <Avatar className={classes.avatar} src = {silasImage} alt="this is the photo of Silas" />
            <Divider/>
            <List>
                {menuItems.map((listItem,key)=> (      
                   <ListItem button key = {key} component={Link} to={listItem.listPath} >
                       <ListItemIcon  className={classes.listItem}> {listItem.listIcon}</ListItemIcon>
                       <ListItemText  className={classes.listItem}> {listItem.listText}  </ListItemText>
                   </ListItem>
                ))}
            </List>
        </Box>
    )


    return (
    <>
        <Box component="nav">
            <AppBar position="static" style={{background:'#222'}}>
                <Toolbar>
                    <IconButton onClick={toggleSilder("right",true)}>
                        <ArrowBack style={{color:"tomato"}}/>
                    </IconButton>
                    <Typography variant='h5' style={{color:"tan"}}>
                        Porfolio
                    </Typography>
                    <MobileRightMenuSilder anchor = "right" open={state.right} onClick={toggleSilder("right",false)}>
                        {sideList("right")}
                    </MobileRightMenuSilder>
                </Toolbar>
            </AppBar>
        </Box>
    </>
    )
}

export default Navbar;


