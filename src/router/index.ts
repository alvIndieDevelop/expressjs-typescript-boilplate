import express, { Router } from "express";

import api from "./api";

const router: Router = express.Router();

router.use("/api", api);

export default router;
