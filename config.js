import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD185bhmHeEC9bpOfOZewCpXfyOn3UqwUg",
  authDomain: "bibliotecadigitalprueba-d62e9.firebaseapp.com",
  projectId: "bibliotecadigitalprueba-d62e9",
  storageBucket: "bibliotecadigitalprueba-d62e9.appspot.com",
  messagingSenderId: "106503193550",
  appId: "1:106503193550:web:38affd2a0258c412b2619f",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
