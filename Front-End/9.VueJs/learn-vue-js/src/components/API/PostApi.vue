<template>
    <h1>API call, Post data to Api</h1>

    <input type="text" name="email" v-model="email"/><br><br>
    <input type="password" name="password" v-model="password" /><br><br>

    <button v-on:click="addUser()">Add User</button>
    
</template>

<script>
import axios from 'axios';
export default {
    name: 'PostApi',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async addUser() {
            let result = await axios.post("http://localhost:8585/add",{
                email:this.email, password:this.password,
            })

            console.warn("Result ", result)
        }
    }
}

</script>