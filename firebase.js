 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
 
 import { getFirestore,collection,addDoc,deleteDoc,doc,getDocs,updateDoc} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCa4sKcAKCQjSpsbqfiwwL5_rJL2EGeccM",
   authDomain: "uzairnasir-smit.firebaseapp.com",
   projectId: "uzairnasir-smit",
   storageBucket: "uzairnasir-smit.appspot.com",
   messagingSenderId: "482767523601",
   appId: "1:482767523601:web:02b452f72e3e023cde46b0"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 // Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


 export{
    app,db,collection,addDoc,deleteDoc, doc, getDocs,updateDoc
 }