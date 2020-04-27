import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../Components/Products';
import Product from './../Components/product';
import PropTypes from 'prop-types';

class ProductsContainer extends Component {

    showProduct(products){
        let result = null;
        if(products.length > 0 ){
          result = products.map((product, index) => {
            return <Product key={index} product = {product} />
          })
        }
        return result;
    }

    render() {
        let products = this.props.products;
        return (
            <Products>
                {this.showProduct(products)}
            </Products>

        );
    }
}

// check propstype
ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired 
        })
    ).isRequired

}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductsContainer);