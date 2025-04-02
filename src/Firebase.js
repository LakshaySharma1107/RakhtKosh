import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCMLvHAC_1kOygiWZx2-BEI_hgtpRftSUI",
    authDomain: "rakht-app.firebaseapp.com",
    projectId: "rakht-app",
    storageBucket: "rakht-app.firebasestorage.app",
    messagingSenderId: "682784488149",
    appId: "1:682784488149:web:72016afa4b4636debd405c",
    measurementId: "G-XL5Y60XB16",
    databaseURL:"https://console.firebase.google.com/u/1/project/rakht-app/database/rakht-app-default-rtdb/data/~2F?fb_gclid=Cj0KCQjw16O_BhDNARIsAC3i2GAB43KAy6jOu2ckdD8scql1ynibhC1WzpQ2VZQxp-M4vaBicCi334QaAkSHEALw_wcB"
  };
export const app = initializeApp(firebaseConfig);