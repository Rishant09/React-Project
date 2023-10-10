import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from "./components/Navigation/Navigation"
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactFrom from './components/ContactForm/ContactFrom'
import Button from './components/Button/Button'
function App() {
  
  return (
    <div>
      <Navigation/>
      <main className='main_container'>
      <ContactHeader/>
      <ContactFrom/>
      </main>
    </div>
  )
}

export default App;
