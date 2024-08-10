const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:3001",
};

app.get("/events", cors(corsOptions), (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  // send SSE every second
  setInterval(() => {
    const data = {
      message: `hello, world! (${new Date().toISOString()})`,
    };
    console.log(`sent: `, data);
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  }, 1000);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
