<template>
  <h1>CheckBox</h1>
  
  <input type="checkbox" v-model="select_all" @click="selectAll" ref="main_chk">Select All
  <br><br>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in list" :key="d.id">
          <td>
            <input type="checkbox" :value="d.id" v-model="selected" v-on:change="fun" ref="d.id">
          </td>
          <td>{{ d.name }}</td>
          <td>{{ d.add }}</td>
        </tr>
      </tbody>
    </table>

  <button disabled ref="enable_btn" v-on:click="print()">Enable</button> &nbsp;
  <button disabled>Disable</button>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      list: [
        {id:1, name:"ajay",add:"noida"},
        {id:2,name:"arun",add:"delhi"},
      ], 

      select_all: false,
      selected: [],
      index:0
    }
  },
  methods:{
    selectAll() {
      this.selected = [];
      if (!this.select_all) {
        for (let i in this.list) {
            this.selected.push(this.list[i].id)
          }
      }else{
        this.selected = []
      }
      this.buttonState()
    }, 
    fun() {
      if(this.selected.length === this.list.length) {
        this.$refs.main_chk.checked = true
      } else {
        this.$refs.main_chk.checked = false
      }  
      this.buttonState()    
    },
    buttonState(){
      if(this.selected.length > 0){
        this.$refs.enable_btn.disabled = false
      } else {
        this.$refs.enable_btn.disabled = true
      }
    },
    print(){
      console.log(this.selected)
    }      
  },
  
}
</script>
