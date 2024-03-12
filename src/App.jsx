import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes
import Header from './Helpers/Header';
import Home from './Views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   
    <>
    
      <Header /> 
      <Routes> 
        <Route exact path="/" element={<Home />} /> 
       
       
      </Routes>
    
    </>
   
  );
}

export default App;
