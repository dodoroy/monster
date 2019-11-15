import firebase from 'firebase/app'
import 'firebase/firestore'

// Setup Firebase
var config = {
  apiKey: 'AIzaSyDpZKMwEPnkWfydnUaAh7H1D_vS8CVpi-M',
  authDomain: 'monster-28561.firebaseapp.com',
  databaseURL: 'https://monster-28561.firebaseio.com',
  projectId: 'monster-28561',
  storageBucket: 'monster-28561.appspot.com',
  messagingSenderId: '715150820959',
  appId: '1:715150820959:web:0eb5e27fb4eb2b37d27dea',
  measurementId: 'G-P55VNRF65W'
}

// Get a Firestore instance
export const db = firebase
  .initializeApp(config)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
// s
