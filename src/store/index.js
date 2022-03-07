import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    serverPath: 'https://158.101.150.132:8008',
    cart: [],
  },
  getters: {
    currentQuantity(state) {
      return state.cart.reduce((acc, cur) => (acc += cur.number), 0);
    },
  },
  mutations: {
    addCart(state, data) {
      const product = state.cart.find(
        (product) => product.id === data.product.id
      );
      if (product) product.number += data.number;
      else {
        const newProduct = data.product;
        newProduct.number = data.number;
        state.cart.push(newProduct);
      }
      // console.log(state.cart);
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
