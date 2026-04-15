<template>
    <h1>BeforeUnMount and unmounted</h1>
    
    <button v-on:click="show=!show">Toggle</button>
    <UserComp v-if="show"/>
</template>

<script>
    import UserComp from './User.vue'
    export default{
        name:'UnMountComp',
        components:{
            UserComp,
        },
        data(){
            return{
                show:true
            }
        }
    }
</script>