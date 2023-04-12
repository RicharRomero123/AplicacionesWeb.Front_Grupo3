<template>
  <div class="input-wrapper">
    <span>Code:</span>
    <pv-inputmask id="basic" v-model="value" mask="99-999999" placeholder="99-999999" />
  </div>
</template>

<script>
export default {
  name: "PrimeVueCode.vue",
  data() {
    return {
      value: ""
    };
  }
}
</script>

<style scoped>
.input-wrapper {
  display: flex;
  align-items: center;
}
.input-wrapper span {
  margin-right: 10px;
}
</style>

