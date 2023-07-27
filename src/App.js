import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login, DaftarToko, Transaksi,ProductInventory,Kasir, PengembalianBarang,History } from './pages'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Layout />}>
          <Route path="product-inventory" element={<ProductInventory />} />
          <Route path="kasir" element={<Kasir />} />
          <Route path="transaksi" element={<Transaksi />} />
          <Route path="pengembalian-barang" element={<PengembalianBarang />} />
          <Route path="history" element={<History />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
