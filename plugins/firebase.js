import firebase from 'firebase'
 
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAHzWzM0367UXCJJQqTPsqQdOJrnoO4PTU",
    authDomain: "usagonomi.firebaseapp.com",
    projectId: "usagonomi",
    storageBucket: "usagonomi.appspot.com",
    messagingSenderId: "657219671121",
    appId: "1:657219671121:web:ea36d35c96244bc9111470",
    measurementId: "G-EEVLYNEBLF"
  })
}
 
export default firebase