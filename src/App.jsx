import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Helpers/Header';
import Home from './Views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Helpers/Footer';
import Nacklace from './componets/Women_Jewellery/Nacklace';
import Earrings from './componets/Women_Jewellery/Earrings';
import Rings from './componets/Women_Jewellery/Rings';
import Pendants from './componets/Women_Jewellery/Pendants';
import Bracelets from './componets/Women_Jewellery/Bracelets';
import Magal_Sutra from './componets/Women_Jewellery/Magal_Sutra';
import Brooches from './componets/Women_Jewellery/Brooches';
import Man_Bracelets from './componets/Men_Jewellery/Bracelets';
import Man_Rings from './componets/Men_Jewellery/Rings';
import Man_Chains from './componets/Men_Jewellery/Chains';
import Man_Cuff_Links from './componets/Men_Jewellery/Cuff_Links';
import Man_Brooches from './componets/Men_Jewellery/Brooches';
import OurTeam from './componets/OurTeam/OurTeam';
import Book_Appointment from './componets/Book _Appointmen/Book_Appointment';
import Belt from './componets/Accessories/Belt';
import ButtonsAccessories from './componets/Accessories/ButtonsAccessories';
import Pens from './componets/Accessories/Pens';
import Watch from './componets/Accessories/Watch';
import Him from './componets/Rubber_Bracelets/Him';
import Her from './componets/Rubber_Bracelets/Her';
import Gallary_Frame from './componets/Home_Componets/Gallary_Frame';
import Store_Locator from './componets/Store_Locator/Store_Locator';


function App() {
  return (

    <>
      <div style={{ backgroundColor: '#101010' ,display: 'flex', flexDirection: 'column' }}>
        <Header/>
        <Routes scrollToTop>
          <Route exact path="/" element={<Home />} />
          <Route path="/women">
            <Route exact path="nacklace" element={<Nacklace />} />
            <Route exact path="earrings" element={<Earrings />} />
            <Route exact path="rings" element={<Rings />} />
            <Route exact path="pendants" element={<Pendants />} />
            <Route exact path="bracelets" element={<Bracelets />} />
            <Route exact path="magal-sutra" element={<Magal_Sutra />} />
            <Route exact path="brooches" element={<Brooches />} />
          </Route>
          <Route path='/man'>
            <Route exact path="bracelets" element={<Man_Bracelets />} />
            <Route exact path="rings" element={<Man_Rings />} />
            <Route exact path="chains" element={<Man_Chains />} />
            <Route exact path="cuff-links" element={<Man_Cuff_Links />} />
            <Route exact path="brooches" element={<Man_Brooches />} />
          </Route>
          <Route path='/accessories'>
            <Route exact path="belt" element={<Belt />} />
            <Route exact path="buttons" element={<ButtonsAccessories />} />
            <Route exact path="Pens" element={<Pens />} />
            <Route exact path="watch" element={<Watch />} />
          </Route>
          <Route path='/rubbers'>
            <Route exact path="him" element={<Him/>} />
            <Route exact path="her" element={<Her/>} />
          </Route>
          <Route exact path='our-Team' element={<OurTeam />} />
          <Route exact path='gallery' element={<Gallary_Frame />} />
          <Route exact path='book-an-appointment' element={<Book_Appointment />} />
          <Route exact path='store' element={<Store_Locator />} />


        </Routes>
        <hr style={{ borderTop: '3px solid #fff', width: '98%', alignSelf: 'center', marginBottom: '10px' }} />
        <Footer />

      </div>

    </>

  );
}

export default App;
