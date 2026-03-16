
import './App.css'
import './css/Food.css'
import './css/Room.css'
import './css/Spa.css'
import './css/Modal.css'
import './css/Pages.css'
import './css/Home.css'
import './css/Booking.css'
import './css/Footer.css'
import './css/Navbar.css'
import './css/Hero.css'



import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RoomScreen from './screens/RoomScreen'
import BookRoom from './components/BookRoom'
import FoodScreen from './screens/FoodScreen'
import SpaScreen from './screens/SpaScreen'
import Footer from './components/Footer'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import Scroll from './components/Scroll'
import SpaBooking from './components/SpaBooking'
import BookingConfirmation from './components/BookingConfirmation'


function App() {

  return (  
   
    <BrowserRouter>

    <Scroll />
      <Navbar />

      <Routes>

        <Route path='/' element={<HomeScreen />} />
        <Route path='/rooms' element={<RoomScreen />} />
        <Route path='/book/:roomid' element={<BookRoom />} />
        <Route path='/food' element={<FoodScreen />} />
        <Route path='/spa' element={<SpaScreen />} />
        <Route path='/spa-book/:id' element={<SpaBooking />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />

      </Routes>
   
      <Footer />

    </BrowserRouter>

  );
}

export default App
