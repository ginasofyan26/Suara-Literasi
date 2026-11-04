import { Book, DiagnosticQuestion } from '../types';

export const BOOKS_DATA: Book[] = [
  // =========================================================================
  // LEVEL 1: FONIK & KATA PENDEK (USIA 4–6 TAHUN) - MINIMAL 10 BUKU
  // =========================================================================
  {
    id: 'kucing-oren',
    title: 'Kucing Oren di Kebun Bunga',
    level: 1,
    levelTitle: 'Level 1: Fonik & Kata Pendek',
    ageRecommendation: 'Usia 4–6 Tahun',
    synopsis: 'Mimi si kucing oren melompat riang mengejar kupu-kupu warna-warni di taman mawar yang harum.',
    coverImage: '/src/assets/images/book_kucing_oren_1793758427611.jpg',
    theme: 'Hewan & Alam Sekitar',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 3,
    wordCount: 28,
    badgeAward: {
      name: 'Bintang Kucing Lincah',
      icon: '🐱',
      description: 'Berhasil membaca kata pendek dengan artikulasi ceria!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Ini Mimi. Mimi kucing berbulu oren.',
        illustrationUrl: '/src/assets/images/book_kucing_oren_1793758427611.jpg',
        targetIntonationTip: 'Ucapkan dengan riang dan perkenalkan si kucing Mimi dengan suara ramah!',
        focusWords: ['Mimi', 'kucing', 'oren'],
        audioGuideTiming: [
          { word: 'Ini', startMs: 0, endMs: 400 },
          { word: 'Mimi.', startMs: 450, endMs: 850 },
          { word: 'Mimi', startMs: 1000, endMs: 1400 },
          { word: 'kucing', startMs: 1450, endMs: 1900 },
          { word: 'berbulu', startMs: 1950, endMs: 2400 },
          { word: 'oren.', startMs: 2450, endMs: 2950 }
        ]
      },
      {
        pageNumber: 2,
        text: 'Mimi suka kebun bunga. Ada bunga merah dan kuning!',
        illustrationUrl: '/src/assets/images/book_kucing_oren_1793758427611.jpg',
        targetIntonationTip: 'Nada naik sedikit di kata "kuning!" untuk menunjukkan rasa kagum!',
        focusWords: ['kebun', 'bunga', 'merah', 'kuning'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Lihat kupu-kupu biru! Meong, Mimi ingin bermain bersama.',
        illustrationUrl: '/src/assets/images/book_kucing_oren_1793758427611.jpg',
        targetIntonationTip: 'Tirukan suara "Meong!" dengan imut dan menggemaskan ya!',
        focusWords: ['kupu-kupu', 'biru', 'Meong', 'bermain'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'petualangan-bintang',
    title: 'Petualangan Bintang Kecil',
    level: 1,
    levelTitle: 'Level 1: Fonik & Kata Pendek',
    ageRecommendation: 'Usia 4–6 Tahun',
    synopsis: 'Bintang kuning yang ramah datang ke jendela kamar Alif untuk membisikkan mimpi indah sebelum tidur.',
    coverImage: '/src/assets/images/book_petualangan_bintang_1793758427926.jpg',
    theme: 'Imajinasi & Waktu Tidur',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 3,
    wordCount: 32,
    badgeAward: {
      name: 'Penjaga Bintang Malam',
      icon: '⭐',
      description: 'Luar biasa! Nada lembut sebelum tidurmu sangat menenangkan.'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Malam tiba, langit gelap. Bintang kecil tersenyum terang.',
        illustrationUrl: '/src/assets/images/book_petualangan_bintang_1793758427926.jpg',
        targetIntonationTip: 'Gunakan nada yang lembut dan tenang, seperti membacakan dongeng pengantar tidur.',
        focusWords: ['malam', 'langit', 'bintang', 'terang'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Bintang mengetuk kaca jendela. "Hai kawan, jangan takut gelap!"',
        illustrationUrl: '/src/assets/images/book_petualangan_bintang_1793758427926.jpg',
        targetIntonationTip: 'Saat bagian bicara bintang, gunakan nada berbisik ramah dan hangat.',
        focusWords: ['jendela', 'kawan', 'takut', 'gelap'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Alif tersenyum dan tidur lelap. Selamat malam, bintang manis!',
        illustrationUrl: '/src/assets/images/book_petualangan_bintang_1793758427926.jpg',
        targetIntonationTip: 'Tutup dengan ucapan "Selamat malam" yang penuh kehangatan dan rasa syukur.',
        focusWords: ['tersenyum', 'tidur', 'selamat', 'malam'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'bebek-kuning',
    title: 'Bebek Kuning Berenang Ceria',
    level: 1,
    levelTitle: 'Level 1: Fonik & Kata Pendek',
    ageRecommendation: 'Usia 4–6 Tahun',
    synopsis: 'Didi si anak bebek kuning belajar berenang di kolam teratai yang sejuk bersama induknya.',
    coverImage: '/src/assets/images/book_bebek_berenang_1793759382127.jpg',
    theme: 'Hewan & Keluarga',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 3,
    wordCount: 30,
    badgeAward: {
      name: 'Sahabat Bebek Ceria',
      icon: '🦆',
      description: 'Hebat melafalkan bunyi kwek-kwek dengan nada riang!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Ini Didi. Didi bebek kecil berbulu kuning lembut.',
        illustrationUrl: '/src/assets/images/book_bebek_berenang_1793759382127.jpg',
        targetIntonationTip: 'Gunakan nada riang saat mengenalkan si bebek Didi!',
        focusWords: ['Didi', 'bebek', 'kuning', 'lembut'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Kwek kwek kwek! Didi melompat ke air kolam yang jernih.',
        illustrationUrl: '/src/assets/images/book_bebek_berenang_1793759382127.jpg',
        targetIntonationTip: 'Serukan "Kwek kwek kwek" dengan suara ceria dan penuh semangat!',
        focusWords: ['kwek', 'melompat', 'kolam', 'jernih'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Kaki Didi mendayung cepat. Hore, Didi pandai berenang!',
        illustrationUrl: '/src/assets/images/book_bebek_berenang_1793759382127.jpg',
        targetIntonationTip: 'Sorakkan kata "Hore!" dengan nada gembira dan bangga!',
        focusWords: ['mendayung', 'cepat', 'hore', 'pandai'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'kelinci-wortel',
    title: 'Kelinci Putih dan Wortel Manis',
    level: 1,
    levelTitle: 'Level 1: Fonik & Kata Pendek',
    ageRecommendation: 'Usia 4–6 Tahun',
    synopsis: 'Cici si kelinci putih melompat ke kebun untuk mencari wortel oranye kesukaannya.',
    coverImage: '/src/assets/images/book_kelinci_wortel_1793759382090.jpg',
    theme: 'Kebiasaan Sehat & Sayuran',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 3,
    wordCount: 31,
    badgeAward: {
      name: 'Penyuka Wortel Sehat',
      icon: '🥕',
      description: 'Luar biasa membaca kata fonik makanan sehat!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Lompat, lompat! Cici kelinci putih punya telinga panjang.',
        illustrationUrl: '/src/assets/images/book_kelinci_wortel_1793759382090.jpg',
        targetIntonationTip: 'Ucapkan kata "Lompat, lompat" dengan ritme memantul yang lincah!',
        focusWords: ['lompat', 'kelinci', 'telinga', 'panjang'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Cici melihat wortel oranye. Krauk krauk, wortel terasa manis!',
        illustrationUrl: '/src/assets/images/book_kelinci_wortel_1793759382090.jpg',
        targetIntonationTip: 'Tirukan bunyi kunyah "Krauk krauk" dengan nada renyah dan gembira!',
        focusWords: ['wortel', 'oranye', 'krauk', 'manis'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Perut Cici kenyang. Cici tersenyum manis di padang rumput.',
        illustrationUrl: '/src/assets/images/book_kelinci_wortel_1793759382090.jpg',
        targetIntonationTip: 'Tutup dengan nada puas dan rasa senang setelah makan sayur sehat.',
        focusWords: ['kenyang', 'tersenyum', 'padang', 'rumput'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'balon-merah',
    title: 'Balon Merah Terbang Tinggi',
    level: 1,
    levelTitle: 'Level 1: Fonik & Kata Pendek',
    ageRecommendation: 'Usia 4–6 Tahun',
    synopsis: 'Balon merah ceria terbang ditiup angin sepoi-sepoi melewati pohon apel dan awan putih.',
    coverImage: '/src/assets/images/book_balon_merah_1793759382672.jpg',
    theme: 'Imajinasi & Warna',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 3,
    wordCount: 29,
    badgeAward: {
      name: 'Penerbang Balon Impian',
      icon: '🎈',
      description: 'Nada bicaramu melayang tinggi seringan balon udara!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Hana punya balon merah. Bentuknya bulat dan ringan.',
        illustrationUrl: '/src/assets/images/book_balon_merah_1793759382672.jpg',
        targetIntonationTip: 'Perkenalkan balon Hana dengan suara manis dan ramah.',
        focusWords: ['balon', 'merah', 'bulat', 'ringan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Wusss! Angin bertiup lembut. Balon terbang ke langit biru.',
        illustrationUrl: '/src/assets/images/book_balon_merah_1793759382672.jpg',
        targetIntonationTip: 'Keluarkan desau "Wusss!" dengan tiupan napas pelan.',
        focusWords: ['angin', 'bertiup', 'langit', 'terbang'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Dadah balon merah! Balon menari indah dekat awan putih.',
        illustrationUrl: '/src/assets/images/book_balon_merah_1793759382672.jpg',
        targetIntonationTip: 'Ucapkan salam "Dadah balon merah!" dengan senyuman cerah.',
        focusWords: ['dadah', 'menari', 'indah', 'awan'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'burung-pipit',
    title: 'Kicau Pagi Burung Pipit',
    level: 1,
    levelTitle: 'Level 1: Fonik & Kata Pendek',
    ageRecommendation: 'Usia 4–6 Tahun',
    synopsis: 'Pipi si burung pipit mungil menyapa bunga sepatu merah dengan nyanyian pagi yang merdu.',
    coverImage: '/src/assets/images/book_burung_pipit_1793759382041.jpg',
    theme: 'Musik Alam & Hewan',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 3,
    wordCount: 30,
    badgeAward: {
      name: 'Penyanyi Pagi Cilik',
      icon: '🐦',
      description: 'Hebat menirukan kicauan burung dengan nada tinggi merdu!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Pagi cerah sudah datang. Burung pipit hinggap di dahan.',
        illustrationUrl: '/src/assets/images/book_burung_pipit_1793759382041.jpg',
        targetIntonationTip: 'Gunakan nada bersemangat menyambut fajar pagi!',
        focusWords: ['pagi', 'cerah', 'pipit', 'dahan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Cicit cuit cicit cuit! Suara Pipi terdengar sangat merdu.',
        illustrationUrl: '/src/assets/images/book_burung_pipit_1793759382041.jpg',
        targetIntonationTip: 'Tirukan "Cicit cuit" dengan nada tinggi dan lincah!',
        focusWords: ['cicit', 'cuit', 'suara', 'merdu'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Bunga merah mekar tersenyum. Selamat pagi alam yang indah!',
        illustrationUrl: '/src/assets/images/book_burung_pipit_1793759382041.jpg',
        targetIntonationTip: 'Sampaikan ucapan "Selamat pagi" dengan penuh keceriaan.',
        focusWords: ['bunga', 'mekar', 'selamat', 'alam'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'sepatu-baru',
    title: 'Sepatu Biru Baru Riko',
    level: 1,
    levelTitle: 'Level 1: Fonik & Kata Pendek',
    ageRecommendation: 'Usia 4–6 Tahun',
    synopsis: 'Riko sangat bangga memakai sepatu biru barunya untuk berjalan ke sekolah taman kanak-kanak.',
    coverImage: '/src/assets/images/book_balon_merah_1793759382672.jpg',
    theme: 'Kemandirian & Sekolah',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 3,
    wordCount: 32,
    badgeAward: {
      name: 'Anak Mandiri Hebat',
      icon: '👟',
      description: 'Luar biasa membaca cerita kemandirian dengan percaya diri!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Riko punya sepatu baru. Warnanya biru terang dan bersih.',
        illustrationUrl: '/src/assets/images/book_balon_merah_1793759382672.jpg',
        targetIntonationTip: 'Tunjukkan rasa bangga dan gembira saat membaca sepatu baru Riko!',
        focusWords: ['sepatu', 'baru', 'biru', 'bersih'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Tap tap tap! Riko melangkah tegap di jalan beraspal.',
        illustrationUrl: '/src/assets/images/book_balon_merah_1793759382672.jpg',
        targetIntonationTip: 'Bacakan ketukan "Tap tap tap" dengan mantap dan tegas.',
        focusWords: ['tap', 'melangkah', 'tegap', 'jalan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Riko siap belajar di sekolah. Ayo belajar sambil bergembira!',
        illustrationUrl: '/src/assets/images/book_balon_merah_1793759382672.jpg',
        targetIntonationTip: 'Ajak kawan-kawan dengan seruan penuh antusiasme!',
        focusWords: ['sekolah', 'belajar', 'bergembira', 'siap'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'apel-merah',
    title: 'Apel Merah Manis di Meja',
    level: 1,
    levelTitle: 'Level 1: Fonik & Kata Pendek',
    ageRecommendation: 'Usia 4–6 Tahun',
    synopsis: 'Ibu memetik buah apel segar dari pohon di kebun belakang untuk bekal makan sehat.',
    coverImage: '/src/assets/images/book_kucing_oren_1793758427611.jpg',
    theme: 'Buah Sehat & Keluarga',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 3,
    wordCount: 29,
    badgeAward: {
      name: 'Bintang Buah Segar',
      icon: '🍎',
      description: 'Artikulasi fonik nama buah dilafalkan dengan sempurna!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Ada buah apel di piring. Kulit apel merah mengkilap.',
        illustrationUrl: '/src/assets/images/book_kucing_oren_1793758427611.jpg',
        targetIntonationTip: 'Ucapkan dengan nada rasa ingin tahu dan mengagumi buah segar.',
        focusWords: ['buah', 'apel', 'piring', 'merah'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Ibu memotong apel dengan rapi. Nyam nyam, rasanya manis sekali!',
        illustrationUrl: '/src/assets/images/book_kucing_oren_1793758427611.jpg',
        targetIntonationTip: 'Ucapkan "Nyam nyam" dengan nada enak dan berselera makan!',
        focusWords: ['memotong', 'rapi', 'manis', 'sekali'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Makan buah bikin tubuh kuat. Terima kasih Ibu tercinta!',
        illustrationUrl: '/src/assets/images/book_kucing_oren_1793758427611.jpg',
        targetIntonationTip: 'Ucapkan rasa terima kasih kepada Ibu dengan penuh kasih sayang.',
        focusWords: ['tubuh', 'kuat', 'terima kasih', 'ibu'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'ikan-koki',
    title: 'Ikan Koki Berenang Lincah',
    level: 1,
    levelTitle: 'Level 1: Fonik & Kata Pendek',
    ageRecommendation: 'Usia 4–6 Tahun',
    synopsis: 'Kiko si ikan koki dengan ekor mengembang indah menari di dalam akuarium kaca.',
    coverImage: '/src/assets/images/book_bebek_berenang_1793759382127.jpg',
    theme: 'Dunia Air & Hewan',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 3,
    wordCount: 30,
    badgeAward: {
      name: 'Penyelam Koki Cilik',
      icon: '🐠',
      description: 'Hebat melafalkan kata fonik air dengan suara gemericik ceria!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Kiko ikan koki warna jingga. Ekor Kiko lebar seperti selendang.',
        illustrationUrl: '/src/assets/images/book_bebek_berenang_1793759382127.jpg',
        targetIntonationTip: 'Gunakan nada mendongeng yang lembut dan imajinatif.',
        focusWords: ['ikan', 'koki', 'jingga', 'selendang'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Kecipak kecipuk! Kiko berenang lincah di sela batu lumut.',
        illustrationUrl: '/src/assets/images/book_bebek_berenang_1793759382127.jpg',
        targetIntonationTip: 'Tirukan gemercik "Kecipak kecipuk" dengan nada beriak ceria.',
        focusWords: ['kecipak', 'lincah', 'batu', 'lumut'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Gelembung udara naik ke atas. Kiko menari riang sepanjang hari.',
        illustrationUrl: '/src/assets/images/book_bebek_berenang_1793759382127.jpg',
        targetIntonationTip: 'Akhiri dengan nada ceria penuh kegembiraan.',
        focusWords: ['gelembung', 'udara', 'menari', 'riang'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'matahari-pagi',
    title: 'Matahari Terbit Hangat Tersenyum',
    level: 1,
    levelTitle: 'Level 1: Fonik & Kata Pendek',
    ageRecommendation: 'Usia 4–6 Tahun',
    synopsis: 'Matahari bersinar keemasan membangunkan ayam jago, bunga melati, dan anak-anak yang rajin.',
    coverImage: '/src/assets/images/book_petualangan_bintang_1793758427926.jpg',
    theme: 'Alam & Semangat Pagi',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 3,
    wordCount: 31,
    badgeAward: {
      name: 'Penyambut Mentari Pagi',
      icon: '☀️',
      description: 'Luar biasa membawakan intonasi bangun pagi penuh energi!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Matahari terbit di timur. Cahayanya hangat menyinari bumi.',
        illustrationUrl: '/src/assets/images/book_petualangan_bintang_1793758427926.jpg',
        targetIntonationTip: 'Gunakan nada hangat dan memancarkan semangat pagi.',
        focusWords: ['matahari', 'terbit', 'hangat', 'bumi'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Kukuruyuk! Ayam jago berkokok nyaring di atas pagar kayu.',
        illustrationUrl: '/src/assets/images/book_petualangan_bintang_1793758427926.jpg',
        targetIntonationTip: 'Serukan "Kukuruyuk!" dengan suara lantang dan bertenaga!',
        focusWords: ['kukuruyuk', 'ayam', 'berkokok', 'nyaring'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Ayo bangun anak pintar! Hari baru penuh berkah menantimu.',
        illustrationUrl: '/src/assets/images/book_petualangan_bintang_1793758427926.jpg',
        targetIntonationTip: 'Ajak dengan nada gembira dan penuh optimisme menyambut hari.',
        focusWords: ['bangun', 'pintar', 'berkah', 'menanti'],
        audioGuideTiming: []
      }
    ]
  },

  // =========================================================================
  // LEVEL 2: KALIMAT SEDERHANA & DIALOG (USIA 6–8 TAHUN) - MINIMAL 10 BUKU
  // =========================================================================
  {
    id: 'kancil-sungai',
    title: 'Kancil Pintar di Tepi Sungai',
    level: 2,
    levelTitle: 'Level 2: Kalimat Sederhana & Dialog',
    ageRecommendation: 'Usia 6–8 Tahun',
    synopsis: 'Kancil ingin menyeberangi sungai berarus deras untuk memetik buah mentimun yang ranum dan manis di seberang.',
    coverImage: '/src/assets/images/book_kancil_sungai_1793758427656.jpg',
    theme: 'Kecerdikan & Budi Pekerti',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 5,
    wordCount: 56,
    badgeAward: {
      name: 'Kancil Cerdik Nusantara',
      icon: '🦌',
      description: 'Luar biasa menguasai intonasi kalimat tanya dan tanda seru!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Di tepi hutan yang asri, Si Kancil memandang ke seberang sungai. Airnya jernih sekali!',
        illustrationUrl: '/src/assets/images/book_kancil_sungai_1793758427656.jpg',
        targetIntonationTip: 'Bacakan dengan tempo sedang dan berikan penekanan rasa takjub pada kata "sekali!"',
        focusWords: ['seberang', 'sungai', 'jernih', 'hutan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: '"Bagaimana cara aku menyeberang?" tanya Kancil sambil mengetuk dagunya yang mungil.',
        illustrationUrl: '/src/assets/images/book_kancil_sungai_1793758427656.jpg',
        targetIntonationTip: 'Intonasi bertanya naik di akhir kalimat tanya: "...menyeberang?"',
        focusWords: ['bagaimana', 'menyeberang', 'dagunya', 'mungil'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Aha! Kancil tersenyum riang. Sebuah ide cemerlang tiba-tiba muncul di kepalanya!',
        illustrationUrl: '/src/assets/images/book_kancil_sungai_1793758427656.jpg',
        targetIntonationTip: 'Serukan kata "Aha!" dengan gembira dan penuh kejutan inspirasi!',
        focusWords: ['cemerlang', 'tersenyum', 'muncul', 'ide'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'semut-dan-gajah',
    title: 'Persahabatan Semut Kecil dan Gajah',
    level: 2,
    levelTitle: 'Level 2: Kalimat Sederhana & Dialog',
    ageRecommendation: 'Usia 6–8 Tahun',
    synopsis: 'Semut kecil membuktikan bahwa saling menghormati jauh lebih mulia daripada sekadar mengandalkan tubuh raksasa.',
    coverImage: '/src/assets/images/book_kancil_sungai_1793758427656.jpg',
    theme: 'Saling Menghormati & Kerendahan Hati',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 5,
    wordCount: 58,
    badgeAward: {
      name: 'Sahabat Rimba Bijak',
      icon: '🐘',
      description: 'Luar biasa membawakan dialog tokoh besar dan kecil secara seimbang!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Boni si gajah berbadan besar melangkah sambil menyombongkan belalainya. Tanah bergetar setiap kali kakinya berpijak.',
        illustrationUrl: '/src/assets/images/book_kancil_sungai_1793758427656.jpg',
        targetIntonationTip: 'Gunakan suara berat dan percaya diri melukiskan langkah sang gajah raksasa.',
        focusWords: ['belalai', 'menyombongkan', 'bergetar', 'berpijak'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: '"Awas, jangan injak rumah kami!" teriak Soni si semut merah dari balik rumput hijau.',
        illustrationUrl: '/src/assets/images/book_kancil_sungai_1793758427656.jpg',
        targetIntonationTip: 'Serukan tanda seru dengan nada melengking tegas namun tetap sopan!',
        focusWords: ['teriak', 'semut', 'rumput', 'peringatan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Boni menunduk dan meminta maaf. "Setiap makhluk berhak hidup aman," gumamnya tulus.',
        illustrationUrl: '/src/assets/images/book_kancil_sungai_1793758427656.jpg',
        targetIntonationTip: 'Tutup dengan nada penyesalan yang lembut dan ketulusan hati meminta maaf.',
        focusWords: ['menunduk', 'meminta maaf', 'makhluk', 'tulus'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'kambing-jembatan',
    title: 'Dua Kambing di Jembatan Bambu',
    level: 2,
    levelTitle: 'Level 2: Kalimat Sederhana & Dialog',
    ageRecommendation: 'Usia 6–8 Tahun',
    synopsis: 'Dua kambing bertemu di tengah jembatan sempit dan belajar bahwa mengalah adalah tanda keberanian sejati.',
    coverImage: '/src/assets/images/book_danau_toba_1793758990406.jpg',
    theme: 'Mau Mengalah & Kerukunan',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 5,
    wordCount: 54,
    badgeAward: {
      name: 'Pemenang Hati Damai',
      icon: '🐐',
      description: 'Hebat melafalkan intonasi pertentangan dialog yang berakhir rukun!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Sebuah jembatan bambu sempit melintang di atas sungai berarus deras. Jembatan itu hanya muat untuk satu ekor kambing.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Gunakan nada yang menggambarkan situasi jembatan sempit dan menegangkan.',
        focusWords: ['jembatan', 'sempit', 'melintang', 'sungai'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: '"Beri aku jalan dulu!" seru kambing hitam. "Tidak, aku yang datang lebih awal!" balas kambing putih.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Bedakan karakter nada bicara kambing hitam yang keras dan kambing putih yang bersikeras.',
        focusWords: ['jalan', 'awal', 'bersikeras', 'balas'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Kambing hitam lalu merebahkan badannya. "Silakan lewat di atasku, kawan." Akhirnya keduanya selamat sampai di seberang.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Turunkan nada menjadi ramah dan bersahabat saat kambing hitam mengalah.',
        focusWords: ['merebahkan', 'kawan', 'mengalah', 'selamat'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'kura-kura-kelinci',
    title: 'Lomba Lari Kelinci dan Kura-Kura',
    level: 2,
    levelTitle: 'Level 2: Kalimat Sederhana & Dialog',
    ageRecommendation: 'Usia 6–8 Tahun',
    synopsis: 'Kuki si kura-kura pantang menyerah melangkah langkah demi langkah hingga berhasil melewati kelinci yang tertidur pulas.',
    coverImage: '/src/assets/images/book_kelinci_wortel_1793759382090.jpg',
    theme: 'Ketekunan & Pantang Menyerah',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 5,
    wordCount: 57,
    badgeAward: {
      name: 'Pelari Tekun Sejati',
      icon: '🏁',
      description: 'Luar biasa membawakan intonasi kelinci sombong dan kura-kura tekun!'
    },
    pages: [
      {
        pageNumber: 1,
        text: '"Haha, kamu lambat sekali seperti siput!" ejek Momo si kelinci sambil tertawa terbahak-bahak.',
        illustrationUrl: '/src/assets/images/book_kelinci_wortel_1793759382090.jpg',
        targetIntonationTip: 'Tirukan tawa sombong kelinci dengan nada mengejek yang menggelitik.',
        focusWords: ['lambat', 'siput', 'terbahak', 'ejek'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Kuki si kura-kura tidak marah. Ia tetap melangkah pelan tapi pasti di bawah terik matahari.',
        illustrationUrl: '/src/assets/images/book_kelinci_wortel_1793759382090.jpg',
        targetIntonationTip: 'Gunakan nada sabar, tenang, dan mantap untuk menyuarakan karakter Kuki.',
        focusWords: ['marah', 'melangkah', 'pasti', 'sabar'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Saat Momo terbangun dari tidurnya, Kuki sudah menyentuh garis akhir! Ketekunan selalu mengalahkan kesombongan.',
        illustrationUrl: '/src/assets/images/book_kelinci_wortel_1793759382090.jpg',
        targetIntonationTip: 'Gunakan nada terkejut saat kelinci terbangun, lalu akhiri dengan pesan moral bijak.',
        focusWords: ['terbangun', 'garis akhir', 'ketekunan', 'kesombongan'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'layang-layang-budi',
    title: 'Layang-Layang Garuda di Lapangan Desa',
    level: 2,
    levelTitle: 'Level 2: Kalimat Sederhana & Dialog',
    ageRecommendation: 'Usia 6–8 Tahun',
    synopsis: 'Budi dan teman-temannya menerbangkan layang-layang buatan sendiri dengan ekor pita warna merah putih.',
    coverImage: '/src/assets/images/book_balon_merah_1793759382672.jpg',
    theme: 'Permainan Tradisional & Gotong Royong',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 5,
    wordCount: 55,
    badgeAward: {
      name: 'Penerbang Layang-Layang Desa',
      icon: '🪁',
      description: 'Luar biasa membawakan dialog kerja sama anak-anak dengan riang!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Angin sore berhembus kencang di lapangan desa. Budi memegang gulungan benang kasur yang tebal.',
        illustrationUrl: '/src/assets/images/book_balon_merah_1793759382672.jpg',
        targetIntonationTip: 'Gunakan nada ceria dan segar menggambarkan suasana sore di lapangan.',
        focusWords: ['angin', 'lapangan', 'gulungan', 'benang'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: '"Satu, dua, tiga, lepaskan sekarang!" teriak Budi sambil berlari kencang menyongsong angin.',
        illustrationUrl: '/src/assets/images/book_balon_merah_1793759382672.jpg',
        targetIntonationTip: 'Hitung angka dengan semangat meningkat lalu serukan kata "Lepaskan!" dengan tegas!',
        focusWords: ['lepaskan', 'berlari', 'kencang', 'angin'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Wussh! Layang-layang garuda meliuk anggun di awan. Semua anak bertepuk tangan penuh kegembiraan.',
        illustrationUrl: '/src/assets/images/book_balon_merah_1793759382672.jpg',
        targetIntonationTip: 'Tutup dengan nada sukacita dan sorak gembira anak-anak.',
        focusWords: ['meliuk', 'anggun', 'bertepuk', 'kegembiraan'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'lebah-madu',
    title: 'Perjalanan Lebah Madu Mencari Nektar',
    level: 2,
    levelTitle: 'Level 2: Kalimat Sederhana & Dialog',
    ageRecommendation: 'Usia 6–8 Tahun',
    synopsis: 'Mimi lebah kecil terbang dari satu bunga ke bunga lain untuk mengumpulkan sari madu manis bagi sarangnya.',
    coverImage: '/src/assets/images/book_burung_pipit_1793759382041.jpg',
    theme: 'Kerja Keras & Sains Alam',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 5,
    wordCount: 56,
    badgeAward: {
      name: 'Pekerja Keras Cilik',
      icon: '🐝',
      description: 'Hebat melafalkan bunyi dengung lebah dengan artikulasi lincah!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Bzz bzz bzz! Sayap lebah kecil bergetar ribuan kali. Pagi ini sarang lebah membutuhkan nektar segar.',
        illustrationUrl: '/src/assets/images/book_burung_pipit_1793759382041.jpg',
        targetIntonationTip: 'Tirukan dengungan "Bzz bzz bzz" dengan getaran vokal yang konsisten.',
        focusWords: ['bergetar', 'sarang', 'nektar', 'segar'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: '"Bolehkah aku mengisap nektarmu, Bunga Melati?" tanya lebah santun. Bunga melati mengangguk ramah.',
        illustrationUrl: '/src/assets/images/book_burung_pipit_1793759382041.jpg',
        targetIntonationTip: 'Gunakan nada bicara bertanya dengan sangat sopan dan halus.',
        focusWords: ['mengisap', 'melati', 'santun', 'mengangguk'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Kerja sama lebah dan bunga menghasilkan madu lezat. Alam selalu memberi jika kita saling membantu.',
        illustrationUrl: '/src/assets/images/book_burung_pipit_1793759382041.jpg',
        targetIntonationTip: 'Sampaikan hikmah kerja sama dengan intonasi hangat dan berbobot.',
        focusWords: ['kerja sama', 'menghasilkan', 'lezat', 'membantu'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'katak-penyanyi',
    title: 'Konser Hujan Paduan Suara Katak',
    level: 2,
    levelTitle: 'Level 2: Kalimat Sederhana & Dialog',
    ageRecommendation: 'Usia 6–8 Tahun',
    synopsis: 'Saat rintik hujan turun, katak hijau di tepi rawa menyusun nada indah untuk menghibur seluruh hutan.',
    coverImage: '/src/assets/images/book_bebek_berenang_1793759382127.jpg',
    theme: 'Seni Musik & Kebersamaan',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 5,
    wordCount: 54,
    badgeAward: {
      name: 'Dirigen Katak Hujan',
      icon: '🐸',
      description: 'Luar biasa melantunkan onomatope suara kodok bersahut-sahutan!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Tik-tik-tik! Tetes hujan pertama jatuh di daun talas yang lebar. Katak-katak hijau keluar menyambut air.',
        illustrationUrl: '/src/assets/images/book_bebek_berenang_1793759382127.jpg',
        targetIntonationTip: 'Bacakan suara tetesan hujan dengan ritme berdetak ringan.',
        focusWords: ['tetes', 'hujan', 'talas', 'menyambut'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: '"Tung tung tek tek, siap semuanya!" seru Koko sang dirigen. "Kook kook kook!" sahut teman-temannya riang.',
        illustrationUrl: '/src/assets/images/book_bebek_berenang_1793759382127.jpg',
        targetIntonationTip: 'Bedakan nada aba-aba sang dirigen dengan sahutan gembira anggota paduan suara.',
        focusWords: ['dirigen', 'siap', 'sahut', 'paduan suara'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Irama lagu hujan menghangatkan rawa yang dingin. Kebersamaan membuat hari mendung terasa menyenangkan!',
        illustrationUrl: '/src/assets/images/book_bebek_berenang_1793759382127.jpg',
        targetIntonationTip: 'Tutup dengan nada ceria penuh kehangatan persahabatan.',
        focusWords: ['irama', 'menghangatkan', 'kebersamaan', 'menyenangkan'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'sepeda-roda-dua',
    title: 'Belajar Naik Sepeda Roda Dua',
    level: 2,
    levelTitle: 'Level 2: Kalimat Sederhana & Dialog',
    ageRecommendation: 'Usia 6–8 Tahun',
    synopsis: 'Dino mengatasi rasa takut jatuh saat belajar mengayuh sepeda roda dua dengan bimbingan sabar sang ayah.',
    coverImage: '/src/assets/images/book_balon_merah_1793759382672.jpg',
    theme: 'Keberanian & Ikatan Ayah Anak',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 5,
    wordCount: 58,
    badgeAward: {
      name: 'Pesepeda Berani Cilik',
      icon: '🚲',
      description: 'Luar biasa menyuarakan dialog rasa cemas yang berubah menjadi rasa percaya diri!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Roda bantu sepeda Dino sudah dilepas. Jantung Dino berdebar kencang saat memegang stang kemudi.',
        illustrationUrl: '/src/assets/images/book_balon_merah_1793759382672.jpg',
        targetIntonationTip: 'Gunakan nada berbisik tegang melukiskan detak jantung anak yang grogi.',
        focusWords: ['roda bantu', 'dilepas', 'berdebar', 'kemudi'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: '"Pandang lurus ke depan dan kayuh terus, Ayah selalu memegangimu!" kata Ayah menenangkan.',
        illustrationUrl: '/src/assets/images/book_balon_merah_1793759382672.jpg',
        targetIntonationTip: 'Tirukan suara Ayah dengan nada mantap, teduh, dan memberi rasa aman.',
        focusWords: ['lurus', 'kayuh', 'menenangkan', 'percaya'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Dino mengayuh semakin cepat. Tanpa sadar, pegangan tangan Ayah sudah lepas. "Aku bisa terbang!" soraknya bangga.',
        illustrationUrl: '/src/assets/images/book_balon_merah_1793759382672.jpg',
        targetIntonationTip: 'Serukan kalimat terakhir dengan kebanggaan meluap-luap!',
        focusWords: ['mengayuh', 'pegangan', 'sorak', 'bangga'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'sarang-burung-tempua',
    title: 'Arsitek Sarang Unik Burung Tempua',
    level: 2,
    levelTitle: 'Level 2: Kalimat Sederhana & Dialog',
    ageRecommendation: 'Usia 6–8 Tahun',
    synopsis: 'Burung tempua menganyam serat rumput kering menjadi sarang gantung yang kokoh dan tahan terpaan badai.',
    coverImage: '/src/assets/images/book_burung_pipit_1793759382041.jpg',
    theme: 'Sains Hewan & Ketelitian',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 5,
    wordCount: 56,
    badgeAward: {
      name: 'Arsitek Alam Hebat',
      icon: '🏡',
      description: 'Hebat melafalkan istilah ilmiah ketangkasan hewan dengan intonasi jelas!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Di ujung dahan pohon kelapa, bergoyang sebuah sarang anyaman berbentuk botol terbalik yang sangat unik.',
        illustrationUrl: '/src/assets/images/book_burung_pipit_1793759382041.jpg',
        targetIntonationTip: 'Gunakan nada kekaguman terhadap bentuk sarang yang tidak biasa.',
        focusWords: ['dahan', 'anyaman', 'terbalik', 'arsitek'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Paruh mungil burung tempua mengikat ratusan helai rumput. "Setiap simpul harus kuat agar anakku aman!" tekadnya.',
        illustrationUrl: '/src/assets/images/book_burung_pipit_1793759382041.jpg',
        targetIntonationTip: 'Beri penekanan sungguh-sungguh pada tekad burung menjaga keselamatan anaknya.',
        focusWords: ['paruh', 'simpul', 'keselamatan', 'tekad'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Meskipun angin kencang bertiup, sarang itu tetap kokoh. Ketelitian dan kerja keras selalu membuahkan hasil terbaik.',
        illustrationUrl: '/src/assets/images/book_burung_pipit_1793759382041.jpg',
        targetIntonationTip: 'Tutup dengan penegasan moral tentang pentingnya ketelitian dalam bekerja.',
        focusWords: ['kokoh', 'ketelitian', 'kerja keras', 'terbaik'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'pasar-terapung-banjar',
    title: 'Perahu Pagi di Pasar Terapung Banjar',
    level: 2,
    levelTitle: 'Level 2: Kalimat Sederhana & Dialog',
    ageRecommendation: 'Usia 6–8 Tahun',
    synopsis: 'Galuh menaiki perahu jukung bersama nenek untuk berbelanja pisang dan kue tradisional di atas Sungai Barito.',
    coverImage: '/src/assets/images/book_danau_toba_1793758990406.jpg',
    theme: 'Kekayaan Budaya & Tradisi Sungai',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 5,
    wordCount: 57,
    badgeAward: {
      name: 'Penjelajah Budaya Sungai',
      icon: '🛶',
      description: 'Luar biasa membawakan logat sapaan ramah pasar tradisional nusantara!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Kabut fajar masih mengapung di Sungai Barito. Ratusan perahu jukung kayu mulai berkumpul saling menyapa.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Gunakan nada pembuka yang syahdu dan tenang menggambarkan suasana subuh di sungai.',
        focusWords: ['kabut', 'jukung', 'berkumpul', 'sungai'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: '"Tukar pisang manismu dengan mangga harum ini, Acil!" seru Galuh sambil mengulurkan tongkat kayu berujung kait.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Tirukan seruan tawar-menawar pasar dengan nada ramah, akrab, dan bersahabat.',
        focusWords: ['tukar', 'pisang', 'tongkat', 'barter'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Riuh rendah tawa pedagang menghangatkan pagi. Tradisi pasar terapung adalah warisan luhur gotong royong bangsa kita.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Akhiri dengan nada bangga atas warisan kearifan lokal Nusantara.',
        focusWords: ['riuh', 'tradisi', 'terapung', 'gotong royong'],
        audioGuideTiming: []
      }
    ]
  },

  // =========================================================================
  // LEVEL 3: CERITA & PARAGRAF KOMPLEKS (USIA 8–10 TAHUN) - 11 BUKU
  // =========================================================================
  {
    id: 'burung-cendrawasih',
    title: 'Cendrawasih Emas dari Hutan Papua',
    level: 3,
    levelTitle: 'Level 3: Cerita & Paragraf Kompleks',
    ageRecommendation: 'Usia 8–10 Tahun',
    synopsis: 'Kisah magis burung surga dengan bulu keemasan yang menari menyambut fajar di pucuk pohon kanopi tanah Papua.',
    coverImage: '/src/assets/images/book_burung_cendrawasih_1793758428212.jpg',
    theme: 'Kekayaan Nusantara & Keberanian',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 8,
    wordCount: 380,
    badgeAward: {
      name: 'Pujangga Rimba Nusantara',
      icon: '🪶',
      description: 'Luar biasa membaca cerita utuh multi-paragraf dengan penghayatan vokal yang memukau!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Saat sang surya mulai merekah di ufuk timur, kabut tipis perlahan menyingkap keajaiban rimba raya Pegunungan Foja, Papua. Udara pagi terasa sangat dingin, menusuk hingga ke sela-sela dedaunan pakis purba yang masih basah bermandikan embun pegunungan.\n\nDi atas dahan pohon merbau yang kokoh setinggi tiga puluh meter, seekor burung bermahkota zamrud sedang bersiap membuka harinya. Namanya Cendrawasih Emas, satwa langka yang oleh masyarakat pedalaman dijuluki sebagai "Burung Surga Penjaga Fajar".',
        illustrationUrl: '/src/assets/images/book_burung_cendrawasih_1793758428212.jpg',
        targetIntonationTip: 'Gunakan nada pembuka dongeng yang syahdu, puitis, dan tempo perlahan membangun suasana alam Papua.',
        focusWords: ['merekah', 'keajaiban', 'zamrud', 'pegunungan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Dengan penuh ketelitian, sang burung menyisir bulu-bulu ekornya yang panjang menjuntai bak pita sutra kuning kemilau. Setiap helai bulunya memantulkan cahaya mentari pagi, menghasilkan kilauan warna keemasan yang memukau mata siapa pun yang memandangnya.\n\n"Pagi yang indah untuk bersyukur," bisik sang Cendrawasih dalam hatinya. Sebelum memulai tarian sucinya, ia memastikan seluruh dahan tempatnya berpijak telah bersih dari ranting kering dan daun layu.',
        illustrationUrl: '/src/assets/images/book_burung_cendrawasih_1793758428212.jpg',
        targetIntonationTip: 'Gunakan intonasi lembut dan kagum saat menggambarkan keindahan bulu keemasan sang burung surga.',
        focusWords: ['ketelitian', 'kemilau', 'memantulkan', 'bersyukur'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: '"Kwak! Kwak! Wuu-wuu!" seru sang burung dengan suara lantang dan ritmis yang menggema ke seluruh lembah ngarai. Kicauannya menjadi aba-aba istimewa bagi kawanan nuri merah dan kanguru pohon untuk menyambut datangnya siang.\n\nIa merentangkan kedua sayapnya lebar-lebar, lalu meliuk-liuk lincah dari kiri ke kanan. Gerakannya menyerupai tarian gemulai penari adat Nusantara yang sedang melantunkan doa syukur kepada sang Pencipta alam semesta.',
        illustrationUrl: '/src/assets/images/book_burung_cendrawasih_1793758428212.jpg',
        targetIntonationTip: 'Serukan tiruan bunyi "Kwak! Kwak!" dengan lantang dan bersemangat, lalu alunkan nada tarian dengan indah.',
        focusWords: ['lantang', 'menggema', 'merentangkan', 'doa syukur'],
        audioGuideTiming: []
      },
      {
        pageNumber: 4,
        text: 'Dari balik lebatnya pohon matoa di dasar lembah, seorang anak suku pedalaman bernama Meki sedang memandang ke arah kanopi hutan. Tangannya menggenggam teropong kayu sederhana peninggalan sang kakek tercinta.\n\n"Lihatlah, Bapa!" bisik Meki takjub kepada ayahnya. "Mahkota emasnya bersinar seperti matahari kecil di pucuk dahan!" Sang ayah tersenyum bangga sambil mengelus pundak putranya.',
        illustrationUrl: '/src/assets/images/book_burung_cendrawasih_1793758428212.jpg',
        targetIntonationTip: 'Bedakan nada bisikan takjub sang anak dengan suara hangat dan berwibawa sang ayah.',
        focusWords: ['pedalaman', 'menggenggam', 'teropong', 'matahari'],
        audioGuideTiming: []
      },
      {
        pageNumber: 5,
        text: '"Ingatlah pesan leluhur kita, anakku," ujar sang ayah dengan nada sungguh-sungguh. "Cendrawasih adalah jiwa rimba Papua. Selama burung itu masih menari bebas di kanopi hutan, kehidupan dan sumber air kita akan senantiasa diberkahi."\n\nMeki mengangguk mantap. Di dalam lubuk hatinya yang tulus, ia berjanji akan belajar rajin dan menjadi penjaga hutan yang gagah berani melindungi tanah kelahirannya dari bahaya penebangan liar.',
        illustrationUrl: '/src/assets/images/book_burung_cendrawasih_1793758428212.jpg',
        targetIntonationTip: 'Gunakan suara berwibawa, dalam, dan sarat pesan moral leluhur yang menggetarkan sanubari.',
        focusWords: ['leluhur', 'kanopi', 'diberkahi', 'berjanji'],
        audioGuideTiming: []
      },
      {
        pageNumber: 6,
        text: 'Sang surya kini telah meninggi, menerangi hamparan zamrud khatulistiwa dari Raja Ampat hingga Jayapura. Cendrawasih Emas kembali melipat sayapnya dengan damai, bertengger anggun di antara bunga anggrek hutan yang semerbak.\n\nKeelokan alam Nusantara adalah pusaka abadi yang tak ternilai harganya. Generasi penerus bangsa bertekad menjaga kelestarian setiap dahan dan satwanya, agar senandung burung surga tetap terdengar selamanya.',
        illustrationUrl: '/src/assets/images/book_burung_cendrawasih_1793758428212.jpg',
        targetIntonationTip: 'Tutup seluruh cerita dengan intonasi megah, optimis, dan penuh rasa cinta tanah air Indonesia.',
        focusWords: ['khatulistiwa', 'semerbak', 'pusaka', 'kelestarian'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'badak-ujung-kulon',
    title: 'Misteri Badak Bercula Ujung Kulon',
    level: 3,
    levelTitle: 'Level 3: Cerita & Paragraf Kompleks',
    ageRecommendation: 'Usia 8–10 Tahun',
    synopsis: 'Perjalanan sunyi Bimo sang peneliti rimba melacak jejak kaki sang raksasa damai di jantung cagar alam ujung barat Pulau Jawa.',
    coverImage: '/src/assets/images/book_badak_ujung_kulon_1793758988740.jpg',
    theme: 'Konservasi Satwa & Keanekaragaman Hayati',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 8,
    wordCount: 390,
    badgeAward: {
      name: 'Sahabat Badak Bercula',
      icon: '🦏',
      description: 'Luar biasa melafalkan narasi penjelajahan sains rimba dengan intonasi penuh ketegangan positif!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Hujan rintik baru saja reda di Semenanjung Ujung Kulon, ujung paling barat Pulau Jawa. Aroma tanah basah bercampur harum pandan laut dan lumut purba tercium pekat, membangkitkan aroma khas hutan hujan pesisir tropis.\n\nBimo, seorang peneliti cilik pecinta lingkungan, melangkah berhati-hati di belakang Pak Jaya, polisi hutan senior. Misi ekspedisi hari ini adalah memeriksa rekaman kamera jebak yang telah terpasang di jalur lintasan satwa langka selama tiga bulan.',
        illustrationUrl: '/src/assets/images/book_badak_ujung_kulon_1793758988740.jpg',
        targetIntonationTip: 'Gunakan nada berbisik misterius dan tempo lambat untuk membangun suasana ketenangan hutan purba.',
        focusWords: ['semenanjung', 'pekat', 'ekspedisi', 'lintasan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Langkah kaki mereka terhenti di tepi aliran sungai kecil berair jernih. Di atas lumpur basah yang masih lembek, tampak sebuah jejak kaki raksasa berlekuk tiga dengan diameter hampir tiga puluh sentimeter.\n\n"Lihat, Bimo! Jejak ini masih baru, kemungkinan dicetak kurang dari satu jam yang lalu," bisik Pak Jaya sambil berlutut mengamati permukaan lumpur. Jantung Bimo berdegup kencang membayangkan makhluk purba itu berada di sekitar mereka.',
        illustrationUrl: '/src/assets/images/book_badak_ujung_kulon_1793758988740.jpg',
        targetIntonationTip: 'Naikkan sedikit nada rasa penasaran dan ketegangan saat menemukan jejak kaki raksasa.',
        focusWords: ['diameter', 'berdegup', 'berlutut', 'penasaran'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Mereka menyusuri rimbunnya rumpun bambu berduri dengan gerakan seringan kapas. Tiba-tiba, suara derak dahan patah terdengar dari arah kubangan lumpur di balik tebing batu karang.\n\n"Krek! Ssshh..." Pak Jaya memberi isyarat tangan agar Bimo segera tiarap di balik semak pakis gajah. Mereka berdua menahan napas, tidak berani membuat suara sekecil apa pun yang dapat mengejutkan sang penghuni belantara.',
        illustrationUrl: '/src/assets/images/book_badak_ujung_kulon_1793758988740.jpg',
        targetIntonationTip: 'Lafalkan efek tiruan suara "Krek! Ssshh..." dengan desau halus namun sangat jelas di telinga pendengar.',
        focusWords: ['berduri', 'kubangan', 'tiarap', 'belantara'],
        audioGuideTiming: []
      },
      {
        pageNumber: 4,
        text: 'Dari balik tirai dedaunan rimbun, muncullah sesosok tubuh raksasa abu-abu berkulit tebal berlipat-lipat menyerupai baju zirah ksatria zaman purba. Di atas hidungnya yang kokoh, menjulang sebuah cula tunggal yang amat perkasa.\n\nItulah Badak Jawa, salah satu mamalia darat paling langka di muka bumi. Hewan raksasa itu berjalan santai menuju kubangan lumpur hangat, lalu merebahkan tubuhnya untuk melindungi kulit dari sengatan lalat hutan.',
        illustrationUrl: '/src/assets/images/book_badak_ujung_kulon_1793758988740.jpg',
        targetIntonationTip: 'Gunakan suara berwibawa dan penuh kekaguman mendalam saat melukiskan fisik sang badak bercula.',
        focusWords: ['baju zirah', 'perkasa', 'mamalia', 'langka'],
        audioGuideTiming: []
      },
      {
        pageNumber: 5,
        text: 'Meskipun bertubuh besar dan tampak menakutkan, badak bercula adalah hewan pemalu pemakan pucuk daun muda dan tunas bambu. Tatapan matanya yang teduh memancarkan kedamaian makhluk yang hanya ingin hidup tenang di habitat aslinya.\n\nBimo mengeluarkan buku sketsa dan pensilnya secara perlahan. Dengan jemari lincah, ia mengabadikan momen langka itu ke dalam lembaran kertas gambar sebagai bukti keberhasilan cagar alam Indonesia.',
        illustrationUrl: '/src/assets/images/book_badak_ujung_kulon_1793758988740.jpg',
        targetIntonationTip: 'Ubah intonasi menjadi lembut dan bersahabat saat menceritakan watak pemalu sang satwa herbivora.',
        focusWords: ['pemalu', 'herbivora', 'habitat', 'mengabadikan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 6,
        text: 'Ketika badak perkasa itu bangkit dan melangkah masuk kembali ke kedalaman rimba yang lebat, Bimo memandang kepergiannya dengan rasa takzim yang tak terlukiskan.\n\n"Tugas kitalah memastikan rumah mereka tetap aman dari kepunahan," ucap Pak Jaya dengan senyum lega. Ekspedisi hari ini menanamkan tekad membara di dada Bimo untuk menjadi ilmuwan pelestari satwa Nusantara masa depan.',
        illustrationUrl: '/src/assets/images/book_badak_ujung_kulon_1793758988740.jpg',
        targetIntonationTip: 'Akhiri dengan intonasi mantap, optimis, dan membawa tekad perlindungan lingkungan hidup.',
        focusWords: ['takzim', 'kepunahan', 'ilmuwan', 'pelestari'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'danau-toba',
    title: 'Legenda Danau Toba dan Sumpah Ikan Mas',
    level: 3,
    levelTitle: 'Level 3: Cerita & Paragraf Kompleks',
    ageRecommendation: 'Usia 8–10 Tahun',
    synopsis: 'Dongeng klasik Sumatera Utara tentang pentingnya memegang teguh amanah dan janji suci kepada orang yang disayangi.',
    coverImage: '/src/assets/images/book_danau_toba_1793758990406.jpg',
    theme: 'Cerita Rakyat & Amanah Budi Pekerti',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 8,
    wordCount: 410,
    badgeAward: {
      name: 'Penjaga Sumpah Danau',
      icon: '🌊',
      description: 'Luar biasa membawakan intonasi drama emosional tokoh cerita rakyat nusantara!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Zaman dahulu kala di sebuah lembah subur di tanah Batak, Sumatera Utara, hiduplah seorang pemuda yatim piatu bernama Toba. Setiap hari ia bekerja keras mencangkul ladang sayur dan memancing ikan di sungai jernih untuk menyambung hidupnya yang bersahaja.\n\nMeskipun hidup sebatang kara di sebuah gubuk sederhana, Toba dikenal oleh para tetangganya sebagai pemuda yang jujur, ringan tangan menolong sesama, dan selalu bersyukur atas rezeki yang diperolehnya.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Gunakan gaya narasi pendongeng tradisional nusantara dengan nada hangat dan tempo teratur.',
        focusWords: ['lembah', 'bersahaja', 'sebatang kara', 'bersyukur'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Pada suatu sore yang hening di tepi sungai berarus tenang, mata kail Toba tiba-tiba ditarik oleh sesuatu yang amat kuat. Batang pancing bambunya melengkung tajam hingga hampir patah terhempas ke dalam pusaran air.\n\nDengan sekuat tenaga, Toba menarik tali pancingnya ke darat. Betapa terkejutnya ia saat mendapati seekor ikan berukuran besar dengan sisik kuning berkilauan bagai emas murni bermandikan cahaya matahari senja!',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Tingkatkan dinamika ketegangan suara saat mata kail tersentak, lalu beri penekanan rasa takjub pada ikan emas.',
        focusWords: ['melengkung', 'pusaran', 'emas murni', 'terkejut'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Ketika Toba hendak memegang ikan itu, keajaiban luar biasa terjadi di depan matanya. Asap putih tipis beraroma melati membubung tinggi, dan ikan bersisik emas itu seketika berubah wujud menjadi seorang putri jelita berparas anggun.\n\n"Jangan takut, Toba," sapa sang putri dengan suara selembut embun pagi. "Aku adalah putri kayangan yang terkena kutukan. Kebaikan hatimulah yang telah membebaskanku kembali ke wujud asliku."',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Gunakan nada mistis dan lembut saat putri berbicara dengan kehangatan budi pekerti.',
        focusWords: ['keajaiban', 'berwujud', 'jelita', 'kutukan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 4,
        text: 'Toba yang terpesona akan budi pekerti sang putri akhirnya meminangnya menjadi istri. Sang putri bersedia dengan satu syarat mutlak yang tidak boleh dilanggar: Toba tidak boleh mengungkit asal-usul kelahirannya dari seekor ikan kepada siapa pun.\n\n"Aku bersumpah demi langit dan bumi," tegas Toba mantap. Waktu pun berlalu bahagia hingga mereka dikaruniai seorang anak laki-laki lincah bernama Samosir yang tumbuh sehat dan ceria.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Beri penekanan tegas pada kalimat syarat sumpah rahasia agar pendengar merasakan kesakralannya.',
        focusWords: ['meminang', 'syarat mutlak', 'bersumpah', 'dikaruniai'],
        audioGuideTiming: []
      },
      {
        pageNumber: 5,
        text: 'Hingga tibalah suatu siang yang terik di ladang jagung. Toba yang kelelahan dan menahan lapar menunggu kiriman bekal makan siang dari Samosir. Namun di perjalanan, Samosir memakan habis seluruh lauk karena rasa laparnya sendiri.\n\nMelihat bekal makanannya kosong, amarah Toba meluap seketika hingga ia lupa akan janji sucinya. "Dasar anak pembangkang keturunan ikan!" bentak Toba dengan mata menyala murka. Samosir menangis tersedu-sedu lalu berlari pulang mengadu kepada ibunya.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Keluarkan nada amarah yang membakar pada kalimat bentakan Toba, lalu transisi ke tangis sedih sang anak.',
        focusWords: ['kelelahan', 'amarah', 'pembangkang', 'melanggar'],
        audioGuideTiming: []
      },
      {
        pageNumber: 6,
        text: 'Mendengar sumpah yang telah dilanggar, air mata sang ibu menetes membasahi tanah. Seketika langit menjadi gelap gulita, kilat menyambar bersahut-sahutan, dan mata air purba memancar dahsyat dari dalam perut bumi.\n\nLembah luas itu pun tenggelam menjadi danau megah yang kini kita kenal sebagai Danau Toba, dengan pulau di tengahnya yang dinamai Pulau Samosir. Cerita ini mengajarkan kita bahwa janji adalah amanah suci yang wajib dijaga seumur hidup.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Tutup cerita legenda dengan nada agung, bergemuruh, dan diakhiri pesan budi pekerti yang khidmat.',
        focusWords: ['gelap gulita', 'menyambar', 'mata air', 'amanah suci'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'komodo-flores',
    title: 'Sang Naga Terakhir Pulau Komodo',
    level: 3,
    levelTitle: 'Level 3: Cerita & Paragraf Kompleks',
    ageRecommendation: 'Usia 8–10 Tahun',
    synopsis: 'Eksplorasi kehidupan reptil purba terbesar di dunia yang mendiami padang savana gersang Kepulauan Nusa Tenggara Timur.',
    coverImage: '/src/assets/images/book_komodo_flores_1793758991081.jpg',
    theme: 'Sains Hewan Purba & Keberanian',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 8,
    wordCount: 395,
    badgeAward: {
      name: 'Penjelajah Savana Komodo',
      icon: '🦎',
      description: 'Luar biasa menyuarakan narasi ilmiah satwa purba dengan intonasi tegas dan bersemangat!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Matahari siang memanggang padang savana gersang di Pulau Rinca dan Komodo, Nusa Tenggara Timur. Angin panas berhembus menyapu rerumputan kering berwarna kecokelatan yang membentang luas di kaki perbukitan karang terjal.\n\nDi kejauhan, birunya Laut Flores tampak berkilauan bak hamparan cermin raksasa. Lanskap purbakala ini seolah membawa kita kembali ke zaman jutaan tahun silam saat makhluk-makhluk raksasa masih menguasai daratan bumi.',
        illustrationUrl: '/src/assets/images/book_komodo_flores_1793758991081.jpg',
        targetIntonationTip: 'Bacakan dengan artikulasi kuat dan tempo mantap menggambarkan teriknya savana khatulistiwa.',
        focusWords: ['memanggang', 'savana', 'purbakala', 'daratan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Di bawah bayangan pohon asam jawa yang rindang, seekor kadal raksasa berbobot hampir seratus kilogram sedang berbaring tak bergerak. Kulitnya yang bersisik kasar berlapis kalsium tampak seperti baju perang yang tak tertembus.\n\nNamun jangan tertipu oleh ketenangannya! Meskipun tampak tertidur pulas, seluruh indera di tubuh sang predator puncak ini tetap waspada menangkap setiap getaran tanah di sekelilingnya.',
        illustrationUrl: '/src/assets/images/book_komodo_flores_1793758991081.jpg',
        targetIntonationTip: 'Gunakan nada berbisik waspada saat memperingatkan pendengar tentang ketajaman indera komodo.',
        focusWords: ['berbobot', 'sisik kasar', 'predator', 'waspada'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Syuut... syuut... Lidah bercabang kuning cerah menjulur keluar dari moncongnya berulang kali. Organ penciuman ajaib bernama Jacobson di langit-langit mulutnya mampu menganalisis partikel udara dari jarak hingga sembilan kilometer!\n\nLangkah kakinya yang kokoh mulai terayun perlahan ke depan. Ekor panjangnya yang berotot tebal berfungsi sebagai senjata penyeimbang dan pemukul berbahaya jika ada musuh yang berani mendekat.',
        illustrationUrl: '/src/assets/images/book_komodo_flores_1793758991081.jpg',
        targetIntonationTip: 'Tirukan desis lidah bercabang dengan aksentuasi tajam lalu gambarkan langkah mantap sang naga.',
        focusWords: ['bercabang', 'partikel', 'terayun', 'penyeimbang'],
        audioGuideTiming: []
      },
      {
        pageNumber: 4,
        text: 'Di sebuah bukit karang, Mansur sang pemandu wisata cilik bersama petugas jagawana memandu kelompok pengunjung. Mansur membawa tongkat kayu bercabang dua yang menjadi senjata tradisional pelindung diri.\n\n"Orang tua kami di Desa Komodo menyebut hewan ini sebagai Ora," cerita Mansur dengan senyum ramah. "Menurut cerita rakyat leluhur, komodo dan manusia lahir dari rahim ibu yang sama sebagai saudara kembar."',
        illustrationUrl: '/src/assets/images/book_komodo_flores_1793758991081.jpg',
        targetIntonationTip: 'Gunakan nada bersahabat dan ramah saat Mansur menceritakan kearifan lokal saudara kembar Ora.',
        focusWords: ['jagawana', 'tradisional', 'leluhur', 'saudara kembar'],
        audioGuideTiming: []
      },
      {
        pageNumber: 5,
        text: 'Kearifan lokal inilah yang membuat masyarakat lokal tidak pernah memusuhi atau memburu komodo sejak ratusan tahun lalu. Mereka saling menghormati batas wilayah hidup masing-masing di daratan pulau terpencil ini.\n\nPara ilmuwan dari seluruh dunia datang silih berganti untuk meneliti keunikan bisa beracun dan ketahanan sistem kekebalan tubuh komodo yang luar biasa hebat menghadapi berbagai infeksi bakteri ganas.',
        illustrationUrl: '/src/assets/images/book_komodo_flores_1793758991081.jpg',
        targetIntonationTip: 'Sampaikan fakta ilmiah dan kearifan masyarakat dengan intonasi bangga dan penuh penghargaan.',
        focusWords: ['kearifan', 'menghormati', 'ilmuwan', 'kekebalan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 6,
        text: 'Saat senja memerah di ufuk barat Flores, sang naga purba merayap perlahan memasuki sarang liangnya di dalam tanah perbukitan untuk menghangatkan suhu tubuhnya sepanjang malam.\n\nIndonesia patut berbangga memiliki warisan satwa prasejarah yang tidak ditemukan di belahan bumi mana pun. Menjaga habitat komodo adalah janji peradaban kita kepada masa depan alam semesta.',
        illustrationUrl: '/src/assets/images/book_komodo_flores_1793758991081.jpg',
        targetIntonationTip: 'Tutup dengan nada megah, teduh, dan memupuk kebanggaan atas kekayaan alam Nusantara.',
        focusWords: ['prasejarah', 'peradaban', 'kebanggaan', 'habitat'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'penyu-raja-ampat',
    title: 'Penjelajah Samudra Karang Raja Ampat',
    level: 3,
    levelTitle: 'Level 3: Cerita & Paragraf Kompleks',
    ageRecommendation: 'Usia 8–10 Tahun',
    synopsis: 'Kisah Penyu Hijau melintasi labirin terumbu karang terindah di dunia untuk kembali bertelur di pantai kelahirannya.',
    coverImage: '/src/assets/images/book_penyu_raja_ampat_1793758990988.jpg',
    theme: 'Konservasi Kelautan & Ketekunan',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 8,
    wordCount: 385,
    badgeAward: {
      name: 'Penyelam Karang Sejati',
      icon: '🐢',
      description: 'Luar biasa mengalunkan nada membaca seperti ayunan gelombang ombak samudra yang tenang!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Gugusan pulau karang karst Raja Ampat berdiri megah menyerupai zamrud raksasa yang mengapung di atas samudra biru jernih. Air lautnya begitu bening, hingga kita dapat memandang terumbu karang di kedalaman sepuluh meter dengan sangat jelas.\n\nDi antara taman koral warna-warni yang menawan hati, seekor penyu sisik betina bernama Wira sedang mengayunkan sirip depannya dengan sangat anggun, menyongsong arus pasang air laut.',
        illustrationUrl: '/src/assets/images/book_penyu_raja_ampat_1793758990988.jpg',
        targetIntonationTip: 'Bacakan dengan nada rileks, lembut, dan seirama dengan ayunan gelombang air laut.',
        focusWords: ['gugusan', 'karst', 'zamrud', 'menawan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Wira telah mengarungi ribuan mil laut Samudra Pasifik selama dua puluh tahun lamanya. Ia telah melewati badai ombak ganas, menghindari kejaran hiu macan, dan berenang melintasi palung laut terdalam.\n\nNamun kini, sebuah panggilan naluri alamiah memanggilnya pulang ke pantai berpasir putih di Pulau Misool, tempat di mana dirinya dahulu menetas dari sebutir telur kecil.',
        illustrationUrl: '/src/assets/images/book_penyu_raja_ampat_1793758990988.jpg',
        targetIntonationTip: 'Gunakan nada penuh perjuangan menceritakan perjalanan panjang sang penyu melintasi samudra luas.',
        focusWords: ['mengarungi', 'naluri', 'menetas', 'perjuangan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Di dalam tempurung kepalanya, tersimpan kompas magnetik alami ciptaan Tuhan yang luar biasa cerdas. Kompas ini membaca garis medan magnet bumi sehingga Wira tidak pernah tersesat di tengah samudra yang tak bertepi.\n\nSaat melintasi celah terumbu karang, kawanan ikan badut bergaris jingga dan pari manta raksasa berenang berdampingan, seolah mengucapkan selamat datang kembali kepada sang penjelajah tua.',
        illustrationUrl: '/src/assets/images/book_penyu_raja_ampat_1793758990988.jpg',
        targetIntonationTip: 'Sampaikan rasa kagum akan keajaiban kompas alami penyu dengan artikulasi yang jernih.',
        focusWords: ['kompas magnetik', 'bertepi', 'pari manta', 'selamat datang'],
        audioGuideTiming: []
      },
      {
        pageNumber: 4,
        text: 'Namun, bahaya tak terduga menghadang di ambang teluk. Sebuah jaring nelayan tua yang hanyut tersangkut di dahan karang tanduk rusa, menghalangi jalur lintasan Wira.\n\nDengan tenang dan cerdik, Wira melipat siripnya dan meluncur tipis di celah sempit antara karang dan jaring robek. Ketelitian dan kesabarannya menyelamatkan tubuhnya dari lilitan benang nilon maut.',
        illustrationUrl: '/src/assets/images/book_penyu_raja_ampat_1793758990988.jpg',
        targetIntonationTip: 'Naikkan tempo saat menggambarkan bahaya jaring nelayan, lalu tenangkan nada saat ia berhasil lolos.',
        focusWords: ['menghadang', 'tersangkut', 'ketelitian', 'kesabaran'],
        audioGuideTiming: []
      },
      {
        pageNumber: 5,
        text: 'Tepat di malam bulan purnama, Wira merayap pelan menaiki pantai berpasir putih yang sunyi. Dengan kedua sirip belakangnya yang kuat, ia menggali lubang sedalam setengah meter di pasir yang hangat.\n\nSatu per satu, lebih dari seratus butir telur putih berkilau ia letakkan dengan penuh kasih sayang, lalu menutupnya kembali dengan hamparan pasir agar terlindung dari kepiting pantai.',
        illustrationUrl: '/src/assets/images/book_penyu_raja_ampat_1793758990988.jpg',
        targetIntonationTip: 'Gunakan nada syahdu, penuh cinta kasih seorang ibu yang menjaga kelangsungan hidup anak-anaknya.',
        focusWords: ['purnama', 'merayap', 'kasih sayang', 'terlindung'],
        audioGuideTiming: []
      },
      {
        pageNumber: 6,
        text: 'Dua bulan kemudian, anak-anak sekolah dasar di Raja Ampat bersama komunitas penjaga laut bersorak gembira menyaksikan ratusan tukik mungil keluar dari pasir dan bergegas menuju ombak laut.\n\nSiklus kehidupan bahari nusantara terus berputar abadi. Menjaga laut dari sampah plastik adalah bukti cinta kita kepada bumi pertiwi dan seluruh ciptaan-Nya.',
        illustrationUrl: '/src/assets/images/book_penyu_raja_ampat_1793758990988.jpg',
        targetIntonationTip: 'Akhiri dengan sorak gembira penuh optimisme dan pesan moral pelestarian laut bebas sampah plastik.',
        focusWords: ['tukik', 'siklus', 'sampah plastik', 'abadi'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'lompat-batu-nias',
    title: 'Lompat Batu Megalitikum Pemuda Nias',
    level: 3,
    levelTitle: 'Level 3: Cerita & Paragraf Kompleks',
    ageRecommendation: 'Usia 8–10 Tahun',
    synopsis: 'Keteguhan hati Laoli berlatih tradisi Hombo Batu setinggi dua meter demi membuktikan kedewasaan dan keberanian membela desanya.',
    coverImage: '/src/assets/images/book_danau_toba_1793758990406.jpg',
    theme: 'Adat Nusantara & Semangat Pantang Menyerah',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 8,
    wordCount: 395,
    badgeAward: {
      name: 'Pendekar Batu Nias',
      icon: '🏛️',
      description: 'Luar biasa membacakan narasi penuh tempo keberanian dan semangat membara!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Di pelataran desa adat Bawomataluo, Kabupaten Nias Selatan, berdiri sebuah monumen batu piramida bertingkat setinggi dua meter. Monumen kuno ini dibangun dari bongkahan batu hitam megalitikum yang dipahat rapi oleh para leluhur ratusan tahun silam.\n\nTradisi melompati batu raksasa ini disebut "Hombo Batu", sebuah ritual pembuktian kedewasaan, ketangkasan fisik, dan keberanian bagi para pemuda Nias untuk menjadi benteng pertahanan desa.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Bacakan dengan nada megah, kokoh, dan berwibawa melukiskan keagungan budaya megalitikum Nias.',
        focusWords: ['pelataran', 'megalitikum', 'piramida', 'kedewasaan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Laoli, seorang pemuda berusia lima belas tahun, telah berlatih melompat sejak kecil di bawah bimbingan ayahnya. Setiap fajar menyingsing, ia berlatih berlari menyusuri pantai berpasir dan melompati tumpukan batang kelapa bertingkat.\n\nKakinya pernah terkilir dan lututnya berulang kali terluka, namun ia tak pernah mengeluh atau berniat menyerah. "Keberanian sejati ditempa oleh keringat dan ketekunan," selalu terngiang nasihat ayahnya.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Beri aksen semangat pantang menyerah saat menggambarkan latihan keras Laoli dari hari ke hari.',
        focusWords: ['menyingsing', 'terkilir', 'ketekunan', 'terngiang'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Hari upacara adat yang ditunggu-tunggu pun tiba. Ratusan warga berpakaian adat kuning keemasan memadati pelataran desa diiringi tabuhan gendang perang Faritia dan bunyi gong tembaga yang membahana.\n\nPara tetua desa duduk di barisan kehormatan dengan hiasan kepala bulu burung elang. Suasana seketika hening saat nama Laoli dipanggil ke garis awal lompatan.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Tirukan suasana riuh genderang lalu redamkan suara menjadi hening tegang saat nama tokoh dipanggil.',
        focusWords: ['membahana', 'genderang', 'kehormatan', 'hening'],
        audioGuideTiming: []
      },
      {
        pageNumber: 4,
        text: 'Laoli menarik napas dalam-dalam, memfokuskan tatapannya lurus ke arah puncak batu piramida. Jantungnya berdegup kencang seirama detak detik jam, namun tatapannya tajam tak tergoyahkan.\n\n"Satu... dua... tiga!" Laoli melesat secepat anak panah lepas dari busurnya! Langkah kakinya menghantam tanah berpasir dengan irama cepat yang semakin bertambah kencang di setiap meter.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Gunakan teknik akselerasi (nada semakin cepat) saat Laoli mulai berlari menyongsong batu lompatan!',
        focusWords: ['memfokuskan', 'melesat', 'busur', 'irama'],
        audioGuideTiming: []
      },
      {
        pageNumber: 5,
        text: 'Bukk! Kaki kanannya menginjak batu tumpuan bulat setinggi setengah meter di depan monumen. Dalam hitungan sepersekian detik, tubuhnya terlontar tinggi ke angkasa, melayang anggun melewati puncak batu setinggi dua meter!\n\nSelama beberapa detik di udara, waktu seolah berhenti berputar. Kedua tangannya terentang mantap menjaga keseimbangan, sementara kakinya terlipat sempurna tanpa menyentuh sebutir kerikil pun di puncak batu.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Tahan napas sesaat di kalimat "melayang anggun" untuk menciptakan klimaks yang memukau pendengar.',
        focusWords: ['tumpuan', 'terlontar', 'melayang', 'keseimbangan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 6,
        text: 'Tap! Kedua kakinya mendarat mantap di atas tanah tanpa goyah sedikit pun. Riuh tepuk tangan dan sorak kebanggaan membahana dari seluruh warga desa adat Bawomataluo.\n\nSang tetua adat mengalungkan kalung manik ke leher Laoli sebagai simbol ksatria muda Nias. Hari itu membuktikan bahwa rintangan setinggi apa pun di hadapan kita, akan sanggup kita lompati dengan tekad dan kerja keras.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Tutup dengan ledakan sorak kemenangan lalu sampaikan pesan inspiratif penutup dengan penuh wibawa.',
        focusWords: ['mendarat', 'simbol ksatria', 'rintangan', 'kerja keras'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'orangutan-kalimantan',
    title: 'Penjaga Kanopi Hutan Hujan Kalimantan',
    level: 3,
    levelTitle: 'Level 3: Cerita & Paragraf Kompleks',
    ageRecommendation: 'Usia 8–10 Tahun',
    synopsis: 'Kisah Otan si anak orangutan belajar mengenali ratusan jenis buah hutan dan merajut sarang ranting di puncak pohon meranti.',
    coverImage: '/src/assets/images/book_kancil_sungai_1793758427656.jpg',
    theme: 'Sains Hutan Hujan & Kasih Ibu',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 8,
    wordCount: 385,
    badgeAward: {
      name: 'Penjaga Paru-Paru Dunia',
      icon: '🦧',
      description: 'Luar biasa menyuarakan dialog kehangatan kasih ibu orangutan dengan penuh ketulusan!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Hutan hujan tropis Taman Nasional Tanjung Puting di Kalimantan Tengah membentang luas bagai samudera hijau tanpa tepi. Kanopi pepohonan meranti dan ulin raksasa menjulang setinggi lima puluh meter, menyaring sinar terik mentari menjadi temaram yang teduh.\n\nDi atas dahan kokoh berlumut tebal, seekor anak orangutan berusia empat tahun bernama Otan sedang bergelantungan riang pada bulu kemerahan ibunya, menikmati angin pagi yang semilir.',
        illustrationUrl: '/src/assets/images/book_kancil_sungai_1793758427656.jpg',
        targetIntonationTip: 'Bacakan dengan nada tenang dan deskriptif, melukiskan rimbunnya paru-paru hijau dunia.',
        focusWords: ['tropis', 'kanopi', 'ulin', 'bergelantungan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Hari ini adalah hari istimewa bagi Otan. Sang ibu mulai mengajarkannya cara membedakan buah hutan yang lezat dengan tumbuhan bergetah yang berbahaya bagi pencernaan.\n\n"Perhatikan baik-baik warna dan harum buah ara ini, Otan," bisik sang ibu sambil memetik buah ara hutan yang ranum kemerahan. "Hutan kita menyediakan ribuan macam rezeki makanan, asalkan kita belajar mengenali tanda-tanda alaminya."',
        illustrationUrl: '/src/assets/images/book_kancil_sungai_1793758427656.jpg',
        targetIntonationTip: 'Tirukan nada bicara sang ibu yang penuh kelembutan, kesabaran, dan bimbingan mendidik anak.',
        focusWords: ['pencernaan', 'buah ara', 'ranum', 'tanda alami'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Otan mencium aroma buah itu, lalu menggigitnya dengan senang hati. Rasa manis segar memenuhi rongga mulutnya, membuatnya bertepuk tangan kegirangan di atas dahan pohon ara.\n\nTiba-tiba, langit menggelap tertutup mendung hitam tebal, disusul deru petir yang menggelegar di kejauhan. Angin kencang mulai menggoyangkan dahan-dahan pohon besar pertanda badai tropis segera tiba.',
        illustrationUrl: '/src/assets/images/book_kancil_sungai_1793758427656.jpg',
        targetIntonationTip: 'Transisikan nada gembira anak menjadi waspada saat gemuruh petir mulai terdengar.',
        focusWords: ['kegirangan', 'mendung', 'menggelegar', 'badai tropis'],
        audioGuideTiming: []
      },
      {
        pageNumber: 4,
        text: 'Dengan cekatan, sang ibu mematahkan selembar daun talas hutan raksasa, lalu memegangnya di atas kepala mereka berdua seperti payung alami yang sempurna.\n\nKetika hujan lebat mengguyur belantara, tetes air meluncur deras di permukaan daun berlilin tanpa membasahi tubuh Otan. Otan memeluk ibunya erat-erat, merasa sangat aman di dalam dekapan hangat pelindung sejatinya.',
        illustrationUrl: '/src/assets/images/book_kancil_sungai_1793758427656.jpg',
        targetIntonationTip: 'Gunakan nada suara hangat yang menenangkan, menggambarkan pelukan kasih sayang seorang ibu.',
        focusWords: ['cekatan', 'daun talas', 'berlilin', 'dekapan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 5,
        text: 'Sore harinya setelah hujan reda, sang ibu melatih Otan merajut sarang tidur di pucuk dahan meranti. Mereka melipat ranting-ranting lentur menjadi anyaman mangkuk yang kokoh, lalu menutupinya dengan dedaunan harum agar empuk.\n\nOrangutan membuat sarang baru setiap sore untuk menjaga kebersihan dan menghindari pemangsa malam. Otan bangga karena untuk pertama kalinya ia berhasil membantu ibunya menyusun simpul sarang.',
        illustrationUrl: '/src/assets/images/book_kancil_sungai_1793758427656.jpg',
        targetIntonationTip: 'Sampaikan rasa bangga dan kemandirian anak dengan intonasi riang bersemangat.',
        focusWords: ['merajut', 'anyaman', 'kebersihan', 'kemandirian'],
        audioGuideTiming: []
      },
      {
        pageNumber: 6,
        text: 'Di bawah taburan miliaran bintang malam khatulistiwa yang gemerlap, Otan berbaring memandang langit dari sarang anyamannya yang nyaman.\n\nOrangutan adalah petani sejati rimba raya yang menyebarkan biji-bijian pohon hingga hutan tetap lestari. Menjaga habitat mereka berarti menjaga napas oksigen murni bagi seluruh umat manusia di bumi.',
        illustrationUrl: '/src/assets/images/book_kancil_sungai_1793758427656.jpg',
        targetIntonationTip: 'Tutup dengan nada damai, puitis, dan pesan ekologis yang menyentuh kesadaran global.',
        focusWords: ['gemerlap', 'petani rimba', 'oksigen murni', 'kelestarian'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'perahu-pinisi-bugis',
    title: 'Pelayaran Tangguh Perahu Pinisi Nusantara',
    level: 3,
    levelTitle: 'Level 3: Cerita & Paragraf Kompleks',
    ageRecommendation: 'Usia 8–10 Tahun',
    synopsis: 'Rahasia ketangguhan pelaut Bugis-Makassar merakit perahu layar legendaris tanpa paku besi untuk menaklukkan samudra luas.',
    coverImage: '/src/assets/images/book_penyu_raja_ampat_1793758990988.jpg',
    theme: 'Keahlian Maritim & Cita-Cita Luhur',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 8,
    wordCount: 400,
    badgeAward: {
      name: 'Nakhoda Pinisi Samudra',
      icon: '⛵',
      description: 'Luar biasa menyuarakan jargon maritim nusantara dengan vokal lantang penuh wibawa!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Di pesisir Pantai Tana Beru, Kabupaten Bulukumba, Sulawesi Selatan, suara dentuman kapak kayu dan gesekan gergaji bersahutan tanpa henti dengan deburan ombak Selat Makassar.\n\nPara maestro pembuat perahu tradisional, yang dihormati dengan gelar Panrita Lopi, sedang merakit sebuah mahakarya maritim legendaris bernama Perahu Pinisi. Kapal kayu raksasa ini telah diakui oleh UNESCO sebagai warisan budaya tak benda dunia.',
        illustrationUrl: '/src/assets/images/book_penyu_raja_ampat_1793758990988.jpg',
        targetIntonationTip: 'Gunakan nada lantang dan berwibawa, menghidupkan suasana pesisir galangan kapal tradisional.',
        focusWords: ['maestro', 'panrita lopi', 'maritim', 'unesco'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Yang paling mengagumkan dari pembuatan Pinisi adalah perakitannya yang sama sekali tidak menggunakan paku besi! Para Panrita Lopi menyambung balok-balok kayu besi dan kayu jati pilihan hanya dengan pasak kayu pipih dan kulit pohon khusus yang mengembang saat terkena air laut.\n\n"Kayu adalah makhluk hidup yang memiliki serat jiwa," tutur Daeng Malik, sang nakhoda tua, kepada cucunya, Arka. "Jika kita memperlakukannya dengan rasa hormat, ia akan menjaga kita di tengah amukan badai samudra."',
        illustrationUrl: '/src/assets/images/book_penyu_raja_ampat_1793758990988.jpg',
        targetIntonationTip: 'Sampaikan rahasia pasak kayu dengan nada takjub, lalu tirukan kearifan sang kakek dengan suara dalam.',
        focusWords: ['pasak kayu', 'balok', 'serat jiwa', 'amukan badai'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Setelah berbulan-bulan bekerja keras, tibalah saatnya upacara sakral Anyorong Lopi, yaitu tradisi mendorong perahu raksasa dari daratan pantai menuju ke laut lepas.\n\nRatusan warga desa bergotong royong menarik tambang sabut kelapa raksasa sambil melantunkan syair-syair pelaut Bugis kuno. Dengan satu hentakan kompak bersama, lambung kapal megah itu meluncur mulus membelah buih ombak biru!',
        illustrationUrl: '/src/assets/images/book_penyu_raja_ampat_1793758990988.jpg',
        targetIntonationTip: 'Tingkatkan dinamika membaca dengan ketukan ritme gotong royong yang bergemuruh riang.',
        focusWords: ['anyorong lopi', 'gotong royong', 'tambang', 'syair pelaut'],
        audioGuideTiming: []
      },
      {
        pageNumber: 4,
        text: 'Di geladak kapal, para awak memasang dua tiang utama yang melambangkan syahadat, serta membentangkan tujuh helai layar agung berwarna putih susu.\n\n"Tujuh layar ini melambangkan tekad nenek moyang kita untuk mengarungi tujuh samudra dunia," jelas Daeng Malik sambil mengikat simpul tali kekang layar. Arka memandang kagum pada kain layar yang menggelembung diterpa hembusan angin barat.',
        illustrationUrl: '/src/assets/images/book_penyu_raja_ampat_1793758990988.jpg',
        targetIntonationTip: 'Beri penekanan filosofis pada simbol tujuh helai layar dengan nada bangga yang membakar semangat.',
        focusWords: ['geladak', 'tujuh layar', 'simpul tali', 'menggelembung'],
        audioGuideTiming: []
      },
      {
        pageNumber: 5,
        text: 'Malam harinya di tengah lautan luas, kapal Pinisi melaju anggun tanpa bantuan mesin modern. Daeng Malik tidak menggunakan kompas digital, melainkan menatap gugusan rasi bintang Pari dan arah tiupan angin laut untuk memandu haluan kapal.\n\n"Nenek moyang pelaut Indonesia membaca tanda bintang di langit malam sebagaimana membaca huruf di lembaran buku," gumam Arka takjub sambil memegang roda kemudi kayu jati.',
        illustrationUrl: '/src/assets/images/book_penyu_raja_ampat_1793758990988.jpg',
        targetIntonationTip: 'Gunakan nada puitis dan penuh perenungan saat membaca tanda-tanda bintang di langit malam.',
        focusWords: ['haluan', 'rasi bintang', 'kemudi', 'tanda bintang'],
        audioGuideTiming: []
      },
      {
        pageNumber: 6,
        text: 'Kapal Pinisi meluncur perkasa membelah gelombang samudra, membuktikan kepada dunia bahwa bangsa Indonesia adalah bangsa pelaut ulung yang tangguh dan bermartabat.\n\nSemangat para Panrita Lopi dan ketangguhan perahu Pinisi akan senantiasa menjadi obor penyemangat bagi generasi muda untuk tidak pernah takut mengarungi samudra cita-cita yang tinggi.',
        illustrationUrl: '/src/assets/images/book_penyu_raja_ampat_1793758990988.jpg',
        targetIntonationTip: 'Tutup dengan intonasi klimaks yang megah, berjiwa ksatria maritim, dan penuh kebanggaan nasional.',
        focusWords: ['pelaut ulung', 'bermartabat', 'penyemangat', 'samudra cita'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'melodi-sasando',
    title: 'Melodi Daun Lontar Sasando dari Pulau Rote',
    level: 3,
    levelTitle: 'Level 3: Cerita & Paragraf Kompleks',
    ageRecommendation: 'Usia 8–10 Tahun',
    synopsis: 'Kisah seorang anak gembala di Nusa Tenggara Timur menemukan keajaiban alunan senar beresonansi pada mangkuk daun lontar kering.',
    coverImage: '/src/assets/images/book_burung_cendrawasih_1793758428212.jpg',
    theme: 'Seni Musik Tradisional & Ketekunan Jiwa',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 8,
    wordCount: 380,
    badgeAward: {
      name: 'Virtuoso Sasando Cilik',
      icon: '🎵',
      description: 'Luar biasa membawakan intonasi puitis yang selaras dengan alunan dawai petikan sasando!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Di sabana gersang Pulau Rote, pulau paling selatan Indonesia, angin kering berhembus lembut menggoyangkan pelepah pohon lontar yang menjulang tinggi.\n\nPohon lontar adalah pohon kehidupan bagi masyarakat Rote. Air niranya yang manis menjadi pelepas dahaga, buahnya menjadi makanan lezat, dan daunnya yang lebar dianyam menjadi atap rumah serta wadah air yang kuat.',
        illustrationUrl: '/src/assets/images/book_burung_cendrawasih_1793758428212.jpg',
        targetIntonationTip: 'Bacakan dengan nada mendayu-dayu, tenang, dan bersahabat melukiskan sabana Pulau Rote.',
        focusWords: ['sabana', 'pelepah', 'lontar', 'pohon kehidupan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Joni, seorang anak gembala berusia sepuluh tahun, sedang menggembalakan kawanan domba berbulu putih di padang rumput sabana. Sambil beristirahat di bawah naungan pohon lontar, ia memperhatikan sehelai daun lontar kering yang telah rontok ke tanah.\n\nSaat angin bertiup kencang menembus celah serat daun itu, terdengar desau nada merdu yang menyerupai senandung lembut seruling bambu.',
        illustrationUrl: '/src/assets/images/book_burung_cendrawasih_1793758428212.jpg',
        targetIntonationTip: 'Lafalkan deskripsi suara desau angin dengan kelembutan vokal yang memikat perhatian pendengar.',
        focusWords: ['gembala', 'naungan', 'serat daun', 'senandung'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Terinspirasi oleh bunyi ajaib itu, Joni membawa daun lontar tersebut ke rumah kakeknya, seorang pengrajin kayu tua yang bijaksana. Bersama-sama, mereka melengkungkan daun lontar kering membentuk mangkuk resonansi setengah lingkaran bernama Haik.\n\nDi tengah mangkuk daun lontar itu, mereka memasang sebatang tabung bambu yang dililiti puluhan kawat dawai tembaga halus dengan penala kayu cendana.',
        illustrationUrl: '/src/assets/images/book_burung_cendrawasih_1793758428212.jpg',
        targetIntonationTip: 'Gunakan nada bersemangat menceritakan proses merakit instrumen musik tradisional Sasando.',
        focusWords: ['terinspirasi', 'mangkuk resonansi', 'dawai', 'penala'],
        audioGuideTiming: []
      },
      {
        pageNumber: 4,
        text: 'Ting... klinting... ting! Jemari kecil Joni mulai memetik dawai-dawai kawat itu satu per satu. Getaran dawai merambat ke dinding daun lontar, memantulkan gelombang suara yang amat jernih bak gemerincing air terjun di celah bebatuan pegunungan.\n\nKawanan domba yang sedang merumput seketika berhenti mengunyah, mengangkat telinga mereka menikmati harmoni melodi yang begitu menyejukkan jiwa.',
        illustrationUrl: '/src/assets/images/book_burung_cendrawasih_1793758428212.jpg',
        targetIntonationTip: 'Beri intonasi berbinar pada tiruan bunyi petikan "Ting... klinting... ting!" seirama dawai musik.',
        focusWords: ['memetik', 'gelombang suara', 'gemerincing', 'harmoni'],
        audioGuideTiming: []
      },
      {
        pageNumber: 5,
        text: 'Pada malam pesta panen desa, Joni dipersilakan maju ke tengah lingkaran pelataran rumah adat. Dengan mengenakan topi khas Rote bernama Ti\'i Langga, ia mulai memainkan lagu daerah "Bolelebo".\n\nAlunan musik sasando yang syahdu membuat seluruh warga terdiam khidmat. Beberapa tetua desa bahkan meneteskan air mata haru mengenang keindahan tanah air dan kehangatan persaudaraan mereka.',
        illustrationUrl: '/src/assets/images/book_burung_cendrawasih_1793758428212.jpg',
        targetIntonationTip: 'Ucapkan istilah topi Ti\'i Langga dengan tepat, lalu bawakan suasana haru lagu Bolelebo secara mendalam.',
        focusWords: ['ti\'i langga', 'bolelebo', 'syahdu', 'persaudaraan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 6,
        text: 'Dari daun lontar kering yang sederhana, terciptalah mahakarya musik Sasando yang kini dikagumi hingga ke panggung konser internasional di seluruh dunia.\n\nKisah Joni membuktikan bahwa kearifan lokal Nusantara tidak pernah usang oleh zaman. Dengan kecintaan dan ketekunan, tangan anak bangsa mampu mengubah hal sederhana di sekitar kita menjadi karya seni berharga tinggi.',
        illustrationUrl: '/src/assets/images/book_burung_cendrawasih_1793758428212.jpg',
        targetIntonationTip: 'Tutup dengan nada optimis, bangga, dan pesan inspiratif tentang keluhuran budaya bangsa Indonesia.',
        focusWords: ['sasando', 'internasional', 'kearifan lokal', 'seni bernilai'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'si-pitung-betawi',
    title: 'Kisah Si Pitung Pendekar Budiman Betawi',
    level: 3,
    levelTitle: 'Level 3: Cerita & Paragraf Kompleks',
    ageRecommendation: 'Usia 8–10 Tahun',
    synopsis: 'Kepahlawanan pemuda Rawabelong yang rajin mengaji dan berlatih silat untuk menolong rakyat kecil dari kesewenang-wenangan.',
    coverImage: '/src/assets/images/book_danau_toba_1793758990406.jpg',
    theme: 'Keadilan, Nilai Kepahlawanan & Budi Pekerti',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 8,
    wordCount: 395,
    badgeAward: {
      name: 'Pendekar Keadilan Betawi',
      icon: '🥋',
      description: 'Luar biasa membawakan intonasi kepahlawanan dan keberanian membela kebenaran!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Pada akhir abad ke-19 di Batavia, tanah Betawi dilanda masa-masa sulit di bawah cengkeraman penjajah kolonial dan kesewenang-wenangan para tuan tanah kaya yang memeras keringat rakyat jelata.\n\nNamun di perkampungan Rawabelong yang asri bertabur kebun bunga anggrek, tumbuhlah seorang pemuda bernama Pitung. Sejak belia, ia dikenal sebagai anak yang rajin mengaji di surau dan selalu berbakti kepada kedua orang tuanya.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Gunakan gaya narasi sejarah yang tegas namun berempati pada nasib rakyat kecil.',
        focusWords: ['cengkeraman', 'kolonial', 'asri', 'berbakti'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Setiap sore usai membantu ayahnya merawat kambing, Pitung berguru ilmu silat Beksi kepada Haji Naipin, seorang ulama dan pendekar silat tersohor di tanah Betawi.\n\n"Ingat baik-baik pesan guru, Pitung," wejangan Haji Naipin sambil mengoreksi kuda-kuda kaki muridnya. "Pukulan dan tangkisan silatmu bukan untuk menyombongkan diri atau menindas sesama, melainkan sebagai perisai keadilan membela mereka yang lemah."',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Tirukan nasihat guru silat dengan suara berat, dalam, penuh wibawa dan ketegasan moral.',
        focusWords: ['silat beksi', 'tersohor', 'kuda-kuda', 'perisai keadilan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Hati Pitung teriris perih menyaksikan lumbung padi para petani miskin dirampas paksa oleh centeng-centeng tuan tanah yang kejam. Banyak keluarga yang terpaksa kelaparan karena seluruh hasil buminya dijarah habis.\n\nBersama beberapa sahabat seperjuangannya yang setia, Pitung memutuskan untuk mengambil tindakan nyata. Mereka menyusun rencana rahasia untuk merebut kembali hak rakyat yang telah dirampas secara zalim.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Gambarkan keprihatinan hati rakyat dengan nada sendu lalu bangkitkan nada tekad perjuangan.',
        focusWords: ['teriris', 'centeng', 'dijarah', 'tindakan nyata'],
        audioGuideTiming: []
      },
      {
        pageNumber: 4,
        text: 'Di tengah kegelapan malam, Pitung dan sahabatnya menyusup ke gudang penyimpanan tuan tanah yang rakus. Gerakan silatnya seringan embun pagi dan secepat kilat menyambar, hingga para penjaga bersenjata tak berkutik dibuatnya.\n\nMenariknya, Pitung sama sekali tidak menyimpan satu keping emas atau segenggam beras pun untuk dirinya sendiri. Seluruh hasil sitaan itu ia kemas rapi ke dalam karung-karung kain.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Percepat tempo membaca saat aksi menyusup cepat, lalu tekankan sifat kejujuran tokoh.',
        focusWords: ['menyusup', 'seringan embun', 'tak berkutik', 'kejujuran'],
        audioGuideTiming: []
      },
      {
        pageNumber: 5,
        text: 'Sebelum fajar merekah, karung-karung berisi beras dan koin uang secara diam-diam diletakkan di depan teras gubuk-gubuk janda tua, anak yatim piatu, dan petani miskin di seantero Batavia.\n\nKeesokan paginya, tangis haru dan doa rasa syukur berkumandang dari bibir rakyat jelata yang terselamatkan dari kelaparan. Nama Si Pitung pun dielu-elukan sebagai "Robin Hood dari Betawi" yang budiman.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Gunakan nada hangat, terharu, dan penuh rasa terima kasih saat rakyat jelata menerima bantuan.',
        focusWords: ['diam-diam', 'seantero', 'haru', 'budiman'],
        audioGuideTiming: []
      },
      {
        pageNumber: 6,
        text: 'Meskipun penjajah berulang kali mengerahkan pasukan untuk memburunya, kecerdikan dan kecintaan rakyat selalu melindungi langkah sang pendekar budiman.\n\nKisah Si Pitung mengajarkan kita bahwa kekuatan sejati seorang ksatria bukanlah terletak pada kehebatannya mengalahkan lawan, melainkan pada kemurnian hatinya membela kebenaran dan menolong sesama yang tertindas.',
        illustrationUrl: '/src/assets/images/book_danau_toba_1793758990406.jpg',
        targetIntonationTip: 'Tutup seluruh kisah dengan nada megah, patriotik, dan penegasan nilai budi pekerti yang luhur.',
        focusWords: ['kecerdikan', 'kekuatan sejati', 'kemurnian hati', 'tertindas'],
        audioGuideTiming: []
      }
    ]
  },
  {
    id: 'tarian-topeng-malang',
    title: 'Misteri Topeng Malangan dan Kayu Cendana',
    level: 3,
    levelTitle: 'Level 3: Cerita & Paragraf Kompleks',
    ageRecommendation: 'Usia 8–10 Tahun',
    synopsis: 'Perjalanan Sekar menyelami seni pahat topeng kayu di lereng Gunung Bromo untuk menghidupkan kembali karakter Panji Asmoro Bangun.',
    coverImage: '/src/assets/images/book_badak_ujung_kulon_1793758988740.jpg',
    theme: 'Seni Pahat Tradisional & Penghayatan Watak',
    author: 'Kak Gina Sofyan, S.Pd.',
    estimatedMinutes: 8,
    wordCount: 390,
    badgeAward: {
      name: 'Seniman Panji Nusantara',
      icon: '🎭',
      description: 'Luar biasa mengekspresikan dinamika watak karakter tokoh dengan vokal yang luwes dan anggun!'
    },
    pages: [
      {
        pageNumber: 1,
        text: 'Serpihan kayu cendana berserakan rapi di lantai sanggar seni lereng Gunung Kawi, Malang, Jawa Timur. Aroma wangi khas kayu berpadu dengan kepulan asap dupa melati, menciptakan suasana yang amat magis dan tenang.\n\nSekar, seorang gadis cilik berusia sepuluh tahun, duduk bersila mengamati jemari keriput kakeknya, Mbah Karimo, yang sedang menggerakkan tatah baja kecil memahat sepotong kayu gelondongan.',
        illustrationUrl: '/src/assets/images/book_badak_ujung_kulon_1793758988740.jpg',
        targetIntonationTip: 'Gunakan nada pengantar yang artistik, tenang, dan detail saat melukiskan suasana sanggar seni pahat.',
        focusWords: ['serpihan', 'cendana', 'tatah baja', 'gelondongan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 2,
        text: 'Di dinding sanggar, tergantung puluhan topeng kayu Malangan dengan aneka ekspresi wajah yang berlainan: ada yang tersenyum teduh, ada yang bermata tajam melotot, dan ada pula yang berhidung mancung anggun.\n\n"Topeng bukanlah sekadar penutup muka, Sekar," tutur Mbah Karimo lembut seraya meniup serbuk kayu dari ukiran hidung topeng. "Setiap goresan pahatan melambangkan sifat dasar manusia yang harus kita kenali dan kita kendalikan dengan budi pekerti."',
        illustrationUrl: '/src/assets/images/book_badak_ujung_kulon_1793758988740.jpg',
        targetIntonationTip: 'Bacakan nasihat sang kakek dengan suara pelan namun sarat makna filosofis kehidupan.',
        focusWords: ['ekspresi', 'goresan', 'sifat dasar', 'budi pekerti'],
        audioGuideTiming: []
      },
      {
        pageNumber: 3,
        text: 'Mbah Karimo mengambil kuas bulu kuda dan mangkuk cat alami berwarna-warni. Ia mulai mewarnai topeng Panji Asmoro Bangun, tokoh kesatria utama dalam cerita epos Jawa kuno.\n\n"Warna putih pada wajah Panji melambangkan kesucian hati dan kejujuran," jelas Mbah Karimo. "Warna merah pada tokoh Klana melambangkan hawa nafsu dan keberanian, sedangkan polesan emas melambangkan keluhuran martabat jiwa."',
        illustrationUrl: '/src/assets/images/book_badak_ujung_kulon_1793758988740.jpg',
        targetIntonationTip: 'Berikan penekanan yang jelas dan teratur saat menjelaskan makna simbol warna putih, merah, dan emas.',
        focusWords: ['kesucian', 'kejujuran', 'hawa nafsu', 'martabat'],
        audioGuideTiming: []
      },
      {
        pageNumber: 4,
        text: 'Sekar kemudian mengenakan kain selendang sutra merah dan memasang topeng Panji putih itu di wajahnya. Seketika, rasa gugup di dadanya lenyap berganti dengan ketenangan jiwa yang luar biasa.\n\nTung... tak... tung! Irama gending gamelan mulai ditabuh oleh para pemusik desa. Sekar melangkahkan kakinya perlahan, mengangkat kedua tangannya seirama desir angin pegunungan yang sejuk.',
        illustrationUrl: '/src/assets/images/book_badak_ujung_kulon_1793758988740.jpg',
        targetIntonationTip: 'Gunakan nada ritmis saat instrumen gamelan berbunyi, lalu alunkan gerakan tari dengan lembut.',
        focusWords: ['selendang', 'gamelan', 'ketenangan', 'pegunungan'],
        audioGuideTiming: []
      },
      {
        pageNumber: 5,
        text: 'Di pelataran candi kuno, ratusan penonton terpesona memandang gerakan tari Sekar. Di balik topeng kayu bisu itu, gerak lentik jemari dan kepakan selendangnya mampu menyampaikan emosi kesatria yang bijaksana tanpa sepatah kata pun terucap.\n\nMbah Karimo meneteskan air mata bahagia di sudut bibir panggung. Ilmu seni warisan leluhur yang telah ia rawat puluhan tahun kini berhasil bersemi indah di sanubari cucunya.',
        illustrationUrl: '/src/assets/images/book_badak_ujung_kulon_1793758988740.jpg',
        targetIntonationTip: 'Sampaikan rasa haru dan keindahan seni tari bisu dengan intonasi puitis yang menyentuh hati.',
        focusWords: ['pelataran candi', 'lentik', 'bisu', 'bersemi'],
        audioGuideTiming: []
      },
      {
        pageNumber: 6,
        text: 'Saat pertunjukan usai, tepuk tangan riuh penonton membahana di bawah naungan langit malam berhias rembulan purnama. Sekar membuka topengnya dan membungkuk hormat dengan senyum manis berseri.\n\nTopeng kayu Malangan bukan sekadar tarian masa lalu, melainkan cermin jiwa bangsa yang mengajarkan kita untuk selalu menjaga kesucian hati di tengah perputaran zaman modern.',
        illustrationUrl: '/src/assets/images/book_badak_ujung_kulon_1793758988740.jpg',
        targetIntonationTip: 'Tutup cerita dengan nada megah, penuh kehangatan, dan kebanggaan atas kekayaan budaya adiluhung Nusantara.',
        focusWords: ['rembulan', 'membungkuk hormat', 'cermin jiwa', 'adiluhung'],
        audioGuideTiming: []
      }
    ]
  }
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    question: 'Saat melihat kata baru di buku, apa yang biasanya kamu rasakan?',
    audioPromptText: 'Saat melihat kata baru di buku, apa yang biasanya kamu rasakan?',
    options: [
      {
        text: 'Aku mengeja huruf satu per satu: B - U - K - U.',
        label: 'Mengeja Huruf / Fonik',
        levelScore: 1,
        icon: '🔤'
      },
      {
        text: 'Aku bisa membaca satu kalimat pendek dengan lancar.',
        label: 'Kalimat Pendek',
        levelScore: 2,
        icon: '📖'
      },
      {
        text: 'Aku suka membaca cerita panjang dan dongeng sendiri!',
        label: 'Paragraf Panjang',
        levelScore: 3,
        icon: '🌟'
      }
    ]
  },
  {
    id: 2,
    question: 'Coba pilih kalimat mana yang paling nyaman kamu baca nyaring:',
    audioPromptText: 'Coba pilih kalimat mana yang paling nyaman kamu baca nyaring:',
    options: [
      {
        text: '"Bola Mimi ada di kebun bunga."',
        label: 'Kata Sederhana (3-6 kata)',
        levelScore: 1,
        icon: '⚽'
      },
      {
        text: '"Kancil melompat cepat, lalu berseru riang ke arah sungai!"',
        label: 'Kalimat dengan Tanda Baca (! ?)',
        levelScore: 2,
        icon: '🏃'
      },
      {
        text: '"Di pucuk pohon merbau nan kokoh, burung cendrawasih mengepakkan sayap keemasannya."',
        label: 'Narasi Kaya Kosakata',
        levelScore: 3,
        icon: '🪶'
      }
    ]
  },
  {
    id: 3,
    question: 'Berapa usiamu atau tingkat kelas sekolahmu saat ini?',
    audioPromptText: 'Berapa usiamu atau tingkat kelas sekolahmu saat ini?',
    options: [
      {
        text: 'Usia 4–6 Tahun (PAUD / TK / Kelas 1 Awal)',
        label: 'Pemula (4-6 Tahun)',
        levelScore: 1,
        icon: '🌱'
      },
      {
        text: 'Usia 6–8 Tahun (Kelas 1–2 SD)',
        label: 'Berkembang (6-8 Tahun)',
        levelScore: 2,
        icon: '🌿'
      },
      {
        text: 'Usia 8–10 Tahun (Kelas 3–4 SD ke atas)',
        label: 'Mahir (8-10 Tahun)',
        levelScore: 3,
        icon: '🌳'
      }
    ]
  }
];
