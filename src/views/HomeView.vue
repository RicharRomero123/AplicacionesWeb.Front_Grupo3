<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import TutorialsGrid from '../components/TutorialsGrid.vue'
import footer from '../components/footer.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>

  <div class="content">
    <TutorialsGrid />
  </div>

  <div>
    <footer />
  </div>
  
  
</template>

<style scope>
.content {
  display: flex;
}
</style>
