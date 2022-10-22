import React from 'react';
import { Typography, Avatar, Box } from '@mui/material';
import { Person } from '@mui/icons-material';

function List({room_name,room_id,setRoom_id,socket,setMessage_to_send}) {
  return (
    <Box
      sx={{
        margin: "10.5%",
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "flex-start",
        alignItems: "center",
        border:"1px solid #9d9d9d",
        borderRadius:"15px",
        padding:"12px 5px",
        background:"#bdbdbd",
        cursor:"pointer",
      }}
      onClick={(e)=>{setMessage_to_send("");setRoom_id(room_id);socket.emit("get_messages",{room_id:room_id})}}
    >
      <Avatar sx={{ width: "55px", height: "55px" }}>
        <Person />
      </Avatar>
      <Box
        sx={{
         
          display: "flex",
          flexFlow: "column nowrap",
          textAlign: "left",
         
         
        }}
      >
        <Typography component="h4" sx={{color:"#606060",fontWeight:"bold"}} variant="span">{room_name}</Typography>
       
        <Typography component="h6" sx={{color:"#606060",fontWeight:"normal"}} variant="span">14:50</Typography>
      </Box>
    </Box>
  )
}

export default List