import * as React from "react";
import styles from "./style.module.css";
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
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function createData(idBarang, tanggal, nama, jumlah, SKU, status) {
  return { idBarang, tanggal, nama, jumlah, SKU, status };
}

export const History = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/history")
      .then(({ data: { data: datas } }) => {
        const mappedData = datas.map((data) =>
          createData(
            data.idBarang,
            data.tanggal,
            data.nama,
            data.jumlah,
            data.skuCode,
            data.status
          )
        );

        console.log(mappedData);

        setData(mappedData);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.HistoryContainer}>
        <h1 className={styles.title}>History</h1>
        <TableContainer component={Paper} className={styles.tabel}>
          <Table aria-label="simple table">
            <TableHead className={styles.rowHead}>
              <TableRow>
                <TableCell align="center" className={styles.headContent}>
                  ID Barang
                </TableCell>
                <TableCell align="center">Tanggal</TableCell>
                <TableCell align="center">Nama Barang</TableCell>
                <TableCell align="center">Jumlah&nbsp;(Box)</TableCell>
                <TableCell align="center">SKU</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.idBarang}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
                  <TableCell align="center">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter className={styles.rowFooter}>
              <TableCell colSpan={7} align="right">
                A
              </TableCell>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
