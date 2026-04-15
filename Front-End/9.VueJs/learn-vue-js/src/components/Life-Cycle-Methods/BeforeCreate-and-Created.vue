<template>
    <h1>BeforeCreate and Created</h1>
    <h2>{{ name }}</h2>
</template>

<script>
    export default{
        name:'CreateComp',
        data(){
            console.warn("Created")
            return{
                name:'Sawan'
            }
        },
        beforeCreate(){
            alert("beforeCreate")
        },
        created(){
            this.name="Peter";

            alert("created");
        }
    }
</script>