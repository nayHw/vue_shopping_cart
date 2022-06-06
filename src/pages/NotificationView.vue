<template>
    <div class="mb-3 alert alert-dismissible fade show" role="alert" :class="noti.type">
        <strong>{{ noti.message }}</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
export default {
    props:["noti"],
    data(){
        return{
            timeout: null,
        }
    },
    created(){
        this.timeout = setTimeout(() => {
            this.$store.dispatch('removeNoti',this.noti)
        }, 3000);
    },
    beforeDestroy(){
        clearTimeout(this.timeout)
    }
}
</script>

<style>
</style>