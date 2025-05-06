import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Navbar';
import './App.css';
import Banner from './assets/Banner';
import Poster from './assets/Poster';
import Popular from './assets/Popular';
import Footer from './assets/Footer';
import About from './assets/About';
import Payment from './assets/Payment'
import Booking from './assets/Booking';


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Define your routes here */}
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Poster />
            <Popular />
            {/* <About /> */}
            <Footer />
            
          </>
        } />
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
