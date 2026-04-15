<template>
    <h1>Slots in Vue-JS</h1>
    <ChildComp><h1>Hello h1 Tag</h1></ChildComp> 
    <ChildComp><a href="#">This is a Tag</a></ChildComp>
    <ChildComp><img src="./logo.png" /></ChildComp>
</template>

<script>
    import ChildComp from './Child.vue'
    export default{
        name:'SlotComp',
        components:{
            ChildComp
        }
    }
</script>