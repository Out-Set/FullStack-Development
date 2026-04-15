<template>
    <h2>{{childUser}}</h2>
    <Child :getUser="getUserName"/>
</template>

<script>

    import Child from './Child.vue'

    export default{
        name:'ParentComp',
        components:{
            Child,
        },
        data(){
            return{
                childUser:""
            }
        },
        methods:{
            getUserName(name){
                this.childUser=name
            }
        }
    }
</script>