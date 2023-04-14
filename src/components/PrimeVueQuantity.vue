<template>
  <div class="input-group">
    <label for="quantity" class="input-label">{{ $t('_quantity') }}</label>
    <pv-inputnumber id="quantity" v-model="value1" inputId="integeronly" class="input-number" />
  </div>
</template>

<script>
export default {
  name: 'PrimeViuQuantity',
  data() {
    return {
      value1: null
    }
  }
}
</script>

<style scoped>
.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.input-label {
  margin-right: 10px;
}
.input-number {
  width: 150px;
  margin-left: -5px;
}
</style>
