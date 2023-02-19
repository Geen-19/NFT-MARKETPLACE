import './App.css';
import NavBar from './Pages/NavBar';
import DashBoard from './Pages/DashBoard';
import SideBar from './Pages/SideBar';
function App() {
  return (
    <div>
      <div className='Main' >
      <div className='Move'>
      <NavBar></NavBar>
      <DashBoard></DashBoard>
      </div>
      <div className='Move-1'>
      <SideBar></SideBar>
      </div>
      </div>
    </div>
    
  );
}

export default App;
