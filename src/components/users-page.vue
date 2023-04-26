<template>
    
    <div v-for="user in users">
        user {{user}}
        <pv-button >posts</pv-button>
    </div>
</template>

<script>


import {UsersApiService} from "@/services/users-api.service";

export default {
    name: "users",
    data() {
        return {
            users: [],
            userService: new UsersApiService()
        }
    },

    beforeMount() {
        this.userService.getAll().then((response)=>{
            alert(response.status)
            this.users = response.data.map(item => item.userId);

            this.users = this.users.filter((value, index, self) => {
            return self.indexOf(value) === index;});
            
        })
        console.log(this.users);


    }



}
</script>

<style scoped>

</style>