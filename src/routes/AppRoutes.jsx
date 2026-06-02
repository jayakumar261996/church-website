import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home/Home'
import About from '@/pages/About/About'
import Ministries from '@/pages/Ministries/Ministries'
import Events from '@/pages/Events/Events'
import Gallery from '@/pages/Gallery/Gallery'
import Give from '@/pages/Give/Give'
import Contact from '@/pages/Contact/Contact'

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
