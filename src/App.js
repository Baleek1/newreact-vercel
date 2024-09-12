import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Playvideo from './component/Playvideo'
import { Home } from './Page/Home'
import { Homevideo } from './Page/Homevideo'


function App() {
  const[sidebar, setSidebar] = useState(true);
  return (
    <BrowserRouter>
       <div>
        <Navbar setSidebar={setSidebar} />
       <Routes>
      <Route path="/"  element={ <Home  sidebar={sidebar} />}/>
    
       <Route  path='/video/:categoryId/:videoId' element={<Playvideo/>}/>
       </Routes>
       </div>
    </BrowserRouter>
 
  )
}

export default App
