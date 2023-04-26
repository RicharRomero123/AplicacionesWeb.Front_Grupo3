<template>
    <div>User {{id}}</div>
    
    <pv-button label="Back to Home" @click="backToHome()" />
</template>

<script>
export default {
    name: "user",
    data(){
        return{
            id:0,
            
        }
    },
    methods:{
        backToHome:function (){
            this.$router.push('/');
        }
    },
    beforeMount() {
        this.id =  this.$route.params.id
        // invocar API User
       
    }
}
</script>

<style scoped>
</style>