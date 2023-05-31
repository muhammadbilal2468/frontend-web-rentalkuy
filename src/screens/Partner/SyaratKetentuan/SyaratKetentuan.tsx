import React from "react";
import "./SyaratKetentuan.css";

const SyaratKetentuan: React.FC = () => {
  return (
    <>
      <div className="syarat-ketentuan">
        <h2>
          Syarat dan ketentuan <br /> Penyedia jasa
        </h2>
        <div className="desc-sk">
          <ul>
            <li>
              Pengguna menjamin bahwa setiap data badan usaha maupun usaha
              perorangan yang dimasukkan untuk terdaftar dalam aplikasi adalah
              benar, lengkap, dan terkini.{" "}
            </li>
            <li>
              Penamaan informasi produk harus dilakukan sesuai dengan informasi
              detail, spesifikasi, dan kondisi produk, dengan demikian pengguna
              tidak diperkenankan untuk mencantumkan nama, deskripsi, gambar dan
              atau kata yang tidak berkaitan dan/atau tidak sesuai dengan produk
              tersebut.
            </li>
            <li>
              Produk baik foto maupun keterangan (detail informasi) tidak
              mengandung unsur sara, diskriminasi, merendahkan atau menyudutkan
              orang lain, vulgar, bersifat ancaman, atau hal-hal lain yang dapat
              dianggap tidak sesuai dengan nilai dan norma sosial dan/atau
              ketentuan hukum yang berlaku di Indonesia. Jika diketahui, maka
              Rental.id berhak melakukan tindakan yang diperlukan atas
              pelanggaran ketentuan ini, antara lain penghapusan konten,
              pemblokiran akun, dan lain-lain.
            </li>
            <li>
              Pemilik sewa wajib memberikan konfirmasi untuk menerima dan/atau
              menolak pesanan dari calon konsumen dalam batas waktu 30 menit
              terhitung sejak adanya notifikasi pesanan barang dari Rental.id.
              Apabila dalam batas waktu tersebut tidak ada balasan dari pemilik
              sewa maka secara otomatis pesanan akan dibatalkan.
            </li>
            <p>
              (<span className="span-sk-notes">Notes</span>: Notifikasi
              pengajuan pesanan dari calon konsumen ini akan muncul seperti
              alarm di sistem pemilik sewa dan tetap bertahan selama 30 menit
              hingga pemilik sewa mengkonfirmasi pengajuan sewa tersebut).{" "}
            </p>
            <li>
              Pemilik sewa berhak melaporkan ke pihak berwenang jika terdapat
              manipulasi transaksi yang merugikan pemilik sewa.
            </li>
            <li>
              Pemilik sewa berhak melaporkan ke pihak berwajib jika penyewa
              melakukan penghilangan barang, tidak melakukan penggantian
              kerusakan barang, dan tidak melakukan pelunasan transaksi sewa.
            </li>
            <p>
              (<span className="span-sk-notes">Notes</span> : Pemilik sewa wajib
              memiliki saldo akun minimal sebesar Rp50.000 untuk keperluan
              pembayaran biaya administrasi konsumen yang memilih pembayaran
              tunai)
            </p>
            <li>
              Pemilik sewa dilarang memberikan data kontak pribadi dengan maksud
              untuk melakukan transaksi secara langsung kepada konsumen maupun
              calon konsumen diluar layanan Rental.id
            </li>
            <li>
              Rental.id berwenang membatalkan transaksi dan atau menahan dana
              transaksi jika ditemukan adanya manipulasi transaksi
            </li>
            <li>Syarat dan ketentuan ini dapat berubah sewaktu-waktu</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SyaratKetentuan;
