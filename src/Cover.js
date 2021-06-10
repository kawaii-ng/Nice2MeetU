import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';

function Cover() {

    const history = useHistory();

    const handle_next = () => {

        history.push('/name')

    }

    return (
        <>
            
            <Grid 
                className="grid-format"
                style={{minHeight: "100vh"}}
            >

                <Grid style={{textAlign: "center"}}>
                    
                    <h1 style={{color: "white", marginBottom: "50px"}}>Nice to Meet You</h1>
                    
                    <Button 
                        onClick={handle_next}
                        variant="contained"
                        style={{background: "white", color: "black"}}
                    >
                        Next
                    </Button>

                </Grid>

            </Grid>             

        </>
    )
}

export default Cover
