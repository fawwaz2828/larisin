# larisin.ai — Design System

Dokumentasi sistem desain untuk landing page **larisin.ai** (gaya "Greenwave"). Platform Asisten AI Otomatis berbasis WhatsApp Business API & Instagram Messaging API untuk bisnis Indonesia.

File utama: `larisin Greenwave.html` · Versi mandiri: `larisin.ai (standalone).html`

---

## 1. Filosofi Desain

Tema **emerald/pine yang dalam** dipadu aksen **spring-green** yang segar — terasa profesional, terpercaya, dan modern. Bentuk membulat (arch / pill), badge seal berputar, dan marquee berjalan memberi karakter "agency" yang energik tanpa kehilangan kesan korporat.

- **Kontras gelap–terang:** panel hijau gelap (fitur, solusi, footer) berselang dengan latar krem terang (masalah, harga, tentang) untuk ritme visual.
- **Aksen lime sebagai sorotan:** dipakai hemat — hanya pada CTA, ikon, highlight, dan satu kartu menonjol.
- **Bentuk membulat & organik:** sudut besar (18–28px), kolase foto berbentuk arch, tombol pill dengan ikon panah bundar.

---

## 2. Palet Warna

| Token | Hex | Penggunaan |
|---|---|---|
| `--forest` | `#143d33` | Warna utama: panel gelap, teks heading aksen, tombol gelap |
| `--forest-d` | `#0d2c25` | Background paling gelap: section fitur, footer |
| `--forest-card` | `#1f4d40` | Kartu di dalam panel hijau gelap |
| `--lime` | `#a3e635` | Aksen utama: CTA, ikon, highlight, badge |
| `--lime-bright` | `#b7f04d` | State hover untuk elemen lime |
| `--cream` | `#eef1ea` | Background halaman terang |
| `--ink` | `#16191a` | Teks utama di latar terang |
| `--muted` | `#6c7470` | Teks sekunder / paragraf |
| `--line` | `#e3e4dc` | Garis & border halus |
| `--red` | `#e26d6d` | Ikon "tidak termasuk" pada tabel harga |

**Aturan pakai:** maksimal 1 area lime dominan per layar. Latar gelap dan terang harus berselang, jangan dua section gelap berurutan (kecuali fitur → footer yang memang menyatu).

---

## 3. Tipografi

| Peran | Font | Bobot |
|---|---|---|
| Heading (h1–h4) | **Space Grotesk** | 500 / 600 / 700 |
| Body & UI | **Plus Jakarta Sans** | 400 / 500 / 600 / 700 / 800 |

- `letter-spacing: -0.02em` dan `line-height: ~1.1` untuk heading agar rapat & tegas.
- Skala heading: Hero `50px` · Section `42px` · Sub-judul kartu `21–22px`.
- Body `15–16.5px`, warna `--muted` untuk paragraf panjang.

```
Hero h1     → Space Grotesk 700, 50px
Section h2  → Space Grotesk 700, 42px
Card h3     → Space Grotesk 700, 21px
Body / lead → Plus Jakarta Sans 400–500, 15–16.5px
Eyebrow     → Plus Jakarta Sans 600, 14px, di dalam pill
```

---

## 4. Komponen

### Tombol (`.btn`)
Pill dengan ikon panah dalam lingkaran (`.arr`) yang bergeser saat hover.
- `.btn-dark` — forest solid + panah lime (CTA utama di latar terang)
- `.btn-lime` — lime solid + panah forest (CTA di latar gelap)
- `.btn-white` — putih + panah lime (di atas panel gelap)
- `.btn-outline` — transparan, border forest (aksi sekunder, mis. paket Lite)

### Eyebrow (`.eyebrow`)
Label kapsul ber-border dengan dua titik (satu forest, satu lime). Varian `.light` untuk latar gelap.

### Seal badge (`.seal`)
Lingkaran forest dengan teks melingkar "AI 24/7" + bintang lime di tengah, berputar 360° (16s). Penanda khas brand.

### Kartu
- **Kartu masalah** (`.prob-card`) — putih, border halus, ikon emoji dalam kotak krem.
- **Kartu fitur** (`.feat-card`) — di panel gelap; satu kartu memakai `.lime` untuk menonjol.
- **Kartu harga** (`.price-card`) — Lite putih, **Pro forest gelap** dengan badge "Paling Populer".

### Marquee (`.marquee`)
Strip hijau berisi kata kunci fitur, scroll horizontal tak terbatas (28s), dipisah bintang lime.

### Collage hero (`.collage`)
4 slot foto berbentuk arch (`border-radius` asimetris) + seal + sparkle lime — pengisi gambar drag-and-drop.

---

## 5. Spasi & Bentuk

| Token | Nilai |
|---|---|
| Radius default (`--r`) | `18px` |
| Radius kartu besar / panel | `24–28px` |
| Padding section vertikal | `90px` |
| Lebar konten (`.wrap`) | maks `1200px`, padding `40px` |
| Gap grid antar kartu | `18–24px` |

Tekstur garis diagonal halus (`repeating-linear-gradient`) ditumpuk di panel gelap untuk kedalaman.

---

## 6. Struktur Halaman

1. **Nav** — logo, menu, CTA "Mulai Konsultasi"
2. **Hero** — heading + lead + CTA, kolase foto + seal, 3 trust pill
3. **Marquee** — kata kunci fitur berjalan
4. **Masalah** — 3 kartu pain-point
5. **Solusi** — panel forest + slot screenshot chat
6. **Fitur** — panel gelap, 4 kartu + slot dashboard berbingkai lime
7. **Harga** — Lite vs Pro + catatan trial
8. **Tentang** — profil + kartu kontak
9. **Footer** — legalitas, kontak, navigasi

---

## 7. Placeholder Gambar

Memakai komponen `<image-slot>` (drag-and-drop, tersimpan otomatis di browser). Total **6 slot**:

| ID | Lokasi | Isi yang disarankan |
|---|---|---|
| `hero-1`…`hero-4` | Kolase hero | Screenshot chat WA/IG, mockup HP, foto tim |
| `sol-chat` | Panel solusi | Screenshot percakapan AI |
| `feat-dashboard` | Section fitur | Screenshot dashboard analitik |

---

## 8. Responsif

Breakpoint tunggal `@media (max-width: 920px)`: grid jadi satu kolom, menu nav disembunyikan, ukuran heading mengecil (`36px`), padding mengecil.

---

## 9. Aset & Legalitas

- **Nama pelaku usaha:** RIFANA · **NIB:** 0106260000144 · **KBLI:** 62019
- Disclaimer kemitraan Meta wajib tetap ada di footer.
- Font dimuat dari Google Fonts (versi standalone sudah meng-inline seluruh aset).
