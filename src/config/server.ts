import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import router from "../router";

const createServer = (): Application => {
  const app: Application = express();
  // whitelist
  const whiteList: Array<string> =
    process.env.NODE_ENV === "prod"
      ? [process.env.FRONTEND_URL as string]
      : ["http://localhost:3000"];

  // cors config typescript
  const corsOptions: cors.CorsOptions = {
    origin: whiteList,
    optionsSuccessStatus: 200,
    credentials: true,
  };

  // middlewares
  app.use(helmet());
  app.use(cors(corsOptions));
  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // routers
  app.use(router);

  return app;
};

export default createServer;
