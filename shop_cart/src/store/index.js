import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'
export default new Vuex.Store({
  state: {
    products:[],
    show:false,
    cartProduct:[],
    totalPrice:0,
  },
  getters: {
    totalPrice(state){
      return state.cartProduct.forEach( item => {
        state.totalPrice += item.quantity * item.product.price
      })
    }
  },
  mutations: {
    setProduct(state, data){
      state.products = data
    },
    changeState(state){
        state.show = true
    },
    navChangeState(state){
      state.show = false
    },
    addToCart(state, {product, quantity}){
      let prodcut_in_cart = state.cartProduct.find( cartProduct => {
        return cartProduct.product.id === product.id;
      })

      if(prodcut_in_cart){
        prodcut_in_cart.quantity += parseInt(quantity);
        return;
      }
      state.cartProduct.push({
        product,
        quantity
      })
    },
    removeCart(){
      return console.log('remove')
    }
  },
  actions: {
    getProducts({commit}){
      axios.get('https://fakestoreapi.com/products')
      .then( res => commit('setProduct', res.data))
      .catch(err => console.log(err) )
    },
    listByCategroy({commit}, category){
      axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then( res => commit('setProduct', res.data))
      .catch( err => console.log(err) )
    }
  },
  modules: {
  }
})
