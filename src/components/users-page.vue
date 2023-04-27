<template>
    <div>
        <TheWelcome />
        <div class="user-grid">
            <div v-for="user in users" :key="user" class="user-cell">
                <div class="user-text">user {{user}}</div>
                <pv-button class="post-button">
                    <router-link :to="{name:'user',params: {id:user}}">Posts</router-link>
                </pv-button>
            </div>
        </div>
    </div>
</template>


<script>
import { UsersApiService } from "@/services/users-api.service";
import TheWelcome from "@/components/TheWelcome.vue";
export default {
    components: {
        TheWelcome
    },
    name: "users",
    data() {
        return {
            users: [],
            userService: new UsersApiService()
        }
    },
    beforeMount() {
        this.userService.getAll().then((response) => {
            alert(response.status)
            this.users = response.data.map(item => item.userId);

            this.users = this.users.filter((value, index, self) => {
                return self.indexOf(value) === index;
            });

        })
    }
}
</script>

<style scoped>
.user-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.user-cell {
    background-color: #3B5998;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
}

.user-text {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 24px;
    color: white;
}

.post-button {
    background-color: #4267B2;
    color: #fff;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0px 3px 10px rgba(66, 103, 178, 0.3);
    transition: all 0.2s ease-in-out;
}

.post-button:hover {
    background-color: #385899;
    box-shadow: 0 5px 15px rgba(66, 103, 178, 0.5);
}

.post-button:active {
    background-color: #0f5cc0;
    transform: translateY(2px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
}

.post-button:focus {
    outline: none;
}
</style>
