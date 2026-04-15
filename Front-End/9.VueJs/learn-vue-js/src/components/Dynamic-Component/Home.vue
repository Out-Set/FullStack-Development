<template>
    <h1>Home Component</h1>

    <button @click="tab='JavaComp'">Load Java</button>
    <button @click="tab='NodeComp'">Load Node</button>
    <button @click="tab='PythonComp'">Load Python</button>

    <!-- <JavaComp />
    <NodeComp />
    <PythonComp /> -->

    <Component :is="tab"/>

</template>

<script>

    import JavaComp from './Java.vue';
    import NodeComp from './Node.vue';
    import PythonComp from './Python.vue';

    export default{
        name:'HomeComp',
        components:{
            JavaComp,
            NodeComp,
            PythonComp
        },
        data(){
            return{
                tab:''
            }
        }
    }

</script>

<style>
    button{
        height: 40px;
        width: 120px;
        background: purple;
        color: white;
        margin: 2px;
    }
    button on:mouseover {
        background: blue;
    }
</style>