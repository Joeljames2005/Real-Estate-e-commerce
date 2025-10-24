const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5501;
const MESSAGES_FILE = path.join(__dirname, "messages.json");

// ✅ Correct way to use express.json()
app.use(cors());
app.use(express.json());  // ✅ This correctly enables JSON parsing

// Handle form submission
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = { name, email, message, timestamp: new Date() };

    // Read existing messages, append new message, and save back
    fs.readFile(MESSAGES_FILE, "utf8", (err, data) => {
        let messages = [];
        if (!err && data) {
            try {
                messages = JSON.parse(data);
            } catch (parseErr) {
                console.error("Error parsing JSON:", parseErr);
            }
        }
        messages.push(newMessage);
        fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: "Failed to save message" });
            }
            res.json({ success: true, message: "Message saved successfully" });
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

