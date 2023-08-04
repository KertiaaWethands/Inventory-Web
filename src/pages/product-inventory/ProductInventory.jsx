import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import {
  TableFooter,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import { Pagination } from '../../components/Pagination';

export const ProductInventory = () => {
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [newProduct, setNewProduct] = useState({
    idBarang: '',
    nama: '',
    stok: 0,
    indicator: '',
  });
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const productsResponse = await axios.get('http://localhost:8000/products');
      const products = productsResponse.data.data;
  
      if (Array.isArray(products)) {
        const productRows = await Promise.all(products.map(async (product) => {
          const indicator = product.indicator || 100;
          const skuResponse = await axios.get(`http://localhost:8000/products/${product.idBarang}/skus`);
          const skus = skuResponse.data.data;
  
          // Sum the stock for each product
          const totalStok = skus.reduce((acc, sku) => acc + sku.stok, 0);
          const status = totalStok >= indicator ? 'Enough' : 'Low Stock';
          return createData(product.idBarang, product.nama, totalStok, indicator, status);

        }));
        setRows(productRows);
      }
      setError(null); // Reset the error state if the fetch is successful
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Error fetching products. Please try again later.');
    }
  };
  
  const createData = (idBarang, nama, stok, indicator, status) => {
    return { idBarang, nama, stok, indicator, status };
  };

  const getIndicatorStatus = (stock, indicator) => {
    return stock >= indicator ? 'Enough' : 'Low Stock';
  };

  const handleNewProductChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAddProduct = async () => {
    try {
      // Send a POST request to add the new product to the backend
      const response = await axios.post('http://localhost:8000/products', newProduct);
      // Fetch the 'skus' data for the new product based on its 'idBarang'
      const skuResponse = await axios.get(`http://localhost:8000/products/${response.data.data.idBarang}/skus`);
      const skus = skuResponse.data.data;
      // Calculate the total stock for the new product
      const totalStok = skus.reduce((acc, sku) => acc + sku.stok, 0);
      const indicator = newProduct.indicator || 100;
      const status = totalStok >= indicator ? 'Enough' : 'Low Stock';
      // Create a new row object for the new product and update the rows state
      const newRow = createData(response.data.data.idBarang, response.data.data.nama, totalStok, indicator, status);
      setRows([...rows, newRow]);
      // Clear the form input
      setNewProduct({
        idBarang: '',
        nama: '',
        stok: 0,
        indicator: '',
      });
      handleCloseModal(); // Close the modal after adding a new product
    } catch (error) {
      console.error('Error adding new product:', error);
      setError('Error adding new product. Please try again later.');
    }
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>Produk</div>
        <div className={styles.buttonTambah}>
          <Button
            style={{
              background: 'linear-gradient(#D3EBCD, #B1E9A3)',
              color: '#000000',
              fontWeight: 'bold',
              paddingLeft: '35px',
              paddingRight: '35px',
              borderRadius: '100px',
              fontSize: '11px',
            }}
            onClick={handleOpenModal} // Open the modal when the button is clicked
          >
            + Tambah
          </Button>
        </div>
        <div className={styles.bodyContent}>
          {error ? (
            <div>{error}</div>
          ) : (
            <>
              <TableContainer component={Paper} className={styles.tabel}>
                <Table aria-label="simple table">
                  <TableHead className={styles.rowHead}>
                    <TableRow>
                      <TableCell className={styles.headContent}>ID Barang</TableCell>
                      <TableCell>Nama Barang</TableCell>
                      <TableCell align="center">Stock&nbsp;(Box)</TableCell>
                      <TableCell align="center">Indicator</TableCell>
                      <TableCell align="center">Status</TableCell>
                    </TableRow>
                  </TableHead>
                 <TableBody>
                  {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                    <TableRow
                      key={row.idBarang}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      component={Link} // Use Link component from react-router-dom
                      to={`/detailBarang/${row.idBarang}`} // Specify the target URL
                      className={styles.rowLink} // Add a custom CSS class for the link
                    >
                      <TableCell>{row.idBarang}</TableCell>
                      <TableCell>{row.nama}</TableCell>
                      <TableCell align="center">{row.stok}</TableCell>
                      <TableCell align="center">{row.indicator}</TableCell>
                      <TableCell align="center">{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                  <TableFooter className={styles.rowFooter}>
                    <TableRow>
                      <TableCell colSpan={5} align="right">
                        <Pagination
                          count={rows.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onChangePage={(event, newPage) => setPage(newPage)}
                          onChangeRowsPerPage={(event) => {
                            setRowsPerPage(parseInt(event.target.value, 10));
                            setPage(0);
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
            </>
          )}
        </div>
      </div>

      {/* Modal Dialog for Add Product */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Tambah Produk Baru</DialogTitle>
        <DialogContent>
          <div className={styles.formContent}>
            <TextField
              label="ID Barang"
              name="idBarang"
              value={newProduct.idBarang}
              onChange={handleNewProductChange}
            />
            <TextField
              label="Nama Barang"
              name="nama"
              value={newProduct.nama}
              onChange={handleNewProductChange}
            />
            <TextField
              label="Stok"
              name="stok"
              type="number"
              value={newProduct.stok}
              onChange={handleNewProductChange}
            />
            <TextField
              label="Indicator"
              name="indicator"
              type="number"
              value={newProduct.indicator}
              onChange={handleNewProductChange}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Batal</Button>
          <Button onClick={handleAddProduct}>Simpan</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductInventory;
