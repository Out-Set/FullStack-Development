<template>
    <h1>CSS Binding</h1>
    <h2 :class="applyStyle">Home Component</h2>
    <button v-on:click="colorfull=!colorfull">Apply Style</button>
</template>

<script>
    export default{
        name:'ClassBinding',
        data(){
            return{
                colorfull:false
            }
        },
        computed:{
            applyStyle(){
                return{
                    green:this.colorfull, 
                    err:true,
                    other:true
                }
            }
        }
    }
</script>

<style>
    h1{
        color: orange;
    }

    .green{
        background-color: green;
        width: 400px;
        padding: 10px;
    }

    button{
        height: 40px;
        width: 120px;
        background: blue;
        color: white;
    }

    .err{
        color: red;
    }

    .other{
        font-size: 50px;
    }
</style>