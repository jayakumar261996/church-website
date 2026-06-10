import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home/Home'
import About from '@/pages/About/About'
import Ministries from '@/pages/Ministries/Ministries'
import Events from '@/pages/Events/Events'
import Gallery from '@/pages/Gallery/Gallery'
import Give from '@/pages/Give/Give'
import Contact from '@/pages/Contact/Contact'
import StorePage from '@/pages/Store/store'
import PrayerRequest from '@/pages/PrayerRequest/prayerRequest'
import ZoomLayHand from '@/pages/zoomLayhand/zoomlayhand'
// import StorePage from '@/pages/Store/store' // Import the Store page component

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route element={<MainLayout />}>
          <Route path="ministries" element={<Ministries />} />
          <Route path="events" element={<Events />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="give" element={<Give />} />
          <Route path="contact" element={<Contact />} />
          <Route path="store" element={<StorePage />} /> 
          <Route path="prayer-request" element={<PrayerRequest />} />
          <Route path="zoom-lay-hand" element={<ZoomLayHand />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
