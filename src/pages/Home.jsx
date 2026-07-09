import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger)
import {
  IconCheck,
  IconX,
  IconArrowRight,
  IconFlame,
  IconGift,
  IconChevronDown,
  IconMessage,
} from '../components/icons.jsx'
import {
  WA_KONSULTASI,
  WA_KONSULTASI_GRATIS,
  WA_LITE,
  WA_PRO,
  WA_FAQ,
} from '../constants.js'

const problems = [
  ['/stress.png', 'Admin sibuk balas chat', 'Admin Kewalahan Membalas Pesan', 'Chat berulang soal harga & stok menyita waktu tim dan menurunkan produktivitas.'],
  ['/pergi.png', 'Notifikasi chat terlewat', 'Calon Pembeli Hilang Begitu Saja', 'Chat malam & akhir pekan yang lambat dibalas langsung lari ke kompetitor.'],
  ['/duit.png', 'Biaya operasional CS', 'Biaya CS 24 Jam Sangat Mahal', 'CS siaga penuh butuh puluhan juta/bulan, tapi tanpa itu bisnis terlihat kurang profesional.'],
]

const faqs = [
  [
    'Apakah itu larisin ai?',
    'larisin ai adalah platform Asisten AI Otomatis yang membantu bisnis Anda membalas pesan pelanggan secara otomatis melalui WhatsApp Business API dan Instagram resmi dari Meta. AI kami dilatih menggunakan data produk dan SOP bisnis Anda sendiri, sehingga balasannya terasa natural dan relevan — bekerja 24 jam tanpa hari libur, tanpa perlu menambah tim CS.',
  ],
  [
    'Apakah saya butuh nomor WhatsApp baru?',
    'Tidak harus. Jika Anda sudah memiliki nomor WhatsApp bisnis yang aktif, nomor tersebut bisa langsung kami daftarkan ke WhatsApp Business API resmi. Namun jika nomor lama Anda masih menggunakan WhatsApp reguler atau WhatsApp GB (versi tidak resmi), kami akan bantu proses migrasi atau pembuatan nomor baru agar prosesnya berjalan lancar dan aman.',
  ],
  [
    'Apakah aman dan tidak akan diblokir oleh WhatsApp?',
    '100% aman. larisin ai menggunakan WhatsApp Business API resmi Meta Platforms, Inc. — bukan aplikasi modifikasi atau pihak ketiga tidak resmi. Akun Anda terlindungi dari risiko pemblokiran yang sering terjadi pada pengguna aplikasi WA tidak resmi. Seluruh aktivitas kami mematuhi WhatsApp Business Policy yang berlaku.',
  ],
  [
    'Bisakah saya mengakses dashboard larisin ai lewat HP?',
    'Bisa! Dashboard larisin ai dirancang responsif dan dapat diakses melalui browser di HP, tablet, maupun komputer kapan saja dan di mana saja. Anda bisa memantau laporan chat, mengatur alur percakapan AI, dan mengecek performa bisnis langsung dari genggaman tangan Anda.',
  ],
  [
    'Saya sudah punya nomor WhatsApp lama yang aktif, bagaimana caranya?',
    'Tidak masalah sama sekali! Tim kami akan memandu Anda melalui proses migrasi nomor WhatsApp lama ke sistem WhatsApp Business API. Prosesnya membutuhkan waktu sekitar 1–3 hari kerja tergantung verifikasi dari Meta. Selama proses berlangsung, nomor Anda tetap bisa digunakan seperti biasa. Setelah selesai, nomor lama Anda akan tampil dengan centang hijau resmi.',
  ],
  [
    'Berapa lama proses setup hingga sistem AI aktif?',
        'Untuk semua paket, proses verifikasi nomor WhatsApp Business API dari Meta membutuhkan waktu sekitar 1–3 hari kerja setelah data bisnis Anda kami daftarkan. Khusus pengguna Paket Enterprise, tim kami menyediakan sesi onboarding 1-on-1 selama 60 menit untuk memastikan AI Anda siap melayani pelanggan dengan sempurna.',
  ],
  [
    'Apakah AI larisin ai bisa memahami Bahasa Indonesia dengan baik?',
    'Ya, sangat baik. AI kami mendukung Bahasa Indonesia formal, semi-formal, hingga bahasa gaul dan singkatan yang umum digunakan pelanggan sehari-hari seperti "gan", "kak", "min", "mau tanya dong", dan sebagainya. AI dilatih khusus untuk konteks pasar Indonesia sehingga percakapannya terasa natural, hangat, dan tidak kaku seperti chatbot konvensional.',
  ],
  [
    'Bagaimana jika pelanggan bertanya hal yang tidak ada di katalog produk saya?',
    'AI kami dirancang untuk menangani hal ini secara cerdas. Jika ada pertanyaan di luar data yang sudah dilatihkan, AI akan memberikan respons sopan bahwa pertanyaan akan diteruskan ke tim manusia, lalu secara otomatis mengalihkan percakapan ke admin Anda — tanpa pelanggan merasa diabaikan. Anda juga bisa terus memperbarui basis pengetahuan AI kapan saja melalui dashboard.',
  ],
  [
    'Apakah data percakapan pelanggan saya aman dan tidak disalahgunakan?',
    'Keamanan data Anda adalah prioritas utama kami. Seluruh data percakapan dienkripsi dan hanya dapat diakses oleh akun bisnis Anda sendiri. larisin ai tidak pernah menjual, menyewakan, atau membagikan data percakapan kepada pihak ketiga mana pun untuk tujuan iklan atau komersial. Kami beroperasi sesuai Undang-Undang Pelindungan Data Pribadi (UU PDP) No. 27 Tahun 2022 dan kebijakan privasi Meta Platforms, Inc. Baca selengkapnya di halaman Kebijakan Privasi kami.',
  ],
  [
    'Bagaimana cara memulai dan berlangganan larisin ai?',
    'Sangat mudah! Cukup klik tombol "Konsultasi Gratis" di halaman ini, dan tim kami akan menghubungi Anda via WhatsApp untuk memahami kebutuhan bisnis Anda. Kami akan merekomendasikan paket yang paling sesuai, memandu proses pendaftaran, dan memastikan sistem AI Anda aktif secepat mungkin. Tidak ada kontrak jangka panjang — Anda bebas upgrade, downgrade, atau berhenti berlangganan kapan saja.',
  ],
]

function Eyebrow({ light, children }) {
  return (
    <span className={`eyebrow${light ? ' light' : ''}`}>
      <span className="dots">
        <i />
        <i />
      </span>{' '}
      {children}
    </span>
  )
}

// Rotating seal badge. Only the outer text ring rotates so the center icon stays crisp.
// `arrow` swaps the center star for a lime disc + arrow (hero CTA-style seal).
// `check` swaps the center star for a lime verification checkmark.
function Seal({ id, text, fontSize = 10, arrow = false, check = false }) {
  const ringRef = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ringRef.current, {
        rotation: 360,
        duration: 16,
        ease: 'none',
        repeat: -1,
        svgOrigin: '50 50',
      })
    }, ringRef)
    return () => ctx.revert()
  }, [])

  return (
    <svg className="seal" viewBox="0 0 100 100">
      <defs>
        <path id={id} d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
      </defs>
      <circle cx="50" cy="50" r="49" fill="#143d33" />
      <g ref={ringRef}>
        <text
          fill="#a3e635"
          fontSize={fontSize}
          fontFamily="Space Grotesk"
          letterSpacing="1.6"
          fontWeight="600"
        >
          <textPath href={`#${id}`} startOffset="0">
            {text}
          </textPath>
        </text>
      </g>
      {check ? (
        <path
          d="M40 50.5 L47 57.5 L61 43.5"
          fill="none"
          stroke="#a3e635"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : arrow ? (
        <g>
          <circle cx="50" cy="50" r="19" fill="#a3e635" />
          <path
            d="M44 56 L56 44 M48 44 H56 V52"
            fill="none"
            stroke="#143d33"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ) : (
        <path
          d="M50 37 L53.5 46.5 L63 50 L53.5 53.5 L50 63 L46.5 53.5 L37 50 L46.5 46.5 Z"
          fill="#a3e635"
        />
      )}
    </svg>
  )
}

export default function Home() {
  // High-quality scroll reveal for the cards: a "focus-in" — items rise, settle,
  // and sharpen from a slight blur, staggered per group, firing as each group
  // scrolls into view. Reduced-motion users get fully-visible cards, no anim.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const groups = [
      { sel: '.prob-grid .pcard', trigger: '.prob-grid' },
      { sel: '.sx-grid .sx-card, .sx-grid .sx-img', trigger: '.sx-grid' },
      { sel: '.price-grid .price-card', trigger: '.price-grid' },
      { sel: '.about-grid > *', trigger: '.about-grid' },
      { sel: '.faq-list .faq-item', trigger: '.faq-list' },
    ]

    // 1) Hide the cards up front so they never flash before the reveal.
    groups.forEach(({ sel }) => {
      const items = gsap.utils.toArray(sel)
      if (items.length) gsap.set(items, { opacity: 0, y: 34, scale: 0.97, filter: 'blur(10px)' })
    })

    const tweens = []
    // 2) Build the scroll-triggered reveals AFTER ScrollSmoother (a parent
    //    effect) has initialised, so the triggers bind to the smooth scroller
    //    and fire on scroll rather than against a stale scroll position.
    const raf = requestAnimationFrame(() => {
      groups.forEach(({ sel, trigger }) => {
        const items = gsap.utils.toArray(sel)
        if (!items.length) return
        tweens.push(
          gsap.to(items, {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power3.out',
            stagger: { each: 0.1, from: 'start' },
            clearProps: 'filter',
            force3D: true,
            scrollTrigger: { trigger, start: 'top 82%', once: true },
          }),
        )
      })
      ScrollTrigger.refresh()
    })

    return () => {
      cancelAnimationFrame(raf)
      tweens.forEach((t) => {
        t.scrollTrigger && t.scrollTrigger.kill()
        t.kill()
      })
    }
  }, [])

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero" id="beranda">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <Eyebrow>Jalur Resmi Meta Platforms, Inc. API</Eyebrow>
              <h1>
                Bisnis Anda Tidak Boleh Tidur.{' '}
                <span className="accent">
                  Biarlah AI yang Berjaga <span className="hl">24 Jam</span>.
                </span>
              </h1>
              <p className="lead">
                Asisten AI resmi WhatsApp &amp; Instagram dari Meta — balas chat, proses
                order, dan naikkan konversi 24 jam. Tanpa admin tambahan.
              </p>
              <div className="hero-actions">
                <a
                  href={WA_KONSULTASI_GRATIS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  Konsultasi Gratis Sekarang <span className="arr"><IconArrowRight /></span>
                </a>
                <Link to="/#fitur" className="link-underline">
                  Lihat Semua Fitur
                </Link>
              </div>
            </div>
            <div className="hero-mascot">
              <img src="/laris.png" alt="Maskot larisin ai" />
            </div>
          </div>
        </div>
      </section>

      <div className="reveal-content">
      {/* ============ MASALAH ============ */}
      <section className="problems">
        <div className="dot-grid" style={{ width: 120, height: 120, left: 24, top: 120 }} />
        <div
          className="deco-spark"
          style={{ width: 24, height: 24, right: 60, top: 120, opacity: 0.85 }}
        />
        <div className="wrap">
          <div className="sec-head">
            <Eyebrow>Masalah · Yang Bikin Omzet Bocor</Eyebrow>
            <h2>Apakah Bisnis Anda Mengalami Ini?</h2>
            <p>
              Banyak bisnis kehilangan omzet tiap hari karena hal yang sebenarnya bisa
              diatasi teknologi.
            </p>
          </div>
          <div className="prob-grid">
            {problems.map(([imgSrc, imgText, title, desc]) => (
              <div className="pcard" key={title}>
                <div className="pimg">
                  <img src={imgSrc} alt={imgText} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES (dark) ============ */}
      <section className="servicesx" id="fitur">
        <div
          className="deco-spark"
          style={{ width: 28, height: 28, right: 70, top: 60, opacity: 0.85 }}
        />
        <div
          className="deco-spark"
          style={{ width: 15, height: 15, right: 118, top: 108, opacity: 0.5 }}
        />
        <div className="wrap">
          <div className="sx-head">
            <div>
              <Eyebrow light>Fitur Kami</Eyebrow>
              <h2>Satu Platform, Semua yang Bisnis Anda Butuhkan</h2>
            </div>
            <Link to="/#harga" className="btn btn-white">
              Lihat Semua Fitur <span className="arr"><IconArrowRight /></span>
            </Link>
          </div>
          <div className="sx-grid">
            <div className="sx-col">
              <div className="sx-img">
                <img src="/dashboard.png" alt="Tim memakai dashboard" />
              </div>
              <div className="sx-card">
                <h3>Integrasi Resmi WhatsApp API &amp; Instagram</h3>
                <p>
                  Terhubung langsung ke nomor bisnis Anda melalui jalur resmi Meta
                  Platforms, Inc. — aman, stabil, dan tidak melanggar kebijakan platform.
                  Nomor WhatsApp Anda mendapat centang hijau (verified business) yang
                  meningkatkan kepercayaan pelanggan. Tidak ada risiko pemblokiran akun yang
                  sering terjadi pada aplikasi pihak ketiga tidak resmi.
                </p>
              </div>
            </div>
            <div className="sx-col">
              <div className="sx-card lime">
                <h3>Balasan Otomatis AI yang Terasa Manusiawi</h3>
                <p>
                  AI kami memahami konteks percakapan, bukan sekadar mencocokkan kata kunci.
                  Mendukung Bahasa Indonesia formal maupun santai. Jika terdeteksi pelanggan
                  marah atau bertanya hal kompleks, AI otomatis meneruskan ke agen manusia
                  Anda — tanpa pelanggan menunggu lama.
                </p>
              </div>
              <div className="sx-img lime-b">
                <img src="/whatsapp.png" alt="Percakapan AI WhatsApp" />
              </div>
            </div>
            <div className="sx-col">
              <div className="sx-card">
                <h3>Manajemen Order &amp; Konfirmasi Otomatis</h3>
                <p>
                  Dari penerimaan pesanan, panduan pembayaran, hingga update status
                  pengiriman — semua dikirimkan otomatis ke pelanggan tanpa campur tangan
                  manual. Hemat waktu tim Anda untuk hal-hal yang benar-benar penting bagi
                  pertumbuhan bisnis.
                </p>
              </div>
              <div className="sx-card">
                <h3>Dashboard Laporan &amp; Analitik Bisnis</h3>
                <p>
                  Pantau volume chat harian, tingkat respons AI, tren pertanyaan pelanggan,
                  dan performa konversi — semua dari satu dasbor yang intuitif. Ambil
                  keputusan bisnis berdasarkan data nyata, bukan sekadar intuisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="pricing" id="harga">
        <div
          className="dot-grid"
          style={{ width: 120, height: 120, right: 30, bottom: 80 }}
        />
        <div
          className="deco-spark"
          style={{ width: 26, height: 26, left: 60, top: 130, opacity: 0.85 }}
        />
        <div className="wrap">
          <div className="sec-head">
            <Eyebrow>Harga · Transparan Tanpa Kejutan</Eyebrow>
            <h2>Pilih Paket yang Tepat untuk Skala Bisnis Anda</h2>
            <p>Tanpa kontrak jangka panjang. Tanpa biaya tersembunyi.</p>
          </div>
          <div className="price-grid">
{/* STARTER */}
<div className="price-card">
<div className="tier">PAKET STARTER</div>
<div className="tier-sub">Ideal untuk UMKM &amp; toko online skala kecil</div>
<div className="amount">
Rp 179.000<span>/bulan</span>
</div>
<div className="yearly">atau Rp 1.969.000/tahun</div>
<a
href={WA_LITE}
target="_blank"
rel="noopener noreferrer"
className="btn btn-outline"
>
Mulai Paket Starter <span className="arr"><IconArrowRight /></span>
</a>
<hr className="price-divider" />
<ul className="feat-list">
<li><span className="mk yes"><IconCheck /></span> Integrasi 1 Nomor WhatsApp Business API Resmi</li>
<li><span className="mk yes"><IconCheck /></span> Respons otomatis AI berdasarkan FAQ &amp; katalog toko</li>
<li><span className="mk yes"><IconCheck /></span> Asisten AI siaga 24 jam / 7 hari</li>
<li><span className="mk yes"><IconCheck /></span> Hingga 1.000 sesi percakapan per bulan</li>
<li><span className="mk yes"><IconCheck /></span> Pengalihan otomatis ke admin manusia untuk komplain/pertanyaan rumit</li>
<li><span className="mk yes"><IconCheck /></span> Dashboard laporan chat sederhana</li>
<li><span className="mk yes"><IconCheck /></span> Panduan setup mandiri (video tutorial tersedia)</li>
</ul>
</div>
{/* PRO */}
<div className="price-card pro">
<div className="popular"><IconFlame /> Paling Populer</div>
<div className="tier">PAKET PRO</div>
<div className="tier-sub">Rekomendasi kami untuk hasil maksimal</div>
<div className="amount">
Rp 349.000<span>/bulan</span>
</div>
<div className="yearly">atau Rp 3.839.000/tahun</div>
<a
href={WA_PRO}
target="_blank"
rel="noopener noreferrer"
className="btn btn-lime"
>
Mulai Paket Pro <span className="arr"><IconArrowRight /></span>
</a>
<hr className="price-divider" />
<ul className="feat-list">
<li><span className="mk yes"><IconCheck /></span> Semua fitur Starter, ditambah:</li>
<li><span className="mk yes"><IconCheck /></span> Hingga 3.000 sesi percakapan per bulan</li>
<li><span className="mk yes"><IconCheck /></span> AI aktif menggiring pelanggan sampai ke link pemesanan (closing otomatis)</li>
<li><span className="mk yes"><IconCheck /></span> Dashboard analitik lengkap + ekspor laporan CSV</li>
<li><span className="mk yes"><IconCheck /></span> Dukungan CS prioritas via WhatsApp (respons maks. 4 jam)</li>
</ul>
</div>
{/* ENTERPRISE */}
<div className="price-card">
<div className="tier">PAKET ENTERPRISE</div>
<div className="tier-sub">Untuk bisnis dengan volume chat tinggi</div>
<div className="amount">
Rp 699.999<span>/bulan</span>
</div>
<div className="yearly">atau Rp 7.699.989/tahun</div>
<a
href={WA_PRO}
target="_blank"
rel="noopener noreferrer"
className="btn btn-outline"
>
Mulai Paket Enterprise <span className="arr"><IconArrowRight /></span>
</a>
<hr className="price-divider" />
<ul className="feat-list">
<li><span className="mk yes"><IconCheck /></span> Semua fitur Pro, ditambah:</li>
<li><span className="mk yes"><IconCheck /></span> Hingga 8.000 sesi percakapan per bulan</li>
<li><span className="mk yes"><IconCheck /></span> Gaya bahasa AI disesuaikan dengan ciri khas brand Anda</li>
<li><span className="mk yes"><IconCheck /></span> Broadcast Pesan Massal Resmi (Anti-Blokir)</li>
<li><span className="mk yes"><IconCheck /></span> Laporan rekapitulasi penjualan bulanan otomatis</li>
<li><span className="mk yes"><IconCheck /></span> Sesi onboarding &amp; setup 1-on-1 bersama tim</li>
</ul>
</div>
</div>
<div className="price-note">
            <IconGift />
            <span>
              Konsultasi gratis dulu sebelum mulai, kami bantu pilihkan paket yang paling pas untuk bisnis Anda  —
              batalkan kapan saja.
            </span>
          </div>
        </div>
      </section>

      {/* ============ ABOUT (legal & contact) ============ */}
      <section className="about" id="tentang">
        <div className="deco-ring" style={{ width: 140, height: 140, right: 40, top: 30 }} />
        <div
          className="deco-spark"
          style={{ width: 22, height: 22, left: 70, bottom: 120, opacity: 0.7 }}
        />
        <div className="wrap">
          <div className="sec-head">
            <Eyebrow>Legalitas &amp; Kontak</Eyebrow>
            <h2>Tentang Larisin ai</h2>
          </div>
          <div className="about-grid">
            <div className="about-box">
              <p>
                larisin ai adalah platform AI yang membantu bisnis Indonesia mengotomasi
                layanan pelanggan lewat WhatsApp Business API &amp; Instagram Messaging API
                resmi dari Meta Platforms, Inc.
              </p>
              <p>
                Beroperasi di bawah badan usaha terdaftar{' '}
                <b style={{ color: 'var(--ink)' }}>RIFANA</b> dengan NIB resmi (KBLI 62019)
                yang diterbitkan melalui sistem OSS Pemerintah Republik Indonesia.
              </p>
              <Link to="/legalitas" className="link-underline">
                Lihat Informasi Legalitas
              </Link>
            </div>
            <div className="about-photo">
              <img src="/verified.png" alt="larisin ai terverifikasi resmi Meta" />
              <Seal id="sp-photo" text="RESMI • TERVERIFIKASI • " fontSize={9.5} check />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="faq" id="faq">
        <div
          className="deco-spark"
          style={{ width: 22, height: 22, right: 70, top: 90, opacity: 0.7 }}
        />
        <div className="wrap">
          <div className="sec-head">
            <Eyebrow>FAQ · Pertanyaan Umum</Eyebrow>
            <h2>Ada Pertanyaan? Kami Siap Menjawab!</h2>
            <p>
              Temukan jawaban atas pertanyaan yang paling sering ditanyakan seputar
              layanan larisin ai.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details className="faq-item" key={q}>
                <summary>
                  <span className="faq-q">{q}</span>
                  <span className="faq-icon"><IconChevronDown /></span>
                </summary>
                <div className="faq-a">
                  <p>{a}</p>
                </div>
              </details>
            ))}
          </div>
          <div className="faq-cta">
            <p>Masih ada pertanyaan lain?</p>
            <a
              href={WA_FAQ}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <IconMessage /> Chat Langsung dengan Tim Kami
            </a>
          </div>
        </div>
      </section>

      {/* Footer lives inside the revealed layer so it flows after the about
          section (the layer is pulled up under the hero via CSS). */}
      <Footer />
      </div>
    </>
  )
}
