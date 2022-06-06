<template>
  <div id="app">
    <NavigationView />
    <router-view class='mt-2'/>
    <NotificationList />
  </div>
</template>

<script>
import NavigationView from './pages/NavigationView.vue'
import NotificationList from './pages/NotificationList.vue'
export default {
  components:{
    NavigationView,
    NotificationList
  }

}
</script>

<style>

</style>