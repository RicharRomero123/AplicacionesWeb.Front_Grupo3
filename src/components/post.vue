<template>
    <div class="post-container">
        <div class="title-container">
            <h3>Titulo {{id}}: {{title}} </h3>
        </div>
        <div class="body-container">
            <p>{{body}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "post",
    props:['id','title','body'],
}
</script>

<style scoped>
.post-container {
    background-color: #f0f2f5;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
}

.title-container {
    background-color: #1778f2;
    color: #ffffff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
}

.body-container {
    background-color: #ffffff;
    color: #1c1e21;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 10px;
}
</style>
