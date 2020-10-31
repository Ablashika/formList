import * as firebase from 'firebase'

import "firebase/auth";


var firebaseConfig = {
    apiKey: "AIzaSyCBa4LrnFkeBafZ0Xx6tPKlPn8MgH58OcU",
    authDomain: "rnfirebase-2e01a.firebaseapp.com",
    databaseURL: "https://rnfirebase-2e01a.firebaseio.com",
    projectId: "rnfirebase-2e01a",
    storageBucket: "rnfirebase-2e01a.appspot.com",
    messagingSenderId: "518823417555",
    appId: "1:518823417555:web:c1789453c39a5e96106626"
  }

  
firebase.initializeApp(firebaseConfig)


 export default firebase;