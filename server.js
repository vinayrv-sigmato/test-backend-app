const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend using Express!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

