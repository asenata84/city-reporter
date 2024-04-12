"use client";

import Link from "next/link";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";


export default function SignUp() {
  return (
    <center>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box component = "section" sx = {{borderRadius: 1,p: 2, border:"1px solid grey"}}>
      <h1><b>SIGN UP</b></h1>
      <Grid item sx = {{m: 2}}>
      <TextField  type = "name" id="filled-basic" label="Name ..." variant="filled" sx = {{ width:300 }}/>
      </Grid> 
      <Grid item sx = {{m: 2}} >
      <TextField  type = "email" id="filled-basic" label="Email ..." variant="filled" sx = {{ width:300 }}/>
      </Grid>
      <Grid item sx = {{m: 2}}>
      <TextField  type = "password" id="filled-basic" label="Password ..." variant="filled" sx = {{ width:300 }}/>
      </Grid>
      <Grid item sx = {{m: 2}}>
      <TextField  type = "password" id="filled-basic" label="Password again ..." variant="filled" sx = {{ width:300 }}/>
      </Grid>
      <Link href = "/">
        <Button color = "success" sx = {{ width:300 }} variant = "contained">
          CREATE
        </Button>
      </Link>
      <Grid item sx={{ display: "flex", m:2 }}>
      <hr  style={{
    
    height: .5,
    width: 120,
    borderColor : '#000000',
    margin: 12
}}/>
<h1><b>OR</b></h1>
<hr  style={{
    height: .5,
    width: 120,
    borderColor : '#000000',
    margin: 12
}}/></Grid>
<Link href = "/signIn">
        <Button  sx = {{ width:300  }} variant = "contained">
          SIGN IN
        </Button>
      </Link>
      </Box>


      
    </main>
    </center>
  );
}
