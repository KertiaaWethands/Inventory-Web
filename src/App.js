import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login, DaftarToko, Transaksi,ProductInventory } from './pages'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/transaksi" element={<Transaksi />} />
        <Route path="/*" element={<Layout />}>
          <Route path="daftar-toko" element={<DaftarToko />} />
          <Route path="product-inventory" element={<ProductInventory />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
