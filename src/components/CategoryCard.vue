<template>
  <div class ="category">
      <header>
          <h4>{{ name }}</h4>
      </header>
      <div class ="descrip">
          <p>{{description}}</p>
      </div>

      <div class = "info">
          <a href = #> +Info+</a>
      </div>

  </div>
</template>

<script>
    export default {
    props: { name: String, description: String }
    }
</script>

<style>
  div .category{
      border: 1px solid black;
      height: 200px;
      width: 150px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin: 25px 0 0 15px;
      padding: 0;
  }
  .category:hover{
      box-shadow: 0 5px 5px rgb(3, 89, 92, 0.5);
      transform: translateY(-15px);
      background: #f2f2f2;
  }
  header {
      height: 15%;
      width: 100%;
      color: red;
      border-bottom: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  div .descrip{
      height: 75%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid black;
  }
  div .info{
      height: 20%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  div .info a{
      text-decoration: none;
      color: green;
      background: aliceblue;
      padding:5px 20px;
      border-radius: 5px;
  }
  div .info a:hover{
      background: greenyellow;
  }
</style>