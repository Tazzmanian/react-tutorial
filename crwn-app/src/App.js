import { Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/header.component';

import { HomePage  } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { SignPage } from './pages/sign/sign.component';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/sign-in' element={<SignPage/>} />
      </Routes>
    </div>
  );
}

export default App;
