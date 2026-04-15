<template>
    <h1>Watchers</h1>
    <h1>{{ count }}</h1>
    <button v-on:click="count=count+1"> + </button> 
    <button v-on:click="count=count-1"> - </button>   
</template>

<script>
    export default{
        name:'WatcherComp',
        data(){
            return{
                count:0
            }
        },
        watch:{
            count(val, prev){
                if(val>5 && val>prev){
                    this.count=0; 
                    alert("Counting Stops Here")
                }
            }
        }
    }
</script>


<style>

button{
    height: 40px;
    width: 80px;
    background: blue;
    color: white;

}

</style>