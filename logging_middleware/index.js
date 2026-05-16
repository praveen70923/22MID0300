const express = require("express");
const Log = require("./logger");

const app = express();

app.use(express.json());

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwcmF2ZWVua3VtYXIuZzIwMjJAdml0c3R1ZGVudC5hYy5pbiIsImV4cCI6MTc3ODkzMTYzNywiaWF0IjoxNzc4OTMwNzM3LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYzY4MTdiZDUtODdlNS00MjQ2LWE5MGItYzE0ZWY5NzcxMmVhIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicHJhdmVlbiBrdW1hciBnIiwic3ViIjoiMmYxOWUyZGQtOTRjMS00MTFkLTk4MDQtOTBkMjY5MWYyMDk0In0sImVtYWlsIjoicHJhdmVlbmt1bWFyLmcyMDIyQHZpdHN0dWRlbnQuYWMuaW4iLCJuYW1lIjoicHJhdmVlbiBrdW1hciBnIiwicm9sbE5vIjoiMjJtaWQwMzAwIiwiYWNjZXNzQ29kZSI6IlNmRnVXZyIsImNsaWVudElEIjoiMmYxOWUyZGQtOTRjMS00MTFkLTk4MDQtOTBkMjY5MWYyMDk0IiwiY2xpZW50U2VjcmV0IjoiTkZjZGtkWHFXS3BYdXRZYiJ9.kQ0IJIvu31sdYX8ejQjHqWSnFhlZjsJjiIQbmrT3a2Y";

app.get("/", async (req, res) => {

    await Log(
        "backend",
        "info",
        "route",
        "Root route accessed",
        token
    );

    res.json({
        success: true,
        message: "Logging middleware working"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});