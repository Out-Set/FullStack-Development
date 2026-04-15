<template>
    <h1>Pass Data to Child Component</h1>
    <Child name="Savan Prajapati" :user="user" :getData="getData"/>
</template>

<script>

    import Child from './Child.vue';

    export default{
        name: 'ParentComp',

        components:{
            Child,
        },
        data(){
            return{
                user:{name:'sawan', email:'sawan@mail.com'}
            }
        },
        methods:{
            getData(){
                document.write("Function Called")
                alert("Function Called")
            }
        }
    }
</script>