import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from "axios";

export default function Create() {

    const [user, setUser] = useState({
        id: 0,
        name: '',
        email: '',
        gender: '',
        status: ''
    });
    
    const createUser = () => {
        axios.post('http://localhost:5000/users', user).then(()=>{
            window.location.reload(false);
    })
    }
  return (
      <>
        <h2 style={{backgroundColor:"aqua", borderBottom:'2px solid black', borderRadius: '5px', color:'black'}}>Create User</h2>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        style={{backgroundColor:"pink",borderTop:'2px solid black', borderTopLeftRadius:'5px', borderTopRightRadius:'5px'}}
        >
        <TextField id="standard-basic" label="Id" variant="standard" value={user.id} onChange={(event) =>{setUser({...user, id:event.target.value})}}/>
        <TextField id="standard-basic" label="Name" variant="standard" value={user.name} onChange={(event) =>{setUser({...user, name:event.target.value})}}/>
        <TextField id="standard-basic" label="Email" variant="standard" value={user.email} onChange={(event) =>{setUser({...user, email:event.target.value})}}/>
        <TextField id="standard-basic" label="Gender" variant="standard"value={user.gender} onChange={(event) =>{setUser({...user, gender:event.target.value})}}/>
        <TextField id="standard-basic" label="Status" variant="standard" value={user.status} onChange={(event) =>{setUser({...user, status:event.target.value})}}/>
        <Button variant="contained" color="primary" onClick={createUser}>Create</Button>
        </Box>
    </>
  );
}