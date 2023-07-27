import '../style/Body.css';
import { TableFooter, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function createData(idBarang, nama, stok, actual, indicator, status) {
  return { idBarang, nama, stok, actual, indicator, status};
}

const rows = [
  createData('MKNC001','Nabati Coklat 2000', 300, 300, '< 100', 'Enough'),
  createData('MKNC001','Nabati Coklat 2000', 300, 300, '< 100', 'Enough'),
  createData('MKNC001','Nabati Coklat 2000', 300, 300, '< 100', 'Enough'),
  createData('MKNC001','Nabati Coklat 2000', 300, 300, '< 100', 'Enough'),
  createData('MKNC001','Nabati Coklat 2000', 300, 300, '< 100', 'Enough'),
];

export default function DaftarToko(){
    return(
        <div className='content'>
            <div className="title">Produk</div>
            <div className='bodyContent'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 1250 }} aria-label="simple table">
                        <TableHead className='rowHead'>
                        <TableRow>
                            <TableCell className='headContent'>ID Barang</TableCell>
                            <TableCell>Nama Barang</TableCell>
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
                        <TableFooter className='rowFooter'>
                            <TableCell colSpan={6} align="right">A</TableCell>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}