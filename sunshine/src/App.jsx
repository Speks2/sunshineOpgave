import { Main } from './components/Main/Main';
import { Checkout } from './Pages/Checkout';
import { Login } from './Pages/Login';
import { Products } from './Pages/Products';
import { NoPage } from './Pages/NoPage';
import { Layout } from './Pages/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="*" element={<NoPage />} />
        </Route>    
      </Routes>
    </BrowserRouter>
  );
}

export default App;