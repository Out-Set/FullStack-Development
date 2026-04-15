<template>
    <h1>Validate Form</h1>
    <ul>
        <li v-for="item in error" v-bind:key="item">
            {{ item }} not valid
        </li>
    </ul>
    <p>{{ form }}</p>
    <form action="">
        <label for="">Email: </label>
        <input type="text" placeholder="Enter Email" v-model="form.email"><br><br>

        <label for="">Password: </label>
        <input type="password" placeholder="Enter Password" v-model="form.passowrd"><br><br>

        <label>Choose Country:</label>
        <select name="" id="" v-model="form.country">
            <option disabled="disabled" selected="true">Country</option>
            <option>India</option>
            <option>China</option>
            <option>Russia</option>
            <option>Nepal</option>
        </select><br><br>

        <h3>Technology</h3>
        <label>Java: </label>
        <input type="checkbox" v-model="form.technology" value="java"><br><br>

        <label>Python: </label>
        <input type="checkbox" v-model="form.technology" value="python"><br><br>

        <h3>Gender</h3>
        <label>Female: </label>
        <input type="radio" v-model="form.gender" value="female" name="gender"><br><br>

        <label>Python: </label>
        <input type="radio" v-model="form.gender" value="male" name="gender"><br><br>

        <button v-on:click="login" type="button">Click Me</button>
    </form>
</template>

<script>
export default {
    name:'ValidateForm',
    data(){
        return{
            form:{
                email:'',
                password:'',
                country:'',
                technology:[],
                gender:''
            },
            error:[],
        }
    },
    methods:{
        login(){
            this.error = [];
            for(const item in this.form){
                if(this.form[item] === "" || this.form[item].length === 0){
                    this.error.push(item)
                }
            }

            if(this.error.length === 0){
                alert("Data Has Been Submitted")
            }
            console.warn(this.form, this.error)
        },
    }
}
</script>