import { Avatar, Button, Grid, Paper, TextField} from "@mui/material";
import { green } from "@mui/material/colors";
import LoginIcon from '@mui/icons-material/Login';
import React, { useState,useContext } from "react";
import UserContext from "../context/UserContext";


function Login(){
    const paperStyle = { padding: "20px", margin: "auto", marginTop: "30px", height: "60vh", width: "270px" }
    
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const {setUser}=useContext(UserContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})
    }
    return(
        <Grid>
        <Paper elevation={10} style={paperStyle} >
            <Grid align="center">
                <h2>
                    Login Here
                </h2>
                <Avatar sx={{ bgcolor: green[500] }}><LoginIcon /></Avatar>
            </Grid>
            <Grid margin="10px" >
                    <TextField
                        type="text"
                        required
                        id="filled-required-username"
                        label="username"
                        variant="filled"
                        fullWidth
                        style={{ marginBottom: '10px' }}
                        value={username}
                        onChange={(e)=>{setUsername(e.target.value)}}
                        
                    />
                    <TextField
                        type="password"
                        required
                        id="filled-required-password"
                        label="password"
                        variant="filled"
                        fullWidth
                        style={{ marginBottom: '10px' }}
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleSubmit}
                    >
                        Login
                    </Button>
            </Grid>
        </Paper>
    </Grid>
    )
}
export default Login