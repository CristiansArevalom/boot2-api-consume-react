import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import VideoGame from './components/VideoGame'

function App() {

  return (
    <div>
  
        {/* npm create vite@latest 
        API A CONSUMir...https://www.freetogame.com/api-doc
        */}
          <VideoGame />  
    </div>
  )
}

export default App
