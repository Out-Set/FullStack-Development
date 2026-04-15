<template>
  <div class="master container-fluid">
    <div class="allData">
      <div class="heading row">
        <h3>Reset Cron</h3>
      </div>

      <div class="selectdiv">

        <div class="type" style="margin-bottom: 30px; margin-top: 25px;">
          <h5 class="main">Select</h5>

          <input type="radio" id="one" value="One" name="cron" v-model="picked" />
          <label for="one">Create Cron Expression</label><br>

          <input type="radio" id="two" value="Two" name="cron" v-model="picked" />
          <label for="two">Write Cron Expression</label>
        </div>

        <!-- SelectCron -->
        <div id="selectCron" style="display: grid;">
          <div>
            <strong>Cron:</strong>
            <input type="text" id="cron" v-model="cronExpression" disabled>
          </div>

          <div class="container mt-4">
            <div class="row">
              <div class="col-md-4 col-lg-4 mt-3">
                <strong>Second:</strong>
                <div class="d-flex">
                  <select class="form-select me-2" v-model="sType">
                    <option v-for="sType in sTypes" :key="sType" :value="sType">{{ sType }}</option>
                  </select>

                  <select class="form-select" v-model="second">
                    <option v-for="second in seconds" :key="second" :value="second">{{ second }}</option>
                  </select>
                </div>
              </div>

              <div class="col-md-4 col-lg-4 mt-3">
                <strong>Minute:</strong>
                <div class="d-flex">
                  <select class="form-select me-2" v-model="mType">
                    <option v-for="mType in mTypes" :key="mType" :value="mType">{{ mType }}</option>
                  </select>

                  <select class="form-select" v-model="minute">
                    <option v-for="minute in minutes" :key="minute" :value="minute">{{ minute }}</option>
                  </select>
                </div>
              </div>

              <div class="col-md-4 col-lg-4 mt-3">
                <strong>Hour:</strong>
                <div class="d-flex">
                  <select class="form-select me-2" v-model="hType">
                    <option v-for="hType in hTypes" :key="hType" :value="hType">{{ hType }}</option>
                  </select>

                  <select class="form-select" v-model="hour">
                    <option v-for="hour in hours" :key="hour" :value="hour">{{ hour }}</option>
                  </select>
                </div>
              </div>

              <div class="col-md-4 mt-3">
                <div class="form-group">
                  <label for="date"><strong>Date:</strong></label>
                  <div class="d-flex">
                    <select class="form-select" v-model="date">
                      <option v-for="date in dates" :key="date" :value="date">{{ date }}</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="col-md-4 mt-3">
                <div class="form-group">
                  <label for="month"><strong>Month:</strong></label>
                  <div class="d-flex">
                    <select class="form-select" v-model="month">
                      <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="col-md-4 mt-3">
                <div class="form-group">
                  <label for="day"><strong>Day:</strong></label>
                  <div class="d-flex">
                    <select class="form-select" v-model="day">
                      <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div style="margin-right: 20px; margin-top: 20px;">
            <button disabled ref="setCronBtn" class="buttons" v-on:click="setCreatedCronExp()">Reset</button>
            <!-- <button class="buttons" @click="$router.back()" style="margin-left: 20px;">Back</button> -->
          </div>

        </div>

        <!-- WriteCron -->
        <div style="padding-top: 50px; padding-bottom: 25px;" id="writeCron">
          <strong>Write Your cron Expression</strong>&nbsp;
          <input type="text" v-model="writeExpression">&nbsp;
          <button disabled ref="writeCronBtn" class="buttons" v-on:click="setWrittenCronExp()">Reset</button>
          <!-- <button class="buttons" @click="$router.back()" style="margin-left: 20px;">Back</button> -->
        </div>

      </div>

      <div class="footerDiv mt-1">
        <button @click="$router.back()" class="btn btn-secondary btn-sm">Back</button>
      </div>

    </div>

  </div>
</template>

<script>
import { get, post } from '../../callAPI'

export default {
  name: "resetCronExpression",
  components: {
  },
  data() {
    return {
      sTypes: ['every', 'specific'],
      sType: 'every',

      mTypes: ['every', 'specific'],
      mType: 'every',

      hTypes: ['every', 'specific'],
      hType: 'every',

      seconds: ['All', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'],
      second: 'All',

      minutes: ['All', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'],
      minute: 'All',

      hours: ['All', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
      hour: 'All',

      dates: ['All', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
      date: 'All',

      months: ['All', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      month: 'All',

      days: ['All', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
      day: 'All',

      selectedData: "",
      writeExpression: "",
      delay: 0,

      cSecond: '*',
      cMinute: '*',
      cHour: '*',
      cronExpression: '* * * * * *',

      cDate: '*',
      cMonth: '*',
      cDay: '*',

      picked: '',
    }
  },

  mounted() {
    console.log("hello ....");

    console.log("Second: ", this.second);
    console.log("Minute: ", this.minute);
    console.log("Hour: ", this.hour);
    console.log("Date: ", this.date);
    console.log("Month: ", this.month);
    console.log("Day: ", this.day);

    document.getElementById("writeCron").style.display = "none";
    document.getElementById("selectCron").style.display = "none";
  },

  watch: {

    picked(pickedChoice) {
      console.log(pickedChoice);
      if (this.picked === 'One') {
        document.getElementById("writeCron").style.display = "none";
        document.getElementById("selectCron").style.display = "block";
      } else {
        document.getElementById("selectCron").style.display = "none";
        document.getElementById("writeCron").style.display = "block";
        document.getElementById("writeCron").style.paddingTop = "20px";
      }

    },

    second(newSecond) {
      this.$refs.setCronBtn.disabled = false
      console.log(`Selected Second: ${newSecond}`);
      this.setCron()
    },

    minute(newMinute) {
      this.$refs.setCronBtn.disabled = false
      console.log(`Selected Minute: ${newMinute}`);
      this.setCron()
    },

    hour(newHour) {
      this.$refs.setCronBtn.disabled = false
      console.log(`Selected Hour: ${newHour}`);
      this.setCron()
    },

    sType(newType) {
      this.$refs.setCronBtn.disabled = false
      console.log(`Selected Type: ${newType}`);
      this.cronExpression = `* ${this.cMinute} ${this.cHour} ${this.cDate} ${this.cMonth} ${this.cDay}`
      this.second = 'All'
    },

    mType(newType) {
      this.$refs.setCronBtn.disabled = false
      console.log(`Selected Type: ${newType}`);
      this.cronExpression = `${this.cSecond} * ${this.cHour} ${this.cDate} ${this.cMonth} ${this.cDay}`
      this.minute = 'All'
    },

    hType(newType) {
      this.$refs.setCronBtn.disabled = false
      console.log(`Selected Type: ${newType}`);
      this.cronExpression = `${this.cSecond} ${this.cMinute} * ${this.cDate} ${this.cMonth} ${this.cDay}`
      this.hour = 'All'
    },


    date(newDate) {
      this.$refs.setCronBtn.disabled = false
      console.log(`Selected Date: ${newDate}`);
      this.setCron()
    },

    month(newMonth) {
      this.$refs.setCronBtn.disabled = false
      console.log(`Selected Month: ${newMonth}`);
      this.setCron()
    },

    day(newDay) {
      this.$refs.setCronBtn.disabled = false
      console.log(`Selected Day: ${newDay}`);
      this.setCron()
    },

    writeExpression(newExpression) {
      this.$refs.writeCronBtn.disabled = false
      console.log(`Written expression: ${newExpression}`);
      this.setCron()
    },

  },

  methods: {
    setCron() {
      //Set Second
      if (this.second !== 'All') {
        if (this.sType === 'every') {
          if (this.second !== '0') {
            this.cSecond = `0/${this.second}`
            this.cronExpression = `${this.cSecond} ${this.cMinute} ${this.cHour} ${this.date} ${this.month} ${this.day}`
          } else {
            this.cSecond = `${this.second}`
            this.cronExpression = `${this.cSecond} ${this.cMinute} ${this.cHour} ${this.date} ${this.month} ${this.day}`
          }
        }
        else {
          this.cSecond = `${this.second}`
          this.cronExpression = `${this.cSecond} ${this.cMinute} ${this.cHour} ${this.date} ${this.month} ${this.day}`
        }
      } else {
        this.cSecond = '*'
        this.cronExpression = `${this.cSecond} ${this.cMinute} ${this.cHour} ${this.date} ${this.month} ${this.day}`
      }

      // Set Minute
      if (this.minute !== 'All') {
        if (this.mType === 'every') {
          if (this.minute !== '0') {
            this.cMinute = `0/${this.minute}`
            this.cronExpression = `${this.cSecond} ${this.cMinute} ${this.cHour} ${this.date} ${this.month} ${this.day}`
          } else {
            this.cMinute = `${this.minute}`
            this.cronExpression = `${this.cSecond} ${this.cMinute} ${this.cHour} ${this.date} ${this.month} ${this.day}`
          }
        }
        else {
          this.cMinute = `${this.minute}`
          this.cronExpression = `${this.cSecond} ${this.cMinute} ${this.cHour} ${this.date} ${this.month} ${this.day}`
        }
      } else {
        this.cMinute = '*'
        this.cronExpression = `${this.cSecond} ${this.cMinute} ${this.cHour} ${this.date} ${this.month} ${this.day}`
      }


      // Set Hour
      if (this.hour !== 'All') {
        if (this.hType === 'every') {
          if (this.hour !== '0') {
            this.cHour = `0/${this.hour}`
            this.cronExpression = `${this.cSecond} ${this.cMinute} ${this.cHour} ${this.cDate} ${this.cMonth} ${this.cDay}`
          } else {
            this.cHour = `${this.hour}`
            this.cronExpression = `${this.cSecond} ${this.cMinute} ${this.cHour} ${this.cDate} ${this.cMonth} ${this.cDay}`
          }
        }
        else {
          this.cHour = `${this.hour}`
          this.cronExpression = `${this.cSecond} ${this.cMinute} ${this.cHour} ${this.cDate} ${this.cMonth} ${this.cDay}`
        }
      } else {
        this.cHour = '*'
        this.cronExpression = `${this.cSecond} ${this.cMinute} ${this.cHour} ${this.cDate} ${this.cMonth} ${this.cDay}`
      }


      // Set Date
      if (this.date !== 'All') {
        this.cDate = `${this.date}`
        this.cronExpression = `${this.cSecond} ${this.cMinute} ${this.cHour} ${this.cDate} ${this.cMonth} ${this.cDay}`
      } else {
        this.cDate = '*'
        this.cronExpression = `${this.cSecond} ${this.cMinute} ${this.cHour} ${this.cDate} ${this.cMonth} ${this.cDay}`
      }


      // Set Month
      if (this.month !== 'All') {
        this.cMonth = `${this.month}`
        this.cronExpression = `${this.cSecond} ${this.cMinute} ${this.cHour} ${this.cDate} ${this.cMonth} ${this.cDay}`
      } else {
        this.cMonth = '*'
        this.cronExpression = `${this.cSecond} ${this.cMinute} ${this.cHour} ${this.cDate} ${this.cMonth} ${this.cDay}`
      }


      // Set Day
      if (this.day !== 'All') {
        this.cDay = `${this.day}`
        this.cronExpression = `${this.cSecond} ${this.cMinute} ${this.cHour} ${this.cDate} ${this.cMonth} ${this.cDay}`
      } else {
        this.cDay = '*'
        this.cronExpression = `${this.cSecond} ${this.cMinute} ${this.cHour} ${this.cDate} ${this.cMonth} ${this.cDay}`
      }
    },

    setCreatedCronExp() {
      console.log(this.second, this.minute, this.hour, this.date, this.month, this.day);
      this.selectedData = this.second + " " + this.minute + " " + this.hour + " " + this.date + " " + this.month + " " + this.day
      console.log(typeof this.selectedData, this.selectedData);

      console.log(typeof this.cronExpression, this.cronExpression);
      const taskName = localStorage.getItem('taskName');
      console.log('Task Name: ', taskName);

      post('/tasks/resetCronExpression?taskName=' + taskName + '&cronExpression=' + this.cronExpression)
        .then((response) => {
          console.log("Response form Backend: ", response);
        })
        .catch((error) => {
          // Handle the error
          console.log("Error Occured!", error);
        })
    },

    setWrittenCronExp() {
      console.log(typeof this.writeExpression, this.writeExpression);
      const taskName = localStorage.getItem('taskName');
      console.log('Task Name: ', taskName);

      post('/tasks/resetCronExpression?taskName=' + taskName + '&cronExpression=' + this.writeExpression)
        .then((response) => {
          console.log("Response form Backend: ", response);
        })
        .catch((error) => {
          // Handle the error
          console.log("Error Occured!", error);
        });
    },

    setDelay() {
      console.log(typeof this.delay, this.delay);
      get('/dynamicSchedule/delayVal?delay=' + this.delay)
        .then((response) => {
          console.log("Response form Backend: ", response);
        })
        .catch((error) => {
          // Handle the error
          console.log("Error Occured!", error);
        });
    }
  }
};
</script>


<style scoped>
@media (max-width: 767px) {
  .master {
    margin-left: 1%;
  }
}

.allData {
  text-align: center;
  justify-content: center;
}

.main {
  text-decoration: underline;
  margin-bottom: 5px;
}

.master {
  margin-top: 0px;
  padding-top: 0px;
}

.selectdiv {
  margin-left: 20px;
}

.heading {
  height: 45px;
  background: rgb(247, 149, 238);
  padding-top: 9px;
}

.buttons {
  border: none;
  background: #1397AA;
  border-radius: 3px;
  margin-bottom: 10px;
  padding: 2px 20px;
}

.buttons:hover {
  background: white;
}

select,
input {
  padding: 2px 10px;
}

.footerDiv {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    background-color: #c9c9c9;
}

@media (max-width: 1200px) {
  .row {
    margin-left: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .row>h3 {
    display: contents;
  }
}
</style>
