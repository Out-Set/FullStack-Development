<template>

    <!-- <slot></slot> -->
    <!-- <slot><h1>Child Component</h1></slot> -->

    <div class="cart">
        <header>
            <slot name="header"></slot>
        </header>
        <content>
            <slot name="main"></slot>
        </content>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
    export default{
        name:'ChildComp',
    }
</script>

<style>
    .cart{

        border: 1px solid;
        height: 200px;
        width: 170px;
        background: rgb(187, 79, 173);
        padding: 20px;;
        margin: 5px
    }
</style>