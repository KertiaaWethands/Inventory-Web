import * as React from 'react';
import styles from "./style.module.css";
import { TableFooter, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, FormControl, Select} from '@mui/material';
import Button from '@mui/material/Button';

export const PengembalianBarang = () => {
  return (
     <div className={styles.content}>
            <div className={styles.title}>Pengembalian Barang</div>
            <div className={styles.bodyContent}>
                <div className={styles.buttonTambah}>
                    <Button 
                    style={{ background: 'linear-gradient(#D3EBCD, #B1E9A3)', 
                    color:'#000000', 
                    fontWeight:'bold',
                    paddingLeft:'35px', paddingRight:'35px', 
                    borderRadius:'100px'}}>
                        + Tambah
                    </Button>
                </div>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead className={styles.rowHead}>
                        <TableRow>
                            <TableCell className={styles.headContent}>ID Barang</TableCell>
                            <TableCell>Nama Barang</TableCell>
                            <TableCell align="center">Jumlah&nbsp;(Box)</TableCell>
                            <TableCell align="center">Alasan</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    MKNC001
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <FormControl sx={{ minWidth: 200 }}>
                                        <Select
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        style={{ borderRadius:'150px', height:'35px', backgroundColor:'#D3EBCD' }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Nabati Coklat 2000</MenuItem>
                                            <MenuItem value={20}>Nabati Keju 2000</MenuItem>
                                            <MenuItem value={30}>Chocolatos 500</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell align="center">10 Box</TableCell>
                                <TableCell align="center"> 
                                    <FormControl sx={{ minWidth: 350 }}>
                                        <Select
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        style={{ borderRadius:'150px', height:'35px', backgroundColor:'#D3EBCD' }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Kadaluarsa</MenuItem>
                                            <MenuItem value={20}>Rusak</MenuItem>
                                            <MenuItem value={30}>Salah Barang</MenuItem>
                                        </Select>
                                    </FormControl>
                                </TableCell>
                            </TableRow>
                        
                        </TableBody>
                        <TableFooter className={styles.rowFooter}>
                            <TableCell colSpan={6} align="right">
                                <Button variant="contained" 
                                    style={{ backgroundColor: '#04D700', 
                                    color:'#FFFFFF', 
                                    fontWeight:'bold',
                                    paddingLeft:'25px', paddingRight:'25px', 
                                    borderRadius:'12px'}}>
                                    Return
                                </Button>
                            </TableCell>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </div>
        </div>
  );
}