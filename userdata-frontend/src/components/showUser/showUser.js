import React,{useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export default function User() {

    const [usersList, setUserList] = useState([]);

    const deleteUser = (id) => {
      axios.delete(`http://localhost:5000/users/${id}`).then(() => {
        window.location.reload(false);
      })
    }

    useEffect(()=>{
        axios.get('http://localhost:5000/users').then( (allUsers)=>{
            setUserList(allUsers.data);
        })

    }, [])

    const tableStyle = {
      backgroundColor: 'pink',
      borderTop: '2px solid black',
      borderLeft: '2px solid black',
      borderRight: '2px solid black',
    };

  return (
      <div><h2 style={{backgroundColor:"aqua", borderBottom:'2px solid black', borderRadius: '5px',color:'black'}}>All Users</h2>
    <TableContainer component={Paper} style={tableStyle}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h4>Id</h4></TableCell>
            <TableCell align="right"><h4>Name</h4></TableCell>
            <TableCell align="right"><h4>Email</h4></TableCell>
            <TableCell align="right"><h4>Gender</h4></TableCell>
            <TableCell align="right"><h4>Status</h4></TableCell>
            <TableCell align="right"><h4>Action</h4></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersList.map((user, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.gender}</TableCell>
              <TableCell align="right">{user.status}</TableCell>
              <TableCell align="right">
              <IconButton aria-label="delete" size="small" onClick={() => deleteUser(user._id)}>
              <DeleteIcon fontSize="inherit" />
              </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
