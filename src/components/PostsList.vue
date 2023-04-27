<template>
<header>
    <the-welcome/>
</header>
  <body>
  <PostsContainer/>
  </body>
</template>

<script>
import TheWelcome from "@/components/TheWelcome.vue";
import PostsContainer from "@/components/posts-container.vue";
export default {
    name: "PostsList",
    components:{
        PostsContainer,
        TheWelcome,
    }
}
</script>

<style scoped>

</style>