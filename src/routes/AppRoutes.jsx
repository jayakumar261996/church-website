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
import OurBranches from '@/pages/ourbranches/branches'
import Prayer from '@/pages/prayer-mountain/prayer'
import PrayerHouse from '@/pages/prayer-house/prayerHouse'
import BibleCollege from '@/pages/BibleCollege/bibleCollage'
import SophiaCollege from '@/pages/SophiaCollege/sophiaCollege'
import SundaySchool from '@/pages/SundaySchool/sundaySchool'
import Multimedia from '@/pages/multimediaInstitute/multimedia'
import Testimonials from '@/pages/testimonials/testimonials'
import Testimonial2 from '@/pages/testimonials/testimonial-2'
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
          <Route path="our-branches" element={<OurBranches />} />
          <Route path="prayer" element={<Prayer />} />
          <Route path="bible-college" element={<BibleCollege />} />
          <Route path="prayer-house" element={<PrayerHouse />} />
         <Route path="sofia-college" element={<SophiaCollege />} />
          <Route path="sunday-school" element={<SundaySchool />} />
           <Route path="multi-media" element={<Multimedia />} />
           <Route path="testimonials" element={<Testimonials />} />
             <Route path="testimonial-2" element={<Testimonial2 />} />

          
          

        </Route>
      </Routes>
    </BrowserRouter>
  )
}
