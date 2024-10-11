import { Fade, Reveal } from "react-awesome-reveal";
import { motion } from 'framer-motion'
import { keyframes } from "@emotion/react";
import './App.css'

import mypicture from '../public/assets/mypicture.png/'
import Navbar from "./Components/Navbar";
import Mouse from "./Mouse";

const text_up = keyframes`
  from {
    transform: translate(0,100%);
    }
    
  to {
    transform: translate(0,0);
  }
`;

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
        <div  className="transition-container">
        </div>
        <Fade cascade damping={1} duration={1000}> 
          <div  id='portfolio' className='project-container'>
            <div className='box d-flex flex-column justify-content-start align-items-center'>
              <Reveal triggerOnce damping={1} keyframes={text_up} duration={0}>
                <span className='reveal title p-3'><span className='fw-semibold'>P</span>roject Journey</span>
              </Reveal>
              <div className='text pb-5 pt-3'>This is my experience working on projects during my Computer Engineering studies, along with my personal projects.</div>
              <div className='project-box-container'>
                <div className='grid-item1'>
                  <Fade triggerOnce duration={1000} direction='left'>
                    <div className="project-box">
                        <a href="/my-profile-website/project/nawintrade"><img src="./../public/project_image/" alt="" />
                          <div className='image image-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" className="bi bi-currency-bitcoin" viewBox="0 0 16 16">
                              <path d="M5.5 13v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.5v1.25c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25V13h.084c1.992 0 3.416-1.033 3.416-2.82 0-1.502-1.007-2.323-2.186-2.44v-.088c.97-.242 1.683-.974 1.683-2.19C11.997 3.93 10.847 3 9.092 3H9V1.75a.25.25 0 0 0-.25-.25h-1a.25.25 0 0 0-.25.25V3h-.573V1.75a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25V3l-1.998.011a.25.25 0 0 0-.25.25v.989c0 .137.11.25.248.25l.755-.005a.75.75 0 0 1 .745.75v5.505a.75.75 0 0 1-.75.75l-.748.011a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25zm1.427-8.513h1.719c.906 0 1.438.498 1.438 1.312 0 .871-.575 1.362-1.877 1.362h-1.28zm0 4.051h1.84c1.137 0 1.756.58 1.756 1.524 0 .953-.626 1.45-2.158 1.45H6.927z"/>
                            </svg>
                          </div>
                        </a>
                      <div className='text'>
                        <div className='name'>Nawin trade</div>
                        <div className='description'>The Stock trading website developed for the Database (CPE241) term project.</div>
                        <a href='/my-profile-website/project/nawintrade' className='view'>View project</a>

                      </div>
                    </div>
                  </Fade>
                </div>
                <div className='grid-item2'>
                  <Fade triggerOnce duration={1000} direction='right'>
                    <div className="project-box">
                      <a href="/my-profile-website/project/Caraball">
                        <div className='image image-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" fill="currentColor" className="bi bi-controller" viewBox="0 0 16 16">
                              <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z"/>
                              <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27"/>
                            </svg>
                        </div>
                      </a>
                      <div className='text'>
                        <div className='name'>Caraball</div>
                        <div className='description'>A 3D multiplayer car football league battle game in CPE101 (Engineer exporation)</div>
                        <a href="/my-profile-website/project/Caraball" className='view'>View project</a>

                      </div>
                    </div>

                  </Fade>
                </div>
                <div className='grid-item3'>
                  <Fade triggerOnce duration={1000} direction='left'>
                    <div className="project-box">
                      <a href='/my-profile-website/project/califonia' className='view'>
                        <div className='image image-1'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="40%" height="40%" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                          </svg>
                        </div>
                      </a>
                      <div className='text'>
                        <div className='name'>Califonia Housing Price Visualization</div>
                        <div className='description'>Data visualization and exploration of California housing prices using Python.</div>
                        <a href='/my-profile-website/project/califonia' className='view'>View project</a>

                      </div>
                    </div>
                  </Fade>
                </div>
                <div className='grid-item4'>
                  <div className='button-group mt-0'>
                    <Fade triggerOnce damping={1} duration={1000} delay={500} direction='up'>
                      <motion.a href='#' className='view-port-button' whileHover={{ scale: 1.15, transition: { duration: 0.3 },}} whileTap={{ scale: 0.9 }} > View more </motion.a>
                    </Fade>
                  </div>

                </div>
              </div>
            </div>
          </div>      
        </Fade>
        <div  className="transition-container">
        </div>
      </div>
      <Mouse />
    </>
  )
}

export default App
