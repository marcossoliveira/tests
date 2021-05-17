import { Injectable } from '@angular/core';
import firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseConfig = {
    apiKey: "AIzaSyBSpGSFNbH8MzLzqJ42xxnohwmckw4H89E",
    authDomain: "wizewaste-auditor---dev.firebaseapp.com",
    databaseURL: "https://wizewaste-auditor---dev-default-rtdb.firebaseio.com",
    projectId: "wizewaste-auditor---dev",
    storageBucket: "wizewaste-auditor---dev.appspot.com",
    messagingSenderId: "967094502436",
    appId: "1:967094502436:web:6b2e5518f95ddde30844b1",
    measurementId: "G-J40HDSZ89P"
  };


  app = firebase.initializeApp({ ...this.firebaseConfig });
  db = this.app.firestore();
  bucket = this.app.storage();


  constructor() { }
}
