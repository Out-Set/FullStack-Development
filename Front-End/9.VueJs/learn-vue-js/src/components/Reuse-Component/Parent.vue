<template>  
    <ul>
        <li v-for="item in users" :key="item.name">
        <Child :data="item" :getData="getData"/>
        </li>
    </ul>
</template>

<script>
    import Child from './Child.vue'

    export default{
        name: 'parentComp',

        components:{
            Child
        },
        methods:{
            getData(name){
                alert("Called by "+name)
            }
        },
        data(){
            return{
                users:[
                    {
                        name:'Savan',
                        email:'savan@mail.com'
                    },
                    {
                        name:'Mohan',
                        email:'mohan@mail.com'
                    },
                    {
                        name:'Rohit',
                        email:'rohit@mail.com'
                    }
                ]
            }
        }
    }
</script>