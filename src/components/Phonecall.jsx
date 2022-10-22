import React from 'react'
import Dictaphone from './Dictaphone'
import io from 'socket.io-client';


const socket = io.connect("http://192.168.43.44:3001/");
function Phonecall() {
  return (
   
    <div>
       {
     <Dictaphone socket={socket}/>
    }
    
    </div>
  )
}

export default Phonecall
