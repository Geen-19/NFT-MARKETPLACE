import React from 'react'

import Shape from '../Icons/Cube.png';
import Stroke from '../Icons/Stroke.png';
import Pic from '../Icons/Pic.png'
import Cube from '../Icons/Cube.png';
import Search from '../Icons/Search.png';

function NavBar() {
  return (
    <div className='Nav'>
        <div className='Search'>
            <form className='txt'>
            <input type="text" placeholder="Search Games..."/>
            <img src={Search}></img>
            </form>
        </div>
        <div className='Icons'>
        <div className='icon-1 icc'><button ><img alt='Shape' src={Shape}></img></button></div>
        <div className='icon-2 icc'><button><img alt='Stroke' src= {Stroke}></img></button></div>
        <div className='icon-3 icc'><button><img alt='Cube' src= {Cube}></img></button></div>
        <div className='icon-4 icc' ><button ><img alt='Pic' src= {Pic}></img></button></div> 
        </div>
    </div>
  )
}

export default NavBar