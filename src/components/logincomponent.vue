<template>
<TheWelcome></TheWelcome>
<div class="login">
    <div>Log in to start!</div>
    <div>User</div>
    <pv-inputtext v-model="username" placeholder="user@email.com"></pv-inputtext>
    <div>Password</div>
    <pv-inputtext v-model="password" placeholder="1234567"></pv-inputtext>
    <p/>
    <pv-button label="login" @click="loginUser()"></pv-button>
</div>
</template>
    
<script>
    
    import TheWelcome from "./TheWelcome.vue";
    import {LoginApiService} from "@/services/login-api.services.js";
    export default {
    components: {
        TheWelcome
    },
    name: "Login",
    data() {
        return {
            username: "",
            password: "",
            loginapiService: new LoginApiService()
        };
    },
    methods: {
        loginUser() {
            const body = {
                email: this.username,
                password: this.password
            };
            this.loginapiService.login(body).then((response) => {
                console.log(response);
                if (response.status === 200) {
                    window.localStorage.setItem("jwt", response.data.accessToken);
                    this.$router.push("/userspage");
                }
                else {
                    alert("login error");
                }
            });
        }
    },
    components: { TheWelcome }
}   
</script>
    
<style scoped>
.login{
    padding-top: 100px;
    min-height: 300px;
    align-content: center;
    text-align: center;
}
div{
    font-family: "Roboto",sans-serif;
    padding-top: 20px;
}
</style>