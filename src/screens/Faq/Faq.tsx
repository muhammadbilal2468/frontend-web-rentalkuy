import React, { useState } from "react";
import { Link } from "react-router-dom";
import { faqIMG, LogoImg } from "../../asset";
import "./Faq.css";

const Faq: React.FC = () => {
  const [viewQuestion1, setViewQuestion1] = useState<boolean>(false);
  const [viewQuestion2, setViewQuestion2] = useState<boolean>(false);
  const [viewQuestion3, setViewQuestion3] = useState<boolean>(false);
  const [viewQuestion4, setViewQuestion4] = useState<boolean>(false);
  const [viewQuestion5, setViewQuestion5] = useState<boolean>(false);
  const [viewQuestion6, setViewQuestion6] = useState<boolean>(false);
  const [viewQuestion7, setViewQuestion7] = useState<boolean>(false);
  const [viewQuestion8, setViewQuestion8] = useState<boolean>(false);
  const [viewQuestion9, setViewQuestion9] = useState<boolean>(false);
  const [viewQuestion10, setViewQuestion10] = useState<boolean>(false);
  const [viewQuestion11, setViewQuestion11] = useState<boolean>(false);
  const [viewQuestion12, setViewQuestion12] = useState<boolean>(false);
  const [viewQuestion13, setViewQuestion13] = useState<boolean>(false);
  const [viewQuestion14, setViewQuestion14] = useState<boolean>(false);
  const [viewQuestion15, setViewQuestion15] = useState<boolean>(false);
  const [viewQuestion16, setViewQuestion16] = useState<boolean>(false);
  const [viewQuestion17, setViewQuestion17] = useState<boolean>(false);
  const [viewQuestion18, setViewQuestion18] = useState<boolean>(false);
  const [viewQuestion19, setViewQuestion19] = useState<boolean>(false);
  const [viewQuestion20, setViewQuestion20] = useState<boolean>(false);

  const toggleQuestion1 = (state: boolean) => {
    setViewQuestion1(!state);
  };
  const toggleQuestion2 = (state: boolean) => {
    setViewQuestion2(!state);
  };
  const toggleQuestion3 = (state: boolean) => {
    setViewQuestion3(!state);
  };
  const toggleQuestion4 = (state: boolean) => {
    setViewQuestion4(!state);
  };
  const toggleQuestion5 = (state: boolean) => {
    setViewQuestion5(!state);
  };
  const toggleQuestion6 = (state: boolean) => {
    setViewQuestion6(!state);
  };
  const toggleQuestion7 = (state: boolean) => {
    setViewQuestion7(!state);
  };
  const toggleQuestion8 = (state: boolean) => {
    setViewQuestion8(!state);
  };
  const toggleQuestion9 = (state: boolean) => {
    setViewQuestion9(!state);
  };
  const toggleQuestion10 = (state: boolean) => {
    setViewQuestion10(!state);
  };
  const toggleQuestion11 = (state: boolean) => {
    setViewQuestion11(!state);
  };
  const toggleQuestion12 = (state: boolean) => {
    setViewQuestion12(!state);
  };
  const toggleQuestion13 = (state: boolean) => {
    setViewQuestion13(!state);
  };
  const toggleQuestion14 = (state: boolean) => {
    setViewQuestion14(!state);
  };
  const toggleQuestion15 = (state: boolean) => {
    setViewQuestion15(!state);
  };
  const toggleQuestion16 = (state: boolean) => {
    setViewQuestion16(!state);
  };
  const toggleQuestion17 = (state: boolean) => {
    setViewQuestion17(!state);
  };
  const toggleQuestion18 = (state: boolean) => {
    setViewQuestion18(!state);
  };
  const toggleQuestion19 = (state: boolean) => {
    setViewQuestion19(!state);
  };
  const toggleQuestion20 = (state: boolean) => {
    setViewQuestion20(!state);
  };

  const questionActive1 = `${viewQuestion1 ? "active" : "passive"}`;
  const questionActive2 = `${viewQuestion2 ? "active" : "passive"}`;
  const questionActive3 = `${viewQuestion3 ? "active" : "passive"}`;
  const questionActive4 = `${viewQuestion4 ? "active" : "passive"}`;
  const questionActive5 = `${viewQuestion5 ? "active" : "passive"}`;
  const questionActive6 = `${viewQuestion6 ? "active" : "passive"}`;
  const questionActive7 = `${viewQuestion7 ? "active" : "passive"}`;
  const questionActive8 = `${viewQuestion8 ? "active" : "passive"}`;
  const questionActive9 = `${viewQuestion9 ? "active" : "passive"}`;
  const questionActive10 = `${viewQuestion10 ? "active" : "passive"}`;
  const questionActive11 = `${viewQuestion11 ? "active" : "passive"}`;
  const questionActive12 = `${viewQuestion12 ? "active" : "passive"}`;
  const questionActive13 = `${viewQuestion13 ? "active" : "passive"}`;
  const questionActive14 = `${viewQuestion14 ? "active" : "passive"}`;
  const questionActive15 = `${viewQuestion15 ? "active" : "passive"}`;
  const questionActive16 = `${viewQuestion16 ? "active" : "passive"}`;
  const questionActive17 = `${viewQuestion17 ? "active" : "passive"}`;
  const questionActive18 = `${viewQuestion18 ? "active" : "passive"}`;
  const questionActive19 = `${viewQuestion19 ? "active" : "passive"}`;
  const questionActive20 = `${viewQuestion20 ? "active" : "passive"}`;

  return (
    <div className="faq">
      <div className="faq-header">
        <div className="faq-logo">
          <Link to="/">
            <img src={LogoImg} alt="" />
          </Link>
        </div>
        <div className="faq-menu">
          <div className="dark-mode"></div>
        </div>
      </div>
      <div className="faq-content">
        <div className="faq-img">
          <img src={faqIMG} alt="" />
        </div>
        <div className="faq-question">
          <div className={`question one ${questionActive1}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion1(viewQuestion1)}
            ></i>
            <p className="title">
              Cara Login Sebagai Penyedia Jasa Di Website Rentalkuy
            </p>
            {viewQuestion1 && (
              <>
                <p className="desc">
                  Login di website Rentalkuy hanya bisa dilakukan oleh partner /
                  penyedia jasa, sedangkan pengguna biasa hanya bisa melakukan
                  login menggunakan aplikasi. Download aplikasi Rentalkuy di
                  Playstore atau klik link berikut Rentalkuyplaystore.com .
                </p>
                <p className="desc">
                  Berikut beberapa tahapan yang partner bisa ikuti untuk bisa
                  masuk di website Rentalkuy:
                </p>
                <div className="step">
                  <p>
                    1. Masuk ke website Rentalkuy menggunakan browser
                    https://rentalkuy-dev.karyakami.id
                  </p>
                  <p>
                    2. Klik “Masuk” <br /> Setelah membuka link / webiste
                    Rentalkuy, anda akan diarahkan ke halaman Landing Page /
                    halaman utama. Silakan klik “Masuk”
                  </p>
                  <p>
                    3. Masukkan email dan kata sandi <br /> Anda hanya perlu
                    memasukkan email saat mendaftarkan diri menjadi penyedia
                    jasa dan kata sandi yanganda gunakan saat menjadi mendaftar
                    menjadi pengguna Rentalkuy.
                  </p>
                  <p>
                    <span className="bold"> Catatan :</span> Akun email
                    merupakan email usaha/pribadi yang didaftarkan saat menjadi
                    penyedia jasa dan kata sandi harus sesuai dengan yang pernah
                    didaftarkan sebelumnya, jika ada kesalahan anda tidak akan
                    bisa masuk dengan akun tersebut
                  </p>
                  <p>
                    Jika anda lupa kata sandi akun anda, anda bisa klik “Lupa
                    Kata Sandi”. Artikel berikut akan memandu anda untuk dapat
                    masuk kembali ke akun anda Lupa Kata Sandi Akun Pengguna
                    Rentalkuy
                  </p>
                  <p>
                    4. Klik “Masuk” <br /> Jika sudah memasukkan email dan kata
                    sandi dengan benar silakan klik “masuk”
                  </p>
                  <p></p>
                </div>
              </>
            )}
          </div>

          <div className={`question two ${questionActive2}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion2(viewQuestion2)}
            ></i>
            <p className="title">Cara daftar sebagai user aplikasi Rentalkuy</p>
            {viewQuestion2 && (
              <>
                <p className="desc">
                  Ada beberapa tahapan yang anda lalui agar bisa terdaftar
                  sebagai user aplikasi Rentalkuy, yakni sebagai berikut :
                </p>
                <p className="desc">Ada beberapa tahapan</p>
                <div className="step">
                  <p>1. Unduh aplikasi Rentalkuy di Playstore</p>
                  <p>
                    2. Buka aplikasi Rentalkuy maka anda akan diarahkan ke
                    halaman autentikasi yang berisikan pilihan masuk jika anda
                    sudah memiliki akun dan daftar jika anda belum memiliki
                    akun. Klik “Daftar”
                  </p>
                  <p>
                    3. Isilah formulir dengan benar <br /> Anda diminta mengisi
                    formulir pendaftaran yang berisi data dan dokumen yang wajib
                    anda isi. Informasi mengenai data apa saja yang diperlukan
                    di artikel berikut “Data pendaftaran Pengguna Rentalkuy”
                  </p>
                  <p>
                    Setelah selesai mengisi formulir pendaftaran, anda sudah
                    dapat mengajukan pendaftaran sebagai user. Klik “Daftar”
                    untuk melanjutkan.
                  </p>
                  <p>
                    <span className="bold">Catatan : </span>Dengan mengklik
                    “Daftar”, anda dipastikan telah menyetujui syarat dan
                    ketentuan pengguna aplikasi Rentalkuy. Informasi syarat dan
                    ketentuan ada di artikel berikut Syarat dan Ketentuan
                    Pengguna Rentalkuy.
                  </p>
                  <p>
                    4. Verifikasi <br /> Setelah pengajuan pendaftaran anda
                    terkirim, kode OTP akan otomatis masuk ke email yang sudah
                    didaftarkan untuk verifikasi jika anda mengklik tombol
                    “lanjut”.
                  </p>
                  <p>
                    Masukkan kode OTP yang sudah dikirimkan ke email ke dalam
                    kolom pengisian OTP yang tersedia dengan benar dan sesuai.
                    Lalu klik “Kirim”
                  </p>
                  <p>
                    Masukkan kode OTP yang sudah dikirimkan ke email ke dalam
                    kolom pengisian OTP yang tersedia dengan benar dan sesuai.
                    Lalu klik “Kirim”
                  </p>
                  <p>
                    Rentalkuy juga tidak memberlakukan biaya pendaftaran
                    (GRATIS) Hati-hati dengan tindakan penipuan, kami tidak
                    bekerjasama dengan pihak manapun dalam pendaftaran sebagai
                    mitra Rentalkuy.
                  </p>
                </div>
              </>
            )}
          </div>

          <div className={`question three ${questionActive3}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion3(viewQuestion3)}
            ></i>
            <p className="title">Lupa Kata Sandi Akun Pengguna Rentalkuy</p>
            {viewQuestion3 && (
              <>
                <p className="desc">
                  Berikut adalahh tahapan-tahapan untuk masuk kembali ke akun
                  yang pernah didaftarkan, namun anda lupa kata sandinya.
                </p>
                <div className="step">
                  <p>1. Unduh aplikasi Rentalkuy di playstore</p>
                  <p>
                    2. Buka aplikasi Rentalkuy maka anda akan diarahkan ke
                    halaman autentikasi yang akan mengarahkan anda untuk
                    langsung masuk ke akun anda. Selain untuk Masuk, halaman ini
                    juga berisikan pilihan daftar jika anda belum memiliki akun.
                  </p>
                  <p>
                    3. Klik opsi “Lupa Kata Sandi” <br /> Setelah selesai
                    mengisi formulir pendaftaran, anda sudah dapat mengajukan
                    pendaftaran sebagai user. Klik “Daftar” untuk melanjutkan.
                  </p>
                  <p>
                    4. Masukkan email <br /> Anda akan diharapkan memasukkan
                    email yang pernah terdaftar atau yang pernah didaftarkan di
                    Rentalkuy. Kemudian klik “Kirim”
                  </p>
                  <p>
                    5. Verifikasi OTP <br /> Setelah mengirimkan nama email
                    anda, silakan klik “Lanjut” untuk verifikasi OTP.
                  </p>
                  <p>
                    Kode OTP akan otomatis masuk ke email yang anda berikan.
                    Masukkan kode OTP yang dikirimkan pada kolom yang tersedia.
                    Kode OTP ini hanya berlaku 1 (satu menit), jadi anda
                    diharapkan segera mengisi kode OTP pada aplikasi Rentalkuy
                    saat menerima email verifikasi OTP, sebelum OTP kadaluarsa.
                    Jika OTP kadaluarsa, silakan klik “Kirim Ulang” dan
                    segeralah isi kode OTP anda sebelum OTP kadaluarsa lagi.
                  </p>
                  <p>
                    Jika kode OTP yang anda masukkan sudah sesuai dengan kode
                    OTP yang dikirimkan ke email, akan ada top up berhasil
                    verifikasi. Silakan klik “Lanjutkan” untuk menuju tahapan
                    selanjutnya.
                  </p>
                  <p>
                    6. Setel ulang kata sandi <br /> Pada tahapan ini anda
                    diwajibkan memasukkan kata sandi anda yang baru. Silakan
                    masukkan dan konfirmasi kembali kata sandi baru anda. Kata
                    sandi harus terdiri dari huruf kapital, huruf kecil, angka,
                    dan simbol, serta minimal 8 karakter. Kata sandi dan
                    konfirmasi kata sandi harus sama.
                  </p>
                  <p>
                    7. Buat kata sandi baru <br /> Jika sudah, silakan klik
                    “Verifikasi”.
                  </p>
                  <p>
                    Jika kata sandi dan konfirmasi kata sandi anda sudah sama,
                    maka akan muncul top up “Berhasil Verifikasi”. Silakan klik
                    “Lanjut”.
                  </p>
                  <p>8. Selamat kata sandi anda berhasil diubah</p>
                </div>
              </>
            )}
          </div>

          <div className={`question four ${questionActive4}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion4(viewQuestion4)}
            ></i>
            <p className="title">Cara Partner mengkonfirmasi Pengajuan Sewa</p>
            {viewQuestion4 && (
              <>
                <div className="step">
                  <p>
                    1. Unduh aplikasi Rentalkuy atau masuk situs Rentalkuy di
                    www.rentalkuy.id
                  </p>
                  <p>
                    2. Masuk atau daftar akun <br /> Masuk menggunakan akun
                    pengguna atau daftar terlebih dahulu jika belum mempunyai
                    akun pengguna. Berikut artikel tentang cara masuk
                    menggunakan akun yang pernah di daftar Cara Login / Masuk ke
                    aplikasi Rentalkuy dan cara daftar sebagai pengguna
                    Rentalkuy Cara daftar sebagai pengguna aplikasi Rentalkuy
                  </p>
                  <p>
                    3. Masuk ke halaman profil <br /> Klik icon profil pada
                    ujung kanan bawah
                  </p>
                  <p>
                    4. Klik opsi “Toko saya” <br /> Klik opsi “Daftar sebagai
                    Penyedia Jasa” jika anda belum memiliki akses sebagai
                    partner Rentalkuy. Dan daftarkan usaha anda agar bisa
                    menjadi partner Rentalkuy
                  </p>
                  <p>
                    5. Klik opsi “Pengajuan Sewa” <br /> Dalam halaman ini akan
                    muncul seluruh pengajuan sewa dari calon customer anda,
                    lengkap dengan profil calon customer dan produk yang ingin
                    disewa. Jika anda ingin menerima pengajuan tersebut, anda
                    tinggal mengklik “Terima”. Jika anda tidak ingin menerima
                    pengajuan tersebut, anda bisa mengklik “Tolak”.
                  </p>
                  <p>
                    Pengajuan sewa ini hanya berlaku 30 menit. Jika tidak
                    dikonfirmasi, maka pengajuan sewa otomatis akan hangus.
                  </p>
                </div>
              </>
            )}
          </div>

          <div className={`question five ${questionActive5}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion5(viewQuestion5)}
            ></i>
            <p className="title">
              Cara Login Sebagai Penyedia Jasa Di Website Rentalkuy
            </p>
            {viewQuestion5 && (
              <>
                <p className="desc">
                  Login di website Rentalkuy hanya bisa dilakukan oleh partner /
                  penyedia jasa, sedangkan pengguna biasa hanya bisa melakukan
                  login menggunakan aplikasi. Download aplikasi Rentalkuy di
                  Playstore atau klik link berikut Rentalkuyplaystore.com .
                  Berikut beberapa tahapan yang partner bisa ikuti untuk bisa
                  masuk di website Rentalkuy:
                </p>
                <div className="step">
                  <p>
                    1. Masuk ke website Rentalkuy menggunakan browser
                    <a href="" target="#blank">
                      https://rentalkuy.id
                    </a>
                  </p>
                  <p>
                    2. Klik “Masuk” <br /> Setelah membuka link / webiste
                    Rentalkuy, anda akan diarahkan ke halaman Landing Page /
                    halaman utama. Silakan klik “Masuk”
                  </p>
                  <p>
                    3. Masukkan email dan kata sandi <br /> Anda hanya perlu
                    memasukkan email saat mendaftarkan diri menjadi penyedia
                    jasa dan kata sandi yang anda gunakan saat menjadi mendaftar
                    menjadi pengguna Rentalkuy.
                  </p>
                  <p>
                    Catatan : Akun email merupakan email usaha/pribadi yang
                    didaftarkan saat menjadi penyedia jasa dan kata sandi harus
                    sesuai dengan yang pernah didaftarkan sebelumnya, jika ada
                    kesalahan anda tidak akan bisa masuk dengan akun tersebut.
                  </p>
                  <p>
                    Jika anda lupa kata sandi akun anda, anda bisa klik “Lupa
                    Kata Sandi”. Artikel berikut akan memandu anda untuk dapat
                    masuk kembali ke akun anda Lupa Kata Sandi Akun Pengguna
                    Rentalkuy.
                  </p>
                  <p>
                    4. Klik “Masuk” <br /> Jika sudah memasukkan email dan kata
                    sandi dengan benar silakan klik “masuk”
                  </p>
                  <p>5. Selamat anda sudah berhasil melakukan login</p>
                </div>
              </>
            )}
          </div>

          <div className={`question six ${questionActive6}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion6(viewQuestion6)}
            ></i>
            <p className="title">Lupa Kata Sandi Akun Pengguna Rentalkuy</p>
            {viewQuestion6 && (
              <>
                <p className="desc">
                  Berikut adalahh tahapan-tahapan untuk masuk kembali ke akun
                  yang pernah didaftarkan, namun anda lupa kata sandinya.
                </p>
                <div className="step">
                  <p>1. Unduh aplikasi Rentalkuy di playstore</p>
                  <p>
                    2.Buka aplikasi Rentalkuy maka anda akan diarahkan ke
                    halaman autentikasi yang akan mengarahkan anda untuk
                    langsung masuk ke akun anda. Selain untuk Masuk, halaman ini
                    juga berisikan pilihan daftar jika anda belum memiliki akun.
                  </p>
                  <p>3.Klik opsi “Lupa Kata Sandi”</p>
                  <p>
                    4. Masukkan email <br /> Anda akan diharapkan memasukkan
                    email yang pernah terdaftar atau yang pernah didaftarkan di
                    Rentalkuy. Kemudian klik “Kirim”
                  </p>
                  <p>
                    5. Verifikasi OTP <br /> Setelah mengirimkan nama email
                    anda, silakan klik “Lanjut” untuk verifikasi OTP.
                  </p>
                  <p>
                    Kode OTP akan otomatis masuk ke email yang anda berikan.
                    Masukkan kode OTP yang dikirimkan pada kolom yang tersedia.
                    Kode OTP ini hanya berlaku 1 (satu menit), jadi anda
                    diharapkan segera mengisi kode OTP pada aplikasi Rentalkuy
                    saat menerima email verifikasi OTP, sebelum OTP kadaluarsa.
                  </p>
                  <p>
                    Jika OTP kadaluarsa, silakan klik “Kirim Ulang” dan
                    segeralah isi kode OTP anda sebelum OTP kadaluarsa lagi
                  </p>
                  <p>
                    Jika kode OTP yang anda masukkan sudah sesuai dengan kode
                    OTP yang dikirimkan ke email, akan ada top up berhasil
                    verifikasi. Silakan klik “Lanjutkan” untuk menuju tahapan
                    selanjutnya
                  </p>
                  <p>
                    6. Setel ulang kata sandi <br /> Pada tahapan ini anda
                    diwajibkan memasukkan kata sandi anda yang baru. Silakan
                    masukkan dan konfirmasi kembali kata sandi baru anda. Kata
                    sandi harus terdiri dari huruf kapital, huruf kecil, angka,
                    dan simbol, serta minimal 8 karakter. Kata sandi dan
                    konfirmasi kata sandi harus sama.
                  </p>
                  <p>
                    7. Buat kata sandi baru <br /> Jika sudah, silakan klik
                    “Verifikasi”.
                  </p>
                  <p>
                    Jika kata sandi dan konfirmasi kata sandi anda sudah sama,
                    maka akan muncul top up “Berhasil Verifikasi”. Silakan klik
                    “Lanjut”.
                  </p>
                  <p>8. Selamat kata sandi anda berhasil diubah</p>
                </div>
              </>
            )}
          </div>

          <div className={`question seven ${questionActive7}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion7(viewQuestion7)}
            ></i>
            <p className="title">(judul salah)</p>
            {viewQuestion7 && (
              <>
                <p className="desc">
                  Berikut adalahh tahapan-tahapan untuk masuk kembali ke akun
                  yang pernah didaftarkan, namun anda lupa kata sandinya.
                </p>
                <div className="step">
                  <p>
                    1. Unduh aplikasi Rentalkuy atau masuk situs Rentalkuy di
                    www.rentalkuy.id
                  </p>
                  <p>
                    2. Masuk atau daftar akun <br /> Masuk menggunakan akun
                    pengguna atau daftar terlebih dahulu jika belum mempunyai
                    akun pengguna. Berikut artikel tentang cara masuk
                    menggunakan akun yang pernah di daftar Cara Login / Masuk ke
                    aplikasi Rentalkuy dan cara daftar sebagai pengguna
                    Rentalkuy Cara daftar sebagai pengguna aplikasi Rentalkuy
                  </p>
                  <p>
                    3. Masuk ke halaman profil <br /> Klik icon profil pada
                    ujung kanan bawah
                  </p>
                  <p>
                    4. Klik opsi “Toko saya” <br /> Klik opsi “Daftar sebagai
                    Penyedia Jasa” jika anda belum memiliki akses sebagai
                    partner Rentalkuy. Dan daftarkan usaha anda agar bisa
                    menjadi partner Rentalkuy
                  </p>
                  <p>
                    5. Klik opsi “Pengajuan Sewa” <br /> Dalam halaman ini akan
                    muncul seluruh pengajuan sewa dari calon customer anda,
                    lengkap dengan profil calon customer dan produk yang ingin
                    disewa. Jika anda ingin menerima pengajuan tersebut, anda
                    tinggal mengklik “Terima”. Jika anda tidak ingin menerima
                    pengajuan tersebut, anda bisa mengklik “Tolak”.
                  </p>
                  <p>
                    Pengajuan sewa ini hanya berlaku 30 menit. Jika tidak
                    dikonfirmasi, maka pengajuan sewa otomatis akan hangus.
                  </p>
                </div>
              </>
            )}
          </div>

          <div className={`question eight ${questionActive8}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion8(viewQuestion8)}
            ></i>
            <p className="title">Cara daftar mitra rentalkuy</p>
            {viewQuestion8 && (
              <>
                <p className="desc">
                  <span className="bold">
                    Pendaftaran Rentalkuy sebagai mitra dapat dilakukan langsung
                    di aplikasi Rentalkuy tanpa biaya apapun (Gratis). Hati-hati
                    dengan tindakan penipuan, kami tidak bekerjasama dengan
                    pihak manapun dalam pendaftaran sebagai mitra Rentalkuy.
                  </span>
                </p>
                <p className="desc">
                  Ada beberapa tahap untuk mendaftarkan usaha anda di Rentalkuy,
                  yaitu : <br /> · Pendaftaran data usaha : Saat mendaftar, anda
                  harus mengisi formulir pada aplikasi Rentalkuy secara lengkap,
                  benar, dan sesuai adanya. <br /> · Verifikasi : Setelah data
                  usaha diisi, Rentalkuy akan melakukan pengecekan data untuk
                  memastikan kelengkapan, kesesuaian, dan keabsahan data. Proses
                  ini berlangsung sekitar 2 hari kerja. <br /> · Aktivasi : Jika
                  data dinyatakan sesuai atau sudah diverifikasi oleh sistem
                  akan langsung diterbitkan aktivasi akun sebagai partner.
                </p>
                <p className="desc">
                  Cara pendaftaran/pengajuan sebagai partner
                </p>
                <div className="step">
                  <p>
                    1. Unduh aplikasi Rentalkuy melalui Playstore, lalu masuk
                    atau daftar jika belum memiliki akun.
                  </p>
                  <p>2. Pilih menu profil</p>
                  <p>3. Klik opsi “Daftar sebagai Penyedia Jasa”</p>
                  <p>
                    4. Mengisi data usaha Pada bagian ini, anda diwajibkan
                    mengisi dan melengkapi semua data, kemudian klik “kirim”
                  </p>
                  <p>
                    <span className="bo">Catatan : </span> Saat anda memilih
                    mengajukan data usaha anda menjadi mitra Rentalkuy, anda
                    sudah dinyatakan menyetujui syarat dan ketentuan aplikasi
                    Rentalkuy serta syarat dan ketentuan layanan Gopay / etc
                  </p>
                  <p>
                    5. Muncul top up konfimasi untuk verifikasi, pastikan data
                    sesuai, lalu klik “ Lanjut”.
                  </p>
                  <p>
                    6. Verifikasi Data Usaha Setelah semua data usaha dikirim,
                    Rentalkuy akan melakukan proses verifikasi yang berlangsung
                    sekitar 2 (dua) hari kerja.
                  </p>
                  <p>
                    - Jika data usaha sudah disetujui, anda akan mendapat
                    notifikasi di aplikasi dan email yang sudah didaftarkan.
                    Setelah itu, anda dapat melanjutkan ke proses aktivasi
                    layanan yang dipilih. <br /> - Jika data usaha belum
                    disetujui/butuh perbaikan/ditolak, silakan klik “perbaiki
                    data usaha” dan lihat alasannya. Segera perbaiki data usaha
                    anda yaa. Anda juga diberikan batas maksimal perbaikan data
                    yaitu sebanyak 3 kali dalam waktu 21 hari. Apabila anda
                    tidak memperbaiki dalam jangka waktu tersebut, maka aplikasi
                    anda akan dihapus. Anda dapat mengetahui solusi apabila data
                    usaha belum disetujui dengan baca artikel “Verifikasi data
                    usaha belum/tidak disetujui”
                  </p>
                  <p>
                    7. Aktivasi <br /> Jika semua data usaha anda berhasil
                    diverifikasi, akun anda otomatis akan teraktivasi
                  </p>
                  <p>
                    Jika sudah teraktivasi, partner sudah bisa mulai menggunakan
                    Rentalkuy dalam menjalankan bisnisnya. Klik “Mulai unggah
                    produk sewa”
                  </p>
                </div>
              </>
            )}
          </div>

          <div className={`question nine ${questionActive9}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion9(viewQuestion9)}
            ></i>
            <p className="title">Cara unggah produk sewa</p>
            {viewQuestion9 && (
              <>
                <p className="desc">
                  Untuk mengunggah produk sewa yang akan disewakan nanti,
                  partner akan mengikuti tahapan berikut :
                </p>
                <div className="step">
                  <p>
                    1. Unduh aplikasi Rentalkuy atau masuk situs Rentalkuy di
                    www.rentalkuy.id
                  </p>
                  <p>
                    2. Masuk atau daftar akun <br /> Masuk menggunakan akun
                    pengguna atau daftar terlebih dahulu jika belum mempunyai
                    akun pengguna. Berikut artikel tentang cara masuk
                    menggunakan akun yang pernah di daftar Cara Login / Masuk ke
                    aplikasi Rentalkuy dan cara daftar sebagai pengguna
                    Rentalkuy Cara daftar sebagai pengguna aplikasi Rentalkuy
                  </p>
                  <p>
                    3. Masuk ke halaman profil <br /> Klik icon profil pada
                    ujung kanan bawah
                  </p>
                  <p>
                    4. Klik opsi “Toko saya” <br /> Klik opsi “Daftar sebagai
                    Penyedia Jasa” jika anda belum memiliki akses sebagai
                    partner Rentalkuy. Dan daftarkan usaha anda agar bisa
                    menjadi partner Rentalkuy
                  </p>
                  <p>5. Klik opsi atau icon “Tambah produk baru”</p>
                  <p>
                    6. Tambahkan produk anda dengan mengisi data, deskripsi,
                    detail, dan foto produk anda
                  </p>
                  <p>7. Klik unggah produk</p>
                  <p>
                    8. Selamat produk anda berhasil di unggah, silakan cek
                    produk anda dengan mengklik “Lihat produk”
                  </p>
                </div>
              </>
            )}
          </div>

          <div className={`question ten ${questionActive10}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion10(viewQuestion10)}
            ></i>
            <p className="title">
              Cara berkomunikasi penyewa dengan penyedia jasa sewa
            </p>
            {viewQuestion10 && (
              <>
                <p className="desc">
                  Fitur chat ini hanya berlaku untuk penyewa yang sudah
                  disetujui pengajuan sewanya oleh penyedia jasa. Fitur ini juga
                  hanya berlaku mulai dari disetujuinya pengajuan sewa hingga
                  barang sewa dikembalikan.
                </p>
                <p className="desc">
                  Berikut tahapan yang anda lalui jika ingin berkomunikasi
                  dengan penyedia jasa :
                </p>
                <div className="step">
                  <p>1. Unduh aplikasi Rentalkuy di playstore</p>
                  <p>
                    2. Masuk atau daftar terlebih dahulu jika belum memiliki
                    akun. Artikel berikut akan membantu anda untuk mengetahui
                    bagaimana cara Masuk ke aplikasi Rentalkuy Cara Login User
                    dan bagaimana cara daftar sebagai pengguna aplikasi
                    Rentalkuy Cara Daftar sebagai pengguna Rentalkuy.
                  </p>
                  <p>
                    3. Anda akan otomatis terhubung dengan penyedia jasa barang
                    sewaan anda.
                  </p>
                  <p>4. Mulailah untuk berkomunikasi</p>
                </div>
              </>
            )}
          </div>

          <div className={`question 11 ${questionActive11}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion11(viewQuestion11)}
            ></i>
            <p className="title">Dokumen pendaftaran user rentalkuy</p>
            {viewQuestion11 && (
              <>
                <p className="desc">
                  Untuk mendaftarkan diri anda sebagai pengguna Rentalkuy, anda
                  harus mengisi formulir registrasi secara online di aplikasi
                  Rentalkuy.
                </p>
                <p className="desc">
                  Dokumen yang dibutuhkan : <br />· Identitas pemilik usaha
                  meliputi nama lengkap, nomor telepon, alamat email, NIK, Foto
                  KTP, dan Foto terbaru. Data-data diatas dikumpulkan untuk
                  mendaftarkan anda dari pengguna akun hingga menjadi bagian
                  dari partner, kemudian Rentalkuy akan memverifikasi bahwa data
                  yang anda cantumkan adalah benar adanya dan mengaktivasi akun
                  pengguna anda .
                </p>
                <p className="desc">Syarat dan ketentuan pendaftaran :</p>
                <div className="step">
                  <p>
                    1. Wajib melengkapi persyaratan pendaftaran bagi usaha
                    perorangan maupun badan usaha.
                  </p>
                  <p>
                    2. Nomor telepon usaha merupakan nomor telepon aktif dan
                    tidak dalam masa tenggang/hangus
                  </p>
                  <p>
                    3. KTP sudah sesuai ketentuan : <br /> - KTP asli (bukan
                    hasil fotokopi/scan) dan dapat terbaca dengan jelas. <br />
                    -Apabila fisik KTP rusak, dokumen pengganti seperti SIM dan
                    KK tidak dapat digunakan sebagai dokumen pendaftaran. <br />
                    - Data KTP terdaftar dan sesuai di Dukcapil <br /> - Saat
                    mengambil foto KTP, pastikan KTP anda berada tepat di dalam
                    kotak foto yang tersedia.
                  </p>
                  <p>
                    Cara unggah foto KTP yang benar : <br /> Foto diri harus
                    foto terbaru pemilik sewa, jelas, tidak buram, memiliki
                    pencahayaan yang bagus, dan berada tepat di dalam foto kotak
                    yang tersedia.
                  </p>
                  <p>
                    Cara unggah foto diri yang benar : <br />{" "}
                    <span className="bold">
                      PERHATIAN : <br /> Rentalkuy sudah terdaftar di Kominfo,
                      sehingga sudah terjamin keamanannya. Jika terjadi
                      penyalahgunaan data, maka pihak yang dirugikan dapat
                      melaporkan ke pihak berwajib.
                    </span>
                  </p>
                  <p>
                    Rentalkuy juga tidak memberlakukan biaya pendaftaran
                    (GRATIS) Hati-hati dengan tindakan penipuan, kami tidak
                    bekerjasama dengan pihak manapun dalam pendaftaran sebagai
                    mitra Rentalkuy.
                  </p>
                </div>
              </>
            )}
          </div>

          <div className={`question 12 ${questionActive12}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion12(viewQuestion12)}
            ></i>
            <p className="title">Cara pembayaran</p>
            {viewQuestion12 && (
              <>
                <p className="desc">
                  Untuk membayar barang sewaan, anda harus menyewa barang
                  terlebih dahulu. Berikut tahapan-tahapan yang anda lalui untuk
                  membayar produk sewaanmu kepada penyedia jasa sewa :
                </p>
                <div className="step">
                  <p>1. Unduh aplikasi Rentalkuy di playstore</p>
                  <p>
                    2. Masuk atau daftar terlebih dahulu jika belum memiliki
                    akun. Artikel berikut akan membantu anda untuk mengetahui
                    bagaimana cara Masuk ke aplikasi Rentalkuy Cara Login User
                    dan bagaimana cara daftar sebagai pengguna aplikasi
                    Rentalkuy Cara Daftar sebagai pengguna Rentalkuy.
                  </p>
                  <p>
                    3. Pilih produk yang anda inginkan dan ajukan penyewaan
                    produk tersebut Notes : Anda tidak bisa membatalkan
                    pengajuan sewa jika data pengajuan anda sudah dikirim.
                  </p>
                  <p>
                    4. Mendapat konfirmasi persetujuan pengajuan sewa dari
                    penyedia jasa, klik “Lanjut” untuk melanjutkan ke tahap
                    pembayaran
                  </p>
                  <p>
                    5. Klik produk sewa anda, dan lihat detail pembayaran yang
                    harus anda bayarAnda dapat melihat sejumlah tagihan yang
                    dibebankan kepada anda
                  </p>
                  <p>
                    6. Bayarlah sesuai total harga produk sewa yang tertera ke
                    nomor rekening yang ditampilkan dan unggah bukti pembayaran
                    anda <br /> Notes : Pembayaran hanya dapat dilakukan dalam 5
                    jam, jika lebih dari itu penyewa tidak melakukan pembayaran
                    maka pengajuan sewa dibatalkan oleh sistem.
                  </p>
                  <p>
                    7. Verifikasi bukti pembayaran <br /> Verifikasi bukti
                    pembayaran oleh admin membutuhkan waktu maksimal 5 menit.
                    Klik “Lanjut” untuk melnjutkan verifikasi”
                  </p>
                  <p>
                    8. Akan muncul pemberitahuan/notifikasi bahwa bukti
                    pembayaran yang anda unggah sudah berhasil melakukan
                    pembayaran. Klik untuk mengambil barang sewaanmu dengan
                    bantuan Gmaps.
                  </p>
                  <p>
                    9. Selamat anda sudah berhasil membayar produk sewaan anda!
                  </p>
                </div>
              </>
            )}
          </div>

          <div className={`question 13 ${questionActive13}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion13(viewQuestion13)}
            ></i>
            <p className="title">
              Cara berkomunikasi penyedia jasa sewa dengan penyewa
            </p>
            {viewQuestion13 && (
              <>
                <p className="desc">
                  Fitur chat ini hanya berlaku untuk penyewa yang sudah
                  disetujui pengajuan sewanya oleh penyedia jasa. Fitur ini juga
                  hanya berlaku mulai dari disetujuinya pengajuan sewa hingga
                  barang sewa dikembalikan. Berikut tahapan yang anda lalui jika
                  ingin berkomunikasi dengan penyedia jasa :
                </p>
                <div className="step">
                  <p>
                    1. Unduh aplikasi Rentalkuy di playstore atau masuk ke
                    website Rentalkuy menggunakan browser
                    https://rentalkuy.id.com
                  </p>
                  <p>
                    2.Untuk aplikasi silakan masuk menggunakan akun yang sudah
                    didaftarkan menjadi partner / penyedia jasa sewa atau daftar
                    terlebih dahulu jika belum memiliki akun. Artikel berikut
                    akan membantu anda untuk mengetahui bagaimana cara Masuk ke
                    aplikasi Rentalkuy Cara Login partner dan bagaimana cara
                    daftar sebagai pengguna aplikasi Rentalkuy Cara Daftar
                    sebagai partner. <br /> - Untuk website silakan langsung
                    masuk menggunakan akun yang sudah didaftarkan menjadi
                    partner / penyedia jasa
                  </p>
                  <p>
                    3.Untuk mobile klik fitur “Pesan” pada bagian bawah,
                    terletak di sebelah kiri profil. <br /> - Untuk website
                    silakan klik fitur “pesan” pada bagian atas
                  </p>
                  <p>
                    4. Anda akan otomatis terhubung dengan penyewa barang anda.
                  </p>
                  <p>5. Mulailah untuk berkomunikasi</p>
                </div>
              </>
            )}
          </div>

          <div className={`question 14 ${questionActive14}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion14(viewQuestion14)}
            ></i>
            <p className="title">Cara edit profil</p>
            {viewQuestion14 && (
              <>
                <p className="desc">
                  Berikut adalah tahapan-tahapan untuk mengedit profil anda,
                  baik profil pribadi maupun untuk bisnis anda.
                </p>
                <div className="step">
                  <p>
                    1. Unduh aplikasi Rentalkuy di playstore atau masuk ke
                    website Rentalkuy www.rentalkuy.id
                  </p>
                  <p>
                    2. Masuk atau daftar terlebih dahulu jika belum memiliki
                    akun. Artikel berikut akan membantu anda untuk mengetahui
                    bagaimana cara Masuk ke aplikasi Rentalkuy Cara Login User
                    dan Cara Login Partner serta bagaimana cara daftar sebagai
                    pengguna aplikasi Rentalkuy Cara Daftar sebagai pengguna
                    Rentalkuy dan Cara daftar sebagai Partner Rentalkuy
                  </p>
                  <p>
                    3. Klik fitur “Profil” pada bagian kanan atas pada website
                    dan pada kanan bawah pada mobile (aplikasi)
                  </p>
                  <p>4. Klik menu “Edit Profil”</p>
                  <p>5. Ubah data dan foto yang anda inginkan</p>
                  <p>
                    6. Klik “Simpan perubahan” <br />
                    Jika semua data dan foto profil yang anda ubah sudah benar
                    dan sesuai dengan yang anda inginkan, silakan klik “Simpan
                    Perubahan”
                  </p>
                </div>
              </>
            )}
          </div>

          <div className={`question 15 ${questionActive15}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion15(viewQuestion15)}
            ></i>
            <p className="title">
              Apa yang harus dilakukan jika terjadi kegagalan saat pengajuan
              sewa ?
            </p>
            {viewQuestion15 && (
              <>
                <p className="desc">
                  - Jika kegagalan pengajuan sewa anda dikarenakan pengajuan
                  kadaluarsa atau selama 30 menit berjalan penyedia jasa sewa
                  belum mengonfirmasi pengajuan anda, maka yang perlu anda
                  lakukan adalah melakukan pengajuan ulang pada produk yang sama
                  terse but hingga mendapat konfirmasi persetujuan dari penyedia
                  jasa sewa. Namun jika anda butuh waktu yang cepat, anda bisa
                  melakukan pengajuan sewa baru barang yang lain.
                </p>
                <p className="desc">
                  - Jika kegagalan pengajuan sewa anda dikarenakan pengajuan
                  ditolak oleh penyedia jasa sewa, maka anda hanya bisa
                  melakukan pengajuan sewa baru barang lain selain barang yang
                  sudah ditolak atau dengan kata lain anda bisa mengajukan sewa
                  baru barang yang ingin anda sewa di penyedia jasa yang lain.
                </p>
              </>
            )}
          </div>

          <div className={`question 16 ${questionActive16}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion16(viewQuestion16)}
            ></i>
            <p className="title">
              Apa yang harus dilakukan jika terjadi kegagalan saat pengajuan
              sebagai partner ?
            </p>
            {viewQuestion16 && (
              <>
                <p className="desc">
                  Saat mengajukan diri anda sebagai partner Rentalkuy, Rentalkuy
                  akan melakukan pengecekan data untuk memastikan kelengkapan,
                  kesesuaian, dan keabsahan data. Apabila data anda sudah benar
                  dan sesuai, maka anda sudah terverifikasi dan berhasil menjadi
                  partner Rentalkuy. Namun sebaliknya, jika pengajuan anda
                  ditolak maka data anda ada yang tidak valid. Yang anda harus
                  lakukan adalah mengajukan ulang usaha anda menjadi partner
                  Rentalkuy dengan melengkapi data anda terlebih dahulu dan
                  harus sudah dipastikan bahwa data yang anda isi sudah benar
                  dan sesuai. Jika data yang anda isi sudah benar namun tetap
                  tertolak oleh sistem, silakan ajukan komplain ke Rentalkuy
                  dengan fitur “Pusat Bantuan” yang terletak di bagian akun.
                </p>
              </>
            )}
          </div>

          <div className={`question 17 ${questionActive17}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion17(viewQuestion17)}
            ></i>
            <p className="title">
              Apa yang harus dilakukan jika terjadi gagal login ke aplikasi dan
              atau website ?
            </p>
            {viewQuestion17 && (
              <>
                <p className="desc">
                  Login ke aplikasi dan website hanya menggunakan satu cara
                  yaitu dengan email dan kata sandi yang sudah pernah dibuat
                  saat pendaftaran sebagai user aplikasi Rentalkuy. Jadi
                  pastikan email yang anda gunakan merupakan email yang anda
                  gunakan saat mendaftar sebagai user aplikasi Rentalkuy dan
                  pastikan kata sandi yang anda masukkan sudah sesuai dengan
                  password yang anda buat saat mendaftar sebagai user aplikasi
                  Rentalkuy.
                </p>
                <p className="desc">
                  Jika anda lupa kata sandi anda, artikel berikut akan membantu
                  anda untuk mereset password anda Lupa Kata Sandi User
                </p>
              </>
            )}
          </div>

          <div className={`question 18 ${questionActive18}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion18(viewQuestion18)}
            ></i>
            <p className="title">Bagaimana cara mengembalikan barang sewa ?</p>
            {viewQuestion18 && (
              <>
                <p className="desc">
                  Anda hanya perlu mengembalikan barang sewa anda ke tempat
                  penyedia jasa, saat masa penyewaan sudah berakhir atau saat
                  ada peringatan notifikasi pengembalian barang sewa di aplikasi
                  Rentalkuy.
                </p>
              </>
            )}
          </div>

          <div className={`question 19 ${questionActive19}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion19(viewQuestion19)}
            ></i>
            <p className="title">
              Apa yang harus dilakukan jika barang sewa yang sudah dibayar
              ternyata tidak sesuai dengan deskripsi produk yang tertera di
              aplikasi ?
            </p>
            {viewQuestion19 && (
              <>
                <p className="desc">
                  Anda bisa mengajukan komplain ke aplikasi Rentalkuy dengan
                  fitur “Pusat Bantuan” yang terletak di bagian akun.
                </p>
              </>
            )}
          </div>

          <div className={`question 20 ${questionActive20}`}>
            <i
              className="fa-solid fa-chevron-down"
              onClick={(e) => toggleQuestion20(viewQuestion20)}
            ></i>
            <p className="title">
              Bagaimana cara untuk memperpanjang masa sewa ?
            </p>
            {viewQuestion20 && (
              <>
                <p className="desc">
                  Silakan hubungi penyedia jasa terlebih dahulu, apabila
                  penyedia jasa memperbolehkan perpanjangan silakan ajukan ulang
                  produk yang sedang anda sewa dan lakukan transaksi ulang sama
                  seperti pengajuan sewa.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
