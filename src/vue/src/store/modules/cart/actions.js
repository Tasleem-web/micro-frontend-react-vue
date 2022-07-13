export const addToCart = ({ commit, dispatch }, product) => {
    commit('ADD_TO_CART', product);

    dispatch('addNotification', {
        type: 'success',
        message: 'Product added to cart.'
    }, { root: true });
}

export const removeItem = ({ commit, dispatch }, productId) => {
    commit('REMOVE_FROM_CART', productId);
    dispatch('addNotification', {
        type: 'danger',
        message: 'Removed Item from Cart.'
    }, { root: true });
}

export const emptyCart = ({ commit }) => {
    commit('EMPTY_CART')
}


