import express from "express";
import cors from "cors";
import compression from "compression";
import path from "path";
import * as dotenv from "dotenv";
import { router } from "./routes/routes.index";

if (process.env.NODE_ENV !== "production") dotenv.config();

/**
 * App Variables
 */
const app = express();

/**
 *  App Configuration
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true }));
app.use(compression());

/**
 * Adding a REST API endpoint and a GraphQL Server
 * I'll use REST endpoints for POST Requests i.e uploading files
 * And I'll use GraphQL for Queries
 * See GraphQL resolvers and schemas in the 'graphql' directory
 * open /graphl in web browser to see docs, schemas and run test queries
 */
app.use("/api", router);

/**
 * Serve react frontend
 */
app.use(express.static(path.join(__dirname, "../../client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
});

export default app;
