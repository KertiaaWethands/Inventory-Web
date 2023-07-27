import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login, DaftarToko, Transaksi,ProductInventory,Kasir } from './pages'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Layout />}>
          <Route path="" element={<ProductInventory />} />
          <Route path="kasir" element={<Kasir />} />
          <Route path="transaksi" element={<Transaksi />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
