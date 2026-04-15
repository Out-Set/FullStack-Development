<template>
    <h1>Computed Property</h1>

    <h2>Using Normal Way</h2>
    <h2>{{ (dollars*rupeeVal)-discount }}</h2>
    <h2>{{ (dollars*rupeeVal)-discount }}</h2>
    <h2>{{ (dollars*rupeeVal)-discount }}</h2>

    <h2>Using Computed</h2>
    <h2>{{ getResult }}</h2>
    <h2>{{ getResult }}</h2>
    <h2>{{ getResult }}</h2>

    <h2>Using Method</h2>
    <h2>{{ getResMethod() }}</h2>
    <h2>{{ getResMethod() }}</h2>
    <h2>{{ getResMethod() }}</h2>
</template>

<script>
    export default{
        name:'ComputedProp',
        data(){
            return{
                dollars:100,
                rupeeVal:70,
                discount:10
            }
        },
        methods:{
            getResMethod(){
                return (this.dollars*this.rupeeVal)-this.discount;
            }
        },
        computed:{
            getResult(){
                return (this.dollars*this.rupeeVal)-this.discount;
            }
        }
    }
</script>