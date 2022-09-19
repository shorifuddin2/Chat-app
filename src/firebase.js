import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBxTtkf7KgiS_w1DcK-MYpR8KfWgRHP5sg",
  authDomain: "chat-app-5ebe7.firebaseapp.com",
  projectId: "chat-app-5ebe7",
  storageBucket: "chat-app-5ebe7.appspot.com",
  messagingSenderId: "872796829523",
  appId: "1:872796829523:web:cb679b0ad1ba255cabd3a6"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }