<template>
  <div class="card">
    <header>
      <h5>{{ title }}</h5>
    </header>

    <section>
      <slot />
    </section>

    <footer>
      <p>{{ description }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  props: { title: String, imageSrc: String, description: String }
}
</script>

<style scoped>
.card {
  border: 1px solid black;
  height: 200px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

header {
  border-bottom: 1px solid black;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
}

footer {
  border-top: 1px solid black;
  justify-self: flex-end;
}
</style>
