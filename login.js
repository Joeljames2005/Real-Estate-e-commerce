import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwe0qStrRKc-sY1X84OUSYI20N0e-BaJ0",
    authDomain: "realestate-d5629.firebaseapp.com",
    projectId: "realestate-d5629",
    storageBucket: "realestate-d5629.firebasestorage.app",
    messagingSenderId: "161382006957",
    appId: "1:161382006957:web:a3c175dc24e77e276a4624"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login function
document.getElementById('login-btn').addEventListener('click', async () => {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('login-message');

  if (!email || !password) {
    message.innerText = "All fields are required!";
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    message.innerText = "Login successful! Redirecting...";
    message.style.color = "green";
    setTimeout(() => {
      window.location.href = "index.html"; // Redirect to dashboard
    }, 2000);
  } catch (error) {
    console.error("Error:", error);
    message.innerText = error.message;
  }
});

// Forgot Password function
document.getElementById('forgot-password-btn').addEventListener('click', async () => {
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('login-message');

  if (!email) {
    message.innerText = "Please enter your registered email!";
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    message.innerText = "Password reset link sent to your email!";
    message.style.color = "green";
  } catch (error) {
    console.error("Error:", error);
    message.innerText = error.message;
  }
});


