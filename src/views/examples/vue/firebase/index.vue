<template>
  <!-- Using vuefire (the official Firebase binding) -->
  <div id="app">
    <h1>Firebase + Validation</h1>
    <blockquote>
      This example uses Firebase (Firestore) as the data persistence backend and syncs between clients in real time (you
      can try opening it in multiple browser tabs). In addition, it performs instant validation using computed
      properties and triggers CSS transitions when adding/removing items.
    </blockquote>

    <ul is="transition-group">
      <li v-for="user in users" class="user" :key="user.name">
        <span>{{ user.name }} - {{ user.email }}</span>
        <button v-on:click="removeUser(user)">X</button>
      </li>
    </ul>
    <form id="form" v-on:submit.prevent="addUser">
      <input type="text" v-model="newUser.name" placeholder="Username" />
      <input type="email" v-model="newUser.email" placeholder="email@email.com" />
      <input type="submit" value="Add User" />
    </form>
    <ul class="errors">
      <li v-show="!validation.name">Name cannot be empty.</li>
      <li v-show="!validation.email">Please provide a valid email address.</li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import { db } from './firebase-db';

Vue.use(firestorePlugin);

var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  // initial data
  data() {
    return {
      users: [],
      newUser: {
        name: '',
        email: ''
      }
    };
  },
  // firebase binding
  // https://github.com/vuejs/vuefire
  firestore: {
    users: db.collection('users')
  },
  // computed property for form validation state
  computed: {
    validation: function() {
      return {
        name: !!this.newUser.name.trim(),
        email: emailRE.test(this.newUser.email)
      };
    },
    isValid: function() {
      var validation = this.validation;
      return Object.keys(validation).every(function(key) {
        return validation[key];
      });
    }
  },
  // methods
  methods: {
    addUser: function() {
      console.log('users', db.collection('users'));
      if (this.isValid) {
        db.collection('users').add(this.newUser);
        this.newUser.name = '';
        this.newUser.email = '';
      }
    },
    removeUser: function(user) {
      db.collection('users')
        .doc(user.id)
        .delete();
    }
  }
};
</script>
<style lang="scss" scoped>
.user {
  height: 30px;
  line-height: 30px;
  padding: 10px;
  border-top: 1px solid #eee;
  overflow: hidden;
  transition: all 0.25s ease;
  &:last-child {
    border-bottom: 1px solid #eee;
  }
}

.user .v-enter,
.v-leave-active {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  border-top-width: 0;
  border-bottom-width: 0;
}

.errors {
  color: #f00;
}
</style>
