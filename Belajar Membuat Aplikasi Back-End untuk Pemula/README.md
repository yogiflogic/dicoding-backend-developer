Persiapan Project Nodejs dengan Hapi Framework

- npm init --y

Tool Tambahan :

- npm install nodemon --save-dev
  dengan tools ini kita tak perlu menjalankan ulang server ketika terjadi perubahan pada berkas JavaScript
- npm install eslint --save-dev

  - npx eslint --init
    konfigurasi eslint :

    - How would you like to use ESLint? -> To check, find problems, and enforce code style.
    - What type of modules does your project use? -> CommonJS (require/exports).
    - Which framework did you use? -> None of these.
    - Does your project use TypeScript? -> N.
    - Where does your code run? -> Node (pilih menggunakan spasi).
    - How would you like to define a style for your project? -> Use a popular style guide.
    - Which style guide do you want to follow? -> (Anda bebas memilih, sebagai contoh pilih AirBnB).
    - What format do you want your config file to be in? -> JSON.
    - Would you like to …… (seluruh pertanyaan selanjutnya) -> Y.

    Setelah menjawab seluruh pertanyaan yang diberikan,
    maka akan terbentuk berkas konfigurasi eslint dengan nama .eslintrc.json

    menambahkan npm runner berikut di dalam berkas package.json :
    "scripts": {
    "start": "nodemon server.js",
    "lint": "eslint ./"
    },

    - npm run lint :
      Pada Terminal, kita dapat melihat terdapat eror dan warning (bila kita menggunakan AirBnB code style)
      fungsi dari ESLint, ia akan memberi tahu alasan dan letak kesalahan dalam penulisan kode
      Tiap eror yang tampil, itu menandakan adanya penulisan kode yang tidak sesuai dengan style guide yang sudah kita tetapkan
    - instal eslint di Visual Studio
      Untuk pengguna Windows, ekstensi ESLint belum sepenuhnya diaktifkan
      Kita perlu mengizinkan ekstensi ESLint berjalan melalui icon ‘Lampu’ yang muncul ketika kita mengarahkan kursor ke kode console
      Pilih “Allow Everywhere” pada pop-up yang muncul.
      Kemudian, tutup dan buka ulang proyek menggunakan VSCode.

    Agar sinkron dengan gaya penulisan di ESLint, Kita bisa mengatur indentasi dan line spacing di VSCode sesuai dengan style guide yang digunakan pada ESLint
    Pengaturan tersebut berada di bottom bar VSCode

    Kita bisa menonaktifkan aturan no-console pada berkas .eslintrc.json dengan menambahkan properti no-console dengan nilai off pada rules

Membuat HTTP server

- npm install @hapi/hapi

Membuat properti id yang string dan harus unik :

- npm install nanoid
  const id = nanoid(16);

Same-Origin Policy (di client server atau dari alamat server lain atau origin yang berbeda)
Tidak semua data bisa diambil dari origin yang berbeda / server yang berbeda
Seperti data JSON yang didapatkan melalui teknik XMLHTTPRequest atau fetch
Solusinya :
Menerapkan CORS pada Route
CORS dapat ditetapkan pada spesifik route dengan menambahkan properti options.cors di konfigurasi route

- Buka file routes.js tambahakan dibawah handler :
  routes: {
  cors: {
  origin: ['*'],
  },
  },

Menerapkan CORS pada Web Server
CORS pada cakupan server agar tak perlu lagi repot-repot mendefinisikan CORS pada setiap route yang ada
Untuk cakupan CORS lebih luas untuk seluruh Route yang ada di server
bisa tetapkan CORS pada konfigurasi ketika hendak membuat server dengan menambahkan properti routes.cors

- Buka file server.js tambahakan dibawah locahhost :
  routes:{
  cors: {
  origin: ['*'],
  },
  },
