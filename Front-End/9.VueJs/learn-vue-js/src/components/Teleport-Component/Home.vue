<template>
    <h1>Teleport Component</h1>
    <teleport to="#footer">
        <FooterComp />
    </teleport>
</template>

<script>

    import FooterComp from "./Footer.vue";

    export default{
        name:'HomeComp',
        components:{
            FooterComp
        }
    }

</script>

<style>
    h1{
        color: orange
    }
</style>