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

// Other Entity APIs ...
