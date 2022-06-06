<template>
  <div class="noti">
      <NotificationView v-for="noti in notifications" :key="noti.id" :noti="noti"/>
  </div>
</template>

<script>
import NotificationView from './NotificationView.vue'
import { mapState } from 'vuex'
export default {
    components:{
        NotificationView
    },
    computed: mapState(['notifications'])
}
</script>

<style>
    .noti{
        position: fixed;
        bottom: 0;
        right: 0;
        width: 320px;
        margin-right: 15px;
    }

</style>