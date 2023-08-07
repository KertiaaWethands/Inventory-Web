import * as React from 'react';
import Button from '@mui/material/Button';
import { Paper, Stack, Box, Grid, Container } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from './style.module.css';

export const Kasir = () => {
  function createData(kode_barang, nama_barang, harga_satuan, jumlah) {
    return { kode_barang, nama_barang, harga_satuan, jumlah };
  }

  const [datarows, setDatarows] = React.useState([
    createData('TKCJRD001', 'Royco @ 250g', 50000, 2),
    createData('TKSKMD001', 'Rinso @ 1L', 45000, 2),
    createData('TKCJRD001', 'Royco @ 250g', 50000, 2),
    createData('TKSKMD001', 'Rinso @ 1L', 45000, 2),
  ]);

  const separator = (num) => {
    let temp = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return temp;
  }

  // State untuk menyimpan input dari popup
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [kodeBarang, setKodeBarang] = React.useState('');
  const [namaBarang, setNamaBarang] = React.useState('');
  const [hargaSatuan, setHargaSatuan] = React.useState('');
  const [jumlahBarang, setJumlahBarang] = React.useState('');

  // Fungsi untuk membuka popup
  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  // Fungsi untuk menutup popup
  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  // Fungsi untuk menambahkan data barang dari popup ke datarows
  const handleTambahBarang = () => {
    // Validasi jika ada input yang kosong atau harga dan jumlah tidak valid
    if (!kodeBarang || !namaBarang || !hargaSatuan || !jumlahBarang || isNaN(hargaSatuan) || isNaN(jumlahBarang)) {
      alert('Mohon isi semua data barang dengan benar.');
      return;
    }

    const newData = createData(kodeBarang, namaBarang, parseInt(hargaSatuan), parseInt(jumlahBarang));
    setDatarows([...datarows, newData]);
    handleClosePopup();
  };


  return (
    <Box className={styles.container} position="relative">
      <div className={styles.title}>Kasir</div>

      {/* Tombol Tambah Barang */}
      <div className={styles.addButtonContainer}>
        <Button
          variant="contained"
          style={{
            background: 'linear-gradient(#D3EBCD, #B1E9A3)',
            color: '#000000',
            fontWeight: 'bold',
            paddingLeft: '35px',
            paddingRight: '35px',
            borderRadius: '100px',
          }}
          onClick={handleOpenPopup}
        >
          + Tambah
        </Button>
      </div>


      <Box sx={{ minHeight: '40vh' }} classNames={styles.boxTable}>
        <TableContainer component={Paper} sx={{ maxHeight: '56vh', borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}>
          <Table stickyHeader sx={{
            minWidth: 450, "& .MuiTableCell-head": {
              backgroundColor: "#AEDBCE"
            },
          }}
          >
            <TableHead >
              <TableRow >
                <TableCell align='center'>No</TableCell>
                <TableCell align='center'>Kode Barang</TableCell>
                <TableCell align='center'>Nama Barang</TableCell>
                <TableCell align='center'>Harga Satuan</TableCell>
                <TableCell align='center'>Jumlah</TableCell>
                <TableCell align='center'>Harga</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datarows.map((row, i) => (
                <TableRow
                  key={row.kode_barang}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align='center' width="20">{i + 1}</TableCell>
                  <TableCell align='center' width="100">{row.kode_barang}</TableCell>
                  <TableCell align='center' component="th" scope="row">
                    {row.nama_barang}
                  </TableCell>
                  <TableCell align='center' width="150">Rp. {separator(row.harga_satuan)} </TableCell>
                  <TableCell align='center' width="20">{row.jumlah}</TableCell>
                  <TableCell align='center' width="150">Rp. {separator(row.harga_satuan * row.jumlah)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      


      <Container maxWidth={false} className={styles.containerKasir} >
        <Grid container spacing={2} columns={12}>
          <Grid item xs>
            <p className={styles.textKasir}>Uang</p>  
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs>
            <p className={styles.textKasir}>Total Belanja</p>  
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs>    
            <p className={styles.textKasir}>Kembalian</p>  
          </Grid>
        </Grid>
        <Grid container spacing={2} columns={12}>
          <Grid item xs>
            <Box className={styles.box}>
              <p className={styles.textUang1}>Rp. 200.000</p>
            </Box>
          </Grid>
          <Grid item xs={1}><box className={styles.boxSign}><p className={styles.sign}>-</p></box></Grid>
          <Grid item xs>
            <Box className={styles.box}>
              <p className={styles.textUang2}>Rp. 190.000</p>
            </Box>
          </Grid>
          <Grid item xs={2}><box className={styles.boxSign}><p className={styles.sign}>=</p></box></Grid>
          <Grid item xs>    
            <Box className={styles.box}>
              <p className={styles.textUang2}>Rp. 10.000</p>
            </Box>
          </Grid>
        </Grid>        
      </Container>
      
      <button className={styles.beli}>Beli</button>
        {/* Popup untuk menambahkan barang */}
        {popupOpen && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.closePopup} onClick={handleClosePopup}>&times;</span>
            <h3>Tambah Barang</h3>
            <input
              type="text"
              placeholder="Kode Barang"
              value={kodeBarang}
              onChange={(e) => setKodeBarang(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nama Barang"
              value={namaBarang}
              onChange={(e) => setNamaBarang(e.target.value)}
            />
            <input
              type="number"
              placeholder="Harga Satuan"
              value={hargaSatuan}
              onChange={(e) => setHargaSatuan(e.target.value)}
            />
            <input
              type="number"
              placeholder="Jumlah"
              value={jumlahBarang}
              onChange={(e) => setJumlahBarang(e.target.value)}
            />
            <button onClick={handleTambahBarang}>Tambah</button>
          </div>
        </div>
      )}

    </Box>

  );
}