import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes
import Header from './Helpers/Header';
import Home from './Views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Helpers/Footer';
import Nacklace from './componets/Women_Jewellery/Nacklace';

function App() {
  return (
   
    <>
  <div style={{backgroundColor:'#101010'}}>
      <Header /> 
      <Routes> 
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/nacklace" element={<Nacklace />} /> 
       
       
      </Routes>
      <Footer />

  </div>
    
    </>
   
  );
}

export default App;
