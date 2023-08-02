import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDJFigA0LRZxElBol1RKjjSkjp2tk0YOpc',
  authDomain: 'practice-firebase-a4f00.firebaseapp.com',
  projectId: 'practice-firebase-a4f00',
  storageBucket: 'practice-firebase-a4f00.appspot.com',
  messagingSenderId: '754905019104',
  appId: '1:754905019104:web:60c0f6e611dd5f9e679685',
  measurementId: 'G-VDM92G9SB4',
  databaseURL: 'https://practice-firebase-a4f00-default-rtdb.firebaseio.com',
};

export const app = initializeApp(firebaseConfig);
