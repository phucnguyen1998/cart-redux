import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../Components/Cart';
import CartItem from './../Components/CartItem';
import CartResult from './../Components/CartResult';
import * as Message from './../constants/Message';
import {actDeleteProductInCart, actChangeMessage, actUpdateProductInCart} from './../actions/index';

class CartContainer extends Component {

    showCartItem = (cart) => {
        let result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        let {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props;
        if(cart.length > 0){
            result = cart.map((item, index)=>{
                return (
                    <CartItem
                        key = {index}
                        item = {item}
                        index={index}
                        onDeleteProductInCart = {onDeleteProductInCart}
                        onChangeMessage = {onChangeMessage}
                        onUpdateProductInCart = {onUpdateProductInCart}
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
    ).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product))
        },
        onChangeMessage : (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);