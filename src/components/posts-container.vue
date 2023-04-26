<template>
    <div>Posts: User {{ id }}</div>
    <div v-for="post in posts">
        <post :title="post.title" :body="post.body" :id="post.id"/>
    </div>
</template>


<script>
import {UsersApiService} from "@/services/users-api.service";
import Post from "@/components/post.vue";

export default {
    name: "post.component",
    components:{Post},
    data() {
        return {
            id:1,
            posts: [],
            postService: new UsersApiService()
        }
    },

    beforeMount() {
        
        this.id = this.$route.params.id

        this.postService.getAll().then((response)=>{
            this.posts = response.data.filter(post => post.userId === parseInt(this.id))
        })
        console.log(this.posts)

    }



}



</script>

<style scoped>

</style>