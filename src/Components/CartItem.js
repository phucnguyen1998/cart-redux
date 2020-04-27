import React,{Component} from 'react';
import * as Message from './../constants/Message';

class CartItem extends Component {

  showSubTotal = (price, quantity) => {
    return price*quantity;
  }

  onDeleteProduct = (product) => {
    this.props.onDeleteProductInCart(product);
    this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART);
  }

  onUpdateQuantity = (product, quantity) => {
    if(quantity > 0){
      let { onUpdateProductInCart, onChangeMessage } = this.props;
      onUpdateProductInCart(product, quantity);
      onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
    }
  }

  render(){
    let {item} = this.props;
    let {quantity} = item ;
    return (
      <tr>
        <th scope="row">
          <img src={item.product.image} alt={item.product.name}/>
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label 
              onClick = {() => {this.onUpdateQuantity(item.product, item.quantity - 1)}}
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            >
              <a>—</a>
            </label>
            <label 
              onClick = {() => {this.onUpdateQuantity(item.product, item.quantity + 1)}}
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            >
              <a>+</a>
            </label>
          </div>
        </td>
          <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
        <td>
          <button 
            type="button" 
            className="btn btn-sm btn-primary waves-effect waves-light" 
            data-toggle="tooltip" data-placement="top" 
            title data-original-title="Remove item"
            onClick = { () => this.onDeleteProduct(item.product) }
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
