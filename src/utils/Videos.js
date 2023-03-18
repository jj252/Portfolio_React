import world from '../app/assets/vid/world.mp4';
import { useRef,useEffect } from 'react';


const Video = () => {

    
    return (
      <video src={world} muted autoPlay={"autoplay"} preLoad="auto" loop type="video/mp4" width="20%" />
       

    );
  };
  
  export default Video;