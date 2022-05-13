import { initializeApp } from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCheI_qdsqZUMc8gG99pzjdIQ-oaCyECg0',
  authDomain: 'challenge-81c1b.firebaseapp.com',
  projectId: 'challenge-81c1b',
  storageBucket: 'challenge-81c1b.appspot.com',
  messagingSenderId: '438607187760',
  appId: '1:438607187760:web:68fa4690c75c1d05fcc2f5'
}

const firebaseApp = initializeApp(firebaseConfig)
export const db = firebaseApp.firestore()
