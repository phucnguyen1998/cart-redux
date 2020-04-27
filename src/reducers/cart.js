import * as types from './../constants/ActionType';

let data = JSON.parse(localStorage.getItem('CART'));

const InitialState = [
    {
        product: {
            id: 1,
            name: 'Iphone',
            image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
            description: 'Dien thoai xin',
            price: 500,
            rating: 4,
            inventory: 10
        },
        quantity : 5
    },
    {
        product: {
            id: 3,
            name: 'Xiaomi',
            image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
            description: 'Dien thoai xin',
            price: 100,
            rating: 3,
            inventory: 15,
        },
        quantity: 3
    }
];

const cart = (state = InitialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return state;
        default:
            return [...state]
    }
}

export default cart;