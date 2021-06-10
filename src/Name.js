import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { 
    Grid, 
    Button, 
    TextField, 
    InputAdornment } from '@material-ui/core';
import { FaceRounded } from '@material-ui/icons';
import emailjs from 'emailjs-com';

function Name() {

    const history = useHistory();
    const [name, setName] = useState();
    const [error, setError] = useState();

    const rand_card = () => {

        let num = Math.floor(Math.random() * 100 + 1)
        while (num === 18 || num === 41 || num === 48 || num === 49 ) {

            num = Math.floor(Math.random() * 100 + 1)

        }
        return num
    
    }
    
    const [card, setCard] = useState(rand_card());

    function sendEmail(e) {
        e.preventDefault();
    
        setError('');

        if (name === '' || name == undefined ){

            setError('Please type in your name first. ')

        } else {

            emailjs.sendForm('service_6lrqgp8', 'template_8dngwxq', e.target, 'user_D2f8ClCvFMHbQfBfyL8Q8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

          handle_drawCard();
        
        }

    }    

    const handle_drawCard = () => {


        setError('')
        history.push({
            pathname: '/card-number',
            state: {

                cardNum: card,
                    
            }
        });

    }

    return (
        <>
            
            <Grid 
                className="grid-format"
                style={{minHeight: "100vh"}}
            >

                <Grid style={{textAlign: "center"}}>
                    
                    <h1 style={{color: "white", marginBottom: "50px"}}>What is your name?</h1>

                    <form onSubmit={sendEmail} style={{textAlign: 'center'}}>
                        <TextField 
                            style={{
                                height: "50px",
                                background: "white", 
                                marginRight: "10px",
                                marginBottom: "50px", 
                                paddingLeft: "10px",
                                paddingRight: "10px", 
                                borderRadius: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                                
                            }}
                            id="input-with-icon-textfield"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">

                                        <FaceRounded /> 

                                    </InputAdornment>
                                ),
                                autoComplete: 'off'

                            }}
                            name="user"
                            type="text"                            
                        />

                        <input type="text" name="myCard" value={card.toString()} style={{visibility: "hidden"}}/>
                        <br/>

                        { error && <p style={{background: "black", color: "white", padding: "5px", borderRadius: "25px", marginBottom: "50px"}}>{error}</p>}
                        <Button 
                            variant="contained"
                            style={{background: "white", color: "black"}}
                            type="submit"
                            value="Send"
                        >
                            Draw Your Card
                        </Button>
                    </form>

                </Grid>

            </Grid>             

        </>
    )
}

export default Name
