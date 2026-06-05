import LegalLayout, { Pasal } from '../components/LegalLayout.jsx'

export default function SyaratKetentuan() {
  return (
    <LegalLayout
      title="SYARAT & KETENTUAN LAYANAN — larisin ai"
      subtitle="larisin ai | Pelaku Usaha: RIFANA | NIB: 0106260000144"
      updatedAt="1 Juni 2026"
    >
      <Pasal number={1} title="PENERIMAAN KETENTUAN">
        <p>
          Dengan mendaftar dan menggunakan layanan larisin ai, Anda dianggap telah membaca,
          memahami, dan menyetujui seluruh Syarat & Ketentuan ini. Apabila Anda tidak
          menyetujui, mohon untuk tidak menggunakan layanan kami.
        </p>
      </Pasal>

      <Pasal number={2} title="DESKRIPSI LAYANAN">
        <p>
          larisin ai adalah platform berbasis kecerdasan buatan (AI) yang terintegrasi
          dengan WhatsApp Business API dan Instagram Messaging API. Layanan kami mencakup
          integrasi nomor WhatsApp bisnis, otomasi respons percakapan, pengiriman pesan
          massal, serta dashboard analitik.
        </p>
      </Pasal>

      <Pasal number={3} title="PENGGUNAAN YANG DIIZINKAN">
        <p>Layanan ini hanya boleh digunakan untuk:</p>
        <ul>
          <li>Komunikasi bisnis yang sah dengan pelanggan yang telah melakukan opt-in.</li>
          <li>Aktivitas layanan pelanggan.</li>
          <li>Kegiatan komersial yang legal sesuai peraturan yang berlaku.</li>
        </ul>
      </Pasal>

      <Pasal number={4} title="LARANGAN PENGGUNAAN">
        <p>Pengguna dilarang keras menggunakan layanan untuk:</p>
        <ul>
          <li>Spam atau pengiriman pesan yang tidak dikehendaki.</li>
          <li>Penipuan, hoaks, atau informasi menyesatkan.</li>
          <li>Perjudian, konten dewasa, atau aktivitas ilegal lainnya.</li>
          <li>Pelanggaran hak kekayaan intelektual (IP).</li>
          <li>Pelanggaran terhadap kebijakan Meta.</li>
          <li>Pengumpulan data tanpa izin.</li>
        </ul>
      </Pasal>

      <Pasal number={5} title="KEWAJIBAN OPT-IN">
        <p>
          Seluruh penerima pesan wajib telah memberikan persetujuan (opt-in) secara
          eksplisit. Pengguna wajib menyediakan mekanisme berhenti berlangganan (opt-out),
          dan sepenuhnya bertanggung jawab atas seluruh konten pesan yang dikirimkan.
        </p>
      </Pasal>

      <Pasal number={6} title="LANGGANAN & PEMBAYARAN">
        <p>
          Layanan menggunakan sistem berlangganan bulanan atau tahunan yang dibayarkan di
          muka. Tidak ada pengembalian dana (refund) untuk layanan yang sedang berjalan.
          Setiap perubahan tarif akan diberitahukan minimal 30 hari sebelumnya.
        </p>
      </Pasal>

      <Pasal number={7} title="PENGHENTIAN LAYANAN">
        <p>
          larisin ai berhak menghentikan atau menangguhkan akses pengguna apabila terjadi
          pelanggaran terhadap Syarat & Ketentuan ini, pelanggaran kebijakan Meta, atau
          adanya indikasi aktivitas penipuan maupun ilegal.
        </p>
      </Pasal>

      <Pasal number={8} title="BATASAN TANGGUNG JAWAB">
        <p>larisin ai tidak bertanggung jawab atas:</p>
        <ul>
          <li>Gangguan layanan (downtime) yang berasal dari pihak Meta.</li>
          <li>Konten pesan yang dibuat dan dikirim oleh pengguna.</li>
          <li>Keputusan bisnis yang diambil berdasarkan data analitik.</li>
        </ul>
      </Pasal>

      <Pasal number={9} title="HUBUNGAN DENGAN META">
        <p>
          larisin ai merupakan entitas independen dan tidak berafiliasi dengan Meta
          Platforms, Inc. WhatsApp® dan Instagram® adalah merek dagang terdaftar milik Meta
          Platforms, Inc.
        </p>
      </Pasal>

      <Pasal number={10} title="HUKUM YANG BERLAKU">
        <p>
          Syarat & Ketentuan ini diatur berdasarkan hukum Negara Republik Indonesia. Segala
          sengketa yang timbul akan diselesaikan di wilayah hukum Kabupaten Kutai
          Kartanegara.
        </p>
      </Pasal>
    </LegalLayout>
  )
}
