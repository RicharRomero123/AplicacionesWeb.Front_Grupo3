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

  <footer />
</template>

<style scope>
.content {
  display: flex;
}
</style>
