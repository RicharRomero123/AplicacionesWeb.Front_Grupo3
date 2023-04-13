<template>

    <div class="code-wrapper">
        <pv-button class="my-button" label="Save" />
        <pv-button class="my-button" label="Cancel" severity="danger" />
    </div>
  </template>
  
  <script>
  import Button from "primevue/button";
  
  export default {
    name: "PrimeVueCode",
    data() {
      return {
        value: "",
      };
    },
    components: {
      Button,
    },
  };
  </script>
  
  <style scoped>
  .input-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .code-wrapper {
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .input-mask {
    margin-right: 10px;
  }
  .my-button {
    font-size: 1.2em;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px; /* Ajustar el margen izquierdo del botón */
  }
  .my-button:hover {
    background-color: #0062cc;
  }
  </style>
  