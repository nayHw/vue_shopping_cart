<template>
  <div class="container">
    <div class="row" v-if="!show">
      <div class="col-md-3">
        <div class="card pb-1">
          <div class="card-body p-2">
            <img alt="Vue logo" src="../assets/images/logo.png" class="w-100">
            <h5 class="card-title" @click="show = true">Special title treatment</h5>
            <div class="pb-3">
              <span class="btn outline-none py-1 pl-0">$50</span>
              <span class="float-right btn btn-outline-info py-1 px-4">vuex</span>
            </div>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
          <span class="btn btn-primary mx-1">Add To Cart</span>
        </div>
      </div>
    </div>
    
    <div class="row" v-if="show">
      <div class="col">  
        <div class="card pb-1">
          <div class="card-body p-2">
            <div class="row">
              <div class="col-md-4">
                <img alt="Vue logo" src="../assets/images/logo.png" class="w-100">
              </div>
              <div class="col-md-8 pt-5">
                <h4 class="card-title pt-4">Special title treatment</h4>
                <div class="pb-3 w-50">
                  <span class="btn outline-none py-1 pl-0">Price: $50</span>
                  <span class="float-right btn btn-info py-1 px-4">vuex</span>
                </div>
                <h6>Description:</h6>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
                <span class="btn btn-primary mx-1">Add To Cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data(){
    return{
      show:false
    }
  }
}
</script>

<style>
  h5{
    cursor: pointer;
  }
</style>
