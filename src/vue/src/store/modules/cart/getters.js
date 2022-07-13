export const countCartItems = (state) => state.carts.length;

export const grandTotal = (state) => state.carts.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0).toFixed(2);