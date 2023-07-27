import styles from './style.module.css'; 
import { TableFooter, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Button from '@mui/material/Button';

function createData(idBarang, nama, stok, actual, indicator, status) {
  return { idBarang, nama, stok, actual, indicator, status};
}

const rows = [
  createData('TKCJRD001','Toko Samosir Jaya', 300, 300, '< 100', 'Enough'),
  createData('MKNC002','Nabati Coklat 2000', 300, 300, '< 100', 'Enough'),
  createData('MKNC003','Nabati Coklat 2000', 300, 300, '< 100', 'Enough'),
  createData('MKNC004','Nabati Coklat 2000', 300, 300, '< 100', 'Enough'),
  createData('MKNC005','Nabati Coklat 2000', 300, 300, '< 100', 'Enough'),
  createData('MKNC003','Nabati Coklat 2000', 300, 300, '< 100', 'Enough'),
  createData('MKNC004','Nabati Coklat 2000', 300, 300, '< 100', 'Enough'),
  createData('MKNC005','Nabati Coklat 2000', 300, 300, '< 100', 'Enough'),
];

export const ProductInventory = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.title}>Produk</div>
            <div className={styles.buttonTambah}>
                    <Button 
                    style={{ background: 'linear-gradient(#D3EBCD, #B1E9A3)', 
                    color:'#000000', 
                    fontWeight:'bold',
                    paddingLeft:'35px', paddingRight:'35px', 
                    borderRadius:'100px',
                    fontSize:'11px'}}>
                        + Tambah
                    </Button>
                </div>
            <div className={styles.bodyContent}>
                <TableContainer component={Paper} className={styles.tabel}>
                    <Table aria-label="simple table">
                        <TableHead className={styles.rowHead}>
                        <TableRow>
                            <TableCell className={styles.headContent}>ID Barang</TableCell>
                            <TableCell >Nama Barang</TableCell>
                            <TableCell align="center">Stock&nbsp;(Box)</TableCell>
                            <TableCell align="center">Actual Stock&nbsp;(Box)</TableCell>
                            <TableCell align="center">Indicator&nbsp;(Box)</TableCell>
                            <TableCell align="center">Status</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.idBarang}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.idBarang}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.nama}
                            </TableCell>
                            <TableCell align="center">{row.stok}</TableCell>
                            <TableCell align="center">{row.actual}</TableCell>
                            <TableCell align="center">{row.indicator}</TableCell>
                            <TableCell align="center">{row.status}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                        <TableFooter className={styles.rowFooter}>
                            <TableCell colSpan={6} align="right">A</TableCell>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </div>
        </div>
    </div>
  );
};
