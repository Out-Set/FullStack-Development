<template>
    <h1 v-on:mousemove="getConsole()"> Home Component</h1>
    <button v-on:click="getData()">Click Me</button><br><br>
    <button v-on:dblclick="getData()">Click Me</button>
    <h2>{{ count }}</h2>
    
</template>

<script>
    export default{
        name: 'EventsInVue',
        data(){
            return{
                count:0
            }
        },
        methods:{
            getData(){
                this.count = this.count++;
            },
            getConsole(){
                console.warn("Function called")
            }
        }
    }
</script>

<style scoped>
    button{
        height: 50px;
        width: 100px;
        background: blue;
        color: white;
    }

</style>