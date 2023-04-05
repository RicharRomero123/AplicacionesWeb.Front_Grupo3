<template>
  <div class="grid-container">
    <div class="grid-item item-1">
      <MyOwnComponent title="Título del componente 1" description="Descripción del componente 1" />
    </div>
    <div class="grid-item item-2">
      <MyOwnComponent title="Título del componente 2" description="Descripción del componente 2" />
    </div>
    <div class="grid-item item-3">
      <MyOwnComponent title="Título del componente 3" description="Descripción del componente 3" />
    </div>
  </div>
</template>

<script>
import MyOwnComponent from "@/components/MyOwnComponent.vue";

export default {
  name: "GridPage",
  components: {
    MyOwnComponent,
  },
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 20px;
}

.grid-item {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.item-1 {
  grid-column: 1 / span 2;
}

.item-2 {
  grid-column: 3;
  grid-row: 1 / span 2;
}

.item-3 {
  grid-column: 1;
  grid-row: 2 / span 2;
}
</style>