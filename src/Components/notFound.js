import * as React from 'react';
// import Navbarlink from "./navBarLink";
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';

    
    
    const NotFound=()=>{
        const navigate = useNavigate()
        return(
            <>
            {/* <Navbarlink/> */}
            
            <div >
                <br/><br/><br/><br/>
            <img src="https://thumbs.dreamstime.com/b/error-like-laptop-dead-emoji-cartoon-flat-minimal-trend-modern-simple-logo-graphic-design-error-like-laptop-dead-emoji-122823384.jpg" alt=""/>
            </div>
            <br/>


            <div>
            <Button sx={{marginLeft:"-170%", marginTop:"1050%", width: "10%"}}  
               variant="contained"
                   onClick={()=>{
                    navigate('/')
                  }}
                   >Back</Button>
                   </div>
            </>
            )
        }

export default NotFound;    
         