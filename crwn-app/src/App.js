import React from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

import { HomePage  } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { SignPage } from './pages/sign/sign.component';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log(user)
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage/>} />
          <Route path='/sign-in' element={<SignPage/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
