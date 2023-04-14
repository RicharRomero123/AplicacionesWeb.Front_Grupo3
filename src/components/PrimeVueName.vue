<template>
  <div class="input-wrapper">
    <span>{{$t('_name')}}</span>
    <pv-inputtext v-model="name" class="input-text" />
  </div>
</template>

<script>
export default {
  name: "PrimeVueName",
  data() {
    return {
      name: "",
    };
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
.input-text {
  margin-left: 10px; /* Ajustar el margen izquierdo del input */
}
</style>
