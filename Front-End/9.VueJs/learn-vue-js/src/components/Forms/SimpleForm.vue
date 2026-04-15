<template>
    <h1>Simple Form</h1>
    <p>{{ form }}</p>
    <form action="">
        <label for="">Email: </label>
        <input type="text" placeholder="Enter Email" v-model="form.email"><br><br>

        <label for="">Password: </label>
        <input type="password" placeholder="Enter Password" v-model="form.passowrd"><br><br>

        <button v-on:click="login" type="button">Click Me</button>
    </form>
</template>

<script>
export default {
    name: 'SimpleForm',
    data(){
        return{
            form:{
                email:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            console.warn("login data", this.form)
        }
    }
}
</script>