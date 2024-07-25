# Technical Test

## Init Project

```raw
git clone  https://github.com/komporbakar/technical-test-markaz.git
```

## 1. Create Dice Game

run the dice game simply with the following command

```
node question-satu.js
```

## 2. Create Function to show Hastag with space reverse

```
node question-dus.js
```

3. Database Concept

### ERD

```raw
1. tb_user
- id            int
- username      string
- password      string
- role          enum("owner", "cashier")

2. tb_makanan
- id            int
- name          string
- image         string
- price         string
- stock         string

3. tb_payment
- id            int
- name          string

4. tb_transaction
- id            int
- total_payment float
- payment_id    int [relation belongs to may to tb_payment]
- created_at    timestamp

5. tb_detail_transaction
- id                int
- transaction_id    int [relation belongs to many tb_transaction]
- makanan_id        int [relation belongs to many tb_makanan]
- quantity          int
- total             float

```

### Analisa Kebutuhan:

1. Aplikasi ini bisa memasukkan pesanan-pesanan makanan pelanggan

- Untuk Backend Bisa menggunakan node js dengan framework express js untuk membuaat CRUD dan melakukan pemesanan karena termasuk framework yang cepat dan tidak berat dan untuk frontend bisa menggunakan react js karena single page application yang dimana user tidak perlu reload halaman saat berpindah menu.

2. Aplikasi ini bisa mengeluarkan struk pembelian

- Untuk mencetak struk pembelian maka harus terhubung dengan suatu printer dan tekhnilogi yang ingin saya gunakan adalah xml-escpos-helper karena fitur cukup lengkap dan mudah dipahami

3. Aplikasi ini bisa mengeluarkan laporan penghasilan mingguan dan bulanan

- untuk mengeluarkan laporan bulanan maka harus membuat dashboard yang dimana dashboard tersebut memiliki detail penjualann seperti grafik / chart yang bisa difilter perminggu mapupun perbulan dan teknologi yang akan saya gunakan adalah chart js dan bisa di download dalam bentuk file csv dengan library exjeljs

4. Aplikasi ini bisa mengeluarkan laporan stok

- untuk mengeluarkan stok bisa dilakukan pengcekan pada halaman admin dan bisa terlihat di samping menu makanan dengan cara melakukan query seperti berikut

```raw
SELECT stock FROM tb_makanan WHERE ID = ?
```

5. Aplikasi dapat mengirim struk ke email pembeli jika diperlukan

- Untuk mengirim email ke email pembeli dapat menggunakan teknologi nodemailer yang dimana bersifat optional apabila pembeli meminta bertujuan agar dapat memanage pengeluaran pembeli.

6. Aplikasi dapat dibayarkan dengan QRIS, Virtual Account dll.

- Untuk dapat menggunakan QRIS dll dapat integrasi payment gateway seperti midtrans

#### Best Regards,

#### Muhamad Arif Nurrohman
