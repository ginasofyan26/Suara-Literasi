import React, { useState } from 'react';
import {
  FileText,
  Palette,
  Compass,
  Database,
  Cpu,
  Sparkles,
  CheckCircle2,
  Layers,
  Users,
  Target,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const PRDViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'executive' | 'branding' | 'journey' | 'architecture' | 'stack' | 'innovation'
  >('executive');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-amber-200">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-2">
          <FileText className="w-3.5 h-3.5 text-indigo-600" />
          Product Requirements Document (PRD) · Spesifikasi Senior EdTech PM
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-lexend">
          SuaraLiterasi: Blueprint Produk & UI/UX Literasi dan Vokal Anak
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-3xl leading-relaxed">
          Dokumen spesifikasi komprehensif untuk pengembangan platform buku flipbook interaktif dengan panduan intonasi narator, perekaman mandiri anak, dan sinkronisasi audio per halaman.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 bg-slate-100/90 p-1.5 rounded-2xl border border-slate-200">
        <button
          onClick={() => setActiveTab('executive')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'executive'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Target className="w-4 h-4 text-orange-500" />
          <span>1. Eksekutif & Persona</span>
        </button>

        <button
          onClick={() => setActiveTab('branding')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'branding'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Palette className="w-4 h-4 text-amber-500" />
          <span>2. Branding & UI/UX</span>
        </button>

        <button
          onClick={() => setActiveTab('journey')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'journey'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Compass className="w-4 h-4 text-emerald-500" />
          <span>3. Alur User Journey</span>
        </button>

        <button
          onClick={() => setActiveTab('architecture')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'architecture'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Database className="w-4 h-4 text-blue-500" />
          <span>4. Arsitektur Data & Sinkronisasi</span>
        </button>

        <button
          onClick={() => setActiveTab('stack')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'stack'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Cpu className="w-4 h-4 text-violet-500" />
          <span>5. Rekomendasi Tech Stack</span>
        </button>

        <button
          onClick={() => setActiveTab('innovation')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'innovation'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Sparkles className="w-4 h-4 text-rose-500" />
          <span>6. AI Intonasi & Roadmap</span>
        </button>
      </div>

      {/* Tab Contents */}
      <div className="bg-white rounded-3xl border border-amber-200/90 p-6 sm:p-10 shadow-xs">
        {/* TAB 1: EXECUTIVE & PERSONA */}
        {activeTab === 'executive' && (
          <div className="space-y-8">
            <div>
              <span className="text-xs font-bold text-orange-600 tracking-wider uppercase block mb-1">
                Bab 1 · Latar Belakang & Pernyataan Masalah
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-lexend">
                Pernyataan Masalah (Problem Statement)
              </h3>
              <p className="text-slate-700 mt-2 leading-relaxed">
                Mayoritas aplikasi membaca anak hanya berfokus pada decoding teks visual (mengenal kata), namun mengabaikan aspek <strong>prosodi (prosody)</strong>, yaitu intonasi nada bicara, ritme, jeda napas, dan ekspresi emosi. Akibatnya, anak sering membaca secara monoton seperti robot (<em>robotic reading</em>) dan tidak menangkap makna afektif cerita. Selain itu, anak merasa cemas saat diminta membaca nyaring di depan kelas karena kurangnya ruang aman (<em>safe space</em>) untuk berlatih mandiri.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold text-lg mb-3">
                  01
                </div>
                <h4 className="font-bold text-slate-900 font-lexend mb-1">Scaffolding Intonasi</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Memberikan model audio narator asli dengan penekanan kata (karaoke highlight) sebelum anak mencoba menirukannya.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold text-lg mb-3">
                  02
                </div>
                <h4 className="font-bold text-slate-900 font-lexend mb-1">Safe-Space Recording</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Ruang rekaman suara tanpa penilaian menghakimi. Dilengkapi visualisasi gelombang suara ceria yang memicu rasa antusias.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold text-lg mb-3">
                  03
                </div>
                <h4 className="font-bold text-slate-900 font-lexend mb-1">Ownership Karyaku</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Hasil rekaman digabung menjadi buku audio utuh yang dapat diputar ulang dan dibanggakan bersama orang tua dan guru.
                </p>
              </div>
            </div>

            {/* User Personas */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-lexend mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-600" />
                <span>Segmentasi Target Pengguna (User Personas)</span>
              </h3>
              <div className="space-y-4">
                <div className="p-5 rounded-2xl border border-slate-200 hover:border-amber-300 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900 font-lexend text-base">
                      Anak Pemula (Usia 4–6 Tahun / PAUD & TK)
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-orange-100 text-orange-800 font-bold text-xs">
                      Target Level 1
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong>Karakteristik:</strong> Rentang perhatian 5–10 menit, mengenali huruf dan fonik suku kata dasar (b-a-k-u). Sangat responsif terhadap stimulus audio, warna cerah, dan umpan balik haptik/visual langsung. Membutuhkan tombol navigasi berukuran ekstra besar (min 56px).
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 hover:border-amber-300 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900 font-lexend text-base">
                      Anak Berkembang (Usia 6–8 Tahun / Kelas 1–2 SD)
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs">
                      Target Level 2
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong>Karakteristik:</strong> Mampu membaca kalimat sederhana dengan lancar namun sering mengabaikan tanda baca titik (.), koma (,), tanda seru (!), dan tanya (?). Membutuhkan panduan intonasi ekspresif untuk melatih drama dialog antar tokoh.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 hover:border-amber-300 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900 font-lexend text-base">
                      Anak Mahir (Usia 8–10 Tahun / Kelas 3–4 SD)
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-blue-100 text-blue-800 font-bold text-xs">
                      Target Level 3
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong>Karakteristik:</strong> Mampu membaca paragraf panjang dan cerita dongeng nusantara. Fokus pada pelafalan kosakata baru yang puitis, modulasi tempo cepat/lambat, serta penjiwaan karakter dongeng.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 hover:border-amber-300 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900 font-lexend text-base">
                      Orang Tua & Guru SD (Kurikulum Merdeka / Belajar.id)
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-indigo-100 text-indigo-800 font-bold text-xs">
                      Pendamping
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong>Kebutuhan:</strong> Ingin memantau progres kelancaran membaca anak tanpa stres. Membutuhkan portofolio audio digital yang mudah diputar kembali saat rapat evaluasi orang tua atau asesmen formatif literasi sekolah dasar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: BRANDING & UI/UX */}
        {activeTab === 'branding' && (
          <div className="space-y-8">
            <div>
              <span className="text-xs font-bold text-orange-600 tracking-wider uppercase block mb-1">
                Bab 2 · Desain Visual & Aksesibilitas Anak
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-lexend">
                Konsep Branding, Palet Warna & Tipografi Ramah Anak
              </h3>
              <p className="text-slate-700 mt-2 leading-relaxed">
                Antarmuka dirancang dengan pendekatan <em>tactile familiarity</em>, menggabungkan sensasi hangat membalik lembaran kertas buku fisik dengan kemudahan teknologi digital.
              </p>
            </div>

            {/* Color System */}
            <div>
              <h4 className="font-bold text-slate-900 font-lexend text-base mb-3">
                Distribusi Palet Warna (Aturan 60-30-10)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <div className="h-12 rounded-xl bg-[#FFFDF9] border border-amber-200 mb-3 flex items-center justify-center font-mono text-xs font-bold text-slate-700">
                    60% Canvas
                  </div>
                  <strong className="text-slate-900 text-sm block">Kertas Hangat (Warm Paper)</strong>
                  <span className="text-xs text-slate-600">
                    #FFFDF9 & #FFFBEB — Mengurangi ketegangan mata (eye strain) dibanding warna putih murni (#FFFFFF).
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <div className="h-12 rounded-xl bg-[#FDF6EC] border border-amber-300 mb-3 flex items-center justify-center font-mono text-xs font-bold text-amber-900">
                    30% Structural
                  </div>
                  <strong className="text-slate-900 text-sm block">Madu Lembut & Kayu</strong>
                  <span className="text-xs text-slate-600">
                    #FDF6EC & #D97706 — Digunakan untuk bingkai buku, punggung buku (spine), dan bayangan lipatan halaman.
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <div className="h-12 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white mb-3 flex items-center justify-center font-mono text-xs font-bold shadow-xs">
                    10% Focal Accent
                  </div>
                  <strong className="text-slate-900 text-sm block">Oranye Matahari (Sunfire Orange)</strong>
                  <span className="text-xs text-slate-600">
                    #F97316 — Dikhususkan eksklusif untuk tombol aksi primer: Mulai Rekam, Balik Halaman, dan Putar Audio.
                  </span>
                </div>
              </div>
            </div>

            {/* Typography Strategy */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <h4 className="font-bold text-slate-900 font-lexend text-base">
                Standar Tipografi Ramah Disleksia & Anak Usia Dini
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                <div className="space-y-2">
                  <strong className="text-slate-900 block">1. Font Lexend & Sassoon Style:</strong>
                  <p>
                    Dirancang khusus oleh ahli ortografi untuk memperlebar jarak antar glif (glyph spacing) sehingga mencegah anak menukar huruf simetris (seperti b/d, p/q, atau n/u).
                  </p>
                </div>
                <div className="space-y-2">
                  <strong className="text-slate-900 block">2. Kontrol Skala Font Adaptif:</strong>
                  <p>
                    Menyediakan pilihan ukuran teks A (18px), A+ (24px), dan A++ (32px) dengan line-height minimum 1.8x agar anak dapat menunjuk kata menggunakan jari tanpa tertukar baris.
                  </p>
                </div>
              </div>
            </div>

            {/* Gamification & Accessibility */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <h4 className="font-bold text-slate-900 font-lexend text-sm mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-500" />
                  <span>Elemen Gamifikasi Bermakna</span>
                </h4>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc list-inside">
                  <li><strong>Lencana Karakter:</strong> Diberikan setelah anak berhasil menyelesaikan rekaman cerita (misal: Lencana Kancil Cerdik, Bintang Kucing Lincah).</li>
                  <li><strong>Sertifikat Digital Apresiasi:</strong> Mencantumkan nama anak, tanggal, dan nilai intonasi untuk dipamerkan kepada keluarga.</li>
                  <li><strong>Audio Chime & Confetti:</strong> Umpan balik positif instan saat anak menekan tombol selesai rekaman.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200">
                <h4 className="font-bold text-slate-900 font-lexend text-sm mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Prinsip Aksesibilitas Khusus Anak (WCAG AA+)</span>
                </h4>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc list-inside">
                  <li><strong>Target Sentuh Ekstra Besar:</strong> Tombol rekam dan navigasi memiliki minimum touch target 48x48px (standar anak: 56px).</li>
                  <li><strong>Tanpa Teks Berjalan Cepat:</strong> Menghindari animasi auto-scroll yang memicu panik pada anak pembaca lambat.</li>
                  <li><strong>Umpan Balik Multi-Sensori:</strong> Setiap aksi visual selalu disertai petunjuk audio dan haptik halus.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: USER JOURNEY & WIREFRAME */}
        {activeTab === 'journey' && (
          <div className="space-y-8">
            <div>
              <span className="text-xs font-bold text-orange-600 tracking-wider uppercase block mb-1">
                Bab 3 · Alur Perjalanan Pengguna
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-lexend">
                User Journey Flow: Dari Memilih Buku Hingga Memutar Karyaku
              </h3>
              <p className="text-slate-700 mt-2 leading-relaxed">
                Alur perjalanan dirancang minim friksi (zero friction) tanpa mewajibkan proses registrasi rumit bagi anak, sehingga anak bisa langsung fokus membaca dan merekam suaranya.
              </p>
            </div>

            {/* Step-by-step visual timeline */}
            <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-6 before:w-0.5 before:bg-amber-200">
              {/* Step 1 */}
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center font-bold text-base shrink-0 shadow-sm z-10">
                  1
                </div>
                <div className="flex-1 p-5 rounded-2xl bg-white border border-slate-200">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-slate-900 font-lexend text-base">
                      Tes Penyesuaian Level (Diagnostic Placement)
                    </h4>
                    <span className="text-xs text-orange-600 font-semibold">Durasi ~1 Menit</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Anak atau orang tua membuka modal evaluasi cepat berisi 3 pertanyaan bergambar dan bersuara. Sistem menghitung rekomendasi otomatis: <strong>Level 1</strong> (Fonik & Kata Pendek), <strong>Level 2</strong> (Kalimat Sederhana), atau <strong>Level 3</strong> (Cerita Kompleks).
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold text-base shrink-0 shadow-sm z-10">
                  2
                </div>
                <div className="flex-1 p-5 rounded-2xl bg-white border border-slate-200">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-slate-900 font-lexend text-base">
                      Memilih Judul Buku di Perpustakaan
                    </h4>
                    <span className="text-xs text-amber-700 font-semibold">Eksplorasi Visual</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Anak melihat sampul buku beresolusi tinggi dengan ilustrasi hangat nusantara, ringkasan kata, dan perkiraan waktu baca. Anak memilih buku sesuai minat (misal: fabel kancil, dongeng luar angkasa, hewan peliharaan).
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-bold text-base shrink-0 shadow-sm z-10">
                  3
                </div>
                <div className="flex-1 p-5 rounded-2xl bg-white border border-slate-200">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-slate-900 font-lexend text-base">
                      Membaca Flipbook & Mendengarkan Narator
                    </h4>
                    <span className="text-xs text-emerald-700 font-semibold">Tahap Modeling</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Buku terbuka dengan format flipbook dua halaman (spread). Anak membaca teks dan tips intonasi di atasnya. Anak menekan tombol <strong>&ldquo;Dengarkan Narator&rdquo;</strong> untuk mendengarkan lafal baku dan mengamati penanda kata bergerak (karaoke effect).
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center font-bold text-base shrink-0 shadow-sm z-10">
                  4
                </div>
                <div className="flex-1 p-5 rounded-2xl bg-white border border-slate-200">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-slate-900 font-lexend text-base">
                      Perekaman Suara Mandiri & Live Waveform
                    </h4>
                    <span className="text-xs text-rose-700 font-semibold">Tahap Praktik</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Anak menekan tombol besar <strong>&ldquo;Rekam Suaraku&rdquo;</strong>. Gelombang suara melompat-lompat sesuai volume suara anak. Selesai membaca, anak menekan stop, mendengarkan kembali suaranya, dan membaca umpan balik apresiatif dari sistem.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500 text-white flex items-center justify-center font-bold text-base shrink-0 shadow-sm z-10">
                  5
                </div>
                <div className="flex-1 p-5 rounded-2xl bg-white border border-slate-200">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-slate-900 font-lexend text-base">
                      Mode &ldquo;Putar Cerita Saya&rdquo; & Galeri Hasil Karya
                    </h4>
                    <span className="text-xs text-indigo-700 font-semibold">Tahap Apresiasi</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Setelah seluruh halaman selesai direkam, buku otomatis bertransisi ke mode tayang mandiri (auto-play). Halaman membalik dengan efek kertas fisik diiringi suara anak sendiri! Karya tersimpan di galeri <strong>&ldquo;Buku Suaraku&rdquo;</strong> lengkap dengan sertifikat penghargaan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: DATA ARCHITECTURE & SYNC */}
        {activeTab === 'architecture' && (
          <div className="space-y-8">
            <div>
              <span className="text-xs font-bold text-orange-600 tracking-wider uppercase block mb-1">
                Bab 4 · Arsitektur Data & Sinkronisasi
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-lexend">
                Arsitektur Fitur & Mekanisme Sinkronisasi Audio Per Halaman
              </h3>
              <p className="text-slate-700 mt-2 leading-relaxed">
                Salah satu tantangan teknis utama dalam aplikasi literasi adalah memastikan rekaman suara anak tersinkronisasi presisi dengan nomor halaman flipbook tanpa tumpang-tindih (audio bleed) saat halaman dibalik.
              </p>
            </div>

            {/* Synchronization Strategy */}
            <div className="p-6 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto space-y-3">
              <div className="text-amber-400 font-bold text-sm">
                // Struktur Relasi Data: Buku, Halaman & Rekaman Suara
              </div>
              <pre className="text-slate-300 leading-relaxed">
{`interface SavedChildBook {
  id: string;                     // UUID unik rekaman karya anak
  bookId: string;                 // ID referensi buku master
  childName: string;              // Nama anak untuk sertifikat
  completedAt: string;            // Timestamp penyelesaian
  totalDurationMs: number;        // Total durasi seluruh rekaman
  averageScore: number;           // Skor rata-rata intonasi & kelancaran
  badgeName: string;              // Lencana prestasi yang diperoleh
  
  // Sinkronisasi Kunci: Masing-masing halaman memiliki file audio independen
  recordings: {
    [pageNumber: number]: {
      pageNumber: number;
      audioBlobUrl: string;       // URL Blob lokal atau Cloud Storage URI
      durationMs: number;         // Durasi audio dalam milidetik
      recordedAt: string;         // Jam perekaman
      intonationScore: number;    // Nilai prosodi (0-100)
      feedbackNote: string;       // Catatan motivasi sistem
    }
  };
}`}
              </pre>
            </div>

            {/* Architecture Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <h4 className="font-bold text-slate-900 font-lexend text-base mb-2">
                  Kenapa Chunk Per Halaman Lebih Unggul?
                </h4>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc list-inside">
                  <li><strong>Koreksi Parsial:</strong> Anak hanya perlu mengulang rekam halaman tertentu yang salah baca tanpa harus merekam ulang buku dari awal.</li>
                  <li><strong>Ukuran File Ringan:</strong> Audio terkompresi Opus/WebM per halaman hanya berukuran 20KB–45KB sehingga hemat memori ponsel dan kuota internet.</li>
                  <li><strong>Fleksibilitas Playback:</strong> Mudah diputar acak (random access) saat orang tua ingin mendengar halaman tertentu.</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <h4 className="font-bold text-slate-900 font-lexend text-base mb-2">
                  State Machine Perekaman & Playback
                </h4>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-2 list-disc list-inside">
                  <li><strong>IDLE:</strong> Halaman terbuka, narator dan mikrofon siap.</li>
                  <li><strong>NARRATOR_PLAYING:</strong> Suara narator aktif, teks ter-highlight per kata, mikrofon dinonaktifkan sementara untuk mencegah feedback suara speaker.</li>
                  <li><strong>RECORDING:</strong> Stream mikrofon dianalisis lewat AnalyserNode Web Audio API, menghasilkan animasi waveform responsif.</li>
                  <li><strong>STORY_AUTO_PLAY:</strong> Loop berurutan: Putar Audio Halaman N $\to$ OnEnded $\to$ Picu Animasi Flipbook $\to$ Putar Halaman N+1.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: TECH STACK RECOMMENDATION */}
        {activeTab === 'stack' && (
          <div className="space-y-8">
            <div>
              <span className="text-xs font-bold text-orange-600 tracking-wider uppercase block mb-1">
                Bab 5 · Rekomendasi Teknologi Stack
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-lexend">
                Rekomendasi Arsitektur Teknologi (Modern & Skalabel)
              </h3>
              <p className="text-slate-700 mt-2 leading-relaxed">
                Kombinasi teknologi dipilih berdasarkan performa tinggi di perangkat dengan spesifikasi terbatas (<em>low-end devices</em>) seperti tablet sekolah dan ponsel orang tua di Indonesia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-orange-100 text-orange-700">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 font-lexend text-base">
                      Frontend & Flipbook Engine
                    </h4>
                    <span className="text-xs text-slate-500">Klien Web & Mobile PWA</span>
                  </div>
                </div>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-2.5">
                  <li><strong>React 19 + TypeScript:</strong> Arsitektur komponen modular dan penanganan state yang kokoh.</li>
                  <li><strong>Page-Flip Engine:</strong> Kombinasi CSS 3D Transforms dengan hardware-accelerated Matrix3D atau <code>stpageflip</code> (PageFlip.js) untuk transisi membalik kertas 60fps mulus.</li>
                  <li><strong>Tailwind CSS v4:</strong> Desain responsif fleksibel dengan dukungan tipografi ramah anak.</li>
                  <li><strong>Motion (Framer Motion):</strong> Transisi animasi mikro yang halus dan tidak memberatkan CPU ponsel.</li>
                </ul>
              </div>

              {/* Audio & Media */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 font-lexend text-base">
                      Audio Processing & Visualisasi
                    </h4>
                    <span className="text-xs text-slate-500">Web Audio API Standar Industri</span>
                  </div>
                </div>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-2.5">
                  <li><strong>HTML5 MediaRecorder API:</strong> Merekam audio langsung di peramban dengan kompresi <code>audio/webm; codecs=opus</code> pada bitrate hemat (32–48 kbps mono).</li>
                  <li><strong>Web Audio API (AnalyserNode):</strong> Ekstraksi Fast Fourier Transform (FFT) secara real-time untuk visualisasi gelombang suara melompat saat anak berbicara.</li>
                  <li><strong>Web Speech API:</strong> Sintesis suara narator beraksen Bahasa Indonesia baku (<code>id-ID</code>) dengan latensi 0ms tanpa biaya API berbayar.</li>
                </ul>
              </div>

              {/* Backend & Storage */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-blue-100 text-blue-700">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 font-lexend text-base">
                      Backend & Penyimpanan Audio
                    </h4>
                    <span className="text-xs text-slate-500">Cloud Storage & Database</span>
                  </div>
                </div>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-2.5">
                  <li><strong>Node.js / Express:</strong> RESTful API server untuk otentikasi akun sekolah (Google Workspace / Akun Belajar.id).</li>
                  <li><strong>Cloud Object Storage (GCS / Firebase Storage):</strong> Menyimpan file audio rekaman anak secara terenkripsi dengan URL berbatas waktu (Signed URLs).</li>
                  <li><strong>Database (Firestore / Cloud SQL PostgreSQL):</strong> Menyimpan katalog buku, metadata halaman, riwayat membaca, dan data lencana penghargaan.</li>
                </ul>
              </div>

              {/* Offline & Accessibility */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-white">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-violet-100 text-violet-700">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 font-lexend text-base">
                      Kemampuan Offline (PWA)
                    </h4>
                    <span className="text-xs text-slate-500">Akses Tanpa Kuota di Pelosok</span>
                  </div>
                </div>
                <ul className="text-xs sm:text-sm text-slate-600 space-y-2.5">
                  <li><strong>Progressive Web App (PWA):</strong> Aplikasi dapat di-install langsung ke layar utama Android/iPad tanpa instalasi Play Store yang berat.</li>
                  <li><strong>Cache Storage & IndexedDB:</strong> Buku dan rekaman tersimpan lokal di perangkat, memungkinkan anak membaca di sekolah pedesaan tanpa jaringan internet stabil.</li>
                  <li><strong>Sinkronisasi Latar Belakang:</strong> Audio otomatis diunggah saat perangkat kembali terhubung ke jaringan Wi-Fi sekolah.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: AI INTONATION & ROADMAP */}
        {activeTab === 'innovation' && (
          <div className="space-y-8">
            <div>
              <span className="text-xs font-bold text-orange-600 tracking-wider uppercase block mb-1">
                Bab 6 · Inovasi AI & Rencana Pengembangan
              </span>
              <h3 className="text-2xl font-bold text-slate-900 font-lexend">
                Usulan Fitur Masa Depan: AI Intonation Evaluator & Laporan Guru
              </h3>
              <p className="text-slate-700 mt-2 leading-relaxed">
                Pemanfaatan kecerdasan buatan (AI) secara etis dan mendidik untuk memberikan motivasi positif serta mendeteksi perkembangan kemampuan literasi anak.
              </p>
            </div>

            {/* AI Intonation Mechanism */}
            <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200">
              <h4 className="font-bold text-slate-900 font-lexend text-base mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-600" />
                <span>Mekanisme Evaluasi Intonasi Berbasis AI (Prosody Analysis)</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                Sistem tidak hanya mendeteksi apakah anak menyebutkan kata yang benar (Speech-to-Text accuracy), melainkan menganalisis <strong>Pitch Contour (F0)</strong> dan dinamika energi suara:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-amber-200">
                  <span className="font-bold text-orange-950 block mb-1">1. Nada Tanya (?)</span>
                  <span className="text-slate-600">Mendeteksi kenaikan frekuensi pitch di akhir kalimat untuk memastikan intonasi bertanya terbentuk secara alami.</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-amber-200">
                  <span className="font-bold text-orange-950 block mb-1">2. Nada Seru (!)</span>
                  <span className="text-slate-600">Mengukur lonjakan energi (decibel) dan kecepatan pengucapan saat mengekspresikan rasa senang, kagum, atau waspada.</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-amber-200">
                  <span className="font-bold text-orange-950 block mb-1">3. Jeda Tanda Baca (,)</span>
                  <span className="text-slate-600">Menghargai jeda napas 200–500ms pada tanda koma untuk mencegah anak membaca tergesa-gesa.</span>
                </div>
              </div>
            </div>

            {/* Teacher Dashboard Feature */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <h4 className="font-bold text-slate-900 font-lexend text-base mb-2">
                Usulan Dashboard Guru & Orang Tua (Asesmen Otentik)
              </h4>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Metrik WPM (Words Per Minute):</strong> Mengukur kecepatan membaca alami anak tanpa menjadikannya ajang perlombaan buru-buru.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Rekam Jejak Kemajuan Mingguan:</strong> Membandingkan rekaman bulan pertama dengan bulan ketiga untuk memperlihatkan peningkatan rasa percaya diri anak.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Kuis Pemahaman Cerita Ringan:</strong> 2 pertanyaan pilihan berganda setelah membaca untuk memastikan anak tidak sekadar melafalkan huruf melainkan memahami isi dongeng.</span>
                </div>
              </div>
            </div>

            {/* Phased Roadmap */}
            <div>
              <h4 className="font-bold text-slate-900 font-lexend text-base mb-4">
                Peta Jalan Pengembangan Produk (Product Roadmap)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block mb-1">
                    Fase 1 · MVP (Saat Ini)
                  </span>
                  <strong className="text-slate-900 text-sm block mb-2 font-lexend">
                    Flipbook & Audio Recorder
                  </strong>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                    <li>3D Flipbook interaktif</li>
                    <li>Sistem leveling 1-3 & Tes Diagnostik</li>
                    <li>Rekam mandiri & Waveform</li>
                    <li>Mode Putar Cerita Saya</li>
                    <li>Galeri & Sertifikat lokal</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                    Fase 2 · Kolaborasi
                  </span>
                  <strong className="text-slate-900 text-sm block mb-2 font-lexend">
                    Sync Cloud & Akun Sekolah
                  </strong>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                    <li>Login Akun Belajar.id Guru SD</li>
                    <li>Cloud backup rekaman suara</li>
                    <li>Katalog dongeng lokal nusantara 50+ buku</li>
                    <li>Komentar suara dari guru/ortu</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                    Fase 3 · AI & Multimodal
                  </span>
                  <strong className="text-slate-900 text-sm block mb-2 font-lexend">
                    Intonation AI Coach
                  </strong>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                    <li>Analisis prosodi suara otomatis</li>
                    <li>Rekomendasi buku adaptif cerdas</li>
                    <li>Studio kreasi buku suara oleh anak</li>
                    <li>Dukungan bahasa daerah nusantara</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
