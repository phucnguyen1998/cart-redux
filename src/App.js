import React,{Component} from 'react';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Product from './Components/Products/Product/Product';
import CartMessage from './Components/Products/CartMessage/CartMessage';
import Cart from './Components/Products/Cart/Cart'

class App extends Component {
  render(){
    return (
      <div>
        {/* Header */}
        <Header/>
        <main id="mainContainer">
          <div className="container">
          {/* Products */}
          <Product/>
          {/* Message */}
          <CartMessage/>
          {/* Cart */}
          <Cart/>
          </div>
        </main>
        {/* Footer */}
        <Footer/>
      </div>
    );
  }
}

export default App;
