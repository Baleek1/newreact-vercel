import React, { useState } from 'react'
import Feed from '../component/Feed';
import Sidebar from '../component/Sidebar';
import './Page.css'

export const Home = ({sidebar}) => {
    const [category, setCategory] = useState(0);
  return (
    <>
    <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
    <div className={`container ${!sidebar ? 'large-container' : ''}`}>

</div>
    <Feed category={category}/>
    </>
  )
}
export default Home;
