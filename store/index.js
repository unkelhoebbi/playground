export const state = () => ({
  products: [],
})

export const mutations = {
  add(state, product) {
    const duplicates = state.products.filter((item) => item.id === product.id);

    if (duplicates.length > 0){
      product.quantity = duplicates[0].quantity + 1;
      // Need to remove product and add it again for quantity update workaround
      state.products = state.products.filter((item) => item.id !== product.id)
    }

    state.products.push(product)
  },
  remove(state, id) {
    state.products = state.products.filter((product) => product.id !== id)
  },
  mutateQuantity(state, product) {
    const duplicates = state.products.filter((item) => item.id === product.id);

    if (duplicates.length > 0){
      const storeProduct =  duplicates[0];
      storeProduct.quantity = product.quantity;
      // Need to remove product and add it again for quantity update workaround
      state.products = state.products.filter((item) => item.id !== product.id)

      state.products.push(storeProduct)
    }
  }
}
