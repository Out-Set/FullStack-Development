<template>
    <h2>Child Component</h2>
    <h3>{{ name }}</h3>
    <h3>{{ user.name }}</h3>
    <h3>{{ user.email }}</h3>

    <button v-on:click="getData()">Call Function</button>
</template>

<script>

    export default{
        name: 'ChildComp',
        props:{
            name:String,
            user:Object,
            getData:Function
        }
    }

</script>

<style scoped>

    button{
        height: 40px;
        width: 150px;
        color: white;
        background: violet;
    }
</style>