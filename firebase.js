import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC5VqR_BjYly8__Hjar8LPgu-lYUr9uNh4",
  authDomain: "projectreactnative-c4173.firebaseapp.com",
  databaseURL: "https://projectreactnative-c4173-default-rtdb.firebaseio.com",
  projectId: "projectreactnative-c4173",
  storageBucket: "projectreactnative-c4173.appspot.com",
  messagingSenderId: "743202939679",
  appId: "1:743202939679:web:1fee9decf2fd827e50862a",
  measurementId: "G-4RCC0PKZF2",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };
