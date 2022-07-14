import React from 'react';
import {IconButton, TextField, useMediaQuery} from '@mui/material';
import { useTheme } from "@mui/material/styles";
import {
    alpha,
    AppBar,
    Avatar,
    Badge,
    InputBase,
    Toolbar,
    Typography,
    Stack,
    Box
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import {makeStyles} from '@mui/styles';
  import MenuIcon from "@mui/icons-material/Menu";
  import YouTubeIcon from '@mui/icons-material/YouTube';
  import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
  import VideocamIcon from '@mui/icons-material/Videocam';
  import AppsIcon from '@mui/icons-material/Apps';
  import NotificationsIcon from '@mui/icons-material/Notifications';
  import CircleIcon from '@mui/icons-material/Circle';
  import Navbar from '../navbar/Index';



  const useStyles = makeStyles((theme)=>({
    toolbar : {
        display:'flex',
        background:"#282424",
        justifyContent:"space-between",
        height:"80px"
    },
    menuIcon : {
        color : "white"
    },
    youIcon :{
        marginLeft:"1rem",
        color : "red"
    },
    fontYou:{
        fontWeight:"bold",
        color : "white",
        marginLeft:"10px",
    },
    textField:{
        background:"#181414",
        color:"white",
        width:"500px"
    },
    stack:{
        marginLeft:"6rem",
    },
    searchIcon:{
        color:"white",
    },
    micBut:{
        background:"#181414",
        marginLeft:"1em",
        color:"white",
        borderRadius:"50%"
    },
    iconsFirst:{
        marginLeft:"1.5em",
        color:"white"
    },
    icons:{
        marginLeft:"0.3em",
        color:"white"
    },
    circle:{
        marginLeft:"0.3em",
        background:"blue",
        borderRadius:"50%",
        width:"40px",
        height:"40px"
    },
    name:{
        marginTop:"8px"
    },
    textFieldMd:{
        background:"#181414",
        color:"white",
        width:"200px",
    },
    micButMd:{
        marginLeft:"0.1em",
        background:"#181414",
        color:"white"
    },
    iconsFirstMd:{
        marginLeft:"0.3em",
        color:"white"
    },
    iconsMd:{
        marginLeft:"0.3em",
        color:"white"
    },
    textFieldSm:{
        background:"#181414",
        color:"white",
        width:"130px",
    }


  }));




function Index(){

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    const classes = useStyles();

  return(
    <AppBar position='fixed' className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
            <IconButton>
                <MenuIcon className={classes.menuIcon}></MenuIcon>
            </IconButton>
            <IconButton>
                <YouTubeIcon className={classes.youIcon} sx={{fontSize :40}}></YouTubeIcon>
                <Typography className={classes.fontYou}>
                    ROOT
                </Typography>
            </IconButton>


            <Stack className={classes.stack}>

                {matches ? 
                    <TextField
                 className={classes.textFieldMd}
                 size="small"
                 placeholder='Ara'
                >
                </TextField>
                :
                <TextField
                className={classes.textField}
                size="small"
                placeholder='Aramaaaa'
                >
                </TextField>}
            </Stack>
            <IconButton>
                <SearchIcon className={classes.searchIcon} size="large" sx={{fontSize:30}}></SearchIcon>
            </IconButton>
            <IconButton>
                {matches ? 
                <KeyboardVoiceIcon className={classes.micButMd} size="small" sx={{fontSize:30}}></KeyboardVoiceIcon>  :
                <KeyboardVoiceIcon className={classes.micBut} size="medium" sx={{fontSize:30}}></KeyboardVoiceIcon> 
            }
            </IconButton>
            <IconButton>
                {matches ?
                <VideocamIcon className={classes.iconsFirstMd} size="small" sx={{fontSize:30}}></VideocamIcon> :
                <VideocamIcon className={classes.iconsFirst} size="small" sx={{fontSize:30}}></VideocamIcon>
                }
            </IconButton>
            <IconButton>
                {matches ?
                <AppsIcon className={classes.iconsMd} size="small" sx={{fontSize:30}}></AppsIcon>  :
                <AppsIcon className={classes.icons} size="small" sx={{fontSize:30}}></AppsIcon>  
            }
            </IconButton>
            <IconButton>
                {matches ?
                <NotificationsIcon className={classes.iconsMd} size="small" sx={{fontSize:30}}></NotificationsIcon>    :
                <NotificationsIcon className={classes.icons} size="small" sx={{fontSize:30}}></NotificationsIcon>
            }
            </IconButton>
            <Box className={classes.circle} sx={{fontSize:30}}>

            </Box>
            
        </Toolbar>


    </AppBar>
  )
}

export default Index;