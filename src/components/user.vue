<template>
    <div class="text-center">User {{id}}</div>

    <div class="button-grid">
        <pv-button label="Back to Home" @click="backToHome()" />
        <!-- Agrega aquí más botones -->
    </div>
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
.text-center {
    text-align: center;
}

.button-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
</style>
