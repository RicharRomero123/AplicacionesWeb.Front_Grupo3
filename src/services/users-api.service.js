import axios from "axios";

const http = axios()
export class UsersApiService{

    getAll(){
        //get
        return axios.get('https://jsonplaceholder.typicode.com/users')
    };

    getUserById(id)
    {
        return axios.get('https://jsonplaceholder.typicode.com/users/'+id)
    };

    createUser(body){
        return axios.post('https://jsonplaceholder.typicode.com/users',body)
    }
    update(id,body){
        return axios.put('https://jsonplaceholder.typicode.com/users/'+id,body)
    }
    delete(id)
    {
        return axios.put('https://jsonplaceholder.typicode.com/users/'+id)
    }

}