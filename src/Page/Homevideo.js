import React from 'react'
import { useParams } from 'react-router-dom';
import Playvideo from '../component/Playvideo'
const Homevideo = () => {
  const { categoryId, videoId } = useParams(); 
  return (
    <div className='play-container'> 
    <Playvideo videoId={videoId}/>
    </div>
  );
};
export default Homevideo;