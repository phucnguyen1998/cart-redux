const InitialState = [
    {
        id: 1,
        name: 'Iphone',
        image: '',
        description: 'Dien thoai xin',
        price: 500,
        inventory: 10,
    },
    {
        id: 2,
        name: 'Samsung',
        image: '',
        description: 'Dien thoai xin',
        price: 200,
        inventory: 15,
    },
    {
        id: 3,
        name: 'Xiaomi',
        image: '',
        description: 'Dien thoai xin',
        price: 100,
        inventory: 15,
    }
]
const product = (state = InitialState, action) => {
    switch (action.type) {
        default:
            return [...state]
    }
}

export default product;