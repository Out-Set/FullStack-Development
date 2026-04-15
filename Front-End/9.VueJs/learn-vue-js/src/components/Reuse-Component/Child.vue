<template>
    <div class="div">
        <h3>{{ data.name }}</h3>
        <h3>{{ data.email }}</h3>
        <button v-on:click="getData(data.name)">Click Me</button>
    </div>
</template>

<script>
    export default{
        name:'childComp',
        props:{
            data:Object,
            getData:Function
        }
    }
</script>

<style>
    .div{
        height: 120px;
        width: 20%;
        background: lightblue;
        color: indigo;
    }

    button{
        height: 30px;
        width: 120px;
        color: white;
        background: blue;
    }
</style>