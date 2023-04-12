<template>
  <div class="input-wrapper">
    <span>Code:</span>
    <pv-inputmask id="basic" v-model="value" mask="99-999999" placeholder="99-999999" class="input-mask" />
    <pv-button class="my-button" label="Validate" />
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
}
.input-wrapper span {
  margin-right: 10px;
}
.input-mask {
  margin-right: 10px;
}
.my-button {
  font-size: 1.2em;
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.my-button:hover {
  background-color: #0062cc;
}
</style>


