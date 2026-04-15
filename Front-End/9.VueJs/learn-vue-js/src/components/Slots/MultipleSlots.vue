<template>
    <h1>Slots in Vue-JS</h1>
    
    <ChildComp>
        <template v-slot:header>
            <h1>Peter</h1>
        </template>
  
        <template v-slot:main>
            <p>Vue JS Project</p>
        </template>

        <template v-slot:footer>
            <button>Buy Now</button>
        </template>
    </ChildComp>

    <ChildComp>
        <template v-slot:header>
            <h1>Brucee</h1>
        </template>
  
        <template v-slot:main>
            <p>Java Project</p>
        </template>

        <template v-slot:footer>
            <button>Buy Now</button>
        </template>
    </ChildComp>

</template>

<script>
    import ChildComp from './Child.vue'
    export default{
        name:'MultiSlotComp',
        components:{
            ChildComp
        }
    }
</script>

<style>
    button{
        height: 40px;
        width: 120px;
        background: orange;
        color: white;
    }
</style>