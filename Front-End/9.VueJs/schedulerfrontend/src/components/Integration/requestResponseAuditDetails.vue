<template>

    <spinner v-if="loader"></spinner>

    <div class="master container-fluid">
        <div class="allData">
            <div class="heading row">
                <h3>Audit Details</h3>
            </div>

            <div class="allDataDiv" style="">

                <div class="filter">
                    <!-- <label for="dateInput">Select a date:</label> -->
                    <input type="date" id="dateInput" name="dateInput" v-model="date">
                </div>
                <div class="table-container"> 
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">AUDIT ID</th>
                            <th scope="col">REQUEST</th>
                            <th scope="col">REQUEST TIME</th>
                            <th scope="col">RESPONSE</th>
                            <th scope="col">RESPONSE TIME</th>
                            <th scope="col">SOURCE SYSTEM</th>
                            <th scope="col">STATUS</th>
                            <th scope="col">TRANSACTION ID</th>
                        </tr>
                    </thead>
                    <tbody style="height: 40vh; overflow: hidden;">
                        <tr v-for="(data, index) in (paginatedItems)" :key="index">
                            <td>{{ data[0] }}</td>
                            <td>
                                <button style="border: none;" v-on:click="fetchRequestString('REQUEST STRING', data[0])">
                                    <i class="fa-regular fa-eye"></i>
                                </button>
                            </td>
                            <td>{{ dateFormat(data[1]) }}</td>
                            <td>
                                <button style="border: none;" v-on:click="fetchResponseString('RESPONSE STRING', data[0])">
                                    <i class="fa-regular fa-eye"></i>
                                </button>
                            </td>
                            <td>{{ dateFormat(data[2]) }}</td>
                            <td>{{ data[3] }}</td>
                            <td>
                                {{
                                    data[4] === 0 ? 'UNPROCESSED' :
                                    data[4] === 1 ? 'FAILED' :
                                        data[4] === 2 ? 'SUCCESS' :
                                            'Unknown Status'
                                }}
                            </td>
                            <td>{{ data[5] }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>

            <div class="modal" tabindex="-1" role="dialog" v-bind:style="{ 'display': displayStyle }">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">{{ dialogueTitle }}</h4>
                            <button type="button" class="btn-close" v-on:click="closePopup()" data-bs-dismiss="modal"
                                aria-label="Close"> </button>
                        </div>
                        <div class="modal-body" style="overflow: scroll;">
                            <p> {{ popupData }} </p>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" @click="copyText()">
                                {{ copied ? 'Copied!' : 'Copy' }}
                            </button>
                            <button type="button" class="btn btn-danger" v-on:click="closePopup()">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footerDiv mt-1">

                <select v-model="itemsPerPage" class="form-select form-select-sm" style="width: 70px;">
                    <option v-for="items in chooseItemsPerPage" :key="items" :value="items">{{ items }}</option>
                </select>

                <ul class="pagination pagination-sm justify-content-center mx-auto pagination-tabs">
                    <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                        <a class="page-link" @click="changePage(currentPage - 1)" aria-label="Previous">
                            <span aria-hidden="true">Previous</span>
                        </a>
                    </li>

                    <li v-if="currentPage > 2">
                        <a class="page-link" @click="changePage(1)">1</a>
                    </li>

                    <li v-if="currentPage > 3">
                        <span class="ellipsis">...</span>
                    </li>

                    <li v-for="pageNumber in getPageRange()" :key="pageNumber" class="page-item"
                        :class="{ 'active': currentPage === pageNumber }">
                        <a class="page-link" @click="changePage(pageNumber)">{{ pageNumber }}</a>
                    </li>

                    <li v-if="currentPage < totalPages - 2">
                        <span class="ellipsis">...</span>
                    </li>

                    <li v-if="currentPage < totalPages - 1">
                        <a class="page-link" @click="changePage(totalPages)">{{ totalPages }}</a>
                    </li>

                    <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                        <a class="page-link" @click="changePage(currentPage + 1)" aria-label="Next">
                            <span aria-hidden="true">Next</span>
                        </a>
                    </li>
                </ul>

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
    name: "auditDetails",
    components: {
        spinner,
    },
    data() {
        return {
            log: 'Audit-Details',
            auditDetails: [],

            date: '',

            displayStyle: 'none',
            popupData: '',
            dialogueTitle: '',

            loader: true,
            copied: false,

            chooseItemsPerPage: [10, 20, 30, 40, 50],
            itemsPerPage: 10,
            currentPage: 1,
        }
    },

    mounted() {
        // Current Date Logs
        let serviceIdentifierId = localStorage.getItem('serviceIdentifierId')
        console.log("serviceIdentifierId :: ", serviceIdentifierId);

        const today = new Date();
        this.date = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
        console.log("formattedDate :: ", this.date);

        this.fetchAuditLogs(this.date, serviceIdentifierId);
    },

    watch: {
        // Selected Date Log
        date(selectedDate) {
            console.log(`Selected Date :: ${selectedDate}`);
            let serviceIdentifierId = localStorage.getItem('serviceIdentifierId')

            this.fetchAuditLogs(this.date, serviceIdentifierId);
        },
    },

    methods: {
        fetchAuditLogs(date, id) {
            get('/auditLogs?date=' + date + '&serviceIdentifierId=' + id)
                .then((response) => {
                    console.log("Response form Backend: ", response);
                    this.auditDetails = response.data
                    this.loader = false
                })
                .catch((error) => {
                    // Handle the error
                    console.log("Error Occured!", error);
                })
        },

        fetchRequestString(title, id) {
            this.loader = true
            get('/getRequest?id=' + id)
                .then((response) => {
                    console.log("Response form Backend: ", response);

                    this.popupData = response.data;
                    this.loader = false
                    this.openPopup(title, id);
                })
                .catch((error) => {
                    // Handle the error
                    console.log("Error Occured!", error);
                })
        },

        fetchResponseString(title, id) {
            this.loader = true
            get('/getResponse?id=' + id)
                .then((response) => {
                    console.log("Response form Backend: ", response);

                    this.popupData = response.data;
                    this.loader = false
                    this.openPopup(title, id);
                })
                .catch((error) => {
                    // Handle the error
                    console.log("Error Occured!", error);
                })

        },

        dateFormat(date) {
            return moment(date).format('Do MMM YYYY, h:mm:ss A');
        },

        openPopup(title) {
            if (title === 'REQUEST STRING') {
                this.dialogueTitle = title
            } else {
                this.dialogueTitle = title
            }

            this.displayStyle = "block";
        },
        closePopup() {
            this.displayStyle = "none";
        },

        copyText() {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(JSON.stringify(this.popupData))
                    .then(() => {
                        console.log('Text copied successfully!');
                        this.copied = true;
                        // Reset copied flag after 3 sec
                        setTimeout(() => this.copied = false, 3000);
                    })
                    .catch(err => console.error('Failed to copy: ', err));
            } else {
                // Use fallback method
            }
        },

        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },

        getPageRange() {
            const range = [];
            const totalPages = this.totalPages;
            const currentPage = this.currentPage;

            if (totalPages <= 3) {
                for (let i = 1; i <= totalPages; i++) {
                    range.push(i);
                }
            } else {
                if (currentPage <= 2) {
                    range.push(1, 2, 3);
                } else if (currentPage >= totalPages - 1) {
                    range.push(totalPages - 2, totalPages - 1, totalPages);
                } else {
                    range.push(currentPage - 1, currentPage, currentPage + 1);
                }
            }

            return range.filter(page => page > 0 && page <= totalPages);
        },
    },

    computed: {

        totalPages() {
            return Math.ceil(this.auditDetails.length / this.itemsPerPage);
        },

        paginatedItems() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.auditDetails.slice(startIndex, endIndex);
        },
    }
};

</script>
  
<style scoped>
.master {
    width: 100%;
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

.filter {
    text-align: right;
    margin: 5px;
    justify-content: right;
    margin-right: 0px;
}

.allDataDiv {
    padding: 0px 10px 0px 10px;
    width: 100%;
    height: 500px;
}

.table-container {
    overflow-y: auto;
    width: 100%;
    height: 465px;
}

.table {
    min-width: 1140px;
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

.pagination-tabs>li {
    cursor: pointer;
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
    justify-content: space-between;
    background-color: #c9c9c9;
}

@media (max-width: 1200px) {
    .row {
        margin-left: 0px;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .row>h3{
        display: contents;
    }
}
</style>