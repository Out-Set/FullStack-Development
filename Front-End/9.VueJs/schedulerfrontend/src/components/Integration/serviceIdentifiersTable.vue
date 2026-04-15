<template>

    <spinner v-if="loader"></spinner>

    <div class="master container-fluid">

        <div class="allData">
            <div class="heading row">
                <h3>Service-Identifiers</h3>
            </div>

            <div class="allDataDiv" style="">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">SERIAL NUMBER</th>
                            <th scope="col">SERVICE NAME</th>
                            <th scope="col">DESCRIPTION</th>
                            <th scope="col">SERVICE TYPE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in (serviceIdentifiers)" :key="data.jobName">
                            <td>{{ data.id }}</td>
                            <td>
                                <router-link class="no-decoration" to="/auditDetails"
                                    @click="saveServiceIdentifierId(data.id)">
                                    {{ data.name }}
                                </router-link>
                            </td>
                            <td>{{ data.description }}</td>
                            <td>{{ data.serviceType }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="footerDiv mt-1">
                <button @click="$router.back()" class="btn btn-secondary btn-sm">Back</button>
            </div>
        </div>
    </div>
</template>
  
<script>
import moment from 'moment';
import { get } from '../../callAPI'
import spinner from '../spinner.vue'

export default {
    name: "serviceIdentifiers",
    components: {
        spinner,
    },
    data() {
        return {
            log: 'Service-Identifiers',
            serviceIdentifiers: [],

            loader: true,
        }
    },

    mounted() {
        get('/serviceIdentifiers')
        // axios.get('http://' + this.ip + ':8081/BitsFlow-App/serviceIdentifiers')
            .then((response) => {
                console.log("Response form Backend: ", response);
                this.serviceIdentifiers = response.data
                this.loader = false
            })
            .catch((error) => {
                // Handle the error
                console.log("Error Occured!", error);
            })
    },

    methods: {
        dateFormat(date) {
            return moment(date).format('Do MMM YYYY, h:mm:ss a');
        },

        saveServiceIdentifierId(id) {
            localStorage.setItem('serviceIdentifierId', id)
        },
    }
};

</script>
  
<style scoped>
.allDataDiv {
    padding: auto;
    width: 100%;
    height: 510px;
    overflow: scroll;
}

@media (max-width: 767px) {
    .master {
        margin-left: 1%;
    }
}
.allData{
    text-align: center;
    justify-content: center;
}

thead tr th {
    background-color: lightskyblue;
    font-size: 14px;
}

tbody tr td {
    font-size: 12px;
}

thead {
    position: sticky;
    top: 0;
}

.heading {
    height: 45px;
    background: rgb(247, 149, 238);
    padding-top: 10px;
}

.footerDiv {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    background-color: #c9c9c9;
}

@media (max-width: 1200px) {
    .row{
        width: 100%;
        margin-left: 0px;
        display: flex;
        justify-content: center;
    }
    .row>h3{
        display: contents;
    }
}


</style>