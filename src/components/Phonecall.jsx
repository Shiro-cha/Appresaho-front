import React from 'react'
import Dictaphone from './Dictaphone'
import io from 'socket.io-client';


const socket = io.connect("http://52.25.112.72:3001/");
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
