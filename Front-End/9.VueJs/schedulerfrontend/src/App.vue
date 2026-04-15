<template>
    <sideBar></sideBar>
    <div class="content-container">
      <router-view></router-view>
    </div>
  <!-- <router-link to="/home">Home</router-link> -->
  <!-- <ScheduleTask/>
  <cronLogs/> -->
</template>

<script>
// import ScheduleTask from './components/ScheduleTask.vue';
// import cronLogs from './components/cronLogs.vue';
import sideBar from './components/sideBar.vue'

export default {
  name: 'App',
  components: {
    // ScheduleTask,
    // cronLogs
    sideBar
  }
}
</script>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
  margin: 0px;
}

.content-container {
  height: 93vh;
  width: 88%;
  margin-left: 12%;
  padding: 20px;
  overflow: hidden;
}

@media (max-width: 1200px) {
  .content-container {
    width: 100%;
    margin-left: 0px;
    padding: 0px;
  }
}
</style>
