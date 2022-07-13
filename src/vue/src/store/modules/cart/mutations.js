

export const ADD_TO_CART = (state, product) => {

    let productInCart = state.carts.find(productItem => productItem.id === product.id);
    if (productInCart) {
        productInCart.quantity += product.quantity;
        return;
    }
    state.carts.push(product);
}

export const REMOVE_FROM_CART = (state, productId) => {
    let removeProduct = state.carts.filter(product => product.id !== productId);
    if (removeProduct) {
        state.carts = removeProduct
    }
}

export const EMPTY_CART = (state) => {
    state.carts.length = 0
}