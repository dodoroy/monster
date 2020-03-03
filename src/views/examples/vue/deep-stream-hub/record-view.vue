<template id="record-template">
  <div class="group realtimedb">
    <h2>Realtime Datastore</h2>
    <div class="input-group half left">
      <label>Firstname</label>
      <input
        v-model="firstname"
        type="text"
        @input="handleFirstNameUpdate()"
      >
    </div>
    <div class="input-group half">
      <label>Lastname</label>
      <input
        v-model="lastname"
        type="text"
        @input="handleLastNameUpdate()"
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ds: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      firstname: '',
      lastname: ''
    }
  },
  created () {
    this.record = this.ds.record.getRecord('test/johndoe')

    this.record.subscribe((values) => {
      this.firstname = values.firstname
      this.lastname = values.lastname
    })
  },
  methods: {
    handleFirstNameUpdate () {
      this.record.set('firstname', this.firstname)
    },
    handleLastNameUpdate () {
      this.record.set('lastname', this.lastname)
    }
  }
}
</script>
