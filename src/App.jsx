
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar';

function App() {


  return (
    <>
      <div className=''><NavBar></NavBar></div>
      <div className="">
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default App
