import React from 'react'
import Navbar from './Navbar'
import Header from "./Header"
import Particles from 'react-particles-js';
import {makeStyles} from "@material-ui/styles"


const useStyles = makeStyles({
    particlesCanva:{
        position:"absolute",
        opacity:0.5
    }
})

const Home = () => {
    const classes = useStyles()
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Particles canvasClassName = {classes.particlesCanva}
        params={{ 
          particles: { 
            number: { 
              value: 30, 
              density: { 
                enable: true, 
                value_area: 500, 
              } 
            }, 
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 1,
                    "color": "tomato"
                },
            },
            size:{
                value:10,
                random:true,
                anim:{
                    enable:true,
                    speed:1,
                    size_min:0.1,
                    sync:true,
                }
            },
          }, 
        }} 
      /> 
        </div>
    )
}
export default Home;
