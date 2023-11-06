# Aplikasi Inventory Gudang

Aplikasi Inventory Gudang adalah sebuah aplikasi yang dibuat menggunakan Express (backend) dan React JS (frontend) untuk mengelola stok barang di gudang. Aplikasi ini memungkinkan pengguna untuk melakukan berbagai proses seperti cek transaksi, melakukan transaksi, mengurangi barang berdasarkan metode First-In-First-Out (FIFO), serta melihat penghasilan dan stok barang yang tersedia.

## Link Frontend

Anda dapat mengakses aplikasi frontend melalui tautan berikut: [Frontend Inventory Gudang](https://github.com/robbysobarii/Inventory-Web)

## Fitur Aplikasi

Aplikasi Inventory Gudang memiliki beberapa fitur utama, termasuk:

- **Cek Transaksi:** Pengguna dapat melihat daftar transaksi yang telah dilakukan, termasuk transaksi pembelian dan penjualan barang.

- **Melakukan Transaksi:** Pengguna dapat melakukan transaksi untuk membeli atau menjual barang di gudang. Setiap transaksi akan tercatat dengan baik.

- **Mengurangi Barang (FIFO):** Aplikasi menerapkan metode First-In-First-Out (FIFO) untuk mengurangi barang. Barang yang pertama masuk akan menjadi yang pertama keluar saat ada transaksi penjualan.

- **Cek Penghasilan:** Pengguna dapat melihat penghasilan dari transaksi penjualan barang.

- **Cek Stok Barang:** Aplikasi memungkinkan pengguna untuk melihat daftar barang yang masih tersedia di gudang beserta jumlah stoknya.

## Instalasi dan Penggunaan

Berikut adalah langkah-langkah untuk menginstal dan menjalankan aplikasi ini:

1. Clone repositori frontend ke komputer Anda:

```
git clone https://github.com/robbysobarii/Inventory-Web.git
```
2. Pindah ke direktori frontend
```
cd Inventory-Web
```
3. Install semua dependensi frontend
```
npm install
```
4. Clone repositori backend ke komputer Anda
```
git clone https://github.com/username/repo-backend.git
```
5. Pindah ke direktori backend
```
cd repo-backend
```
6. Install semua dependensi backend
```
npm install
```
7. Setel konfigurasi database dan lingkungan yang sesuai dengan kebutuhan Anda di file .env di direktori backend.
8. Jalankan backend server
```
npm start
```
9. Jalankan frontend server
```
npm start
```
Aplikasi akan berjalan di browser Anda. Anda dapat mengaksesnya di alamat http://localhost:3000 untuk frontend dan http://localhost:4000 untuk backend.

# Panduan Repositori Github

## Membuat Halaman

1. **Organisasi File**: Setiap halaman yang dibuat harus ditempatkan di direktori `/pages`.

2. **Struktur File**: Setiap halaman harus memiliki folder sendiri, berisi:
   - `index.js`: mengekspor file JSX.
   - `[NamaHalaman].jsx`: berisi konten dari halaman tersebut.
   - `style.module.css`: berisi gaya/styling untuk halaman tersebut.

3. **Mengekspor Halaman**: Setelah membuat folder halaman, pastikan untuk mengekspor folder tersebut di file `index.js` yang berada di direktori `/pages`.

4. **Routing Halaman**: Setelah mengekspor halaman, tambahkan pernyataan impor untuk halaman tersebut di `app.js` dan tambahkan route yang sesuai sesuai kebutuhan.

5. **Konvensi Penamaan File**: Nama file harus diawali dengan huruf kapital (misalnya, `DaftarToko`).

6. **Konvensi Penamaan Folder**: Nama folder harus dalam huruf kecil. Jika nama folder terdiri dari dua kata, mereka harus dipisahkan dengan tanda hubung (misalnya, `daftar-toko`).

7. **Memanggil Halaman di app.js**: Halaman harus dipanggil sesuai nama file dan route harus cocok dengan nama folder (misalnya, `<Route path="/daftar-toko" element={<DaftarToko />} />`).

## Melakukan Perubahan

1. **Pembuatan Cabang**: Setiap pengembang harus membuat cabang baru untuk setiap perubahan yang mereka buat. Nama cabang harus mengikuti template pada poin 2.

2. **Template Penamaan Cabang**: Cabang harus diberi nama `[Nama Pengembang]_[Nama Halaman]_[Nomor Perubahan]` (misalnya, `robby_DaftarToko_1`).

3. **Template Penamaan Commit**: Pesan commit harus mengikuti template `[Nama Developer]_[Nama Perubahan/Fitur]_[Tanggal Perubahan]` (misalnya, `Robby_DaftarTokoFiturLengkap_27072023`).

4. **Aturan Tambahan**: isi deskripsinya adalah menjelaskan apa saja perubahan yg dilakukan

5. **Aturan Tambahan**: selalu pull main sebelum merge req dan berkabar setelah merge req

Patuhi aturan dan konvensi ini untuk memastikan kerjasama yang lancar dan komunikasi yang jelas dalam tim. Selamat coding!


# Developer 

[Robby Sobari](https://github.com/robbysobarii)
