<template>
    <h1>Form Modifiers</h1>
    <input type="number" v-model.trim="data" v-model.number="data"/>
    <h2>Data is: {{ data }}</h2>
    <h2>Data is: {{ typeof(data) }}</h2>
</template>

<script>

    export default{
        name:'FormModifiers',
        data(){
            return{
                data:''
            }
        }
    }
</script>