import './App.css';
import React from 'react';
import Conversations from './components/Conversations';
import Header from './components/Header';
import Phonecall from './components/Phonecall';
import Videocall from './components/Videocall';
import Contacts from './components/Contacts';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route index element={<Conversations />} />
            <Route path='/appel-vocal' element={<Phonecall />} />
            <Route path='/appel-video' element={<Videocall />} />
            <Route path='/contacts' element={<Contacts />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div >
  )
}

export default App