import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { auth, db } from "./firebase.js"; // Ensure this is correctly imported

async function register() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();
  
  // Validation - Check if fields are empty
  if (!email || !password || !confirmPassword) {
      alert("All fields are required!");
      return;
  }
  
  // Check if passwords match
  if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
  }
   

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user details in Firestore
        await addDoc(collection(db, "users"), {
            email: user.email,
            uid: user.uid,
            timestamp: new Date()
        });

        alert("User Registered Successfully!");
        console.log("User:", user.email);
    } catch (error) {
        console.error("Error:", error.message);
        alert("Registration failed: " + error.message);
    }
}
