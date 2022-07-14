import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAz22FHQRMWTQPqbYujcmrlO350qHKDdg0',
  authDomain: 'netflix-clone-c666b.firebaseapp.com',
  projectId: 'netflix-clone-c666b',
  storageBucket: 'netflix-clone-c666b.appspot.com',
  messagingSenderId: '466446140850',
  appId: '1:466446140850:web:3cd49fbc8da3ccceb2d0ab',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
