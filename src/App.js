import React, { useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from "./Components/Functions/context";


const firebaseConfig = {
  apiKey: "AIzaSyBwG5ufZhscMP5skhq7KVCGEhKhItWV7R0",
  authDomain: "mrdonalds-8e0dd.firebaseapp.com",
  databaseURL: "https://mrdonalds-8e0dd.firebaseio.com",
  projectId: "mrdonalds-8e0dd",
  storageBucket: "mrdonalds-8e0dd.appspot.com",
  messagingSenderId: "233476447046",
  appId: "1:233476447046:web:942f9e576430b66b6a2347"
};

firebase.initializeApp(firebaseConfig);

function App() {

  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);

  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      firebaseDatabase: firebase.database
    }}>
      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu />
      { openItem.openItem && <ModalItem />}
      { orderConfirm.openOrderConfirm && <OrderConfirm />}
    </Context.Provider>
  );
}

export default App;
