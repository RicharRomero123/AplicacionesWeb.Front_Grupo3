<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import final_footer from '../components/final_footer.vue';
import PrimeVueCode from "@/components/PrimeVueCode.vue";
import PrimeVueName from "@/components/PrimeVueName.vue";
import PrimeVueCategory from "@/components/PrimeVueCategory.vue";
import PrimeVueDateAdded from "@/components/PrimeVueDateAdded.vue";
import PrimeVueQuantity from "@/components/PrimeVueQuantity.vue";
import PrimeVueDescription from "@/components/PrimeVueDescription.vue";
import PrimeVueDigitalVersion from "@/components/PrimeVueDigitalVersion.vue";
import PrimeVueStatus from "@/components/PrimeVueStatus.vue";
import PrimeVueConfirmation from "@/components/PrimeVueConfirmation.vue";
import i18n from "@/locales/i18n";


</script>

<template>
  
  <div>
    <TheWelcome></TheWelcome>
  </div>

    <div class="Cuerpo">

      <div class="Formulario">
        <div class="pestaña">
          <p class="titulo">Add Tutorial</p>
        </div>
        <PrimeVueCode/>
        <PrimeVueName/>
        <PrimeVueCategory/>
        <PrimeVueDateAdded/>
        <PrimeVueQuantity/>
        <PrimeVueDescription/>
        <PrimeVueDigitalVersion/>
        <PrimeVueStatus/>
        <PrimeVueConfirmation/>
        
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
  height: 110vh;
  margin-bottom: 5px;
}

.Formulario {
  position: relative;
  background-color: #B9B8B5;
  border-radius: 10px;
  padding: 100px;
  height: 100vh;
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

