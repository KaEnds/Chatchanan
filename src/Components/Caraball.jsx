import './ProjectDetail.css'
import Navbar from './Navbar'
import Mouse from '../Mouse.jsx';
import Contact from './Contact'

import image1 from "../../public/project_asset/caraball main.png"
import image2 from "../../public/project_asset/model car1.png"
import image3 from "../../public/project_asset/model car2.png"
import image4 from "../../public/project_asset/model map1.png"
import image5 from "../../public/project_asset/model map2.png"
import image6 from "../../public/project_asset/single image1.png"
import image7 from "../../public/project_asset/single image2.png"
import image8 from "../../public/project_asset/multi image2.png"
import image9 from "../../public/project_asset/multi image4.png"
import image10 from "../../public/project_asset/multi image5.png"

import video1 from "../../public/project_video/single-video.mp4"
import video2 from "../../public/project_video/multi-video.mp4"

function Caraball() {
  return (
    <>
    <Mouse />
    <Navbar /> 
    <div className='main-project-container'>
     <div className='navbar-block'></div>
     <div className='project-container-layout'>
         <div className='project-header'>
           <h1 className='title mb-5'>Caraball</h1>  
           <p className='text mb-5'>3D multiplayer game using Unity and Photon Engine (multiplayer server services), inspired by Rocket League.</p>
         </div>
         <div className='project-image-layout'>
           <div className='project-image'>
             <img src={image1} alt="" />
           </div>
         </div>
       <div className='text project-detail'>
         <h2 className='title mt-5 mb-3'>Project Overview</h2>
         <p>Caraball is a multiplayer game developed using Unity and Photon Engine. We are working on game design, development, multiplayer server setup, and deployment, as part of learning how to design games, use Unity, build models, and optimize the game before deployment. </p>
         <h2 className='title mt-5 mb-3'>Modeling</h2>
         <div className='row my-3'>
            <p>Car modeling</p>
            <div className="col-6  d-flex flex-column justify-content-between">
              <img src={image2} alt="" />
            </div>
            <div className="col-6  d-flex flex-column justify-content-between">
              <img src={image3} alt="" />
            </div>
         </div>
          <p>Map modeling</p>
         <div className="row my-3">
            <div className="col-12 d-flex flex-column justify-content-between">
              <img src={image4} alt="" />
            </div>
         </div>
         <div className="row my-3">
            <div className="col-12 d-flex flex-column justify-content-between">
              <img src={image5} alt="" />
            </div>
         </div>

         <h2 className='title mt-5 mb-4'>Game level design</h2>
         <p>Single player</p>
         <div className='row my-3'>
            <div className="col-6  d-flex flex-column justify-content-between">
              <img src={image6} alt="" />
            </div>
            <div className="col-6  d-flex flex-column justify-content-between">
              <img src={image7} alt="" />
            </div>
         </div>
         <div className="row my-3">
         <div className="col-12 d-flex flex-column justify-content-between">
            <video width="100%" controls autoPlay muted>
              <source src={video1} type="video/mp4" />
            </video>
          </div>
         </div>
         <p>Multiple player</p>
         <div className='row my-3'>
            <div className="col-6  d-flex flex-column justify-content-between">
              <img src={image8} alt="" />
            </div>
            <div className="col-6  d-flex flex-column justify-content-between">
              <img src={image9} alt="" />
            </div>
         </div>
         <div className="row my-3">
            <div className="col-12 d-flex flex-column justify-content-between">
              <img src={image10} alt="" />
            </div>
         </div>
         <div className="row my-3 vedio-row">
          <div className="col-12 d-flex flex-column justify-content-between">
            <video width="100%" controls autoPlay muted>
              <source src={video2} type="video/mp4" />
            </video>
          </div>
         </div>
         <h2 className='title mt-5 mb-3'>Teachnology</h2>
         <ui>
           <li className='mb-4'>Game Engine: Unity Engine</li>
           <li className='mb-4'>Multiplayer server: Photon Engine</li>
         </ui>
       </div>
       
     </div>
    </div>
    <Contact />
   </>
  )
}

export default Caraball
