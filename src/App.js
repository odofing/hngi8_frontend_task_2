import React from 'react';
import Logo from './Img/zuri-logo.png'
import Logo2 from './Img/i4g.png'
import Logo3 from './Img/hng-logo.png'
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from './Components/Resume';
import PrintName from './Components/PrintName'
import Contact from './Components/Contact'


const App = () => {
  return (
    <>
    <div> 
    <img src={Logo} alt="name" className='m-5'/>
    <img src={Logo2} alt="name" className='m-5' style={{ width: '120px', height: '40px'}}/>
    <img src={Logo3} alt="name" className='m-5' style={{ width: '180px', height: '40px'}}/>
    </div>
    <PrintName />
    <Resume />
    <Contact />
    </>
  )
}

export default App



