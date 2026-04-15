<template>
    <h2>Teacher Name is : {{ name }}</h2>
</template>

<script>
    export default{
        name:'TeacherComp',
        props:{
            name:String
        }
    }
</script>