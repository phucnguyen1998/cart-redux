import React,{Component} from 'react';

import Product from './product';

class Products extends Component {
  render(){
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          {/* Product */}
          <Product/>
        </div>
      </section>
    );
  }
}

export default Products;
