<template>
  <main>
    <TutorialCard title="Tutorial 1" description="Descripcion 1">
      <IconCommunity />
    </TutorialCard>

    <TutorialCard title="Tutorial 2" description="Descripcion 2">
      <IconDocumentation />
    </TutorialCard>

    <TutorialCard title="Tutorial 3" description="Descripcion 3">
      <IconEcosystem />
    </TutorialCard>

    <TutorialCard title="Tutorial 4" description="Descripcion 4">
      <IconSupport />
    </TutorialCard>
  </main>
</template>

<script setup>
import TutorialCard from './TutorialCard.vue'

import IconCommunity from './icons/IconCommunity.vue'
import IconDocumentation from './icons/IconDocumentation.vue'
import IconEcosystem from './icons/IconEcosystem.vue'
import IconSupport from './icons/IconSupport.vue'
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 200px;
  margin: 30px auto;
  position: relative;
  padding-bottom: 2em;
  min-height: 89vh;
}
</style>
