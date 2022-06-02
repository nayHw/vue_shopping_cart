<template>
  <div id="app">
    <NavigationView />
    <router-view class='mt-2'/>
  </div>
</template>

<script>
import NavigationView from './pages/NavigationView.vue'
export default {
  components:{
    NavigationView
  }

}
</script>

<style>

</style>