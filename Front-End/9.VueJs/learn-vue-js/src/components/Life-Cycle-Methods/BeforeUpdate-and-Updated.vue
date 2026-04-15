<template>
    <h1>BeforeUpdate and Updated</h1>
    <h2 ref="count">{{ counter }}</h2>
    <button v-on:click="counter=counter+1">Update Count</button>
</template>

<script>
    export default{
        name:'UpdateComp',
        data(){
            console.warn("Mounted")
            return{
                counter:0
            }
        },
        beforeUpdate(){
            console.log("beforeUpdate",this.$refs['count'].textContent)
        },
        updated(){
            console.warn("updated",this.$refs['count'].textContent)
        }
    }
</script>