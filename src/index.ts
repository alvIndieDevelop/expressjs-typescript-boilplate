import { Application } from "express";
import http from "http";
import "dotenv/config";

import createServer from "./config/server";

const PORT = process.env.PORT || "5000";

const startServer = async () => {
  const app: Application = createServer();
  const server = http.createServer(app);

  try {
    server.listen(PORT, () => {
      console.log("Server is running on port " + PORT);
    });
  } catch (error) {
    console.log("Error");
  }
};

startServer();
