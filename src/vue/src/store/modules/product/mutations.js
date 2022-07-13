export const SET_PRODUCTS = (state, products) => {
    state.products = products.products;
}

export const SET_PRODUCT = (state, product) => {
    state.product = product
}
export const UPLOAD_PRODUCT_FILE = (state, fileData) => {
    state.files.push(fileData)
}
export const REMOVE_PRODUCT_FILE = (state, fileData) => {
    state.files = state.files.filter(item => item.id !== fileData.id)
}

export const ADD_PRODUCT = (state, payload) => {
    state.products.push(payload);
}