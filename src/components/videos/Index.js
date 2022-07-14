import React from 'react';
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import {makeStyles} from '@mui/styles';
import {IconButton, TextField, useMediaQuery} from '@mui/material';
import { useTheme } from "@mui/material/styles";
import {Videos} from '../../data/data';
import SingleVideo from './SingleVideo';
import Cedric from '../../img/cedric.jpg'
import ced1 from '../../img/ced1.jpg';
import ced2 from '../../img/ced2.jpeg';
import ced3 from '../../img/ced3.jpeg';
import ced4 from '../../img/ced4.jpeg';
import ced5 from '../../img/ced5.jpeg';
import ced6 from '../../img/ced6.jpeg';
import ced7 from '../../img/ced7.jpeg';
import ced8 from '../../img/ced8.jpeg';


const useStyles = makeStyles((theme)=>({
    container:{
        marginTop:"80px",
        marginLeft:"500px",
        background:"#282424",
        height:"100vh"
    },
    img:{
        marginTop:"5em",
        marginLeft:"1em"
    },
    title:{
        color:"white"
    },
    imgsmall:{
        width:"40px",
        height:"40px",
        borderRadius:"50%",
        marginTop:"0.4em",
        marginLeft:"0.8em"
    },
    gridItem:{
        display:"flex",
        flexDirection:"column",
    },
    text:{
        color:"white",
        marginTop:"0.5em",
        marginLeft:"0.3em"
    }
}));






function Index() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const classes = useStyles();


    /*const renderVideos = Videos.map(video=>(
        <Grid item key={video.id} display="flex" flexDirection="column" alignItems="center" xs={2} sm={4} md={4}>
            <SingleVideo video={video} matches={matches} />
        </Grid>
    ));*/


  return (
    <Container className={classes.container} sx={{marginTop: "80px", marginLeft: "260px"}}>
        <Grid container
        justifyContent="center"
        spacing={{xs:2,md:3}}  
        columns={{xs:4, sm:8, md:12}}
          >
            <Grid item> 
                <img className={classes.img} src={Cedric} />
                <Grid item className={classes.gridItem}>
                    <img className={classes.imgsmall} src={Cedric} />
                    <Typography className={classes.text} sx={{marginLeft:"0.5em",marginTop:"0.6em"}}>
                        Cedric sinirli
                        <br></br>
                        <Typography sx={{fontWeight:"100",color:"gray",cursor:"pointer"}}>
                            Cedric's Channel
                        </Typography>
                        <Typography sx={{fontSize:"12px",marginTop:"0.2em"}}>
                            2.9M görüntülenme                              1 ay önce
                        </Typography>
                    </Typography>
                </Grid>       
            </Grid>
            <Grid item> 
                <img className={classes.img} src={ced5} />
                <Grid item className={classes.gridItem}>
                    <img className={classes.imgsmall} src={ced2} />
                    <Typography className={classes.text} sx={{marginLeft:"0.5em",marginTop:"0.6em"}}>
                        Cedric mutlu
                        <br></br>
                        <Typography sx={{fontWeight:"100",color:"gray",cursor:"pointer"}}>
                            Cedric's Channel
                        </Typography>
                        <Typography sx={{fontSize:"12px",marginTop:"0.2em"}}>
                            2.2M görüntülenme                              3 ay önce
                        </Typography>
                    </Typography>
                </Grid>       
            </Grid>
            <Grid item> 
                <img className={classes.img} src={Cedric} />
                <Grid item className={classes.gridItem}>
                    <img className={classes.imgsmall} src={ced3} />
                    <Typography className={classes.text} sx={{marginLeft:"0.5em",marginTop:"0.6em"}}>
                        Cedric sert
                        <br></br>
                        <Typography sx={{fontWeight:"100",color:"gray",cursor:"pointer"}}>
                            Cedric's Channel
                        </Typography>
                        <Typography sx={{fontSize:"12px",marginTop:"0.2em"}}>
                            1M görüntülenme                             1 yıl önce
                        </Typography>
                    </Typography>
                </Grid>       
            </Grid>
            <Grid item> 
                <img className={classes.img} src={ced4} />
                <Grid item className={classes.gridItem}>
                    <img className={classes.imgsmall} src={Cedric} />
                    <Typography className={classes.text} sx={{marginLeft:"0.5em",marginTop:"0.6em"}}>
                        Zorba Cedric
                        <br></br>
                        <Typography sx={{fontWeight:"100",color:"gray",cursor:"pointer"}}>
                            Cedric's Channel
                        </Typography>
                        <Typography sx={{fontSize:"12px",marginTop:"0.2em"}}>
                            3.8M görüntülenme                              1.5 ay önce
                        </Typography>
                    </Typography>
                </Grid>       
            </Grid>
            <Grid item> 
                <img className={classes.img} src={ced5} />
                <Grid item className={classes.gridItem}>
                    <img className={classes.imgsmall} src={Cedric} />
                    <Typography className={classes.text} sx={{marginLeft:"0.5em",marginTop:"0.6em"}}>
                        Cedric olmak ayrıcalıktır
                        <br></br>
                        <Typography sx={{fontWeight:"100",color:"gray",cursor:"pointer"}}>
                            Cedric's Channel
                        </Typography>
                        <Typography sx={{fontSize:"12px",marginTop:"0.2em"}}>
                            2.9M görüntülenme                              1 ay önce
                        </Typography>
                    </Typography>
                </Grid>       
            </Grid>
            <Grid item> 
                <img className={classes.img} src={ced6} />
                <Grid item className={classes.gridItem}>
                    <img className={classes.imgsmall} src={Cedric} />
                    <Typography className={classes.text} sx={{marginLeft:"0.5em",marginTop:"0.6em"}}>
                        Cedric olmak ayrıcalıktır
                        <br></br>
                        <Typography sx={{fontWeight:"100",color:"gray",cursor:"pointer"}}>
                            Cedric's Channel
                        </Typography>
                        <Typography sx={{fontSize:"12px",marginTop:"0.2em"}}>
                            2.9M görüntülenme                              1 ay önce
                        </Typography>
                    </Typography>
                </Grid>       
            </Grid>
            <Grid item> 
                <img className={classes.img} src={ced7} />
                <Grid item className={classes.gridItem}>
                    <img className={classes.imgsmall} src={Cedric} />
                    <Typography className={classes.text} sx={{marginLeft:"0.5em",marginTop:"0.6em"}}>
                        Cedric olmak ayrıcalıktır
                        <br></br>
                        <Typography sx={{fontWeight:"100",color:"gray",cursor:"pointer"}}>
                            Cedric's Channel
                        </Typography>
                        <Typography sx={{fontSize:"12px",marginTop:"0.2em"}}>
                            2.9M görüntülenme                              1 ay önce
                        </Typography>
                    </Typography>
                </Grid>       
            </Grid>
            <Grid item> 
                <img className={classes.img} src={Cedric} />
                <Grid item className={classes.gridItem}>
                    <img className={classes.imgsmall} src={ced1} />
                    <Typography className={classes.text} sx={{marginLeft:"0.5em",marginTop:"0.6em"}}>
                        Cedric olmak ayrıcalıktır
                        <br></br>
                        <Typography sx={{fontWeight:"100",color:"gray",cursor:"pointer"}}>
                            Cedric's Channel
                        </Typography>
                        <Typography sx={{fontSize:"12px",marginTop:"0.2em"}}>
                            2.9M görüntülenme                              1 ay önce
                        </Typography>
                    </Typography>
                </Grid>       
            </Grid>
            


        </Grid>
    </Container>
  )
}

export default Index