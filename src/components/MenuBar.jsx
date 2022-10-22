import React from 'react';
import { Link } from 'react-router-dom';
import Chat from '@mui/icons-material/Chat';
import Phone from '@mui/icons-material/Phone';
import Videocam from '@mui/icons-material/Videocam';
import PermContactCalendar from '@mui/icons-material/PermContactCalendar';
import { Stack, IconButton, Tooltip } from '@mui/material';

function MenuBar() {

  return (
    <Stack direction="row" spacing={8}>

      <Link to='/'>
        <Tooltip title="Conversations">
          <IconButton sx={{ color: "#fff" }}>
            <Chat />
          </IconButton>
        </Tooltip>
      </Link>
      <Link to='/appel-vocal'>
        <Tooltip title="Appel vocal">
          <IconButton sx={{ color: "#fff" }}>
            <Phone />
          </IconButton>
        </Tooltip>
      </Link>

      <Link to='/appel-video'>
        <Tooltip title="Appel vidéo">
          <IconButton sx={{ color: "#fff" }}>
            <Videocam />
          </IconButton>
        </Tooltip>
      </Link>

      <Link to='/contacts'>
        <Tooltip title="Contacts">
          <IconButton sx={{ color: "#fff" }}>
            <PermContactCalendar />
          </IconButton>
        </Tooltip>
      </Link>

    </Stack>
  )
}

export default MenuBar