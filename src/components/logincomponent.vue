<template>

<div>Log in to start!</div>
<label>User</label>
<pv-inputtext v-model="username"></pv-inputtext>
<p/>
<label>Pass</label>
<pv-inputtext v-model="password"></pv-inputtext>
<p/>
<pv-button label="login" @click="loginUser()"></pv-button>
    
</template>
    
<script>
    
    import {LoginApiService} from "@/services/login-api.services.js";
    export default {
      name: "Login",
    
      data(){
        return{
          username:'',
          password:'',
          loginapiService :new LoginApiService()
        }
      },
      methods:{
        loginUser(){
          const body={
            email:this.username,
            password:this.password
          }
          this.loginapiService.login(body).then((response)=>{
            window.localStorage.setItem('jwt',response.data.accessToken)
            console.log(response)
          })
          
          this.$router.push('/userspage');
        }
      }
    }   
</script>
    
<style scoped>
    
</style>