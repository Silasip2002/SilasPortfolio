import React from 'react'
import {makeStyles,withStyles} from "@material-ui/styles"
import {Typography,Grid, Avatar, Box} from "@material-ui/core"
import Navbar from "./Navbar";
import silas_image from"../images/Silas.jpg"
import LinearProgress from '@material-ui/core/LinearProgress';
import Particles from 'react-particles-js';
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import zIndex from '@material-ui/core/styles/zIndex';


const useStyle = makeStyles({
    container : {
        background: "rgba(0, 0, 0, 0.5) "
        ,
        borderRadius: "25px",
        width: "60%",
        alignContent:"center",
        margin: "auto",   
        padding: "10px",    
        marginTop:"15px",     
        marginBottom:"20px",
        color:"white",
        
    },
    silasIcon:{
        width: "9rem",
        height : "9rem",
    },
    info:{
        paddingLeft:"30px",
    },
    line:{
        border:  "red"
    },
    contactMe:{
       color:"white",
    },
    particlesCanva:{
        position:"absolute",
        zIndex:-1,
    }, 
    table: {
        minWidth: 700,
      },
   
}) 
//the education data and job experinece table and data
function createData(year,content,details,projects,technologies) {
    return {year,content,details,projects,technologies};
  }

  const educations  = [
    createData('Sep 2018 – 2020', "City University of Hong Kong" , "Bachelor’s degree of Science in Computer Science" ),
    createData('Sep 2016 - 2018', "Hong Kong Institute of Vocational Education (Tsing Yi)"," Higher Diploma in Software Engineering"),
  ];

  // job 1
  var year = "June 2019 – May 2020"
  var companyName = "Project coordinator | L&E Management Consultants Limited"
  var details = ["To keep track of daily process of a project, and report to a project manager.", "To document accident report and report to supervisor.","To assistant draw system architecture diagram.","To communicate with IBM product support team."]
  var projects = ["API Connection upgrade with Bank of East Asia", "IBM Private Cloud upgrade with Bank of East Asia","E-MPF Project with IBM "]
  var technologies = ['Microsoft word','Microsoft excel','Microsoft PowerPoint','IBM Product support system']

  //job 2
  var year2 = "Aug 2018 – Dec 2019"
  var companyName2 = "Executive Assistant II | IVE Tsing Yi Computer Department"
  var details2 = ["Web design for ICT material for secondary student", "Video editing for ICT material for secondary student"]
  var projects2 = ["Quality Education Fund – ICT E-learning Project"]
  var technologies2 = ["HTML5", "CSS", "PHP", "MySQL", "JavaScript", "jQuery", "Adobe Premiere"]

  //job 3
  var year3 = "July 2017 – Sep 2017"
  var companyName3 = "PHP Developer | FlexSystem Ltd."
  var details3 = ["Custom an open source survey software to suit the company requirement for internal usage. "]
  var projects3 = ["Survey website for internal useage"]
  var technologies3 = ["HTML", "CSS", "PHP", "MySQL", "JavaScript", "jQuery"]

  const jobs  = [
    createData(year, companyName , details,projects,technologies),
    createData(year2, companyName2 , details2,projects2,technologies2),
    createData(year3, companyName3 , details3,projects3,technologies3)
  ];


  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "tan",
      color: "white",
      align:"center",
    },
    body: {
      fontSize: 14,
      align:"center",
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: "white",
      },
    },
  }))(TableRow);
  

export const Resume = () => {
    const classes = useStyle()
    return (
        <div>
           <Particles canvasClassName = {classes.particlesCanva}></Particles> 
           <Navbar/>
           <Grid container spacing={3} className={classes.container}>
               <Grid item xs={4}  align="center">
                   <Avatar src={silas_image} className={classes.silasIcon}/>
               </Grid>
               <Grid item xs={8} className={classes.info}>
                   <Typography variant="h5" >SILAS</Typography>
                   <Typography  >Web Programmer</Typography>
                   <hr className="line"/>
                   <Typography variant="h6" >About Me</Typography>
                   <Typography  >Hi, It is my Resume, please contact me for getting more information</Typography>
               </Grid>
               <Grid item xs={12} >  <hr/> </Grid>

               {/* skill bar */}
               <Grid item xs={4} >
               <Typography variant="h6" >Skill</Typography>
               <Typography  >React js</Typography>
               <LinearProgress variant="determinate" value={60} />
               <Typography  >Java</Typography>
               <LinearProgress variant="determinate" value={80} />
               <Typography  >Python</Typography>
               <LinearProgress variant="determinate" value={80} />
               <Typography  >PHP-Lavaral</Typography>
               <LinearProgress variant="determinate" value={50} />
               <Typography >Vue js</Typography>
               <LinearProgress variant="determinate" value={20} />
               <br/>
               <Typography variant="h6" >Other Knowledge</Typography>
               <Typography  >Frontend: JavaScript, jQuery, React.js, Vue.js, HTML, CSS</Typography>
               <br/>
               <Typography>Backend: Java, Python, PHP, Laravel, Node.js , Mysql</Typography>
               <br/>
               <Typography  >Product Concept: AWS S3, AWS EC2,Fundatmental Data Mining WordPress</Typography>
               <br/>
               <Box variant="div" className={classes.contactMe}>
                    <Typography  variant="h6">Contacnt</Typography>
                    <Link  href="https://api.whatsapp.com/send?phone=85267052408&text=Hi%20Silas,%20I%20find%20you%20though%20your%20Online%20CV." >67052408</Link>
                    <br/>
                    <Link href="email:faithsilas@gmail.com" >faithsilas@gmail.com</Link>
              </Box>
               </Grid>
                {/* Education and Work experience */}
               <Grid item xs={8} >
               <Typography variant="h4" align ="center" >Education</Typography>
               <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Year</StyledTableCell>
                            <StyledTableCell align="left">Content</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {educations.map((education) => (
                            <StyledTableRow key={education.year}>
                                <StyledTableCell align="center">{education.year}</StyledTableCell>
                                <StyledTableCell align="left"><h4>{education.content}</h4><li>{education.details}</li> </StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                            <br/>
                    <Typography variant="h4" align ="center" >Job experience</Typography>
               <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Year</StyledTableCell>
                            <StyledTableCell align="left">Content</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {jobs.map((job) => (
                            <StyledTableRow key={job.year}>
                                <StyledTableCell align="center">{job.year}</StyledTableCell>
                                <StyledTableCell align="left"> <h4>{job.content}</h4> {job.details.map(detail => (<li>{detail}</li>))} <h5>Main Projects Involved:</h5> {job.projects.map(project => (<li>{project}</li>))}  <h5>Technology Involved:</h5>  {job.technologies.map(technology => (<li>{technology}</li>))}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
               </Grid>
           </Grid>
        </div>
    )
}
export default Resume;