import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./style.module.css";
import { useParams } from "react-router-dom";
import {
  TableFooter,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Pagination } from "../../components/Pagination";

export const DetailBarang = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { idBarang } = useParams();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetchData();
  }, [idBarang]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/products/${idBarang}/skus`
      );
      const productData = response.data.data;
      console.log(productData.data);

      // Format the date before setting it in the state
      const formattedProductData = {
        nama: productData[0].nama,
        skus: productData.map((sku) => ({
          ...sku,
          productionDate: new Date(sku.productionDate).toLocaleDateString(),
          expiredDate: new Date(sku.expiredDate).toLocaleDateString(),
          inboundDate: new Date(sku.inboundDate).toLocaleDateString(),
        })),
      };

      console.log(formattedProductData);
      setProduct(formattedProductData);
      setError(null); // Reset the error state if the fetch is successful
    } catch (error) {
      console.error("Error fetching product:", error);
      setError("Error fetching product. Please try again later.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error ? (
          <div>{error}</div>
        ) : product ? (
          <>
            <div className={styles.title}>Product Details</div>
            <div className={styles.bodyContent}>
              <p>Nama: {product.nama}</p>
              {product.skus && product.skus.length > 0 ? (
                <div>
                  <h3>SKUs:</h3>
                  <TableContainer component={Paper} className={styles.tabel}>
                    <Table>
                      <TableHead className={styles.rowHead}>
                        <TableRow>
                          <TableCell>ID SKU</TableCell>
                          <TableCell>SKU Code</TableCell>
                          <TableCell>Production Date</TableCell>
                          <TableCell>Expired Date</TableCell>
                          <TableCell>Inbound Date</TableCell>
                          <TableCell>Stok</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {product.skus
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((sku) => (
                            <TableRow key={sku.idSKU}>
                              <TableCell>{sku.idSKU}</TableCell>
                              <TableCell>{sku.skuCode}</TableCell>
                              <TableCell>{sku.productionDate}</TableCell>
                              <TableCell>{sku.expiredDate}</TableCell>
                              <TableCell>{sku.inboundDate}</TableCell>
                              <TableCell>{sku.stok}</TableCell>
                            </TableRow>
                          ))}
                      </TableBody>

                      <TableFooter className={styles.rowFooter}>
                        <TableRow>
                          <TableCell colSpan={6} align="right">
                            <Pagination
                              count={product.skus.length}
                              rowsPerPage={rowsPerPage}
                              page={page}
                              onChangePage={(event, newPage) =>
                                setPage(newPage)
                              }
                              onChangeRowsPerPage={(event) => {
                                setRowsPerPage(
                                  parseInt(event.target.value, 10)
                                );
                                setPage(0);
                              }}
                            />
                          </TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </TableContainer>
                </div>
              ) : (
                <p>No SKUs available for this product.</p>
              )}
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default DetailBarang;
