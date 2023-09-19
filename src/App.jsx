import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// ============ Utils
import ScrollToTop from './Utils/ScrollToTop'

// ============  Home/Landing page path
import Jogja from './Pages/Jogja'
import MenuJogja from './Pages/MenuJogja'
import SavedPageJogja from './Pages/SavedPageJogja'
import PracticalTipsPage from './Pages/PracticalTipsPage'
// ============  Thing-to-do path
// museum
import MuseumPageJogja from './Pages/Things-to-do/MuseumPage/MuseumPage'
import DetailMuseum from './ThingToDoComponents/Museum/Pages/DetailMuseum'
// hotel
import HotelPageJogja from './Pages/Things-to-do/HotelPage/HotelPage'
import DetailHotel from './ThingToDoComponents/Hotel/Pages/DetailHotel'
// Art Activities
import ArtActivitiesPage from './Pages/Things-to-do/ArtActivitiesPage/ArtActivitiesPage'
import DetailArt from './ThingToDoComponents/ArtActivities/Pages/DetailArt'
// Attraction



import './App.css'
import SouvenirPage from './Pages/Things-to-do/SouvenirPage/SouvenirPage'


function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
          <Routes>
            <Route path='/' element={<Jogja />}> </Route>
            <Route path='/menu-jogja' element={<MenuJogja />}></Route>
            <Route path='/saved-page' element={<SavedPageJogja />}></Route>
            <Route path='/practical-tips-page' element={<PracticalTipsPage />}></Route>
            {/* ================ Thing-to-do route ===================== */}
                        {/* ========= museum =========== */}
            <Route path='/things-to-do/museum-jogja' element={<MuseumPageJogja />}></Route>
            <Route path="/things-to-do/museum-jogja/:id" element={<DetailMuseum />}/>
                        {/* ========= hotel =========== */}
            <Route path='/things-to-do/hotel-jogja' element={<HotelPageJogja />}></Route>
            <Route path="/things-to-do/hotel-jogja/:id" element={<DetailHotel />}/>
                        {/* ========= Art Activities =========== */}
            <Route path='/things-to-do/art-activities-jogja' element={<ArtActivitiesPage />}></Route>
            <Route path="/things-to-do/art-activities-jogja/detail-art" element={<DetailArt />}/>
                        {/* ========= Attraction =========== */}

                        {/* ========= Souvenir =========== */}
            <Route path='/things-to-do/souvenir-jogja' element={<SouvenirPage />}></Route>
                      
          </Routes>
      </Router>
    </>
  )
}

export default App
