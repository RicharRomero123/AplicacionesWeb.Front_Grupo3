<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import TutorialsGrid from '../components/TutorialsGrid.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>

  <div class="content">
    <TutorialsGrid />
  </div>
</template>

<style scope>
.content {
  display: flex;
}
</style>
