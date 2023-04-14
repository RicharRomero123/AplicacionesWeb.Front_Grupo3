<template>
  <div class="input-wrapper">
    <span class="code-label">{{$t('_code')}}</span>
    <div class="code-wrapper">
      <pv-inputmask id="basic" v-model="value" mask="99-999999" placeholder="99-999999" class="input-mask" />
      <pv-button class="my-button" label="Validate" />
    </div>
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
    //Button,
  },
};
</script>

<style scoped>
.input-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.input-wrapper span {
  margin-right: 10px;
  width: 60px; /* Ajustar el ancho del span */
}
.code-wrapper {
  display: flex;
  align-items: center;
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
