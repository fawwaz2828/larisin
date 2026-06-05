import LegalLayout from '../components/LegalLayout.jsx'

const rows = [
  ['Nama Pelaku Usaha', 'RIFANA'],
  ['NIB (Nomor Induk Berusaha)', '0106260000144'],
  ['Nomor Kegiatan Usaha', '202605-3122-5830-3983-759'],
  ['Bidang Usaha (KBLI)', '62019 — Aktivitas Pemrograman Komputer Lainnya'],
  ['Skala Usaha', 'Usaha Mikro'],
  ['Diterbitkan', '1 Juni 2026 oleh OSS — Kementerian Investasi RI'],
  [
    'Alamat',
    'Jalan Tahir, RT 30, Handil 2, Kelurahan Muara Jawa Pesisir, Kecamatan Muara Jawa, Kabupaten Kutai Kartanegara, Kalimantan Timur 75263',
  ],
]

export default function Legalitas() {
  return (
    <LegalLayout
      eyebrow="Legalitas Usaha · larisin.ai"
      title="Informasi Legalitas & Profil Usaha"
      subtitle="larisin.ai | Pelaku Usaha: RIFANA | NIB: 0106260000144"
      updatedAt="1 Juni 2026"
    >
      <p className="legal-lead">
        Platform larisin.ai dioperasikan oleh pelaku usaha yang terdaftar resmi di
        Indonesia melalui sistem OSS (Online Single Submission) Kementerian Investasi
        Republik Indonesia. Berikut data legalitas resmi badan usaha kami.
      </p>

      <div className="info-card">
        {rows.map(([k, v]) => (
          <div className="row" key={k}>
            <div className="k">{k}</div>
            <div className="v">{v}</div>
          </div>
        ))}
      </div>

      <p className="legal-note">
        Seluruh layanan larisin.ai terintegrasi dengan WhatsApp Business API dan Instagram
        Messaging API dari Meta Platforms, Inc., serta tunduk pada Acceptable Use Policy
        Meta, WhatsApp Business Policy, dan Meta Platform Terms.
      </p>
    </LegalLayout>
  )
}
