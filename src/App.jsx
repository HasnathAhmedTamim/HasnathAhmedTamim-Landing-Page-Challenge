
import { Outlet } from 'react-router-dom'
import './App.css'
// import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


function App() {


  return (
    <>
      <div className="">
        {/* <NavBar></NavBar> */}
        {/* <NavBar></NavBar> */}
      </div>
      {/* <div>
        <Banner></Banner>
      </div> */}
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
