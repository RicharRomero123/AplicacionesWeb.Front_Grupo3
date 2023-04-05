<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import TutorialsGrid from '../components/TutorialsGrid.vue'
import final_footer from '../components/final_footer.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>

  <div class="content">
    <TutorialsGrid />
  </div>

  <div>
    <final_footer/>
  </div>
  
  
</template>

<style scope>
.content {
  display: flex;
  position: relative;
}
</style>
