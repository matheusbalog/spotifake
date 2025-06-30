// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyB8ZIFGJrEh2bE8oOCwO6XaK2RB-OBX_c0",
  authDomain: "whatsapp-f068b.firebaseapp.com",
  projectId: "whatsapp-f068b",
  storageBucket: "whatsapp-f068b.firebasestorage.app",
  messagingSenderId: "524128409192",
  appId: "1:524128409192:web:38d2d350e64019b00bcddd"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const storage = firebase.storage();
