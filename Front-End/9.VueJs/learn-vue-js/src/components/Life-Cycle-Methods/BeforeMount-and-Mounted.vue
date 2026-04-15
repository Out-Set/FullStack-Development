<template>
    <h1>BeforeMount and Mounted</h1>
    <h2>Welcome</h2>
</template>

<script>
    export default{
        name:'MountComp',
        data(){
            console.warn("Mounted")
            return{
                name:'Sawan'
            }
        },
        beforeMount(){
            console.warn("beforeMount",this.$el)
        },
        mounted(){
            console.warn("mounted",this.$el)
        }
    }
</script>