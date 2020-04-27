import React,{Component} from 'react';

import Header from './Components/Header';
import MessageContainer from './containers/MessageContainer';
import CartContainer from './containers/CartContainer';
import Footer from './Components/Footer';
import ProductsContainer from './containers/ProductsContainer';

class App extends Component {
  render(){
    return (
        <div>
          {/* Header */}
          <Header/>
          <main id="mainContainer">
            <div className="container">
              {/* Products */}
              <ProductsContainer/>
              {/* Message */}
              <MessageContainer/>
              {/* Cart */}
              <CartContainer/>
            </div>
          </main>
          {/* Footer */}
          <Footer/>
        </div>
    );
  }
}

export default App;
