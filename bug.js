```javascript
//Incorrect usage of onAuthStateChanged
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // User is signed in.
    console.log('User is signed in:', user);
  } else {
    // No user is signed in.
    console.log('No user is signed in.');
  }
});

//Attempting to access user data before authentication completes
console.log(firebase.auth().currentUser.uid); //This line may cause an error if user is not authenticated.
```