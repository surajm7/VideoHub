import {BrowserRouter as Router ,Route ,Routes} from "react-router-dom";
// import{Button} from '@chakra-ui/react'
import Header from "./components/Header";
import Home from "./components/Home"
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import Upload from "./components/Upload";
import Login from "./components/Login";
import Signup from "./components/Signup"
function App() {
  return (

    <>
    <Router>
     
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Videos' element={<Videos/>}/>
        <Route path='/Upload' element={<Upload/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
      <Footer></Footer>
    </Router>
    
    
    </>

   
  );
}

export default App;
