import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../Components/Cart';
import CartItem from './../Components/CartItem';
import CartResult from './../Components/CartResult';
import * as Message from './../constants/Message';
import cart from '../reducers/cart';

class CartContainer extends Component {

    showCartItem = (cart) => {
        let result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        if(cart.length > 0){
            result = cart.map((item, index)=>{
                return (
                    <CartItem
                        key = {index}
                        item = {item}
                        index={index}
                    />
                )
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        let result = null;
        if(cart.length > 0) {
            result = <CartResult cart={cart}/>
        }
        return result;
    }

    render() {
        let {cart} = this.props;
        return (
            <Cart>
                { this.showCartItem(cart) }
                { this.showTotalAmount(cart) }
            </Cart>
        );
    }
}

// check propstype
CartContainer.propTypes = {
    cart : PropTypes.arrayOf(
        PropTypes.shape({
            product : PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired
            }).isRequired,
            quantity : PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartContainer);