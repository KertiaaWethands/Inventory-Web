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

export const Transaksi = () => {
  function createData(kode_transaksi, jenis_transaksi, harga, tanggal) {
    return { kode_transaksi, jenis_transaksi, harga, tanggal};
  }
  
  const datarows = [
    createData('TKCJRD001', 'Pemasukan', 50000, '20/07/2023'),
    createData('TKCJRD001', 'Pengeluaran', 50000, '20/07/2023'),
  ];


  return (
    <Box className={styles.container} position="relative">
      <div className={styles.title}>Transaksi</div>
      <Container maxWidth={false} className={styles.containerKasir} >
        <Grid container spacing={2} columns={12}>
          <Grid item xs>
              
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs>
             
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs>    
          </Grid>
        </Grid>
        <Grid container spacing={2} columns={12}>
          <Grid item xs>
            <Box className={styles.box}>
              <p className={styles.textKasir}>Keuntungan</p>
              <p className={styles.textUang1}>Rp. 200.000</p>
            </Box>
          </Grid>
          <Grid item xs>
            <Box className={styles.box}>
              <p className={styles.textKasir}>Total Pemasukan</p> 
              <p className={styles.textUang2}>Rp. 210.000</p>
            </Box>
          </Grid>
          <Grid item xs>    
            <Box className={styles.box}>
              <p className={styles.textKasir}>Total Pengeluaran</p>  
              <p className={styles.textUang2}>Rp. 10.000</p>
            </Box>
          </Grid>
        </Grid>        
      </Container>
      <Box sx={{minHeight: '56vh'}} classNames={styles.boxTable}>
        <TableContainer component={Paper} sx={{ maxHeight: '56vh', borderTopLeftRadius: "20px", borderTopRightRadius: "20px"}}>
          <Table stickyHeader sx={{ minWidth: 750, "& .MuiTableCell-head": {
              backgroundColor: "#AEDBCE"
          }, }} 
            // sx={{ }}
          >
            <TableHead >
              <TableRow >
                <TableCell align='center'>No Pesanan</TableCell>
                <TableCell align='center'>Jenis Transaksi</TableCell>
                <TableCell align='center'>Harga</TableCell>
                <TableCell align='center'>Tanggal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datarows.map((row, i) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align='center' width="100">{row.kode_transaksi}</TableCell>
                  <TableCell align='center' component="th" scope="row">
                    {row.jenis_transaksi}
                  </TableCell>
                  <TableCell align='center' width="150">Rp. {row.harga} </TableCell>
                  <TableCell align='center' width="150">Rp. {row.tanggal} </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  
  );
}