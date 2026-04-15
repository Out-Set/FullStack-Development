<template>
    <h1>API Call, Get data from Api</h1>

    <ul class="item" v-for="item in list" :key="item">
        <li>{{ item }}</li>
    </ul>

</template>

<script>

    import axios from 'axios';

    export default{
        name:'GetApi',
        data(){
            return{
                list:[]
            }
        },

        async mounted(){
            // let result = await axios.get("https://api.github.com/users/Out-set");
            // this.list = result.data;
            // // console.warn(result)

            let result1 = await axios.get("http://localhost:8585/welcome");
            console.warn(result1)
        }
    }
</script>