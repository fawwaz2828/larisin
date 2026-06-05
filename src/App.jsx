import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import SmoothScroller from './components/SmoothScroller.jsx'
import Home from './pages/Home.jsx'
import KebijakanPrivasi from './pages/KebijakanPrivasi.jsx'
import SyaratKetentuan from './pages/SyaratKetentuan.jsx'
import Legalitas from './pages/Legalitas.jsx'

export default function App() {
  // Deter casual image saving: block right-click context menu and drag on <img>.
  // Not foolproof (screenshots/devtools still work), but stops the obvious paths.
  useEffect(() => {
    const onImg = (e) => {
      if (e.target.tagName === 'IMG') e.preventDefault()
    }
    document.addEventListener('contextmenu', onImg)
    document.addEventListener('dragstart', onImg)
    return () => {
      document.removeEventListener('contextmenu', onImg)
      document.removeEventListener('dragstart', onImg)
    }
  }, [])

  return (
    <div className="app">
      {/* Navbar stays outside the smooth wrapper so it can be position:fixed */}
      <Navbar />
      <SmoothScroller>
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kebijakan-privasi" element={<KebijakanPrivasi />} />
            <Route path="/syarat-ketentuan" element={<SyaratKetentuan />} />
            <Route path="/legalitas" element={<Legalitas />} />
          </Routes>
        </main>
      </SmoothScroller>
    </div>
  )
}
