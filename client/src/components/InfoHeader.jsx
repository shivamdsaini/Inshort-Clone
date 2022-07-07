import React from 'react'
import { Box,makeStyles,Typography } from '@material-ui/core';
const useStyle=makeStyles({
  bos:{
      background:"red",
      color:"white",
      height:"48px",
      display:'flex',
      alignItems:'center',  
  },
  text: {
      fontSize:"14px",
      marginLeft:"50px",
      fontWeight:"300px",
  },
  b2:{
      height:"35px",
      '&:last-child':{
          margin:"0 50px 0 20px",
      }

  } 
})

const InfoHeader=()=> {
    const classes=useStyle();
    
    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return (
       <Box className={classes.bos}>
           <Typography className={classes.text}>For the best experience use <b>inshorts</b> app on your smartphone</Typography>
          <Box style={{marginLeft:"auto"}}>
           <img src={appleStore} alt="apple" className={classes.b2}/>
           <img src={googleStore} alt="google" className={classes.b2}/>
          </Box>
       </Box>
    )
}
export default InfoHeader;