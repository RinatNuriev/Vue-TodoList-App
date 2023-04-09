import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYcA-7gdkgx57nXwXRLlAitJzbAj7yg1Y",
  authDomain: "vue-todos-fd858.firebaseapp.com",
  projectId: "vue-todos-fd858",
  storageBucket: "vue-todos-fd858.appspot.com",
  messagingSenderId: "67635877692",
  appId: "1:67635877692:web:fff877cfed44dfc2fe7039",
  measurementId: "G-VTH60YY61C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

