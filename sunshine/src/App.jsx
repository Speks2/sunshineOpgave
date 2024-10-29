//Imports
import { MyAPI } from './components/MyAPI/API';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import styles from'../src/App.module.scss';

function App() {
  
  return (
    <div className={styles.Products}>
      <MyAPI />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
