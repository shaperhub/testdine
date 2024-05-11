import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEYS,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAINS,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URLS,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_IDS,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKETS,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_IDS,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_IDS
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage }