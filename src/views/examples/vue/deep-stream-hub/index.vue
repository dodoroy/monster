<template>
  <div id="app">
    <h1>Realtime with deepstreamHub</h1>
    <blockquote>
      This example uses deepstreamHub to synchronize realtime data, send events and make remote
      procedure calls between clients (you can try opening it in multiple browser windows).
    </blockquote>

    <div class="group connectionState">
      Connection-State is: <em id="connection-state">{{ connectionState }}</em>
    </div>
    <my-record :ds="ds" />
    <my-events :ds="ds" />
    <my-rpc :ds="ds" />
  </div>
</template>

<script>
// const { DeepstreamClient } = require('@deepstream/client');
import { DeepstreamClient } from '@deepstream/client'

import Record from './record-view'
import Events from './event-view'
import RPC from './rpc-view'
export default {
  components: {
    'my-record': Record,
    'my-events': Events,
    'my-rpc': RPC
  },
  data () {
    return {
      connectionState: 'INITIAL'
    }
  },
  created () {
    const ds = new DeepstreamClient(
      'wss://154.deepstreamhub.com?apiKey=97a397bd-ccd2-498f-a520-aacc9f67373c'
    )

    console.log('ds', ds)
    // .login()
    // .on('connectionStateChanged', connectionState => {
    //   this.$data.connectionState = connectionState;
    // });
  }
}
</script>
<style lang="scss">
.group {
  width: 80%;
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.group.connectionState {
  margin: 10px auto 0;
  padding: 0 20px;
}

h2 {
  font-size: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 4px;
  margin-bottom: 10px;
  position: relative;
}

h2 small {
  position: absolute;
  right: 0;
}

h2 small * {
  display: inline-block;
  vertical-align: middle;
  font-weight: normal;
  color: #333;
  font-size: 12px;
  cursor: pointer;
}

button,
input,
.item {
  height: 32px;
  padding: 6px;
}

button {
  border: none;
  background: #7185ec;
  color: #fff;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.2);
}

button:hover {
  background-color: #586cd8;
}

button:active {
  position: relative;
  top: 1px;
  left: 1px;
  box-shadow: none;
}

.half {
  width: 48%;
  float: left;
  position: relative;
}

.half.left {
  margin-right: 4%;
}

label {
  font-size: 11px;
  font-style: italic;
}

input {
  border-radius: 4px;
  border: 1px solid #ccc;
}

input:focus {
  border-color: #7185ec;
}

.input-group input {
  width: 100%;
}

span.response {
  display: inline-block;
  background-color: #dddddd;
}

@media screen and (max-width: 900px) {
  .half {
    width: 100%;
    margin: 0 0 10px !important;
  }
}
</style>
