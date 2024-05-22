
import { Outlet } from 'react-router-dom'
import './App.css'
// import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';


function App() {


  return (
    <>
      <div>
        <NavBar ></NavBar>
      </div>

      <div className="">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App
