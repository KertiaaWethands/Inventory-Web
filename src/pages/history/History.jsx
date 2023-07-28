import * as React from 'react';
import styles from "./style.module.css";
import { TableFooter, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function createData(idBarang, tanggal, nama, jumlah, SKU, company,status) {
    return { idBarang,tanggal, nama, jumlah, SKU, company,status};
  }
  
  const rows = [
    createData('MKNC003','20/07/2023','Nabati Strawberry 2000', '100 Box', '052945123','Wings', 'Return'),
    createData('MKNC003','20/07/2023','Nabati Strawberry 2000', '100 Box', '052945123','Wings', 'Keluar'),
    createData('MKNC003','20/07/2023','Nabati Strawberry 2000', '100 Box', '052945123','Wings', 'Masuk'),
  ];

export const History = () => {
  return (
    <div className={styles.container}>
        <div className={styles.HistoryContainer}>
                <h1 className={styles.title}>History</h1>
                <TableContainer component={Paper} className={styles.tabel}>
                    <Table aria-label="simple table">
                        <TableHead className={styles.rowHead}>
                        <TableRow>
                            <TableCell align="center" className={styles.headContent}>ID Barang</TableCell>
                            <TableCell align="center" >Tanggal</TableCell>
                            <TableCell align="center" >Nama Barang</TableCell>
                            <TableCell align="center">Jumlah&nbsp;(Box)</TableCell>
                            <TableCell align="center">SKU</TableCell>
                            <TableCell align="center">Company</TableCell>
                            <TableCell align="center">Status</TableCell>
                            
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.idBarang}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row" align="center">
                                {row.idBarang}
                            </TableCell>
                            <TableCell align="center">{row.tanggal}</TableCell>
                            <TableCell component="th" scope="row" align="center">
                                {row.nama}
                            </TableCell>
                            <TableCell align="center">{row.jumlah}</TableCell>
                            <TableCell align="center">{row.SKU}</TableCell>
                            <TableCell align="center">{row.company}</TableCell>
                            <TableCell align="center">{row.status}</TableCell>
                            
                            </TableRow>
                        ))}
                        </TableBody>
                        <TableFooter className={styles.rowFooter}>
                            <TableCell colSpan={7} align="right">A</TableCell>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </div>
    </div>
  );
}