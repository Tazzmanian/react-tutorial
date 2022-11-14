import React from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log(userAuth)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          const data = snapshot.data();
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...data
            }
          }, () => {
            console.log(this.state);
          });
        });
      } 

      this.setState({
        currentUser: userAuth
      })
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
