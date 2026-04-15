<template>
    <div class="master container-fluid">
        <div class="heading row">
            <h3>{{ name }}</h3>
        </div>

        <div class="setAndViewLogs row">
            <div>
                <button @click="getPan()" class="btn btn-primary btn-sm">PAN</button>
            </div>
            <div>
                <button @click="getOtp()" class="btn btn-primary btn-sm">OTP</button>
            </div>
            <div>
                <button @click="getAadhaar()" class="btn btn-primary btn-sm">AADHAAR</button>
            </div>
        </div>

        <div class="footerDiv mt-1">
            <button @click="$router.back()" class="btn btn-secondary btn-sm">Back</button>
        </div>
    </div>
</template>

<script>
import { post } from '../../callAPI'

export default {
    name: "integrationHome",
    data() {
        return {
            name: "Integration Dashboard",

            headers: {
                'SOURCE_SYSTEM': 'LOCAL'
                // 'SOURCE_SYSTEM': 'FINFINITY'
            },
        }
    },

    methods: {

        getPan() {
            let requestData = {
                "category": "individual-pii-data",
                "type": "pan-detail-v2",
                "applicationId": "Dashboard-realtime-KYC",
                "data": {
                    "panNumber": "AAAAK1579R",
                },
                "mode": "TEST",
            };

            post("/rest/pan/verification", requestData, this.headers)
                .then((response) => {
                    console.log("Response form Backend: ", response);
                })
                .catch((error) => {
                    // Handle the error
                    console.log("Error Occured!", error);
                })
        },

        getOtp() {
            let sendOtp = {
                "category": "individual-pii-data",
                "type": "aadhaar-offline-otp",
                "applicationId": "Dashboard-realtime-KYC",
                "data": {
                    "aadhaarNo": "947454636797"
                },
                "mode": "PROD"
            };

            post("/rest/sendOtp", sendOtp, this.headers)
                .then((response) => {
                    console.log("Response form Backend: ", response);
                })
                .catch((error) => {
                    // Handle the error
                    console.log("Error Occured!", error);
                })
        },

        getAadhaar() {
            let getAadhaar = {
                "category": "individual-pii-data",
                "type": "aadhaar-offline-file",
                "applicationId": "Dashboard-realtime-KYC",
                "data": {
                    "aadhaarNo": "947454636797",
                    "requestId": "aadhaar_v2_VDbxbcoyHiJTqmsBxemU",
                    "otp": "228254"
                },
                "mode": "PROD"
            }

            post("/rest/get/aadhaar", getAadhaar, this.headers)
                .then((response) => {
                    console.log("Response form Backend: ", response);
                })
                .catch((error) => {
                    // Handle the error
                    console.log("Error Occured!", error);
                })
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

@media (max-width: 1200px) {
    .row {
        width: 100%;
        margin-left: 16px;
        display: flex;
        justify-content: center;
    }
}
</style>



