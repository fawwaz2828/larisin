import { Link } from 'react-router-dom'
import {
  IconMail,
  IconPhone,
  IconInstagram,
  IconMessage,
} from './icons.jsx'
import { WA_KONSULTASI, KONTAK } from '../constants.js'

export default function Footer() {
  // No newsletter backend yet — hand the address off to the brand inbox so the
  // form does something useful instead of silently reloading the page.
  function handleSubscribe(e) {
    e.preventDefault()
    const email = new FormData(e.currentTarget).get('email')?.toString().trim()
    if (!email) return
    window.location.href =
      `mailto:${KONTAK.email}?subject=${encodeURIComponent('Langganan Newsletter larisin ai')}` +
      `&body=${encodeURIComponent(`Halo, saya ingin berlangganan update dari larisin ai. Email saya: ${email}`)}`
    e.currentTarget.reset()
  }

  return (
    <footer className="ft" id="privasi">
      <img className="ft-bg-logo" src="/larisin-logo.png" alt="" aria-hidden="true" />
      <div className="wrap">
        {/* headline + newsletter */}
        <div className="ft-hero">
          <h2 className="ft-headline">
            Otomatiskan Chat, Tingkatkan Penjualan — 24 Jam Tanpa Henti.
          </h2>
          <div className="ft-cta">
            <h4 className="ft-cta-title">Tetap Terhubung!</h4>
            <form className="ft-subscribe" onSubmit={handleSubscribe}>
              <input
                type="email"
                name="email"
                placeholder="Masukkan email Anda"
                aria-label="Alamat email"
                required
              />
              <button type="submit" className="ft-sub-btn">
                Langganan
              </button>
            </form>
          </div>
        </div>

        {/* link columns */}
        <div className="ft-cols">
          <div className="ft-col">
            <h5 className="ft-h">Informasi Kontak</h5>
            <div className="ft-contact">
              <a href={`mailto:${KONTAK.email}`}>
                <IconMail /> {KONTAK.email}
              </a>
              <a href={WA_KONSULTASI} target="_blank" rel="noopener noreferrer">
                <IconPhone /> {KONTAK.whatsapp}
              </a>
            </div>
          </div>

          <div className="ft-col">
            <h5 className="ft-h">Perusahaan</h5>
            <nav className="ft-nav">
              <Link to="/#fitur">Fitur</Link>
              <Link to="/#tentang">Tentang Kami</Link>
              <Link to="/#harga">Harga</Link>
              <a href={WA_KONSULTASI} target="_blank" rel="noopener noreferrer">
                Kontak
              </a>
            </nav>
          </div>

          <div className="ft-col">
            <h5 className="ft-h">Bantuan</h5>
            <nav className="ft-nav">
              <Link to="/#faq">FAQ</Link>
              <Link to="/legalitas">Legalitas</Link>
              <Link to="/kebijakan-privasi">Kebijakan Privasi</Link>
            </nav>
          </div>

          <div className="ft-col">
            <h5 className="ft-h">Ikuti Kami</h5>
            <div className="ft-social">
              <a
                href="https://instagram.com/larisin.ai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram larisin ai"
              >
                <IconInstagram />
              </a>
              <a
                href={WA_KONSULTASI}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp larisin ai"
              >
                <IconMessage />
              </a>
            </div>
          </div>
        </div>

        <p className="ft-disc">
          larisin ai adalah penyedia layanan yang terintegrasi dengan WhatsApp Business API
          dan Instagram Messaging API dari Meta Platforms, Inc. Seluruh layanan tunduk pada
          Acceptable Use Policy Meta, WhatsApp Business Policy, dan Meta Platform Terms.
        </p>

        <hr className="ft-rule" />

        <div className="ft-bottom">
          <p className="ft-copy">
            © 2026 larisin ai — RIFANA. Semua Hak Dilindungi Undang-Undang.
          </p>
          <div className="ft-bottom-links">
            <Link to="/kebijakan-privasi">Kebijakan Privasi</Link>
            <Link to="/syarat-ketentuan">Syarat &amp; Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
