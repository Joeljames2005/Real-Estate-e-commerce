function sendMessage() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    db.collection("messages").add({
      name: name,
      email: email,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch((error) => {
      console.error("Error sending message: ", error);
    });
  }
  