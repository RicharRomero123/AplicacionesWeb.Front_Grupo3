import axios from "axios";
const http = axios.create({
    baseURL:"http://localhost:3000/", 
    headers:{
    Authorization:"Bearer "+localStorage.getItem("jwt")
    }      
})

export class LoginApiService{

    login(body){
        return http.post('login',body)
    }

}

