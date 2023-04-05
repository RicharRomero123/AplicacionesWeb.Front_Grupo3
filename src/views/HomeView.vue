<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import TutorialsGrid from '../components/TutorialsGrid.vue'
import final_footer from '../components/final_footer.vue'
import CategoryCard from "@/components/CategoryCard.vue";
</script>

<template>
  <main>
    <TheWelcome />
  </main>

<div calss="cuerpo">
    <div>
        <CategoryCard name="Category 1" description="Description 1"> </CategoryCard>
        <CategoryCard name="Category 2" description="Description 2"> </CategoryCard>
        <CategoryCard name="Category 3" description="Description 3"> </CategoryCard>
        <CategoryCard name="Category 4" description="Description 4"> </CategoryCard>
    </div>

    <div class="content">
        <TutorialsGrid />
    </div>

</div>

  <div>
    <final_footer/>
  </div>
  
  
</template>

<style>
div .content {
  display: flex;
  position: relative;
}

div .cuerpo{
    display: flex;
    position: relative;
}
</style>

