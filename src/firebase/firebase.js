import * as firebase from 'firebase';

// Production Config
const prodConfig = {
    apiKey: "AIzaSyDDESbpQhvVtQmS_Au9Qy58RSVrlm0aIyo",
    authDomain: "out-local-events.firebaseapp.com",
    databaseURL: "https://out-local-events.firebaseio.com",
    projectId: "out-local-events",
    storageBucket: "",
    messagingSenderId: "507202671261"
  };
  
  // Development Config
  const devConfig = {
    apiKey: "AIzaSyDDESbpQhvVtQmS_Au9Qy58RSVrlm0aIyo",
    authDomain: "out-local-events.firebaseapp.com",
    databaseURL: "https://out-local-events.firebaseio.com",
    projectId: "out-local-events",
    storageBucket: "",
    messagingSenderId: "507202671261"
  };

  // Config Logic
  const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const db = firebase.database();
  const auth = firebase.auth();

  export { db, auth };