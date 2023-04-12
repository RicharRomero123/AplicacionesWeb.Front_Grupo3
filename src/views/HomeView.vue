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


        <div class="content">
          <PrimeVueCode/>

        </div>
    </div>



  <PrimeVueCode/>

  <div>
    <final_footer/>
  </div>

</template>

<style scope>
div .content {
    width: 100%;
    display: flex;
    position: relative;
    padding-left: 50px;
    margin-left: 50px;
    border-left: 10px solid grey;
}
div .Cuerpo{
    display: flex;
    position: relative;
    margin-bottom: 550px;
}
</style>

