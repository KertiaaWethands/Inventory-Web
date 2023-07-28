import * as React from 'react';

import Button from '@mui/material/Button';
import { Paper, Stack, Box, Grid, Container } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import RemoveIcon from '@mui/icons-material/Remove';


import styles from './style.module.css';

export const Kasir = () => {
  function createData(kode_barang, nama_barang, harga_satuan, jumlah) {
    return { kode_barang, nama_barang, harga_satuan, jumlah};
  }
  
  const datarows = [
    createData('TKCJRD001', 'Royco @ 250g', 50000, 2),
    createData('TKSKMD001', 'Rinso @ 1L', 45000, 2),
    createData('TKCJRD001', 'Royco @ 250g', 50000, 2),
    createData('TKSKMD001', 'Rinso @ 1L', 45000, 2),
  ];

  const separator = (num)  => {
    let temp = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return temp;
  }


  return (
    <Box className={styles.container} position="relative">
      <div className={styles.title}>Kasir</div>
      <Box sx={{minHeight: '40vh'}} classNames={styles.boxTable}>
        <TableContainer component={Paper} sx={{ maxHeight: '56vh', borderTopLeftRadius: "20px", borderTopRightRadius: "20px"}}>
          <Table stickyHeader sx={{ minWidth: 450, "& .MuiTableCell-head": {
              backgroundColor: "#AEDBCE"
          }, }} 
            // sx={{ }}
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
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align='center' width="20">{i + 1}</TableCell>
                  <TableCell align='center' width="100">{row.kode_barang}</TableCell>
                  <TableCell align='center' component="th" scope="row">
                    {row.nama_barang}
                  </TableCell>
                  <TableCell align='center' width="150">Rp. {separator(row.harga_satuan)} </TableCell>
                  <TableCell align='center' width="20"><div className={styles.jumlahBadge}>{row.jumlah}</div></TableCell>
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

    </Box>
  
  );
}