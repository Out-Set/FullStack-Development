<template>
    <h1>Props in Vue JS</h1>
    <Student :name="name"/>
    <Teacher :name="name"/>
</template>

<script>
    import Student from './Student.vue'
    import Teacher from './Teacher.vue'

    export default{
        name:'HomeComp',
        data(){
            return{
                name:"Bruce"
            }
        },
        components:{
            Student,
            Teacher
        }
    }
</script>