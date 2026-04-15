<template>
    <h1>{{ text }}</h1>
    <div v-html="tag"></div>
    <div v-html="tag2"></div>
</template>

<script>
    export default{
        name:'HtmlBinding',
        data(){
            return{
                text:"Sawan Prajapati",
                tag:"<h1>Sawan Prajapati</h1>",
                tag2:"<h1>sawan@gamil.com</h1>"
            }
        }
    }
</script>