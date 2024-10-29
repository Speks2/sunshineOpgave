//Imports
import { API } from './components/MyAPI/API';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';
import { Checkout } from './Pages/Checkout';
import { Checkout } from './Pages/Checkout';
import { Login } from './Pages/Login';
import { Products } from './Pages/Products';
import { NoPage } from './Pages/NoPage';
import styles from'../src/App.module.scss';


function App() {
  
  return (
    <div className={styles.Routing}>
      <API />
      <Main />
      <Footer />
      <Navbar />

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
    </div>
  );
}

export default App;
