import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid } from '@material-ui/core';

function Num() {

    const location = useLocation();
    const card = location.state.cardNum;

    const [num, setNum] = useState(0);
    const speed = card < 30 ? 50: 10;

    const count_up = () => {

        if(num !== card){

            setTimeout(() => {
                setNum(prevState => prevState + 1)
            }, speed)

        }

    }

    useEffect(() => {
        
        count_up()
    
    },[num])

    return (
        <>
            
            <Grid 
                className="grid-format"
                style={{minHeight: "100vh"}}
            >

                <Grid style={{textAlign: "center"}}>

                    <h1 style={{color: "white", marginBottom: "50px"}}>Card No. </h1>

                    <h1 style={{marginBottom: "50px"}}>{num}</h1>

                    <p style={{background: "white", color: "black", padding: "15px", borderRadius: "50px", cursor: "pointer"}}>我已經收到您的Card No. </p>

                </Grid>

            </Grid>             

        </>
    )
}

export default Num
