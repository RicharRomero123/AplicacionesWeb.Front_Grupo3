<template>
  <div class="input-wrapper">
    <label for="description" class="input-label">{{ $t('_description') }}</label>
    <pv-texttarea id="description" v-model="value" rows="5" cols="30" />
  </div>
</template>

<script>
export default {
  name: 'PrimeVueDescription',
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>
.input-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.input-label {
  margin-right: 10px;
}
</style>
