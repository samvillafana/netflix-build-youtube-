import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCSEPVIPGyagTR0dQ24m17AK-GzS1AEPMo",
    authDomain: "netflix-clone-bdac1.firebaseapp.com",
    projectId: "netflix-clone-bdac1",
    storageBucket: "netflix-clone-bdac1.appspot.com",
    messagingSenderId: "1048792556454",
    appId: "1:1048792556454:web:af29eccc038c580f4f2567"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth()
  
  export {db, auth}


