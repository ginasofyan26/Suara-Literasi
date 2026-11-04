import { DubbingScript } from '../types';

export const DUBBING_SCRIPTS: DubbingScript[] = [
  // =========================================================================
  // 1. TEKS BERITA (NEWS ANCHOR TV) - 10 NASKAH
  // =========================================================================
  {
    id: 'berita-robotika-juara',
    genre: 'berita',
    genreLabel: 'Teks Berita Televisi',
    title: 'Prestasi Juara Dunia Robotika Cilik Indonesia',
    description: 'Naskah presenter berita formal tentang tim siswa SD Indonesia yang memenangkan medali emas di ajang World Youth Robotics Championship.',
    coverImage: '/src/assets/images/dubbing_berita_tv_1793761456973.jpg',
    badgeName: 'Presenter Berita Handal',
    badgeIcon: '📺',
    targetTone: 'Lugas, tegas, artikulasi baku, tatap kamera, tempo terkontrol (115–125 WPM)',
    targetWpm: 120,
    intonationGuide: [
      {
        rule: 'Tanda Garis Miring Tunggal ( / )',
        example: 'Berhenti sejenak (0.5 detik) untuk menarik napas halus pada tanda koma.'
      },
      {
        rule: 'Tanda Garis Miring Ganda ( // )',
        example: 'Berhenti tuntas (1 detik) pada akhir kalimat berita atau pergantian topik.'
      },
      {
        rule: 'Intonasi Penutup Berita ( ↘ )',
        example: 'Turunkan nada suara secara wibawa di akhir kalimat penutup.'
      }
    ],
    scriptText: `Pemirsa, / selamat siang. // 

Kabar membanggakan / kembali datang dari anak-anak bangsa di kancah internasional. // 

Tim robotika cilik Indonesia / yang beranggotakan tiga siswa Sekolah Dasar, / berhasil meraih medali emas / dalam ajang bergengsi World Youth Robotics Championship 2026 / di Tokyo, / Jepang. // 

Robot pemilah sampah pintar berbasis sensor buatan mereka / sukses memukau dewan juri / berkat ketepatan dan efisiensi energi yang tinggi. // 

Prestasi gemilang ini / membuktikan bahwa generasi muda Indonesia / mampu bersaing dan menjadi inovator masa depan. // 

Dari Jakarta, / saya pamit undur diri. // Terima kasih / dan sampai jumpa. ↘`,
    sampleAudioDurationSec: 28
  },
  {
    id: 'berita-terumbu-karang',
    genre: 'berita',
    genreLabel: 'Teks Berita Televisi',
    title: 'Aksi Nyata Siswa SD Lindungi Terumbu Karang',
    description: 'Liputan jurnalis cilik tentang gerakan transplantasi terumbu karang di perairan Nusa Penida bersama komunitas nelayan tradisional.',
    coverImage: '/src/assets/images/dubbing_berita_tv_1793761456973.jpg',
    badgeName: 'Jurnalis Lingkungan Cilik',
    badgeIcon: '🎤',
    targetTone: 'Informatif, berwibawa, tempo seimbang, penekanan 5W+1H yang jelas',
    targetWpm: 115,
    intonationGuide: [
      {
        rule: 'Penekanan Kata Kunci (Stress)',
        example: 'Beri sedikit tekanan vokal pada angka dan nama lokasi penting.'
      },
      {
        rule: 'Artikulasi Konsonan Jelas',
        example: 'Ucapkan huruf /p/, /t/, /k/, dan /r/ tanpa terburu-buru.'
      }
    ],
    scriptText: `Berita Terkini kembali hadir. // 

Sebanyak lima puluh siswa Sekolah Dasar di Bali / menggelar aksi pelestarian laut / dengan menanam seribu bibit terumbu karang / di perairan Nusa Penida. // 

Kegiatan yang berlangsung sejak pagi tadi / bertujuan untuk memulihkan ekosistem bawah laut / yang sempat terdampak pemanasan global. // 

Kepala cagar laut setempat / menyampaikan apresiasi tinggi / atas kepedulian generasi muda / dalam menjaga warisan maritim Nusantara. // 

Demikian warta lingkungan hari ini. // Selamat melanjutkan aktivitas Anda. ↘`,
    sampleAudioDurationSec: 26
  },
  {
    id: 'berita-pesta-sains-nasional',
    genre: 'berita',
    genreLabel: 'Teks Berita Televisi',
    title: 'Pesta Sains Cilik Nasional dan Energi Surya',
    description: 'Pemberitaan tentang ratusan inovator cilik yang memamerkan purwarupa mobil bertenaga panel surya di Jakarta International Expo.',
    coverImage: '/src/assets/images/dubbing_berita_tv_1793761456973.jpg',
    badgeName: 'Penyampai Warta Teknologi',
    badgeIcon: '⚡',
    targetTone: 'Antusias, teratur, vokal jernih, mengutamakan kejelasan fakta ilmiah',
    targetWpm: 120,
    intonationGuide: [
      {
        rule: 'Akurasi Istilah Sains',
        example: 'Lafalkan istilah seperti panel surya dan energi terbarukan dengan tempo tenang.'
      }
    ],
    scriptText: `Pemirsa, / warta sains nusantara hari ini. // 

Ratusan siswa Sekolah Dasar dari tiga puluh empat provinsi / berkumpul di Jakarta / dalam ajang Pesta Sains Cilik Nasional 2026. // 

Berbagai inovasi ramah lingkungan dipamerkan, / mulai dari purwarupa mobil bertenaga surya / hingga miniatur kincir angin penghasil listrik mandiri. // 

Menteri Pendidikan mengapresiasi tinggi daya cipta para siswa / yang dinilai telah memikirkan solusi energi masa depan sejak usia dini. // 

Warta sains kembali setelah jeda berikut. ↘`,
    sampleAudioDurationSec: 27
  },
  {
    id: 'berita-gerakan-literasi-kapal',
    genre: 'berita',
    genreLabel: 'Teks Berita Televisi',
    title: 'Perahu Pustaka Mengarungi Sungai Membawa Ribuan Buku',
    description: 'Liputan kemanusiaan tentang gerakan Perahu Pustaka yang menyusuri sungai pedalaman Kalimantan untuk mengantar buku kepada anak-anak desa.',
    coverImage: '/src/assets/images/dubbing_berita_tv_1793761456973.jpg',
    badgeName: 'Duta Warta Literasi',
    badgeIcon: '⛵',
    targetTone: 'Penuh empati, nada hangat namun tetap dalam bingkai berita formal',
    targetWpm: 115,
    intonationGuide: [
      {
        rule: 'Jeda Pemisah Kalimat ( // )',
        example: 'Gunakan jeda penuh agar pesan perjuangan literasi tersampaikan menyentuh.'
      }
    ],
    scriptText: `Selamat petang pemirsa. // 

Di pedalaman Kalimantan Barat, / gelombang air sungai / tidak menyurutkan semangat relawan literasi / untuk menebarkan jendela ilmu pengetahuan. // 

Melalui program Perahu Pustaka, / lebih dari tiga ribu buku cerita dan ensiklopedia anak / diantarkan langsung ke desa-desa yang belum terjangkau akses jalan darat. // 

Senyum bahagia ratusan anak menyambut kedatangan perahu kayu tersebut / di dermaga kampung sejak matahari terbit. // 

Semangat membaca ini / menjadi bukti nyata bahwa dahaga akan ilmu / menyala terang di seluruh pelosok negeri. ↘`,
    sampleAudioDurationSec: 29
  },
  {
    id: 'berita-kebun-hidroponik-sekolah',
    genre: 'berita',
    genreLabel: 'Teks Berita Televisi',
    title: 'Panen Raya Sayur Hidroponik Karya Siswa SD Pertiwi',
    description: 'Berita seputar keberhasilan program ketahanan pangan sekolah mandiri dengan kebun sayur hidroponik di atap sekolah.',
    coverImage: '/src/assets/images/dubbing_berita_tv_1793761456973.jpg',
    badgeName: 'Presenter Warta Edukasi',
    badgeIcon: '🥬',
    targetTone: 'Segar, bernas, intonasi lugas dengan senyum wibawa di awal dan akhir berita',
    targetWpm: 118,
    intonationGuide: [
      {
        rule: 'Penekanan Angka Panen',
        example: 'Beri penekanan vokal pada angka lima ratus kilogram dan tiga puluh hari.'
      }
    ],
    scriptText: `Kabar edukasi berikutnya. // 

Memanfaatkan lahan atap sekolah yang terbatas, / para siswa SD Pertiwi Surabaya / berhasil melakukan panen raya sayuran hidroponik / sebanyak lima ratus kilogram selada dan bayam merah. // 

Tanaman yang dirawat secara mandiri selama tiga puluh hari ini / dibagikan ke warga sekitar sekolah / sebagai bagian dari pembelajaran kepedulian sosial. // 

Pihak sekolah berharap / program kebun atap ini / dapat menginspirasi sekolah lain / untuk mempraktikkan konsep sekolah hijau ramah lingkungan. // 

Saya Anindya Putri, / selamat siang. ↘`,
    sampleAudioDurationSec: 28
  },
  {
    id: 'berita-penyelamatan-gajah',
    genre: 'berita',
    genreLabel: 'Teks Berita Televisi',
    title: 'Patroli Sahabat Rimba Jaga Jalur Koridor Gajah Sumatra',
    description: 'Warta konservasi satwa langka mengenai keterlibatan pramuka cilik dalam menanam pohon pelindung di koridor lintasan gajah liar.',
    coverImage: '/src/assets/images/dubbing_berita_tv_1793761456973.jpg',
    badgeName: 'Kabar Satwa Nusantara',
    badgeIcon: '🐘',
    targetTone: 'Waspada, serius, meyakinkan, menekankan pentingnya pelestarian satwa liar',
    targetWpm: 116,
    intonationGuide: [
      {
        rule: 'Intonasi Penegasan (Emphasis)',
        example: 'Tekankan kata "gajah sumatra" dan "satwa yang dilindungi undang-undang".'
      }
    ],
    scriptText: `Warta konservasi tanah air. // 

Puluhan anggota Pramuka Penggalang di Lampung / turut ambil bagian dalam aksi penanaman seribu pohon pisang dan bambu / di jalur koridor gajah Taman Nasional Way Kambas. // 

Langkah ini dilakukan / untuk memastikan ketersediaan pakan alami gajah liar / sehingga mencegah kawanan satwa langka tersebut / memasuki wilayah pemukiman penduduk. // 

Upaya hidup berdampingan secara damai dengan alam liar ini / mendapat sambutan hangat dari para aktivis lingkungan dunia. // 

Tetap bersama kami di Warta Nusantara. ↘`,
    sampleAudioDurationSec: 28
  },
  {
    id: 'berita-museum-batik-cilik',
    genre: 'berita',
    genreLabel: 'Teks Berita Televisi',
    title: 'Festival Membatik Canting Massal Pelajar Cetak Rekor MURI',
    description: 'Liputan budaya mengenai seribu siswa sekolah dasar yang melukis batik motif nusantara di halaman Museum Keraton Surakarta.',
    coverImage: '/src/assets/images/dubbing_berita_tv_1793761456973.jpg',
    badgeName: 'Penyiar Warta Budaya',
    badgeIcon: '🎨',
    targetTone: 'Bangga, dinamis, artikulasi vokal bulat, membangkitkan cinta warisan leluhur',
    targetWpm: 120,
    intonationGuide: [
      {
        rule: 'Tempo Melodi Bahasa',
        example: 'Beri alunan nada yang elegan saat menyebut kata mahakarya dan warisan leluhur.'
      }
    ],
    scriptText: `Pemirsa, / dari panggung seni dan budaya nusantara. // 

Sebanyak seribu pelajar Sekolah Dasar di Surakarta / memecahkan rekor Museum Rekor Indonesia / melalui aksi membatik canting massal / sepanjang lima ratus meter kain mori. // 

Dengan mengenakan pakaian adat tradisional, / jemari lincah para siswa / menorehkan cairan malam / membentuk motif parang dan kawung yang elok. // 

Kegiatan ini membuktikan / bahwa kecintaan terhadap batik sebagai warisan dunia / tetap berakar kokoh di sanubari generasi penerus bangsa. // 

Demikian warta budaya petang ini. ↘`,
    sampleAudioDurationSec: 28
  },
  {
    id: 'berita-inovasi-alat-gempa',
    genre: 'berita',
    genreLabel: 'Teks Berita Televisi',
    title: 'Inovasi Alarm Gempa Sederhana Berbahan Bambu dan Lonceng',
    description: 'Berita seputar karya sains tepat guna siswa SD di Yogyakarta yang membuat pendeteksi getaran gempa bumi menggunakan bahan lokal.',
    coverImage: '/src/assets/images/dubbing_berita_tv_1793761456973.jpg',
    badgeName: 'Jurnalis Siaga Bencana',
    badgeIcon: '🔔',
    targetTone: 'Tegas, jelas, menggugah kesiapsiagaan tanpa menimbulkan kepanikan',
    targetWpm: 118,
    intonationGuide: [
      {
        rule: 'Artikulasi Jelas pada Fakta',
        example: 'Katakan istilah "pendeteksi getaran dini" dengan artikulasi sangat jernih.'
      }
    ],
    scriptText: `Warta daerah seputar inovasi anak bangsa. // 

Dua siswa Sekolah Dasar di Kabupaten Bantul, / Yogyakarta, / berhasil merakit alat pendeteksi getaran gempa bumi sederhana / hanya dengan menggunakan potongan bambu, / pendulum timah, / dan lonceng kuningan. // 

Alat ini mampu membunyikan dentang peringatan dini / saat mendeteksi guncangan awal berdaya rendah, / sehingga memberikan waktu bagi warga untuk menyelamatkan diri. // 

Badan Penanggulangan Bencana setempat / berencana menduplikasi temuan cerdas ini / untuk dipasang di sekolah-sekolah rawan gempa. // 

Warta daerah berakhir di sini. ↘`,
    sampleAudioDurationSec: 29
  },
  {
    id: 'berita-paduan-suara-harmoni',
    genre: 'berita',
    genreLabel: 'Teks Berita Televisi',
    title: 'Paduan Suara Anak Nusantara Harumkan Nama Bangsa di Eropa',
    description: 'Liputan prestasi grup paduan suara anak-anak Indonesia yang menyanyikan lagu daerah Yamko Rambe Yamko di panggung Wina, Austria.',
    coverImage: '/src/assets/images/dubbing_berita_tv_1793761456973.jpg',
    badgeName: 'Kabar Emas Nusantara',
    badgeIcon: '🏆',
    targetTone: 'Bangga, bergelora, tempo cerah dan berbobot, modulasi suara elegan',
    targetWpm: 122,
    intonationGuide: [
      {
        rule: 'Intonasi Puncak Kebanggaan',
        example: 'Naikkan sedikit nada pada kata "berhasil meraih juara umum di panggung Eropa".'
      }
    ],
    scriptText: `Kabar gembira dari panggung musik internasional. // 

Kelompok paduan suara anak Merah Putih Harmoni / sukses meraih gelar juara umum / dalam kompetisi paduan suara anak sedunia / di Wina, / Austria. // 

Mengenakan busana adat dari berbagai penjuru tanah air, / tiga puluh penyanyi cilik ini / memukau ribuan penonton / lewat harmoni lagu daerah Yamko Rambe Yamko / dan Manuk Dadali / yang diiringi koreografi lincah. // 

Kemenangan ini sekaligus mengukuhkan posisi Indonesia / sebagai salah satu negara dengan kekayaan musikalitas terindah di dunia. // 

Selamat kepada para juara! ↘`,
    sampleAudioDurationSec: 29
  },
  {
    id: 'berita-bulan-bahasa',
    genre: 'berita',
    genreLabel: 'Teks Berita Televisi',
    title: 'Semarak Peringatan Bulan Bahasa dan Sastra Daerah di Sekolah',
    description: 'Pemberitaan tentang festival literasi Bulan Bahasa di sekolah dasar yang menampilkan lomba mendongeng bahasa daerah dan bedah kamus cilik.',
    coverImage: '/src/assets/images/dubbing_berita_tv_1793761456973.jpg',
    badgeName: 'Presenter Bahasa & Sastra',
    badgeIcon: '📚',
    targetTone: 'Fasih, anggun, mencerminkan ketertiban berbahasa Indonesia yang baik dan benar',
    targetWpm: 118,
    intonationGuide: [
      {
        rule: 'Kerapian Lafal Baku',
        example: 'Gunakan pelafalan vokal dan konsonan baku sesuai kaidah tata bahasa Indonesia.'
      }
    ],
    scriptText: `Menutup perjumpaan kita di Warta Utama siang ini. // 

Semarak peringatan Bulan Bahasa dan Sastra / berlangsung meriah di seluruh pelosok tanah air. // 

Di Jakarta, / ratusan siswa sekolah dasar / unjuk kebolehan dalam lomba mendongeng cerita rakyat / menggunakan bahasa daerah masing-masing / yang kemudian diterjemahkan ke dalam bahasa persatuan, / Bahasa Indonesia. // 

Mencintai bahasa daerah / dan menjunjung tinggi bahasa nasional / adalah pilar utama jati diri bangsa yang majemuk. // 

Saya pamit undur diri, / selamat siang dan salam literasi. ↘`,
    sampleAudioDurationSec: 28
  },

  // =========================================================================
  // 2. TEKS PENYIAR RADIO (BROADCASTER / PODCASTER) - 10 NASKAH
  // =========================================================================
  {
    id: 'radio-semangat-pagi',
    genre: 'radio',
    genreLabel: 'Teks Penyiar Radio',
    title: 'Sapa Pagi Ceria "Zona Sahabat Cilik" 98.5 FM',
    description: 'Gaya penyiar radio pagi yang lincah, hangat, dan komunikatif membagikan tips menjaga fokus dan semangat belajar menjelang ujian.',
    coverImage: '/src/assets/images/dubbing_penyiar_radio_1793761457976.jpg',
    badgeName: 'Penyiar Radio Favorit',
    badgeIcon: '📻',
    targetTone: 'Hangat, ceria, bersahabat (*friendly casual*), vokal tersenyum (*smiling voice*)',
    targetWpm: 130,
    intonationGuide: [
      {
        rule: 'Smiling Voice (Bicara Sambil Tersenyum)',
        example: 'Bicara sambil tersenyum membuat getaran nada suara terdengar ramah dan mengundang.'
      },
      {
        rule: 'Intonasi Mengayun (Cadence)',
        example: 'Hindari nada datar; ayunkan intonasi sapaan naik turun seperti sedang berbincang dengan sahabat.'
      }
    ],
    scriptText: `Halo sahabat kreatif di seluruh Nusantara! ↗ // 

Selamat pagi dan semangat baru / bareng aku di Zona Sahabat Cilik 98.5 FM! // 

Gimana kabar kalian pagi ini? / Semoga udah sarapan sehat dan siap menaklukkan hari ya! // 

Nah, / di episode spesial kali ini, / kita bakal bahas tiga jurus rahasia / biar belajar ujian tetap rileks, / seru, / dan pastinya nempel di kepala. // 

Jurus pertama: / belajar dua puluh menit, / lalu istirahat lima menit sambil minum air putih segar. // 

Yuk, / jangan ke mana-mana, / tetap pasang telinga kalian / di gelombang kesayangan kita semua! ↗`,
    sampleAudioDurationSec: 27
  },
  {
    id: 'radio-kisah-inspiratif',
    genre: 'radio',
    genreLabel: 'Teks Penyiar Radio',
    title: 'Podcast "Ruang Cerita Sahabat": Sahabat Penyelamat Kucing',
    description: 'Naskah monolog podcast radio bercerita tentang aksi kepedulian anak-anak menyelamatkan anak kucing terlantar di musim hujan.',
    coverImage: '/src/assets/images/dubbing_penyiar_radio_1793761457976.jpg',
    badgeName: 'Podcaster Berbakat',
    badgeIcon: '🎧',
    targetTone: 'Intim, mengalir santai, ekspresi empati mendalam, intonasi bercerita',
    targetWpm: 125,
    intonationGuide: [
      {
        rule: 'Modulasi Emosi Suara',
        example: 'Gunakan nada sendu saat menceritakan anak kucing kedinginan, lalu ceria saat kucing selamat.'
      }
    ],
    scriptText: `Kembali lagi di Ruang Cerita Sahabat. // 

Pernah nggak kalian melihat seekor anak kucing kecil / berteduh sendirian di bawah kanopi toko saat hujan deras? // 

Hari ini, / kita kedatangan cerita mengharukan / dari Daffa di Surabaya. // 

Dengan bekal payung kecilnya, / Daffa nggak ragu menghangatkan si bola bulu mungil / dan membawanya pulang dengan izin orang tuanya. // 

Kebaikan kecil yang kita lakukan hari ini, / bisa menjadi keajaiban besar bagi orang lain di sekitar kita. // 

Kalian luar biasa! ↗`,
    sampleAudioDurationSec: 25
  },
  {
    id: 'radio-tips-bekal-sehat',
    genre: 'radio',
    genreLabel: 'Teks Penyiar Radio',
    title: 'Obrolan Santai: Resep Kotak Bekal Bergizi Warna-Warni',
    description: 'Penyiar radio kuliner cilik memandu obrolan seru tentang isi kotak bekal sekolah yang kaya vitamin dan membuat tubuh berenergi.',
    coverImage: '/src/assets/images/dubbing_penyiar_radio_1793761457976.jpg',
    badgeName: 'DJ Cilik Bugar',
    badgeIcon: '🍱',
    targetTone: 'Gembira, menggugah selera, akrab, menggunakan jeda rasa ingin tahu',
    targetWpm: 128,
    intonationGuide: [
      {
        rule: 'Deskripsi Multisensorik',
        example: 'Gunakan intonasi renyah saat mengucapkan kata "wortel renyah" dan "nasi kepal rumput laut".'
      }
    ],
    scriptText: `Teng tong teng! / Jam istirahat sekolah udah tiba nih teman-teman! ↗ // 

Siapa yang di sini / bawa kotak bekal buatan ayah dan bunda dari rumah? // 

Coba buka kotak bekal kalian sekarang. / Ada warna apa aja di dalamnya? // 

Kotak bekal juara itu / harus kaya pelangi: / merah dari tomat manis, / oranye dari wortel renyah, / hijau dari brokoli segar, / dan karbohidrat dari nasi kepal bertabur wijen! // 

Makan bekal sendiri itu selain bikin tubuh kita kuat berlari saat olahraga, / juga bikin kantong jajan tetap hemat lho! // 

Selamat menikmati makan siang semuanya! ↗`,
    sampleAudioDurationSec: 28
  },
  {
    id: 'radio-koleksi-hobi-unik',
    genre: 'radio',
    genreLabel: 'Teks Penyiar Radio',
    title: 'Zona Hobi: Serunya Menjadi Pengamat Burung dan Fotografer Alam',
    description: 'Sapaan radio interaktif membahas hobi unik menjelajah taman kota dengan teropong binokular untuk mengamati aneka jenis burung.',
    coverImage: '/src/assets/images/dubbing_penyiar_radio_1793761457976.jpg',
    badgeName: 'Host Penjelajah Alam',
    badgeIcon: '🦜',
    targetTone: 'Penuh rasa ingin tahu, bersemangat (*curious & energetic*), mengajak pendengar berimajinasi',
    targetWpm: 126,
    intonationGuide: [
      {
        rule: 'Sensasi Berbisik Hening',
        example: 'Rendahkan volume suara saat memperagakan mendekati sarang burung agar tidak terbang.'
      }
    ],
    scriptText: `Sssttt... / pelan-pelan ya langkah kakinya! // 

Selamat datang kembali di segmen Zona Hobi Unik bareng aku! ↗ // 

Kalian tahu nggak, / di balik rindangnya pepohonan taman kota kita, / ada lebih dari dua puluh jenis burung liar yang hidup berdampingan dengan kita lho! // 

Mulai dari burung madu kelapa yang suka mengisap nektar bunga, / sampai burung kipasan belang yang lincah menari di dahan pohon mangga. // 

Cukup bermodal teropong kecil dan buku catatan saku, / kalian udah bisa jadi peneliti cilik yang hebat! // 

Siapa yang akhir pekan ini mau berburu kicauan merdu bersamaku? ↗`,
    sampleAudioDurationSec: 28
  },
  {
    id: 'radio-misteri-luar-angkasa',
    genre: 'radio',
    genreLabel: 'Teks Penyiar Radio',
    title: 'Ekspedisi Sains FM: Menjelajah Misteri Planet Mars dan Robot Penjelajah',
    description: 'Segmen sains antariksa yang disajikan secara teatrikal dan imajinatif mengenai robot penjelajah di permukaan Planet Merah.',
    coverImage: '/src/assets/images/dubbing_penyiar_radio_1793761457976.jpg',
    badgeName: 'Penyiar Kosmik Cilik',
    badgeIcon: '🚀',
    targetTone: 'Futuristik, dramatis, penuh takjub akan keajaiban alam semesta',
    targetWpm: 124,
    intonationGuide: [
      {
        rule: 'Nada Bertanya Menantang ( ↗ )',
        example: 'Ayunkan nada naik saat melemparkan teka-teki misteri planet Mars.'
      }
    ],
    scriptText: `Tiga... / dua... / satu... / Luncurkan imajinasi kalian ke antariksa! ↗ // 

Hai penjelajah bintang! / Pernahkah kalian menatap langit malam / dan melihat bintik merah terang yang tak berkedip? // 

Yap! / Itulah Planet Mars, / sang tetangga terdekat bumi kita. // 

Saat ini, / robot penjelajah sebesar mobil sedang melaju pelan di atas batuan merahnya, / mengambil sampel pasir, / dan mencari jejak air purba! // 

Mungkinkah suatu hari nanti / salah satu dari kalian yang sedang mendengar radio ini / yang akan menginjakkan kaki pertama di sana? // 

Semuanya berawal dari mimpi dan kecintaan belajar sains hari ini! ↗`,
    sampleAudioDurationSec: 29
  },
  {
    id: 'radio-musik-anak-nusantara',
    genre: 'radio',
    genreLabel: 'Teks Penyiar Radio',
    title: 'Tangga Lagu Cilik: Menjelajah Irama Musik Tradisional Nusantara',
    description: 'Host program musik radio cilik mengulas keunikan alat musik angklung dan gamelan yang dipadukan dengan melodi ceria masa kini.',
    coverImage: '/src/assets/images/dubbing_penyiar_radio_1793761457976.jpg',
    badgeName: 'DJ Musik Nusantara',
    badgeIcon: '🎵',
    targetTone: 'Irama bergelombang lincah (*rhythmic cadence*), riang gembira, vokal ceria',
    targetWpm: 132,
    intonationGuide: [
      {
        rule: 'Aksen Irama Musikal',
        example: 'Sesuaikan ritme bicara dengan ketukan imajiner musik bambu yang bergoyang.'
      }
    ],
    scriptText: `Goyang bambunya, / getarkan harmoni budayanya! ↗ // 

Kembali lagi di Tangga Lagu Nusantara FM bareng DJ cilik kesayangan kamu! // 

Hari ini kita punya lagu nomor satu yang paling banyak di-request teman-teman sekolah: / aransemen lagu daerah dengan denting angklung bambu yang syahdu! // 

Tahu nggak sih, / angklung itu bukan cuma alat musik biasa, / tapi simbol gotong royong / karena satu nada cuma bisa dibunyikan oleh satu orang. // 

Jadi kalau mau lagunya indah, / kita semua harus kompak bermain bersama! // 

Yuk pasang telinga, / mari kita bernyanyi seirama! ↗`,
    sampleAudioDurationSec: 27
  },
  {
    id: 'radio-tips-percaya-diri',
    genre: 'radio',
    genreLabel: 'Teks Penyiar Radio',
    title: 'Curhat Sahabat: Mengatasi Rasa Gugup Saat Berbicara di Depan Kelas',
    description: 'Penyiar memberikan motivasi hangat bagi teman-teman yang merasa gemetar atau malu saat diminta guru maju ke depan kelas.',
    coverImage: '/src/assets/images/dubbing_penyiar_radio_1793761457976.jpg',
    badgeName: 'Sahabat Sejati Pendengar',
    badgeIcon: '🌟',
    targetTone: 'Penuh pelukan hangat, menenangkan, artikulasi lembut dan meyakinkan',
    targetWpm: 120,
    intonationGuide: [
      {
        rule: 'Pernapasan Vokal Terarah',
        example: 'Peragakan hembusan napas lega di jeda tanda koma agar pendengar merasa tenang.'
      }
    ],
    scriptText: `Halo teman-teman di Ruang Curhat Sahabat. // 

Ada pesan masuk nih dari Budi di Bandung: / "Kak, / aku suka gemetaran dan keringat dingin kalau disuruh bu guru presentasi di depan kelas." // 

Tenang Budi, / dan tenang buat kalian semua yang pernah merasakan hal yang sama. / Rasa gugup itu wajar banget kok! // 

Kuncinya ada pada satu hal sederhana: / sebelum melangkah ke depan, / tarik napas panjang lewat hidung, / hembuskan pelan lewat mulut, / lalu tatap dahi teman-temanmu sambil tersenyum. // 

Ingat ya: / kesalahan kecil saat bicara / bukanlah kegagalan, / tapi bukti bahwa kamu berani mencoba! // 

Kalian pasti bisa! ↗`,
    sampleAudioDurationSec: 29
  },
  {
    id: 'radio-sahabat-buku',
    genre: 'radio',
    genreLabel: 'Teks Penyiar Radio',
    title: 'Bedah Buku Cilik: Petualangan Menembus Lorong Waktu Sejarah Nusantara',
    description: 'Ulasan buku cerita fiksi sejarah anak mengenai seorang anak yang menemukan kompas ajaib peninggalan pelaut Bugis Makassar.',
    coverImage: '/src/assets/images/dubbing_penyiar_radio_1793761457976.jpg',
    badgeName: 'Resensator Buku Cilik',
    badgeIcon: '📖',
    targetTone: 'Membangkitkan penasaran (*cliffhanger*), tempo dinamis, kaya ekspresi intonasi',
    targetWpm: 125,
    intonationGuide: [
      {
        rule: 'Efek Rasa Penasaran (Cliffhanger)',
        example: 'Gantungkan nada suara di akhir kalimat untuk memancing pendengar membaca bukunya.'
      }
    ],
    scriptText: `Pencinta buku dongeng merapat sekarang juga! ↗ // 

Di segmen Bedah Buku Minggu Ini, / kita bakal mengupas tuntas novel petualangan berjudul: / "Rahasia Kompas Pinisi Tua". // 

Bayangkan, / seorang anak bernama Danu menemukan kompas kuno berkarat di loteng rumah kakeknya di Makassar. // 

Saat jarum kompas diputar berlawanan arah jarum jam... / wusss! / Tiba-tiba Danu terlempar ke abad ketujuh belas, / berdiri tepat di geladak kapal Pinisi yang sedang membelah badai samudra! // 

Gimana cara Danu pulang ke abad dua puluh satu? // 

Langsung pinjam bukunya di perpustakaan sekolah kalian ya! ↗`,
    sampleAudioDurationSec: 28
  },
  {
    id: 'radio-mitigasi-bencana',
    genre: 'radio',
    genreLabel: 'Teks Penyiar Radio',
    title: 'Suara Siaga Cilik: Tips Tanggap dan Waspada Gempa di Lingkungan Sekolah',
    description: 'Edukasi keselamatan publik mengenai langkah "Drop, Cover, and Hold On" saat terjadi guncangan gempa bumi di ruang kelas.',
    coverImage: '/src/assets/images/dubbing_penyiar_radio_1793761457976.jpg',
    badgeName: 'Penyiar Tanggap Siaga',
    badgeIcon: '🛡️',
    targetTone: 'Sigap, tegas namun menenangkan, tempo ritmis mudah diingat siswa',
    targetWpm: 122,
    intonationGuide: [
      {
        rule: 'Instruksi Singkat dan Jelas',
        example: 'Beri jeda jelas antara kata "Merunduk", "Lindungi Kepala", dan "Berpegangan".'
      }
    ],
    scriptText: `Perhatian seluruh sahabat siaga di mana pun berada! // 

Indonesia berada di jalur cincin api pasifik, / itu artinya kita harus selalu pintar dan tanggap menghadapi gempa bumi. // 

Ingat rumus tiga kata ajaib dari aku: / Merunduk! / Lindungi kepala! / Dan berpegangan erat! // 

Kalau guncangan terasa saat kalian di kelas, / segera masuk ke bawah meja yang kokoh. // 

Jangan panik berlari berebut pintu ya, / dan lindungi tengkuk leher kalian dengan tas ransel sekolah. // 

Pintar menghadapi alam / adalah tanda siswa yang cerdas dan tangguh! // 

Tetap waspada dan salam siaga! ↗`,
    sampleAudioDurationSec: 27
  },
  {
    id: 'radio-kisah-fabel-sore',
    genre: 'radio',
    genreLabel: 'Teks Penyiar Radio',
    title: 'Dongeng Pengantar Sore: Petuah Bijak Sang Kura-Kura Penjaga Hutan',
    description: 'Naskah penutup siaran sore hari yang membacakan dongeng reflektif tentang ketekunan dan kerendahan hati seekor kura-kura tua.',
    coverImage: '/src/assets/images/dubbing_penyiar_radio_1793761457976.jpg',
    badgeName: 'Pendongeng Suara Emas',
    badgeIcon: '🐢',
    targetTone: 'Teduh, syahdu, lembut mengayun (*soothing bedtime radio*), artikulasi bulat',
    targetWpm: 110,
    intonationGuide: [
      {
        rule: 'Penurunan Tempo Sore Hari',
        example: 'Gunakan nada suara yang rileks dan menenangkan hati setelah seharian beraktivitas.'
      }
    ],
    scriptText: `Matahari mulai condong ke ufuk barat, / langit mulai berganti jubah jingga keemasan. // 

Menemani kepulangan kalian dari sekolah sore ini, / ada seuntai pesan bijak dari rimba raya. // 

Kura-kura tua pernah berkata kepada kelinci muda: / "Kecepatan memang membawamu tiba lebih dahulu, / namun ketekunan dan kesabaran / yang akan memastikanmu menikmati setiap langkah di perjalanan." // 

Terima kasih sudah menemani ruang dengar sahabat cilik hari ini. // 

Selamat beristirahat bersama keluarga tercinta, / dan sampai jumpa esok pagi! ↘`,
    sampleAudioDurationSec: 28
  },

  // =========================================================================
  // 3. TEKS PIDATO PERSUASIF (PUBLIC SPEAKING / ORATOR CILIK) - 10 NASKAH
  // =========================================================================
  {
    id: 'pidato-hari-pahlawan',
    genre: 'pidato',
    genreLabel: 'Teks Pidato Persuasif',
    title: 'Pidato Hari Pahlawan: Menyalakan Api Perjuangan Siswa',
    description: 'Pidato upacara bendera memperingati Hari Pahlawan, mengajak teman-teman sebaya berjuang lewat ilmu pengetahuan dan budi pekerti luhur.',
    coverImage: '/src/assets/images/dubbing_pidato_podium_1793761458159.jpg',
    badgeName: 'Orator Ulung Nusantara',
    badgeIcon: '📢',
    targetTone: 'Lantang, berkharisma, penuh wibawa, jeda hening dramatis, tatapan tegas',
    targetWpm: 110,
    intonationGuide: [
      {
        rule: 'Jeda Dramatis (Dramatic Pause)',
        example: 'Beri jeda 1.5 detik setelah pertanyaan retoris agar hadirin meresapi maknanya.'
      },
      {
        rule: 'Volume Proyeksi Dada (Chest Voice)',
        example: 'Gunakan resonansi rongga dada agar suara terdengar kokoh dan membangkitkan semangat.'
      }
    ],
    scriptText: `Bapak dan Ibu Guru yang saya hormati, / serta rekan-rekan seperjuangan yang saya banggakan. // 

Hari ini, / di bawah kibaran sang saka Merah Putih, / kita tidak hanya mengenang masa lalu. // 

Kita berdiri di sini / untuk menyalakan kembali api perjuangan para pahlawan bangsa! // 

Dahulu, / para pahlawan berjuang dengan bambu runcing dan tumpahan darah. // 
Kini, / apakah senjata kita kawan-kawan? // 

Senjata kita / adalah buku, / pena, / teknologi, / dan kejujuran budi pekerti! // 

Mari kita buktikan / bahwa generasi penerus bangsa / tidak akan pernah gentar menggapai cita-cita luhur Indonesia Raya! // 

Merdeka! / Merdeka! / Merdeka! ↗`,
    sampleAudioDurationSec: 30
  },
  {
    id: 'pidato-perpisahan-siswa',
    genre: 'pidato',
    genreLabel: 'Teks Pidato Persuasif',
    title: 'Pidato Perpisahan Siswa: Untaian Terima Kasih Guru',
    description: 'Pidato perwakilan wisudawan sekolah dasar menyampaikan rasa terima kasih mendalam atas enam tahun bimbingan guru dan harapan masa depan.',
    coverImage: '/src/assets/images/dubbing_pidato_podium_1793761458159.jpg',
    badgeName: 'Bintang Orasi Perpisahan',
    badgeIcon: '🎓',
    targetTone: 'Haru, penuh takzim dan rasa hormat, artikulasi tulus, penutup optimis',
    targetWpm: 105,
    intonationGuide: [
      {
        rule: 'Nada Takzim dan Rendah Hati',
        example: 'Turunkan tempo pada kalimat ungkapan terima kasih kepada guru dan orang tua.'
      }
    ],
    scriptText: `Selamat pagi dan salam sejahtera bagi kita semua. // 

Enam tahun yang lalu, / kami melangkahkan kaki kecil kami ke sekolah ini / tanpa tahu membaca dan berhitung. // 

Bapak dan Ibu Guru dengan penuh kesabaran / menuntun jemari kami, / membimbing budi pekerti kami, / dan menghapus air mata keraguan kami. // 

Tidak ada untaian kata yang cukup / untuk membalas keikhlasan pengorbanan Bapak dan Ibu Guru sekalian. // 

Kini, / saat kami bersiap melangkah ke jenjang yang lebih tinggi, / doa dan teladan Bapak Ibu / akan senantiasa kami bawa sebagai lentera di dalam hati. // 

Terima kasih Guru tercinta. ↘`,
    sampleAudioDurationSec: 29
  },
  {
    id: 'pidato-bebas-sampah-plastik',
    genre: 'pidato',
    genreLabel: 'Teks Pidato Persuasif',
    title: 'Pidato Lingkungan: Indonesia Bebas Sampah Plastik dari Sekolah Kita',
    description: 'Orasi persuasif yang mengajak seluruh warga sekolah untuk berhenti menggunakan sedotan dan botol plastik sekali pakai.',
    coverImage: '/src/assets/images/dubbing_pidato_podium_1793761458159.jpg',
    badgeName: 'Orator Bumi Lestari',
    badgeIcon: '🌱',
    targetTone: 'Menggugah kesadaran, penuh keyakinan, artikulasi tegas menuntut aksi nyata',
    targetWpm: 112,
    intonationGuide: [
      {
        rule: 'Pertanyaan Retoris Penggugah',
        example: 'Ayunkan nada suara ke atas pada pertanyaan "Apakah kita akan berdiam diri?".'
      }
    ],
    scriptText: `Teman-teman dan Bapak Ibu Guru yang saya muliakan. // 

Setiap kali kita meminum air dari botol plastik sekali pakai / dan membuangnya begitu saja, / sampah itu akan bertahan ratusan tahun / mencemari tanah dan lautan kita! // 

Apakah kita akan berdiam diri / melihat penyu laut tersedak plastik / dan tanah subur kita teracuni limbah? // 

Tidak! / Perubahan besar tidak harus menunggu kita menjadi pejabat negara! // 

Mulai detik ini, / bawa botol minum sendiri dari rumah! / Tolak kantong kresek sekali pakai! // 

Selamatkan bumi kita, / dimulai dari kantin sekolah kita tercinta! // 
Salam lestari! ↗`,
    sampleAudioDurationSec: 29
  },
  {
    id: 'pidato-sopansantun-digital',
    genre: 'pidato',
    genreLabel: 'Teks Pidato Persuasif',
    title: 'Pidato Literasi Digital: Berbudi Pekerti dan Bijak Bermedia Sosial',
    description: 'Pidato persuasif mengenai pentingnya menjaga jemari agar tidak mengetik ujaran kebencian di internet dan menyebarkan berita bohong.',
    coverImage: '/src/assets/images/dubbing_pidato_podium_1793761458159.jpg',
    badgeName: 'Duta Etika Digital',
    badgeIcon: '📱',
    targetTone: 'Dewasa, bijaksana, artikulasi jernih, persuasif membimbing teman sebaya',
    targetWpm: 114,
    intonationGuide: [
      {
        rule: 'Penekanan Kata Nilai Moral',
        example: 'Beri jeda khidmat sebelum kata "saring sebelum sharing".'
      }
    ],
    scriptText: `Hadirin sekalian yang berbahagia. // 

Gawai pintar di genggaman tangan kita / adalah pisau bermata dua. // 

Ia bisa menjadi jendela ilmu yang menerangi masa depan, / atau menjadi jurang permusuhan / jika kita salah menggunakannya. // 

Kawan-kawan, / ingatlah pepatah leluhur: / "Mulutmu adalah harimaumu". / Dan di era digital sekarang: / "Jemarimu adalah cerminan kepribadianmu"! // 

Jangan pernah mengetik kata-kata ejekan di media sosial! / Saring setiap berita sebelum membagikannya kepada orang lain! // 

Jadilah generasi cerdas / yang menyebarkan kebaikan dan kedamaian di dunia maya! // 
Terima kasih. ↘`,
    sampleAudioDurationSec: 29
  },
  {
    id: 'pidato-gemar-membaca',
    genre: 'pidato',
    genreLabel: 'Teks Pidato Persuasif',
    title: 'Pidato Semangat Literasi: Membuka Cakrawala Dunia dengan Membaca Buku',
    description: 'Pidato peringatan Hari Buku Sedunia yang membakar semangat teman-teman sekolah untuk rajin berkunjung ke perpustakaan.',
    coverImage: '/src/assets/images/dubbing_pidato_podium_1793761458159.jpg',
    badgeName: 'Singa Literasi Nusantara',
    badgeIcon: '📖',
    targetTone: 'Penuh gelora semangat (*enthusiastic orator*), artikulasi tegas, penuh keyakinan',
    targetWpm: 115,
    intonationGuide: [
      {
        rule: 'Klimaks Suara Orator',
        example: 'Tingkatkan intensitas vokal secara bertahap menuju kalimat ajakan membaca.'
      }
    ],
    scriptText: `Sahabat-sahabatku yang hebat! // 

Seorang bijak pernah berkata: / "Jika kamu ingin melihat dunia, / jelajahilah samudra. / Namun jika kamu ingin dunia memahamimu, / bacalah buku!" // 

Buku bukanlah tumpukan kertas mati yang membosankan. // 
Buku adalah mesin waktu / yang sanggup membawa kita bercakap-cakap dengan para ilmuwan masa lalu / dan mengintip peradaban masa depan! // 

Bangsa yang besar / bukanlah bangsa yang memiliki gedung-gedung megah semata, / melainkan bangsa yang rakyatnya gemar membaca dan berpikir kritis! // 

Mari kita penuhi perpustakaan sekolah kita! / Bacalah satu halaman setiap hari, / dan raihlah mimpimu setinggi langit! // 
Merdeka belajar! ↗`,
    sampleAudioDurationSec: 30
  },
  {
    id: 'pidato-persatuan-toleransi',
    genre: 'pidato',
    genreLabel: 'Teks Pidato Persuasif',
    title: 'Pidato Kebangsaan: Indahnya Keberagaman dalam Bingkai Bhinneka Tunggal Ika',
    description: 'Pidato peringatan Hari Lahir Pancasila yang menegaskan persahabatan tanpa membeda-bedakan suku, agama, dan warna kulit di sekolah.',
    coverImage: '/src/assets/images/dubbing_pidato_podium_1793761458159.jpg',
    badgeName: 'Pembawa Damai Pancasila',
    badgeIcon: '🇮🇩',
    targetTone: 'Khidmat, agung, memancarkan kasih sayang kebangsaan yang tulus',
    targetWpm: 110,
    intonationGuide: [
      {
        rule: 'Penghayatan Sumpah Persatuan',
        example: 'Gunakan nada dalam dan penuh penghormatan saat melafalkan kata Bhinneka Tunggal Ika.'
      }
    ],
    scriptText: `Salam kebajikan bagi kita semua. // 

Lihatlah taman bunga di depan kelas kita. / Mengapa taman itu terlihat begitu indah dipandang mata? // 

Apakah karena hanya ada bunga mawar merah? / Tentu tidak! / Taman itu memesona / karena ada mawar, / ada melati putih, / ada anggrek ungu, / yang mekar bersama di bawah sinar mentari yang sama! // 

Begitu pula negeri kita tercinta, / Indonesia! // 
Kita berbeda suku, / berbeda logat bahasa, / berbeda keyakinan, / namun di dada kita mengalir darah yang satu: / Merah Putih! // 

Jangan biarkan perbedaan memecah persahabatan kita! / Bersatu kita teguh, / bercerai kita runtuh! ↗`,
    sampleAudioDurationSec: 30
  },
  {
    id: 'pidato-olahraga-kesehatan',
    genre: 'pidato',
    genreLabel: 'Teks Pidato Persuasif',
    title: 'Pidato Hari Olahraga: Jiwa Tangguh dan Sportivitas Pelajar Berprestasi',
    description: 'Orasi saat pembukaan Pekan Olahraga Sekolah yang menekankan kejujuran bertanding dan kesehatan fisik mental.',
    coverImage: '/src/assets/images/dubbing_pidato_podium_1793761458159.jpg',
    badgeName: 'Orator Sportif Cilik',
    badgeIcon: '🏃',
    targetTone: 'Bertenaga, dinamis, riang, menekankan nilai sportivitas di atas kemenangan semata',
    targetWpm: 118,
    intonationGuide: [
      {
        rule: 'Modulasi Semangat Olahraga',
        example: 'Tembakkan suara dengan proyeksi jelas pada kata "Sportivitas adalah harga mati!".'
      }
    ],
    scriptText: `Salam olahraga! ↗ // 

Kawan-kawan atlet dan peserta didik yang saya banggakan. // 

Di dalam tubuh yang sehat, / bersemayam jiwa yang kuat dan pikiran yang cemerlang! // 

Hari ini kita bertanding di lapangan hijau ini / bukan semata-mata untuk memperebutkan piala dan medali emas. // 

Kemenangan yang sejati / adalah ketika kita mampu bertanding dengan jujur, / menghormati lawan, / dan tetap tersenyum menjabat tangan sahabat kita saat peluit akhir dibunyikan! // 

Kalah dan menang adalah warna dalam pertandingan, / namun kejujuran dan sportivitas / adalah mahkota sejati seorang juara! // 

Mari bertanding dengan gembira! ↗`,
    sampleAudioDurationSec: 28
  },
  {
    id: 'pidato-kejujuran-integritas',
    genre: 'pidato',
    genreLabel: 'Teks Pidato Persuasif',
    title: 'Pidato Karakter: Kejujuran Adalah Mahkota Kemuliaan Pelajar',
    description: 'Pidato pemilihan ketua dewan penggalang yang mengajak seluruh siswa untuk tidak menyontek saat ujian sekolah.',
    coverImage: '/src/assets/images/dubbing_pidato_podium_1793761458159.jpg',
    badgeName: 'Ksatria Integritas Sekolah',
    badgeIcon: '💎',
    targetTone: 'Kokoh, berprinsip, menatap tajam penuh keberanian moral',
    targetWpm: 110,
    intonationGuide: [
      {
        rule: 'Ketegasan Nada Moral',
        example: 'Keluarkan vokal tegas tanpa ragu pada kalimat "Nilai seratus dari menyontek adalah kehampaan".'
      }
    ],
    scriptText: `Hadirin yang saya hormati. // 

Nilai seratus pada lembar kertas ujian / akan terasa sangat hampa / jika diraih dengan cara menyontek dan berbohong! // 

Apakah kita ingin menjadi generasi yang cerdas otaknya / namun rapuh kejujuran jiwanya? // 

Tentu tidak! // 
Kejujuran adalah keberanian untuk melakukan hal yang benar / bahkan ketika tidak ada satu orang pun yang melihat kita! // 

Lebih baik mendapatkan nilai tujuh puluh dengan cucuran keringat belajar sendiri, / daripada mendapatkan nilai sempurna / hasil merampas kejujuran nurani kita! // 

Jadikan kejujuran sebagai napas hidup kita kawan-kawan! // 
Terima kasih. ↘`,
    sampleAudioDurationSec: 29
  },
  {
    id: 'pidato-hemat-energi',
    genre: 'pidato',
    genreLabel: 'Teks Pidato Persuasif',
    title: 'Pidato Aksi Bumi: Menjaga Nyala Listrik dan Kelestarian Air Bersih',
    description: 'Orasi aksi Earth Hour di sekolah mengingatkan perilaku kecil mematikan kran air dan lampu kelas yang tidak terpakai.',
    coverImage: '/src/assets/images/dubbing_pidato_podium_1793761458159.jpg',
    badgeName: 'Penjaga Energi Masa Depan',
    badgeIcon: '💡',
    targetTone: 'Persuasif, menyentuh rasa tanggung jawab, artikulasi terarah',
    targetWpm: 112,
    intonationGuide: [
      {
        rule: 'Kontras Nada Masalah dan Solusi',
        example: 'Gunakan nada prihatin pada pemborosan air, lalu nada berdaya pada solusi mematikan keran.'
      }
    ],
    scriptText: `Bapak Ibu Guru serta kawan-kawan yang saya cintai. // 

Pernahkah kita menyadari / bahwa tetesan kran air yang bocor di kamar mandi sekolah kita / membuang puluhan liter air bersih setiap harinya? // 

Pernahkah kita berpikir / dari mana listrik yang menyalakan pendingin ruangan dan lampu kita berasal? // 

Sebagian besar energi kita / masih membakar batu bara yang mengotori langit bumi! // 

Jangan tunggu kutub es mencair! / Matikan lampu kelas saat siang hari terang benderang! / Tutup kran air rapat-rapat setelah mencuci tanganmu! // 

Langkah kecil kita hari ini / adalah nafas kehidupan bagi generasi mendatang! // 
Mari hemat energi sekarang juga! ↗`,
    sampleAudioDurationSec: 29
  },
  {
    id: 'pidato-hardiknas-pelajar',
    genre: 'pidato',
    genreLabel: 'Teks Pidato Persuasif',
    title: 'Pidato Hari Pendidikan Nasional: Meneladani Ajaran Luhur Ki Hajar Dewantara',
    description: 'Pidato khidmat mengenang semboyan Ing Ngarso Sung Tulodo, Ing Madyo Mangun Karso, Tut Wuri Handayani untuk pelajar modern.',
    coverImage: '/src/assets/images/dubbing_pidato_podium_1793761458159.jpg',
    badgeName: 'Pewaris Semangat Ki Hajar',
    badgeIcon: '📜',
    targetTone: 'Khidmat, patriotik, artikulasi berwibawa, penuh rasa hormat',
    targetWpm: 108,
    intonationGuide: [
      {
        rule: 'Ketukan Filosofis Bahasa',
        example: 'Ucapkan semboyan Ki Hajar Dewantara dengan jeda penuh dan lafal yang jernih.'
      }
    ],
    scriptText: `Selamat Hari Pendidikan Nasional kawan-kawan! // 

Bapak Pendidikan kita, / Ki Hajar Dewantara / telah mewariskan sebuah lentera abadi bagi bangsa kita: // 

Ing Ngarso Sung Tulodo: / di depan memberi teladan! // 
Ing Madyo Mangun Karso: / di tengah membangun semangat! // 
Tut Wuri Handayani: / di belakang memberi dorongan kekuatan! // 

Pendidikan bukanlah bejana kosong yang harus diisi hafalan semata, / melainkan obor api yang harus dinyalakan daya nalarnya! // 

Mari kita buktikan rasa syukur kita / dengan belajar tekun, / berkarya kreatif, / dan menjunjung tinggi budi pekerti kemanusiaan! // 

Maju terus pendidikan Indonesia! ↗`,
    sampleAudioDurationSec: 30
  },

  // =========================================================================
  // 4. TEKS PUISI (DEKLAMASI PUISI NUSANTARA) - 10 NASKAH
  // =========================================================================
  {
    id: 'puisi-tanah-airku',
    genre: 'puisi',
    genreLabel: 'Teks Deklamasi Puisi',
    title: 'Puisi: "Tanah Airku yang Menenun Fajar"',
    description: 'Puisi penghayatan bait demi bait yang melukiskan keelokan samudra, gunung berapi, dan persatuan ribuan pulau Nusantara.',
    coverImage: '/src/assets/images/dubbing_baca_puisi_1793761457765.jpg',
    badgeName: 'Penyair Jiwa Nusantara',
    badgeIcon: '📜',
    targetTone: 'Puitis, mendayu-dayu, tempo lambat, penjiwaan batin, dinamika hening dan puncak rasa',
    targetWpm: 95,
    intonationGuide: [
      {
        rule: 'Resonansi Emosi (Pathos)',
        example: 'Rasakan makna kata "menenun fajar" dalam hati sebelum mengucapkan bait tersebut.'
      },
      {
        rule: 'Tempo Lambat (Slow Cadence)',
        example: 'Beri ruang antar kata agar pendengar dapat membayangkan keindahan lanskap puisi.'
      }
    ],
    scriptText: `Tanah airku... // 
Engkau adalah zamrud / yang terbentang di lingkar khatulistiwa. // 

Dari debur ombak Banda / hingga kabut pinus di bukit Sumatra, / 
ribuan pulau saling berpegangan erat / bagai untaian mutiara di dada pertiwi. // 

Di sawah-sawahmu / para petani menenun fajar, / 
di laut-lautmu / nelayan membelah misteri malam. // 

Wahai negeriku yang elok, / 
sepanjang hayat dikandung badan, / 
aku berjanji / akan menjagamu dengan segenap cinta dan baktiku. ↘`,
    sampleAudioDurationSec: 28
  },
  {
    id: 'puisi-surat-sahabat-pohon',
    genre: 'puisi',
    genreLabel: 'Teks Deklamasi Puisi',
    title: 'Puisi: "Surat Sunyi dari Sahabat Pohon Meranti"',
    description: 'Puisi bertema lingkungan hidup dari sudut pandang sebatang pohon tua di hutan belantara yang menyaksikan perubahan bumi.',
    coverImage: '/src/assets/images/dubbing_baca_puisi_1793761457765.jpg',
    badgeName: 'Deklamator Puisi Lingkungan',
    badgeIcon: '🌿',
    targetTone: 'Haru, reflektif, menyentuh kalbu, pergantian nada bisik dan seruan nurani',
    targetWpm: 90,
    intonationGuide: [
      {
        rule: 'Teknik Bisik Terpancar (Stage Whisper)',
        example: 'Gunakan vokal desau yang lembut namun tetap terdengar jelas di telinga pendengar.'
      }
    ],
    scriptText: `Aku adalah Meranti tua... // 
Akar-akarku merangkul bumi / ratusan warsa yang silam. // 

Dahanku menaungi burung-burung berkicau, / 
daunku menyaring udara / agar nafasmu tetap sejuk dan murni. // 

Jangan tebang aku dengan serakah, / wahai anak-anak zaman... // 
Sebab ketika dahan terakhirku tumbang, / 
bumi akan kehilangan pelindung sejatinya. // 

Dengarkanlah rintih angin di pucuk kanopiku... / 
Rawatlah daku, / sebagaimana daku merawat kehidupanmu. ↘`,
    sampleAudioDurationSec: 27
  },
  {
    id: 'puisi-pelita-tangan-guru',
    genre: 'puisi',
    genreLabel: 'Teks Deklamasi Puisi',
    title: 'Puisi: "Di Bawah Cahaya Pelita Guruku"',
    description: 'Puisi takzim yang melukiskan ketulusan hati guru yang tak pernah lelah menghapus kebodohan dengan kapur putih dan kasih sayang.',
    coverImage: '/src/assets/images/dubbing_baca_puisi_1793761457765.jpg',
    badgeName: 'Deklamator Kidung Bakti',
    badgeIcon: '🕯️',
    targetTone: 'Sangat lembut, penuh rasa haru dan takzim, tempo perlahan dan meresap',
    targetWpm: 88,
    intonationGuide: [
      {
        rule: 'Vokal Syahdu',
        example: 'Lafalkan kata "kapur tulis" dan "pelita sunyi" dengan kelembutan suara mendalam.'
      }
    ],
    scriptText: `Di papan tulis hitam yang sunyi... // 
Jemarimu menorehkan garis-garis cahaya. // 

Debu kapur memutih di rambutmu yang lelah, / 
namun senyummu / tak pernah pudar menyapa pagi kami. // 

Engkau mengajarkanku mengeja nama negeriku, / 
engkau menuntunku menghitung bintang di angkasa ilmu. // 

Wahai guruku yang mulia... / 
Engkau adalah pelita / yang rela membakar dirimu sendiri / 
demi menerangi jalan setapak / masa depan kami. // 

Terima kasih guruku... ↘`,
    sampleAudioDurationSec: 28
  },
  {
    id: 'puisi-senja-di-pantai-pantura',
    genre: 'puisi',
    genreLabel: 'Teks Deklamasi Puisi',
    title: 'Puisi: "Bisik Camar dan Senja di Pantai Utara"',
    description: 'Puisi deskriptif tentang kehidupan anak-anak pesisir yang menunggu perahu kayu ayahnya pulang melaut di saat senja memerah.',
    coverImage: '/src/assets/images/dubbing_baca_puisi_1793761457765.jpg',
    badgeName: 'Penyair Senja Pesisir',
    badgeIcon: '🌅',
    targetTone: 'Melankolis, berirama ombak yang tenang, artikulasi mengayun syahdu',
    targetWpm: 92,
    intonationGuide: [
      {
        rule: 'Ritme Debur Ombak',
        example: 'Atur tarikan napas seirama gelombang pantai yang datang dan surut.'
      }
    ],
    scriptText: `Lembayung merekah di batas cakrawala... // 
Buih ombak mengecup pasir putih yang hangat. // 

Burung camar terbang meliuk-liuk rendah, / 
menatap layar perahu ayah / yang perlahan mendekati pantai. // 

Angin asin membelai rambutku, / 
membawa kidung syukur seorang anak nelayan. // 

Di dalam jaring-jaring basah itu, / 
ada peluh perjuangan ayah / 
demi sepiring nasi hangat / dan buku-buku sekolahku esok pagi. // 

Lautan luas... / terima kasih atas rezeki hari ini. ↘`,
    sampleAudioDurationSec: 29
  },
  {
    id: 'puisi-bunda-penjaga-mimpi',
    genre: 'puisi',
    genreLabel: 'Teks Deklamasi Puisi',
    title: 'Puisi: "Doa Bunda yang Mengalir di Setiap Nafasku"',
    description: 'Puisi kasih sayang anak kepada ibunda tercinta yang selalu terjaga di sepertiga malam untuk mendoakan kebaikan anaknya.',
    coverImage: '/src/assets/images/dubbing_baca_puisi_1793761457765.jpg',
    badgeName: 'Penyair Kasih Ibu',
    badgeIcon: '💖',
    targetTone: 'Intim, penuh haru, getaran vokal lembut dan tulus dari lubuk sanubari',
    targetWpm: 85,
    intonationGuide: [
      {
        rule: 'Kejujuran Emosi Jiwa',
        example: 'Keluarkan getaran suara haru saat melafalkan kata "tangan lembut bunda".'
      }
    ],
    scriptText: `Ibu... // 
Di setiap hening malam / saat mataku terlelap dalam mimpi indah, / 
aku tahu... / engkau terjaga menengadahkan kedua telapak tanganmu. // 

Air matamu jatuh di atas sajadah usang, / 
menyebut namaku dalam doa-doa rahasiamu kepada Sang Pencipta. // 

Tanganmu yang kasar karena mencuci dan memasak / 
adalah tangan terlembut / yang pernah mengusap keningku saat demam. // 

Bunda... / 
Bahkan jika seluruh samudra dijadikan tinta emas, / 
takkan pernah cukup / melukiskan luasnya samudra kasihmu. ↘`,
    sampleAudioDurationSec: 30
  },
  {
    id: 'puisi-layang-layang-cita',
    genre: 'puisi',
    genreLabel: 'Teks Deklamasi Puisi',
    title: 'Puisi: "Menerbangkan Layang-Layang Cita ke Angkasa"',
    description: 'Puisi riang penuh metafora tentang impian anak-anak yang diikatkan pada benang layang-layang yang menari di angkasa biru.',
    coverImage: '/src/assets/images/dubbing_baca_puisi_1793761457765.jpg',
    badgeName: 'Deklamator Angkasa Biru',
    badgeIcon: '🪁',
    targetTone: 'Ceria, bergelora, tempo bertahap naik dari lembut menuju optimisme tinggi',
    targetWpm: 100,
    intonationGuide: [
      {
        rule: 'Modulasi Semangat Membumbung',
        example: 'Naikkan volume suara saat layang-layang digambarkan menembus awan putih.'
      }
    ],
    scriptText: `Kutautkan benang pada sebilah bambu lentur... // 
Kurekatkan kertas warna-warni berlukiskan bintang. // 

Lari! / Teruslah berlari melawan hembusan angin padang! // 
Lihatlah! / Layang-layangku kini membubung tinggi, / 
menari riang di pelataran langit biru cerah! // 

Di sana, / di antara gumpalan awan putih, / 
aku titipkan cita-citaku: / 
menjadi penjelajah dunia, / penemu obat mujarab, / dan pembangun jembatan peradaban! // 

Terbanglah tinggi layang-layangku... / 
Takkan kubiarkan badai memutuskan benang mimpiku! ↗`,
    sampleAudioDurationSec: 28
  },
  {
    id: 'puisi-hujan-di-desa-lestari',
    genre: 'puisi',
    genreLabel: 'Teks Deklamasi Puisi',
    title: 'Puisi: "Rintik Hujan di Pucuk Daun Pisang"',
    description: 'Puisi sensorial tentang aroma tanah basah sehabis hujan dan suara katak bernyanyi di pematang sawah yang asri.',
    coverImage: '/src/assets/images/dubbing_baca_puisi_1793761457765.jpg',
    badgeName: 'Penyair Simfoni Alam',
    badgeIcon: '🌧️',
    targetTone: 'Tenang, menyejukkan, artikulasi onomatope tiruan bunyi hujan yang ritmis',
    targetWpm: 90,
    intonationGuide: [
      {
        rule: 'Onomatope Nada Bunyi Air',
        example: 'Ucapkan kata "tik tik tik" dengan aksen artikulasi jernih menyerupai rintik air.'
      }
    ],
    scriptText: `Tik... / tik... / tik... // 
Rintik hujan bernyanyi di pucuk daun pisang. // 

Aroma tanah basah / membubung memenuhi rongga dada, / 
menyegarkan dahaga bumi yang seharian dipeluk terik mentari. // 

Di pematang sawah yang hijau membentang, / 
kawanan katak bersahut-sahutan melantunkan simfoni syukur. // 

Air adalah berkah, / hujan adalah rahmat. // 
Membasahi benih-benih padi / yang kelak menguning / mengenyangkan jutaan insan pertiwi. // 

Betapa damai desaku... ↘`,
    sampleAudioDurationSec: 27
  },
  {
    id: 'puisi-penari-topeng-cilik',
    genre: 'puisi',
    genreLabel: 'Teks Deklamasi Puisi',
    title: 'Puisi: "Langkah Gemulai Sang Penari Topeng Cilik"',
    description: 'Puisi apresiasi seni tari tradisional Cirebon yang menggambarkan penghayatan seorang anak saat mengenakan topeng kayu leluhur.',
    coverImage: '/src/assets/images/dubbing_baca_puisi_1793761457765.jpg',
    badgeName: 'Deklamator Tari Tradisi',
    badgeIcon: '🎭',
    targetTone: 'Eksotis, dinamis, ritme kata menyerupai irama kendang gamelan',
    targetWpm: 96,
    intonationGuide: [
      {
        rule: 'Ritme Pukulan Kendang',
        example: 'Gunakan aksentuasi tegas di kata "Lentik jemarinya" dan "Derap kakinya".'
      }
    ],
    scriptText: `Kala topeng kayu itu terpasang di wajah mungilnya... // 
Dunia di sekelilingnya seketika sunyi. // 

Tung! / Tak! / Gendang gamelan mulai bertalu. // 
Lentik jemarinya mengibaskan selendang sutra merah jingga, / 
langkah kakinya menghentak bumi / dengan ketukan wibawa leluhur. // 

Ia bukan lagi sekadar bocah sekolah biasa, / 
ia adalah penjaga sukma tradisi / yang menari di antara mitos dan kenyataan. // 

Melalui gerak tubuhnya, / 
kebudayaan nenek moyang / tetap hidup dan bernafas / menolak lekang oleh zaman. ↘`,
    sampleAudioDurationSec: 28
  },
  {
    id: 'puisi-pesan-dari-sabang-merauke',
    genre: 'puisi',
    genreLabel: 'Teks Deklamasi Puisi',
    title: 'Puisi: "Kidung Persaudaraan dari Ujung Fajar Sabang ke Merauke"',
    description: 'Puisi epik kebangsaan yang mengaitkan jabat tangan anak-anak dari barat Pulau Weh hingga ufuk timur Papua.',
    coverImage: '/src/assets/images/dubbing_baca_puisi_1793761457765.jpg',
    badgeName: 'Penyair Sabang Merauke',
    badgeIcon: '🤝',
    targetTone: 'Megah, menggelora, menyatukan, artikulasi berdentang seperti genta',
    targetWpm: 100,
    intonationGuide: [
      {
        rule: 'Intonasi Rentangan Jarak Geografis',
        example: 'Ucapkan "dari ujung barat Sabang" lalu pandang jauh ke "ufuk timur Merauke".'
      }
    ],
    scriptText: `Dari menara suar di ujung barat Sabang / 
hingga tugu perbatasan di ufuk fajar Merauke... // 

Kita menghirup udara dari langit yang sama. // 
Kita meminum air dari tanah air yang satu. // 

Biar samudra memisahkan daratan kita, / 
biar gunung-gunung menjulang di antara desa kita, / 
namun ketika satu anak bangsa terluka di timur, / 
seluruh saudara di barat ikut merasakan pedihnya. // 

Inilah kita! / Rantai persaudaraan yang takkan pernah putus! // 
Anak-anak Indonesia / bergandengan tangan menyongsong kejayaan pertiwi! ↗`,
    sampleAudioDurationSec: 29
  },
  {
    id: 'puisi-langit-malam-bintang',
    genre: 'puisi',
    genreLabel: 'Teks Deklamasi Puisi',
    title: 'Puisi: "Membaca Sandi Bintang di Langit Sunyi"',
    description: 'Puisi perenungan malam tentang luasnya jagat raya ciptaan Tuhan dan kerendahan hati manusia di tengah keagungan semesta.',
    coverImage: '/src/assets/images/dubbing_baca_puisi_1793761457765.jpg',
    badgeName: 'Penyair Samudra Kosmik',
    badgeIcon: '✨',
    targetTone: 'Misterius, tenang, penuh takjub (*awe-inspiring*), tempo sangat terjaga',
    targetWpm: 88,
    intonationGuide: [
      {
        rule: 'Keheningan Bernapas (Resting Pause)',
        example: 'Beri jeda hening setelah kata "berkelip di kelam malam" agar terasa luasnya antariksa.'
      }
    ],
    scriptText: `Kutatap kubah langit malam tanpa batas... // 
Milyaran permata perak / berkelip di hamparan beludru hitam. // 

Di hadapan keagungan semesta ini, / 
betapa kecilnya diri kita... / 
bagai sebutir debu di tepian pantai samudra waktu. // 

Namun di dalam dada kecil ini, / 
Tuhan meniupkan seberkas cahaya akal budi / 
agar kita mampu berpikir, / 
mampu mengasihi, / 
dan mampu menjaga keindahan bumi titipan-Nya. // 

Bintang-bintang di langit... / 
berkediplah terus / menemani mimpi suciku malam ini. ↘`,
    sampleAudioDurationSec: 29
  }
];
