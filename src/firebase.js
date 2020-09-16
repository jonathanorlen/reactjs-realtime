import firebase from 'firebase';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
     apiKey: "AIzaSyAJ1YPK2U-4aNh91kcccj8P0fG7d_H-ol4",
     authDomain: "wartajemaat-e5b3a.firebaseapp.com",
     // databaseURL: "https://wartajemaat-e5b3a.firebaseio.com",
     projectId: "wartajemaat-e5b3a",
     storageBucket: "wartajemaat-e5b3a.appspot.com",
     // messagingSenderId: "368720171511",
     appId: "1:368720171511:web:e5bb46e3dc1375e49d1ef2",
     measurementId: "G-W9XDVXQED7"
};
      // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const googleAUthProvider = new firebase.auth.GoogleAuthProvider();