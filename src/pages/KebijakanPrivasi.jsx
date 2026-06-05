import LegalLayout, { Pasal } from '../components/LegalLayout.jsx'

export default function KebijakanPrivasi() {
  return (
    <LegalLayout
      title="KEBIJAKAN PRIVASI — Larisin.ai"
      subtitle="larisin.ai | Pelaku Usaha: RIFANA | NIB: 0106260000144"
      updatedAt="1 Juni 2026"
    >
      <Pasal number={1} title="IDENTITAS PENGELOLA DATA">
        <p>
          Pengelola data dari layanan ini adalah <strong>RIFANA</strong> (NIB
          0106260000144), beralamat di Jalan Tahir, RT 30, Handil 2, Kelurahan Muara Jawa
          Pesisir, Kecamatan Muara Jawa, Kabupaten Kutai Kartanegara, Kalimantan Timur
          75263. Pertanyaan terkait privasi dapat dikirim ke{' '}
          <a href="mailto:larisin.ai.id@gmail.com">
            larisin.ai.id@gmail.com
          </a>
          .
        </p>
      </Pasal>

      <Pasal number={2} title="DATA YANG KAMI KUMPULKAN">
        <p>Kami mengumpulkan data dari tiga sumber utama:</p>
        <ul>
          <li>
            <strong>(A) Data langsung</strong> yang Anda berikan: nama, alamat email,
            katalog produk, serta informasi pembayaran yang diproses melalui payment gateway
            berlisensi.
          </li>
          <li>
            <strong>(B) Data otomatis</strong>: konten percakapan, log penggunaan layanan,
            dan informasi teknis perangkat.
          </li>
          <li>
            <strong>(C) Data dari Meta API</strong>: profil bisnis dasar sesuai dengan izin
            (OAuth) yang Anda berikan.
          </li>
        </ul>
      </Pasal>

      <Pasal number={3} title="TUJUAN PEMROSESAN DATA">
        <p>Data Anda kami proses untuk tujuan-tujuan berikut:</p>
        <ul>
          <li>Menjalankan operasional layanan dan memproses transaksi.</li>
          <li>Melatih dan meningkatkan kualitas model AI (dalam bentuk yang dianonimkan).</li>
          <li>Mengirimkan notifikasi terkait layanan.</li>
          <li>Memenuhi kewajiban hukum yang berlaku.</li>
          <li>Mencegah penipuan dan penyalahgunaan layanan.</li>
        </ul>
      </Pasal>

      <Pasal number={4} title="PERLINDUNGAN DATA PERCAKAPAN">
        <p>
          Data percakapan sepenuhnya merupakan milik pengguna. Kami{' '}
          <strong>tidak menjual data Anda ke pihak ketiga mana pun</strong>. Kami menerapkan
          isolasi data antar klien, enkripsi saat transit (in-transit) maupun saat tersimpan
          (at-rest). Data percakapan disimpan maksimal 90 hari setelah langganan berakhir,
          kemudian dihapus secara permanen.
        </p>
      </Pasal>

      <Pasal number={5} title="KEPATUHAN META PLATFORMS">
        <p>
          Layanan kami tunduk pada Meta Platform Terms, WhatsApp Business Policy (termasuk
          kewajiban opt-in dan larangan spam), serta Instagram Platform Policy. Setiap
          pelanggaran terhadap kebijakan Meta dapat berakibat pada penangguhan layanan.
        </p>
      </Pasal>

      <Pasal number={6} title="HAK PENGGUNA (sesuai UU PDP No. 27/2022)">
        <p>
          Sesuai Undang-Undang Pelindungan Data Pribadi (UU PDP No. 27 Tahun 2022), Anda
          berhak untuk:
        </p>
        <ul>
          <li>Mengakses data pribadi Anda.</li>
          <li>Mengoreksi data yang tidak akurat.</li>
          <li>Menghapus data pribadi Anda.</li>
          <li>Menarik persetujuan yang telah diberikan.</li>
          <li>Memperoleh portabilitas data.</li>
        </ul>
        <p>Permohonan akan kami respons maksimal dalam 14 hari kerja.</p>
      </Pasal>

      <Pasal number={7} title="KEAMANAN DATA">
        <p>
          Kami menerapkan enkripsi, kontrol akses berbasis peran (RBAC), pemantauan keamanan
          secara berkala, serta prosedur respons insiden untuk melindungi data Anda dari
          akses yang tidak sah.
        </p>
      </Pasal>

      <Pasal number={8} title="PENGUNGKAPAN PIHAK KETIGA">
        <p>Data hanya akan diungkapkan kepada pihak ketiga dalam hal:</p>
        <ul>
          <li>Mitra infrastruktur yang terikat perjanjian kerahasiaan (NDA).</li>
          <li>Pemenuhan kewajiban hukum yang berlaku.</li>
          <li>Adanya persetujuan eksplisit dari pengguna.</li>
        </ul>
      </Pasal>

      <Pasal number={9} title="PERUBAHAN KEBIJAKAN">
        <p>
          Kebijakan ini dapat diperbarui sewaktu-waktu. Setiap perubahan material akan kami
          beritahukan melalui email, dan tanggal pembaruan pada halaman ini akan selalu
          diperbarui.
        </p>
      </Pasal>

      <Pasal number={10} title="HUKUM YANG BERLAKU">
        <p>
          Kebijakan Privasi ini diatur dan ditafsirkan berdasarkan hukum Negara Republik
          Indonesia. Segala sengketa yang timbul akan diselesaikan di wilayah hukum Kabupaten
          Kutai Kartanegara.
        </p>
      </Pasal>
    </LegalLayout>
  )
}
