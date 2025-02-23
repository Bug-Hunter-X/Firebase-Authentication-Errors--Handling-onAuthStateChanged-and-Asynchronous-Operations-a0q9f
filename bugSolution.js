```javascript
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in, access the user's data
    const uid = user.uid;
    console.log('User is signed in:', uid);
    // ... further actions
  } else {
    // No user is signed in.
    console.log('No user is signed in.');
  }
});
```