<template>
    <label for="status" class="ms-2 me-3">{{$t(status_label)}}</label>
    <pv-radiobutton v-model="status" inputId="status" id="status" name="status" @click="handleClick()"/>


</template>

<script>

export default {
    props: ['status_label'],
    name: "StatusComponent",
    data(){
        return{
            status:'Inactive'
        }
    },
    beforeMount() {
        console.log('---before mounted')
    },
    mounted() {
        console.log('--- mounted')
    },
    unmounted() {
        console.log('--- unmounted')
    },
    updated() {
        console.log('--- updated')
    },
    methods:{
        
        handleClick(){
            console.log('clicked' )
            this.status = 'Active'
            console.log('Status change')
        }
    }
}
</script>

<style>


</style>