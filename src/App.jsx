import React, { useState } from 'react'
import Navbar from'./assets/Components/Navbar/Navbar'
import Hero from './assets/Components/Hero/Hero'
import Programs from './assets/Components/Programs/Programs'
import Title from './assets/Components/Title/Title'
import About from './assets/Components/About/About'
import Campus from './assets/Components/Campus/Campus'
import Testimonial from './assets/Components/Testimonial/Testimonial'
import Contact from './assets/Components/Contact/Contact'
import Footer from './assets/Components/Footer/Footer'

function App() {

  return (
    <div>
<Navbar/>
<Hero/>
<div className="container">
  <Title subtitle='Our Program' title='What We Offer'/>
  <Programs/>
  <About/>
  <Title subtitle='Gallery' title='Campus Photos'/>

  <Campus/>
  <Title subtitle='TESTIMONIALS' title='What Student Says'/>

  <Testimonial/>

  <Title subtitle='Contact Us' title='Get In Touch'/>
  <Contact/>
  <Footer/>
</div>
</div>

  )
}

export default App
