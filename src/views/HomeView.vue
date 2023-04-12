<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import TutorialsGrid from '../components/TutorialsGrid.vue';
import final_footer from '../components/final_footer.vue';
import CategoryCard from "@/components/CategoryCard.vue";
import PrimeVueCode from "@/components/PrimeVueCode.vue";
</script>

<template>
  <main>
    <TheWelcome />
  </main>

    <div class="Cuerpo">

      <div class="Formulario">
        <div class="pestaña">
          <p class="titulo">Add Tutorial</p>
        </div>
        <PrimeVueCode/>
      </div>

    </div>



  <div>
    <final_footer/>
  </div>

</template>


<style>
.Cuerpo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.Formulario {
  position: relative;
  background-color: #B9B8B5;
  border-radius: 10px;
  padding: 100px;
  height: 60vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.pestaña {
  background-color: #4B4A47;
  height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.titulo {
  color: white;
  margin: 0;
  padding: 20px;
}

</style>

