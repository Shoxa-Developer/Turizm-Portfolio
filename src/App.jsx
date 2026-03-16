import React from 'react'
import Navbar from './components/navbar'
import Carusel from "./components/carusel";
import Image from './components/image';
import Section from './components/section';
import ContactPage from './components/contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Carusel />
      <Image />
      <Section />
      <ContactPage />
    </div>
  )
}

export default App
