import React from 'react';
import { Box, Button, Container, Grid } from "@mui/material";
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme)=>({
    container:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    }
}));

function SingleVideo({video,matches}) {
  return (
    <Container>
         <img src={video.img1}  />
    </Container>
  )
}

export default SingleVideo