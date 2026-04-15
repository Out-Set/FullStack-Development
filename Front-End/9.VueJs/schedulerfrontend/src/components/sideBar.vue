<template>
    <div class="sidebar">
        <div class="logoDiv" @click="gotoHome()">
            <h5>Home</h5>
        </div>
        <br>

        <ul class="nav nav-pills flex-column mb-auto nav-items-container">
            <li>
                <router-link to="/schedulerHome"> <button class="text-start customButton"
                        :class="{ active: this.$route.path.startsWith('/schedulerHome'), customButton: true }">
                        Scheduler</button>
                </router-link>
            </li>

            <li>
                <router-link to="/serviceIdentifiers"><button class="text-start customButton"
                        :class="{ active: this.$route.path.startsWith('/serviceIdentifiers'), customButton: true }">
                        Audit Log</button></router-link>
            </li>
        </ul>
    </div>

    <div class="main">
        <nav class="navbar">
            <div class="container-fluid">
                <span @click="gotoHome()" class="integration-Home"><strong>Integration Dashboard</strong></span>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'sideBar',
    methods: {
        gotoHome() {
            this.$router.push('/schedulerHome')
        },
    },

}
</script>

<style scoped>
.logoDiv {
    margin-top: 4px;
    color: brown;
}

.navbar {
    background-color: #5ee9e9;
}

.container-fluid {
    background-color: #5ee9e9;
    justify-content: center !important;
}

.integration-Home {
    font-size: 30px;
    text-decoration: none;
    color: #fffafa;
    cursor: default;
}

.sidebar {
    height: 100%;
    width: 12%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: white;
    overflow-x: hidden;
    box-shadow: 1px 1px 1px #818181;
    padding: 0px 5px 0px 5px;
}

.customButton {
    /* padding: ; */
    font-size: 1.2rem;
    color: black;
    display: block;
    border: none;
    background: none;
    width: 100%;
}

.sidebar button:hover {
    background-color: #afaedd;
    color: white;

}

.main {
    margin-left: 12%;
    padding: 0px 10px;
    background-color: #5ee9e9;
    box-shadow: 1px 1px 1px #81818130;
    width: 88%;
}

.active {
    background-color: #5e5bec;
    color: white;
}

a {
    font-size: 20px;
    color: black;

    border: none;
    background: none;

    text-decoration: none;
}

@media (max-width: 1200px) {
    .customButton {
        padding: 6px;
        font-size: 15px;
        color: black;
        border: none;
        background: none;
        width: 80%;
        margin-left: 0px;

    }

    .sidebar {
        height: 60px;
        position: relative;
        z-index: 0;
        top: 0;
        left: 0;
        width: 100%;
        overflow-x: none;
        background-color: white;
        box-shadow: 0px 0px 0px #818181;
        display: flex;
    }

    .main {
        position: relative;
        top: 1px;
        margin-left: 0%;
        margin: 0px 0.75rem 0px 0.75rem;
        width: 97.8%;
    }

    .flex-column {
        flex-direction: row !important;
        width: 70%;
    }

    .active {
        background-color: #5e5bec;
        color: white;
    }

    .nav-items-container {
        padding: 10px;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        display: grid;
        grid-template-columns: auto auto;
    }

    .nav-items-container>li {
        min-width: 4rem;
        width: 6rem;
        height: 100%;
    }

    .nav-items-container>li>a {
        width: 8rem;
        height: 100%;
    }
}</style>
