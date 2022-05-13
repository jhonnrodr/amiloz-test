import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCrv_OBvsdFcpkIolRPONvxnIiaWGq7Lng',
  authDomain: 'todo-app-2bbc2.firebaseapp.com',
  projectId: 'todo-app-2bbc2',
  storageBucket: 'todo-app-2bbc2.appspot.com',
  messagingSenderId: '508600460149',
  appId: '1:508600460149:web:f153c460ea274c21f5693c'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
