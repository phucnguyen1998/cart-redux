import React,{Component} from 'react';

import Header from './Components/Header';
import Products from './Components/Products';
import Message from './Components/Message';
import Cart from './Components/Cart';
import Footer from './Components/Footer';

class App extends Component {
  render(){
    return (
        <div>
          {/* Header */}
          <Header/>
          <main id="mainContainer">
            <div className="container">
              {/* Products */}
              <Products/>
              {/* Message */}
              <Message/>
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
