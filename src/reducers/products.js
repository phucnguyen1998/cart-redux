const InitialState = [
    {
        id: 1,
        name: 'Iphone',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'Dien thoai xin',
        price: 500,
        rating: 4,
        inventory: 10,
    },
    {
        id: 2,
        name: 'Samsung',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'Dien thoai xin',
        price: 200,
        rating: 5,
        inventory: 15,
    },
    {
        id: 3,
        name: 'Xiaomi',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'Dien thoai xin',
        price: 100,
        rating: 3,
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