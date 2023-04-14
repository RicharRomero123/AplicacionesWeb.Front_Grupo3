<template>
  <div class="input-group">
    <label for="date-added" class="input-label">{{ $t('_dateAdded') }}</label>
    <pv-calendar id="date-added" v-model="date" showIcon @change="onDateChange" />
  </div>
</template>

<script>
export default {
  name: 'PrimeViuDateAdded',
  data() {
    return {
      date: null
    }
  },
  methods: {
    onDateChange() {
      console.log('Date selected:', this.date)
      // Aquí puedes agregar el código para guardar la fecha seleccionada en tu componente padre
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
</style>
