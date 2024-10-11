import { Fade, Reveal } from "react-awesome-reveal";
import { motion } from 'framer-motion'
import './App.css'

import mypicture from '../public/assets/mypicture.png/'
import Navbar from "./Components/Navbar";
import Mouse from "./Mouse";

function App() {

  return (
    <>
      <Navbar />
      <div className='main-container'>
        <div className='landing-container'>
            <div className='landing-grid'>
              <div className='grid-item1'>
                  <Fade triggerOnce damping={1} duration={1000} delay={1500}>
                    <div className='frame-container'></div>

                  </Fade>
                  <Fade triggerOnce damping={1} duration={1000} delay={1000}>
                    <div className='picture-frame'>
                      <img src={mypicture} className='image'></img>
                    </div>
                  </Fade>
              </div>
              <div className='grid-item2 content'>
                <div className='layout'>
                  <span className='nickname'><span className='ken reveal1'>My name&apos;s <span className='fw-bold'>Ken</span></span></span>
                  <div className=''>
                    <span className='name '><span className='reveal'><span className='fw-semibold typing-name'><span className='fw-semibold'></span></span></span></span>
                  </div>
                </div>
              </div>
              <div className='grid-item3 content'>
                <div className='layout'>
                  <p className='description'>
                    <span className='reveal3 text-background'>“Get to know me” </span> 
                    <Fade triggerOnce damping={1} duration={1000} delay={1500}>
                      <span className='text px-5'>
                        I’m currently a 3rd-year Computer Engineering major at KMUTT with a strong passion for both technology and art. I aspire to become a full-stack software engineer in the future while also pursuing my passion for illustration.
                      </span>
                    </Fade>
                  </p>
                </div>
              </div>
              <div className='grid-item4 content'>
                <div className="layout">
                  <div className='button-group'>
                    <Fade triggerOnce damping={1} duration={1000} delay={1500} direction='up'>
                      <motion.a href='#portfolio' className='view-port-button' whileHover={{ scale: 1.15, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} > View Portfolio </motion.a>
                    </Fade>
                    <Fade triggerOnce damping={1} duration={1000} delay={1500} direction='up'>
                      <motion.a href='#art-gallary' className='view-art-button' whileHover={{ scale: 1.1, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }}> Art gallary </motion.a>
                    </Fade>
                  </div>

                </div>
              </div>
            </div>
          </div>
      </div>
      <Mouse />
    </>
  )
}

export default App
