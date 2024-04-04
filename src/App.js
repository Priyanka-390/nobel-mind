import logo from './logo.svg';
import './App.css';
import Mynav from './components/Mynav';
import img from "./assets/images/bgimg.webp"
import Herosec from './components/Herosec';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Faqsec from './components/Faqsec';
import Subscribesec from './components/Subscribesec';
import Footer from './components/Footer';
import Drivingsec from './components/Drivingsec';
import Backtop from './components/Backtop';
import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App()
{
   useEffect(() => {
    AOS.init(
      {
         once: true,
         duration:1000,
      }
        );
      }, [])
  const [loder, setloder] = useState(false);
  useEffect(() => {
    setloder(true)
    setTimeout(() => {
      setloder(false)
    }, 3000);
  }, [])

  return (
     <div>
      {loder ? (
        <div>
          <Preloader />
        </div>
      ) : (
    <div className="App">
      <div className='bg-[url(./assets/images/bgimg.webp)] flex flex-col bg-no-repeat md:bg-size sm:min-h-screen min-h-[700px]'>
        <Mynav />
        <Herosec/>
      </div>
      <Aboutus />
      <Drivingsec/>
      <Contactus />
      <Faqsec />
      <Subscribesec />
      <Footer />
      <Backtop/>
    </div>
  )}
    </div>
  );
}

export default App;
