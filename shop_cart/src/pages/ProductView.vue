<template>
  <div class="container">
    <div class="row" v-if="!show">
      <div class="col-md-3 mb-2" v-for="product in products" :key="product.id">
        <div class="card pb-1">
          <div class="card-body p-2">
            <img alt="Vue logo" :src="product.image" class="w-100" height="300px`">
            <h5 class="card-title" @click="view(product)">{{ product.title.slice(0,15) }}...</h5>
            <div class="pb-3">
              <span class="btn outline-none py-1 pl-0">$ {{ product.price }}</span>
              <span class="float-right btn py-1 px-2"
              :class="{'btn-danger': (category[0] === product.category),
              'btn-info': (category[1] === product.category),
              'btn-primary': (category[2] === product.category),
              'btn-warning': (category[3] === product.category)
              }" @click='listByCategroy(product.category)'>
                {{ product.category}}
              </span>
            </div>
            <p class="card-text">{{ product.description.slice(0,50)}}...</p>
          </div>
          <span class="btn btn-primary mx-1" @click="addToCart(product)">Add To Cart</span>
        </div>
      </div>
    </div>
    <!-- detail view -->
    <div  v-if="show">
      <div class="row">
        <div class="col">  
          <div class="card pb-1">
            <div class="card-body p-2">
              <div class="row">
                <div class="col-md-4">
                  <img alt="Vue logo" :src="viewProduct.image" class="w-100">
                </div>
                <div class="col-md-8 pt-5">
                  <h4 class="card-title pt-4">{{ viewProduct.title }}</h4>
                  <div class="progress mt-3" style="height: 3px;">
                    <div class="progress-bar" role="progressbar" :style="{width: (viewProduct.rating.rate * 10) + '%' }" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" 
                    :class="{'bg-danger': (category[0] === viewProduct.category),
                    'bg-info': (category[1] === viewProduct.category),
                    'bg-primary': (category[2] === viewProduct.category),
                    'bg-warning': (category[3] === viewProduct.category)
                    }"></div>
                  </div>
                  <div class="pb-3 w-50 mt-5">
                    <span class="btn outline-none py-1 pl-0">Price: $ {{ viewProduct.price }}</span>
                    <span class="float-right btn py-1 px-4" 
                    :class="{'btn-danger': (category[0] === viewProduct.category),
                    'btn-info': (category[1] === viewProduct.category),
                    'btn-primary': (category[2] === viewProduct.category),
                    'btn-warning': (category[3] === viewProduct.category)
                    }">
                      {{ viewProduct.category }}
                    </span>
                  </div>
                  <h6>Description:</h6>
                  <p class="card-text">
                    {{ viewProduct.description}}
                  </p>
                  <div class="pb-3">
                    <input type="text" v-model.number="qty" class="btn btn-outline-info text-dark quantity" required>
                    <span class="btn btn-info py-2 px-2 ml-2"></span>
                    <span class="btn btn-primary py-2 px-2 ml-2"></span>
                    <span class="btn btn-danger py-2 px-2 ml-2"></span>
                    <span class="btn btn-primary mx-2" @click="addToCart(viewProduct,qty)">Add To Cart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-3 mb-2" v-for="product in relatedProducts" :key="product.id">
          <div class="card pb-1">
            <div class="card-body p-2">
              <img alt="Vue logo" :src="product.image" class="w-100" height="250px">
              <h5 class="card-title" @click="view(product)">{{ product.title.slice(0,15) }}...</h5>
              <div class="pb-3">
                <span class="btn outline-none py-1 pl-0">$ {{ product.price }}</span>
                <span class="float-right btn py-1 px-2"
                :class="{'btn-danger': (category[0] === product.category),
                'btn-info': (category[1] === product.category),
                'btn-primary': (category[2] === product.category),
                'btn-warning': (category[3] === product.category)
                }" @click='listByCategroy(product.category)'>
                  {{ product.category}}
                </span>
              </div>
              <p class="card-text">{{ product.description.slice(0,50)}}...</p>
            </div>
            <span class="btn btn-primary mx-1" @click="addToCart(product)">Add To Cart</span>
          </div>
        </div>
      <div>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data(){
    return{
      viewProduct:[],
      category:["electronics","jewelery","men's clothing","women's clothing"],
      qty:1
    }
  },
  methods:{
    view(product){
      this.$store.commit('changeState')
      this.viewProduct = product
      this.$store.dispatch('listByCategroy',product.category)
    },
    listByCategroy(category){
      this.$store.dispatch('listByCategroy',category)
    },
    addToCart(product,quantity){
      if (!quantity) {
        quantity = 1
      }
      this.$store.dispatch('addToCart', {product, quantity})
    }
  },
  mounted(){
    this.$store.dispatch('getProducts')
  },
  computed: mapState([
    'products',
    'show',
    'relatedProducts'
  ]
  )
}
</script>

<style>
  h5{
    cursor: pointer;
  }
  .quantity{
    background-color: transparent !important;
    width: 50px;
    color: rgb(43, 35, 35) !important;
  }
</style>
