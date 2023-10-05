import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyDrPC2EorpIahGTanwRQ14-PPaeek75c-4',
  authDomain: 'music-fb05a.firebaseapp.com',
  projectId: 'music-fb05a',
  storageBucket: 'music-fb05a.appspot.com',
  appId: '1:10780605702:web:48b098ab67029987daf287'
}

export default firebase.initializeApp(firebaseConfig)
