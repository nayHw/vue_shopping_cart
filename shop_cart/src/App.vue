<template>
  <div id="app">
    <NavigationView />
    <router-view class='mt-2'/>
    <NoitificationView />
  </div>
</template>

<script>
import NavigationView from './pages/NavigationView.vue'
import NoitificationView from './pages/NotificationView.vue'
export default {
  components:{
    NavigationView,
    NoitificationView
  }

}
</script>

<style>

</style>