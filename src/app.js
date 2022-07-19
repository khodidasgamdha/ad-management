require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));

    app.get("*", (req, res) => {
        res.sendFile(
            path.join(__dirname, "client", "build", "index.html")
        );
    });
}

// Express Error Handling Middleware
app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).json({
        error: message,
    });
});

const PORT = parseInt(process.env.PORT) || 3000;

// listen server
app.listen(PORT, () => {
    console.log(`🚀 Server listenining at http://127.0.0.1:${PORT}`);
});
