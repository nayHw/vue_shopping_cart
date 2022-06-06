<template>
    <div class="bg-secondary">
        <nav class="navbar navbar-expand-lg navbar-dark container">
            <router-link to="/">
                <a class="navbar-brand text-info">AAA</a>
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse md-ml-5" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <router-link to="/product">
                        <li class="nav-item" @click="changeState">
                            <span class="nav-link">Products</span>
                        </li>
                    </router-link>
                    <router-link to="/about">
                        <li class="nav-item">
                            <span class="nav-link">About</span>
                        </li>
                    </router-link>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown mr-3">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Cart ({{ cartProduct.length }})
                        </a>
                        <div class="dropdown-menu mt-2 md-mt-0" aria-labelledby="navbarDropdown" @click="$event.stopPropagation()">
                            <div v-for="cart in cartProduct" :key="cart.product.id">
                                <div class="d-flex justify-content-between px-2">
                                    <div class="mr-1"> 
                                        <h6 class="dropdown-item pl-1" href="#">{{ cart.product.title.slice(0,15) }}...</h6>
                                        <span class="dropdown-item pl-1" href="#">
                                            {{ cart.quantity }} X $ {{ cart.product.price}}
                                        </span>
                                    </div>
                                    <div class="mr-1"> 
                                        <span class="btn btn-secondary py-1 mt-3" @click="removeCart(cart.product.id)">Remove</span>
                                    </div>
                                </div>
                                <div class="dropdown-divider bg-info"></div>
                            </div>
                            
                            <div v-if="cartProduct.length <= 0">
                                <p class="text-center">There is no item in cart.</p>
                                <div class="dropdown-divider bg-info"></div>
                            </div>

                            <div class="px-2">
                                <span class="float-left pl-1 mt-2" href="#">
                                    Total: 
                                    <b v-if="totalPrice">$ {{ totalPrice }}</b>
                                    <b v-else>$ 0</b>
                                </span>
                                <span class="btn btn-danger py-1 px-2 float-right mr-1" @click="clearCart">Clear Cart</span>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    methods:{
        changeState(){
            this.$store.commit('navChangeState')
            this.$store.dispatch('getProducts')
        },
        removeCart(id){
            this.$store.dispatch('removeCart',id)
        },
        clearCart(){
            this.$store.commit('clearCart')
        }
    },
    mounted(){
        // this.$store.dispatch('')
    },
    computed:{
        ...mapState([
            'cartProduct'
        ]),
        ...mapGetters([
            'totalPrice'
        ])
    } 
}
</script>

<style>
    .dropdown-divider{
        width: 290px !important;
        margin: 0 auto !important;
        margin-bottom: 5px !important;
    }
    .dropdown-menu{
        min-width: 320px !important;
        left: auto !important;
        right: 0;
    }
</style>