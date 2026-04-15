<template>
    <!-- <sideBar></sideBar> -->

    <div class="master">

        <schedulerHomePage/>
        <br>
        <!-- <integrationHome v-if="load"></integrationHome> -->

    </div>
</template>

<script>

// import sideBar from './sideBar.vue'
import schedulerHomePage from './Scheduler/schedulerHome.vue'
// import integrationHome from './Integration/integrationHome.vue'

export default {
    name: 'HomeComponent',
    components: {
        schedulerHomePage,
        // integrationHome,
        // sideBar
    },
    data() {
        return {
            load: false,
        }
    },
    mounted() {
        setInterval(() => {
            this.load = true;
        }, 2000);
    }
}
</script>

<style>
@media (max-width: 767px) {
    .master {
        margin-left: 1%;
    }
}
</style>
