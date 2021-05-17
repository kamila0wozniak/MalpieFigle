import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Header from './components/HeaderSlider/Header'
import Title from './components/Title/Title'
import About from './components/About/About'
import MyActivities from './components/MyActivities/MyActivities'
import Mosaic from './components/Mosaic/Mosaic'
import Quotation from './components/Quotation/Quotation'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

class App extends React.Component {
  render(){
    return (
        <div>
          <NavBar/>
          <Header />
          <Title />
          <About />
          <MyActivities />
          <Mosaic/>
          <Quotation />
          <Contact />
          <Footer />
        </div>
    );
  }
}

export default App;
