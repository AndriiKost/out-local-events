import { db, auth } from './firebase';

// User API

export const doCreateUser = (uid, username, email) =>
  db.ref(`users/${uid}`).set({
    uid,
    username,
    email,
    profile: {
      profile_picture: 'http://www.craigsevent.com/wp-content/uploads/2017/06/events-heavenly-header.jpg'
    },
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const updateImageURL = (url) =>
  db.ref(`users/` + auth.currentUser.uid + '/profile').set({
    profile_picture : url
  });

export const addEvent = (banner, event_name, price) =>
db.ref(`users/` + auth.currentUser.uid + '/events/' + Math.floor(Math.random() * 958184759832) + 1 ).set({
    banner,
    event_name,
    price,
  });

// Other Entity APIs ...
