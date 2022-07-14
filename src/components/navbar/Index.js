import React from 'react';
import {makeStyles} from '@mui/styles';
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
  import {
    Bookmark,
    List,
    ExitToApp,
    Home,
    Person,
    PhotoCamera,
    PlayCircleOutline,
    Settings,
    Storefront,
    TabletMac,
    Subscriptions,
  } from "@mui/icons-material";
  import {Drawer} from '@mui/material';
import { Container } from '@mui/system';
import ExploreIcon from '@mui/icons-material/Explore';
import MovieIcon from '@mui/icons-material/Movie';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import WavesIcon from '@mui/icons-material/Waves';
import Videos from '../videos/Index';


const useStyles = makeStyles((theme)=>({
    container:{
        display:'flex',
        height:"100vh",
        background:"#282424",
        marginRight:"auto",
        paddingTop:"1em"

    },
    item:{
        display: "flex",
        alignItems: "center",
        marginTop:"2em",
        color:"white"
    },
    icon:{
        marginLeft:"0.1em"
    },
    text:{
        fontSize:"bold"
    },
    horizontal:{
        marginTop:"2em"
    }

}));

function Index() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const classes = useStyles();

  return (
    <Container className={classes.container} sx={{width: "260px",position: "absolute"}}>
        <div className={classes.item}>
            <Home className={classes.icon} sx={{fontSize:30}} />
            <Typography className={classes.text} sx={{marginLeft:3}} >Ana Sayfa</Typography>
       </div>
       <div className={classes.item}>
            <ExploreIcon className={classes.icon} sx={{fontSize:30}} />
            <Typography className={classes.text} sx={{marginLeft:3}} >Keşfet</Typography>
       </div>
       <div className={classes.item}>
            <MovieIcon className={classes.icon} sx={{fontSize:30}} />
            <Typography className={classes.text} sx={{marginLeft:3}} >Shorts</Typography>
       </div>
       <div className={classes.item}>
            <SubscriptionsIcon className={classes.icon} sx={{fontSize:30}} />
            <Typography className={classes.text} sx={{marginLeft:3}} >Abonelikler</Typography>
       </div>
       <hr className={classes.horizontal}></hr>
       <div className={classes.item}>
            <VideoLibraryIcon className={classes.icon} sx={{fontSize:30}} />
            <Typography className={classes.text} sx={{marginLeft:3}} >Kitaplık</Typography>

       </div>
       <div className={classes.item}>
            <HistoryIcon className={classes.icon} sx={{fontSize:30}} />
            <Typography className={classes.text} sx={{marginLeft:3}} >Geçmiş</Typography>
       </div>
       <div className={classes.item}>
            <PlayCircleFilledWhiteIcon className={classes.icon} sx={{fontSize:30}} />
            <Typography className={classes.text} sx={{marginLeft:3}} >Videolarınız</Typography>
       </div>
       <div className={classes.item}>
            <AccessTimeIcon className={classes.icon} sx={{fontSize:30}} />
            <Typography className={classes.text} sx={{marginLeft:3}} >Daha sonra izle</Typography>
       </div>
       <div className={classes.item}>
            <ThumbUpIcon className={classes.icon} sx={{fontSize:30}} />
            <Typography className={classes.text} sx={{marginLeft:3}} >Daha sonra izle</Typography>
       </div>
       <div className={classes.item}>
            <WavesIcon className={classes.icon} sx={{fontSize:30}} />
            <Typography className={classes.text} sx={{marginLeft:3}} >Mix - Eminem</Typography>
       </div>
       <hr className={classes.horizontal}></hr>

    </Container>
  )
}

export default Index