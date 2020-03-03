<template id="events-template">
  <div class="group pubsub">
    <div class="half left">
      <h2>Publish</h2>
      <button
        id="send-event"
        class="half left"
        @click="handleClick()"
      >
        Send test-event with
      </button>
      <input
        id="event-data"
        v-model="value"
        type="text"
        class="half"
      >
    </div>
    <div class="half">
      <h2>Subscribe</h2>
      <ul id="events-received">
        <template v-for="event in eventsReceived">
          <li :key="event">
            {{ event }}
          </li>
        </template>
      </ul>
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
      eventsReceived: [],
      value: ''
    }
  },
  created () {
    this.event = this.ds.event
    this.event.subscribe('test-event', (value) => {
      this.eventsReceived.push(value)
    })
  },
  methods: {
    handleClick () {
      this.event.emit('test-event', this.value)
    }
  }
}
</script>
