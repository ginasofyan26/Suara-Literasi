# SuaraLiterasi 🎙️📚

Platform edukasi literasi interaktif membaca buku dongeng bersuara (*flipbook 3D*), panduan intonasi model narator, rekaman suara mandiri per halaman, Studio Dubbing (Teks Berita, Penyiar Radio, Pidato Persuasif, dan Pembacaan Puisi), serta Galeri Suara terorganisir untuk siswa.

---

## 🚀 Panduan Menjalankan Secara Lokal (Vite Dev Server)

Aplikasi ini menggunakan bundler resmi **Vite + React 19 + TypeScript + Tailwind CSS v4**.

```bash
# 1. Install dependencies
npm install

# 2. Jalankan server lokal
npm run dev

# 3. Buka di browser
# http://localhost:3000
```

---

## 📦 Build untuk Produksi

Untuk menghasilkan bundle statis HTML/CSS/JS yang siap di-host di mana saja:

```bash
npm run build
```
Hasil build akan tersimpan di direktori `/dist`.

---

## ⚡ Panduan Deploy ke Vercel

Aplikasi ini sudah dilengkapi dengan file konfigurasi `vercel.json` sehingga dapat langsung di-deploy ke Vercel tanpa perlu konfigurasi tambahan.

### Cara 1: Melalui Dashboard Vercel (Direkomendasikan via GitHub)

1. **Push kode ke GitHub/GitLab/Bitbucket** repository Anda.
2. Buka [vercel.com](https://vercel.com/) dan login/daftar.
3. Klik tombol **"Add New..."** ➡️ **"Project"**.
4. Pilih repository GitHub proyek ini dan klik **"Import"**.
5. Vercel secara otomatis mendeteksi konfigurasi:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build` (atau `vite build`)
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Klik tombol **"Deploy"**.
7. Tunggu sekitar 30–60 detik hingga selesai. Aplikasi Anda langsung aktif dan memiliki tautan domain gratis `https://nama-proyek.vercel.app`.

---

### Cara 2: Menggunakan Vercel CLI (Terminal)

Jika ingin deploy langsung dari terminal komputer Anda:

```bash
# 1. Install Vercel CLI (jika belum ada)
npm install -g vercel

# 2. Login ke akun Vercel
vercel login

# 3. Jalankan perintah deploy
vercel

# 4. Untuk deploy ke production domain:
vercel --prod
```

---

## 🛠️ Konfigurasi Vercel (`vercel.json`)

File `vercel.json` di root repository sudah mengatur *SPA Rewrites* agar seluruh routing dan state di aplikasi tidak mengalami *404 Not Found* saat halaman di-refresh:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 📁 Struktur Utama Aplikasi

```
├── index.html                   # HTML Entry Point
├── vercel.json                  # Konfigurasi deploy Vercel
├── package.json                 # Skrip & dependensi Vite
├── vite.config.ts               # Konfigurasi plugin Vite & Tailwind
├── src/
│   ├── main.tsx                 # React DOM root
│   ├── App.tsx                  # Komponen induk & navigasi tab
│   ├── components/
│   │   ├── BookLibrary.tsx      # Rak 3 level buku cerita
│   │   ├── BookFlipbook.tsx     # Flipbook 3D, karaoke highlight, voice recording
│   │   ├── DubbingStudio.tsx    # Studio dubbing 4 genre (40 naskah)
│   │   ├── AudiobookGallery.tsx # Galeri Suara (Folder Buku & Folder Dubbing)
│   │   ├── DiagnosticQuizModal.tsx # Kuis penentuan level membaca
│   │   └── NavigationHeader.tsx # Header navigasi aplikasi
│   └── data/
│       ├── booksData.ts         # Data buku Level 1, 2, dan 3 (multi-paragraf)
│       └── dubbingScriptsData.ts# 40 naskah dubbing (Berita, Radio, Pidato, Puisi)
```
