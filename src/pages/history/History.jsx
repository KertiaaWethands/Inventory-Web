import React, { useState, useEffect } from "react";
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
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import jsPDF from "jspdf";

export const History = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(""); // State to store the selected year
  const [uniqueYears, setUniqueYears] = useState([]); // State to store unique years

  useEffect(() => {
    axios.get("http://localhost:8000/history").then((response) => {
      const historyData = response.data.data.map((item) => ({
        ...item,
        tanggal: item.tanggal ? new Date(item.tanggal).toISOString().substr(0, 10) : "",
      }));
      
      setData(historyData);

      // Extract unique years after data is fetched and processed
      const years = [...new Set(historyData.map((row) => row.Tanggal.substr(0, 4)))];
      setUniqueYears(years);
    });
  }, []);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  // Filter data based on selectedYear
  const filteredData = data.filter((row) => {
    console.log(row);
    if (selectedYear) {
      return row.Tanggal.substr(0, 4) === selectedYear;
    } else {
      return true; // No year filter selected
    }
  });
  const handleDownloadPDF = () => {
    const pdf = new jsPDF();
    pdf.text("History Data", 10, 10);
    data.forEach((row, index) => {
      const yPos = 20 + index * 10;
      pdf.text(
        `${row["ID History"]} | ${row["Tanggal"]} | ${row["Nama Barang"]} | ${row["Jumlah (Box)"]} | ${row.SKU} | ${row["Jenis Transaksi"]}`,
        10,
        yPos
      );
    });
    pdf.save("history_data.pdf");
  };

  return (
    <div className={styles.container}>
      <div className={styles.HistoryContainer}>
        <h1 className={styles.title}>History</h1>
        <div className={styles.filters}>
          <FormControl className={styles.sorting}>
            <InputLabel>Year</InputLabel>
            <Select value={selectedYear} onChange={handleYearChange}>
              <MenuItem value="">All</MenuItem>
              {uniqueYears.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
       
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
          variant="contained"
          color="primary"
          onClick={handleDownloadPDF}
          className={styles.downloadButton}
        >
          Download PDF
        </Button>
        
          </div>
        <TableContainer component={Paper} className={styles.tabel}>
          <Table aria-label="simple table">
            <TableHead className={styles.rowHead}>
              <TableRow>
                <TableCell align="center" className={styles.headContent}>
                  ID History
                </TableCell>
                <TableCell align="center">Tanggal</TableCell>
                <TableCell align="center">Nama Barang</TableCell>
                <TableCell align="center">Jumlah&nbsp;(Box)</TableCell>
                <TableCell align="center">SKU</TableCell>
                <TableCell align="center">Jenis Transaksi</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row) => (
                <TableRow
                  key={row["ID History"]}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row["ID History"]}
                  </TableCell>
                  <TableCell align="center">
                    {row["Tanggal"]} {/* Format the date */}
                  </TableCell>
                  <TableCell align="center">{row["Nama Barang"]}</TableCell>
                  <TableCell align="center">{row["Jumlah (Box)"]}</TableCell>
                  <TableCell align="center">{row.SKU}</TableCell>
                  <TableCell align="center">{row["Jenis Transaksi"]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter className={styles.rowFooter}>
              <TableCell colSpan={6} align="right">
                {/* Pagination component or other footer content */}
              </TableCell>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default History;
