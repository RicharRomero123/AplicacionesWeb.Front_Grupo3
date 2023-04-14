<template>
  <div class="input-group">
    <label for="category" class="input-label">{{$t('_category')}}</label>
    <pv-dropdown id="category" v-model="selectedCategory" :options="categories" optionLabel="name" placeholder="Seleccionar categoría" class="dropdown-custom w-full md:w-14rem" />
  </div>
</template>

<script>
export default {
  name: "PrimeVueCategory",
  data() {
    return {
      selectedCategory: null,
      categories: [
        { name: "Categoria 1" },
        { name: "Categoria 2" },
        { name: "Categoria 3" }
      ]
    };
  }
};
</script>


<style scoped>
.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

}

.input-label {
  margin-right: 10px;
  width: 80px; /* Ajustar el ancho del label */
}

.dropdown-custom {
  margin-right: 10px;
  max-width: 14rem;
}
</style>

