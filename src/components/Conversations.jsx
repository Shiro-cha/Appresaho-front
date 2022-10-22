import List from './List';
import React, { useState, useEffect } from 'react';
import SenderMessage from './SenderMessage';
import io from 'socket.io-client';
import ReceiverMessage from './ReceiverMessage';
import { Box, Avatar, Divider, Tooltip, IconButton, Stack, Typography, TextareaAutosize } from '@mui/material';
import { Person, Menu, Camera, InsertPhoto, Movie, KeyboardVoice, AttachFile, AddLocation, Send } from '@mui/icons-material';

const socket = io.connect("http://192.168.43.44:3001/");

//emit get all messages

const ListMessages = function ({ messageListe, user_id }) {


  if (messageListe !== []) {

    return (
      messageListe.map(function (message, key) {

        if (message.user_id === user_id) {
          return <ReceiverMessage key={key} message_text={message.message} />
        } else {
          return <SenderMessage key={key} message_text={message.message} />
        }

      })
    )
  } else {
    return (<Typography>{"Aucun message trouvé"}</Typography>)
  }


}
const ListeRooms = function ({ roomListe, setRoom_id, socket, setMessage_to_send }) {
  if (roomListe) {
    return (
      roomListe.map(function (value, i) {
        return (
          <List key={i} room_name={value.room_name} room_id={value.room_id} setRoom_id={setRoom_id} socket={socket} setMessage_to_send={setMessage_to_send} />
        )
      })
    )
  }
}





function Conversations() {





  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [user_id] = useState("63515a57c5bea2c4259c97b9")
  const [room_id, setRoom_id] = useState("6351a23f35528899da208e68")
  const [messageListe, setMessageListe] = useState([])
  const [roomListe, setRoomListe] = useState([])
  const [message_to_send, setMessage_to_send] = useState('')
  const [message_to_send_is_valid, setMessage_to_send_is_valid] = useState(false)


  function verifyMessage(e) {
    setMessage_to_send(e.target.value)
    if (e.target.value.trim()) {

      setMessage_to_send_is_valid(true)
    } else {
      setMessage_to_send_is_valid(false)
    }
  }
  function sendMessage(e) {
    if (message_to_send) {
      setMessageListe([])
      socket.emit("msg_send", { user_id: user_id, room_id: room_id, message: message_to_send })
      setMessage_to_send("")
      setMessage_to_send_is_valid(false)
    }
  }




  // Event when a message is receive
  socket.on("msg_receive", function (messages) {
    setMessageListe([])
    socket.emit("get_messages", { room_id: room_id })

  })

  socket.on("all_msg", function (all) {
    setMessageListe(all.messages)
  })
  socket.on("all_rooms", function (rooms) {
    console.log(rooms)
    setRoomListe(rooms)
  })
  useEffect(function () {

    setMessageListe([])
    setRoomListe([])
    socket.emit("get_rooms", { user_id: user_id })
    socket.emit("get_messages", { room_id: room_id })
    console.log(room_id)
  }, [user_id, room_id])

  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
      }}

    >
      <Box
        sx={{
          padding: "1% 2%",
          width: "30%",
          height: "90vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography component='h2' variant='span' sx={{ margin: "2.5% 0", color: "#606060" }}>Mes conversations (2)</Typography>
        <Divider />
        <ListeRooms roomListe={roomListe} setRoom_id={setRoom_id} socket={socket} setMessage_to_send={setMessage_to_send} />

      </Box>
      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          flexFlow: "column nowrap",
        }}
      >
        <Box
          sx={{
            padding: "1% 2.5%",
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#5c5552",
            boxShadow: "0px 0px 10px 0px #d9d9d9",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexFlow: "row nowrap",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Avatar sx={{ width: "40px", height: "40px"}}>
              <Person />
            </Avatar>
            <Typography component="h3" variant="span" sx={{ padding: "0 10px", color: "#fff" }}> Conversation </Typography>
          </Box>
          <Tooltip title="Menu">
            <IconButton onClick={handleDrawerToggle}>
              <Menu sx={{color: "#fff"}}/>
            </IconButton>
          </Tooltip>
        </Box>
        <Box
          sx={{
            width: "100%",
            padding: "1% 9%",
            height: "400px",
            overflowY: "auto",
          }}
        >

          <ListMessages messageListe={messageListe} user_id={user_id} />
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: "-22.5%",
            left: 0,
            right: 0,
            width: "100%",
            padding: "1% 9%",
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "#8f857d",
          }}
        >
          <TextareaAutosize
            maxRows={50}
            placeholder="Écrire un message..."
            style={{
              width: "80%",
              maxWidth: "80%",
              maxHeight: "5%",
              padding: "0.8% 1.2%",
              borderRadius: "25px",
              border: "none",
              background: "#d9d9d9",
              fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif"
            }}
            value={message_to_send}
            onChange={verifyMessage} />
          <IconButton sx={{
            color: "#f7f0f5",
            opacity: 1,
            "&[disabled]": {
              opacity: "0.6"
            }
          }}
            disabled={!message_to_send_is_valid}
            onClick={sendMessage}
          >
            <Send sx={{ width: "35px", height: "35px" }} />
          </IconButton>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-30%",
            left: 0,
            backgroundColor: "#8f857d",
            width: "100%",
            padding: "0% 9%",
          }}
        >
          <Stack direction="row" spacing={4}>
            <IconButton>
              <Camera sx={{ color: "#f7f0f5"}}/>
            </IconButton>
            <IconButton>
              <input hidden type="file" accept="image/*" />
              <InsertPhoto sx={{ color: "#f7f0f5"}}/>
            </IconButton>
            <IconButton>
              <input hidden accept="video/*" type="file" />
              <Movie sx={{ color: "#f7f0f5"}}/>
            </IconButton>
            <IconButton>
              <KeyboardVoice sx={{ color: "#f7f0f5"}}/>
            </IconButton>
            <IconButton>
              <input hidden accept=".doc,.docx,.pdf,.xls,.zip,.rar,.pptx,.mpp,.vsdx" type="file" />
              <AttachFile sx={{ color: "#f7f0f5"}}/>
            </IconButton>
            <IconButton>
              <AddLocation sx={{ color: "#f7f0f5"}}/>
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}


export default Conversations