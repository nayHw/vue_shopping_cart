<template>
<div class="noti">
        <div v-for="noti in notifications" :key="noti.id" class="mb-3 alert alert-dismissible fade show" role="alert" :class="noti.type">
            <strong>{{ noti.message }}</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            timeout: null,
        }
    },
    methods:{
        removeNoti(noti){
            this.$store.dispatch('removeNoti',noti)
        }
    },
    created(){
        this.timeout = setTimeout(() => {
            this.removeNoti(this.notifications)
        }, 3000);
    },
    beforeDestroy(){
        clearTimeout(this.timeout)
    },
    computed:{
        notifications(){
            return this.$store.state.notifications
        }
    }
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