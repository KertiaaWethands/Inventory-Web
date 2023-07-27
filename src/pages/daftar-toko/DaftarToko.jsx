import styles from './style.module.css'; 
import { TableFooter, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function createData(idToko, namaToko, alamat) {
  return { idToko, namaToko, alamat};
}

const rows = [
  createData('TKCJRD001','Toko Samosir Jaya', 'Jl. Ahmad Syah no. 37 (koordinat)'),
  createData('TKCJRD001','Toko Samosir Jaya', 'Jl. Ahmad Syah no. 37 (koordinat)'),
  createData('TKCJRD001','Toko Samosir Jaya', 'Jl. Ahmad Syah no. 37 (koordinat)'),
  createData('TKCJRD001','Toko Samosir Jaya', 'Jl. Ahmad Syah no. 37 (koordinat)'),
];

export const DaftarToko = () => {
  return (
    <div className={styles.content}>
            <div className={styles.title}>Daftar Toko</div>
            <div className={styles.bodyContent}>
                <TableContainer component={Paper} className={styles.tabel}>
                    <Table aria-label="simple table">
                        <TableHead className={styles.rowHead}>
                        <TableRow>
                            <TableCell align="center">ID Toko</TableCell>
                            <TableCell align="center">Nama Toko</TableCell>
                            <TableCell align="center">Alamat</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody >
                        {rows.map((row) => (
                            <TableRow 
                            key={row.idToko}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row" align="center">
                                {row.idToko}
                            </TableCell>
                            <TableCell component="th" scope="row" align="center">
                                {row.namaToko}
                            </TableCell>
                            <TableCell align="center">{row.alamat}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
  );
};
