<template>
    <p></p>
    <h3>Titulo {{id}}: {{title}} </h3>
    
    <p></p>
    <div>{{body}}</div>
    <p></p>
</template>

<script>
export default {

    name: "post",
    props:['id','title','body'],
    data(){
        return{
            
        }
    },

    
}
</script>

<style scoped>

</style>