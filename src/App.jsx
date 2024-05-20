
import { Outlet } from 'react-router-dom'
import './App.css'
// import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Header from './pages/Header';

function App() {


  return (
    <>
      <div className="">
        {/* <NavBar></NavBar> */}
        <Header></Header>
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
