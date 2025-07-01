import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import Manger from './components/manger';
// import Footer from './components/Footer.jsx';
import Footer from './components/footer';
import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
    <>    <Navbar />
      <Manger />
      <Footer/></>

  )
}

export default App
