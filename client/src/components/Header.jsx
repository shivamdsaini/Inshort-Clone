import React from 'react'
import {AppBar,Toolbar,makeStyles} from '@material-ui/core';
import {Menu } from '@material-ui/icons';

const useStyle = makeStyles({
    header:{
   background : "white",
   height : "70px",
    },
    logo:{
        height: "55px ",
        margin : 'auto',
        paddingRight:"70px",
    },
    menu:{
        color:"black",
    }
})
       
        
export default function ButtonAppBar() {
    const classes= useStyle();
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

          return (
           
              <AppBar className={classes.header}>
                <Toolbar>
                    <Menu className={classes.menu}/>
                 <img src={url} alt="logo" className={classes.logo}/>
                </Toolbar>
              </AppBar>
           
          );
        }
        
