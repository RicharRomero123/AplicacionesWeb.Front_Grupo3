<template>
  <div class="checkbox-wrapper">
    <pv-checkbox v-model="checked" :binary="true" class="checkbox" id="checkbox-digital" />
    <label for="checkbox-digital" class="label">{{ $t('_digitalVersion') }}</label>
  </div>
</template>

  <script>
export default {
  name: 'PrimeVueDigitalVersion',
  data() {
    return {
      checked: false
    }
  }
}
</script>

<style scoped>
.checkbox-wrapper {
  display: flex;  
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-around;
}
.label {
  margin-left: 10px;
}
</style>
