<template>
  <div class="checkbox-wrapper">
    <pv-checkbox v-model="checked" :binary="true" class="checkbox" />
    <label for="digitalVersion" class="label">Digital Version</label>
  </div>
</template>

<script>
export default {
  name: "PrimeVueDigitalVersion",
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<style scoped>
.checkbox-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.label {
  margin-left: 10px;
}

</style>
