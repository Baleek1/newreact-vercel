import React from 'react'
import './React.css'
import home from '../component/assets/home.png'
import game from '../component/assets/game_icon.png'
import auto from '../component/assets/automobiles.png'
import sport from '../component/assets/sports.png'
import entertainment from '../component/assets/entertainment.png'
import tech from '../component/assets/tech.png'
import music from '../component/assets/music.png'
import blog from '../component/assets/blogs.png'
import news from '../component/assets/news.png'
import thumb1 from '../component/assets/thumbnail1.png'
import thumb2 from '../component/assets/thumbnail2.png'
import thumb3 from '../component/assets/thumbnail3.png'
import profile from '../component/assets/megan.png'

export const Sidebar = ({sidebar, category, setCategory}) => {
  return (
    <div className={`sidebar $ {sidebar ?"":"small-sidebar"}`}>
<div className="links">
  <div className={`sidebar-links ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
    <img src={home} alt="" /><p>Home</p>
  </div>
  <div className={`sidebar-links ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
    <img src={game} alt="" /><p>Game</p>-
  </div>
  <div className={`sidebar-links ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
    <img src={auto} alt="" /><p>Auto</p>
  </div>
  <div className={`sidebar-links ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
    <img src={sport} alt="" /><p>Sports</p>
  </div>
  <div className={`sidebar-links ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
    <img src={entertainment} alt="" /><p>Entertainment</p>
  </div>
  <div className={`sidebar-links ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
    <img src={tech} alt="" /><p>Tech</p>
  </div>
  <div className={`sidebar-links ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
    <img src={music} alt="" /><p>Music</p>
  </div>
  <div className={`sidebar-links ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
    <img src={blog} alt="" /><p>Blog</p>
  </div>
  <div className={`sidebar-links ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
    <img src={news} alt="" /><p>News</p>
  </div>
  <hr />
  </div>  
  <div className='subscribe-list'>
    <h3>Subcribed</h3>
  <div className="sidebar-links" onClick={()=>setCategory(0)}>
    <img src={profile} alt="" /><p>Mr money</p>
  </div>
  <div className="sidebar-links" onClick={()=>setCategory(0)}>
    <img src={profile} alt="" /><p>Cenat</p>
  </div>
  <div className="sidebar-links" onClick={()=>setCategory(0)}>
    <img src={profile} alt="" /><p>Beast</p>
  </div>
  </div>

    </div>
  )
}
export default Sidebar