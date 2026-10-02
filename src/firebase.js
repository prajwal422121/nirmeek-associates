import { getApp, getApps, initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, push } from "firebase/database";

const dynamicConfig = {
  apiKey: "AIzaSyBgiG0yUHxZfctZarWg_U4Oq4StH2H1dGI",
  authDomain: "dynamic-745ae.firebaseapp.com",
  databaseURL: "https://dynamic-745ae-default-rtdb.firebaseio.com",
  projectId: "dynamic-745ae",
  storageBucket: "dynamic-745ae.firebasestorage.app",
  messagingSenderId: "853829413975",
  appId: "1:853829413975:web:e0b130efeed9a4b7730712",
  measurementId: "G-7HRC3B52WK",
};
const adminConfig = {
  apiKey: "AIzaSyBZucOkcX5uNu-tejhXpGgHnh8deRNwDno",
  authDomain: "admindashboard-ebb97.firebaseapp.com",
  databaseURL: "https://admindashboard-ebb97-default-rtdb.firebaseio.com",
  projectId: "admindashboard-ebb97",
  storageBucket: "admindashboard-ebb97.firebasestorage.app",
  messagingSenderId: "839931753288",
  appId: "1:839931753288:web:0eb5241df4c0b02aba797d",
  measurementId: "G-R3X1RSR1JD",
};

// Initialize Firebase Apps Safely
const dynamicApp = getApps().some((app) => app.name === "dynamicApp")
  ? getApp("dynamicApp")
  : initializeApp(dynamicConfig, "dynamicApp");

const adminApp = getApps().some((app) => app.name === "adminApp")
  ? getApp("adminApp")
  : initializeApp(adminConfig, "adminApp");

// Get Database Instances
const dynamicDB = getDatabase(dynamicApp);
const adminDB = getDatabase(adminApp);

export { dynamicDB, adminDB, onValue, ref, push };
