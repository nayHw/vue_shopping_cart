import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'
export default new Vuex.Store({
  state: {
    products:[],
    show:false,
    cartProduct:[],
    notifications:[],
    relatedProducts:[]
  },
  getters: {
    totalPrice(state){
      let totalPrice = 0; 
      state.cartProduct.forEach( item => {
        totalPrice += item.quantity * item.product.price
      })
      return totalPrice;
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
      state.notifications.push({
        type: 'alert-success',
        message: 'Product Add to Cart!',
        id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
      })
    },
    removeCart(state, id){
      state.cartProduct = state.cartProduct.filter( item => {
        return item.product.id !== id
      })
      state.notifications.push({
        type: 'alert-info',
        message: 'Product remove from Cart!',
        id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
      })
    },
    clearCart(state){
      state.cartProduct = []
      state.notifications.push({
        type: 'alert-danger',
        message: 'All Product remove from Cart!',
        id: (Math.random().toString(36) + Date.now().toString(36)).substr(2)
      })
    },
    removeNoti(state, noti){
      state.notifications = state.notifications.filter(item => {
        return item.id !== noti.id;
      })
    }
  },
  actions: {
    getProducts({commit}){
      axios.get('https://fakestoreapi.com/products')
      .then( res => commit('setProduct', res.data))
      .catch(err => console.log(err) )
    },
    listByCategroy({commit,state}, category){
      axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then( res => {
        commit('setProduct', res.data)
        state.relatedProducts = res.data
      })
      .catch( err => console.log(err) )
    },
    addToCart({commit},{product,quantity}){
      commit('addToCart',{product,quantity})
    },
    removeCart({commit}, id){
      commit('removeCart', id)
    },
    removeNoti({commit}, noti){
      commit('removeNoti', noti)
    }
  },
  modules: {
  }
})
