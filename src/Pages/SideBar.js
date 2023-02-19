import React from 'react'
import Logo from '../Icons/Logo.png';
import Dash from '../Icons/Dash.png';
import Game from '../Icons/Game.png';
import Live from '../Icons/Live.png';
import Team from '../Icons/Team.png';
import Bad from '../Icons/Bad.png';
import My from '../Icons/My.png';
import Trop from '../Icons/Trop.png';
import LogOut from '../Icons/LogOut.png';
import Number from '../Icons/Number.png';

function SideBar() {
  return (
    <div className='sideBar'>
      <div className='logs'>
      <img src= {Logo}></img>
      </div>
      <div className='pages'>
        <div className='Ad'>
        <div className='allign'>
        <button className='dash'><img src= {Dash}></img>Dashboard</button>
        <button><img src= {Game}></img>Game Store</button>
        <button><img src= {Live}></img>Live Stream TV</button>
        <button><img src= {Team}></img>Teams Member</button>
        <button><img src= {Bad}></img>Badges</button>
        <button><img src= {My}></img>My Library <img className='Num' src={Number}></img></button>
        <button><img src= {Trop}></img>Thropies</button>
        <div>
        <button className='LogDiv'><img src={LogOut}></img>Log Out</button>
        </div>
        </div>
        </div>
          
        
        
      </div>
      
    </div>
  )
}

export default SideBar