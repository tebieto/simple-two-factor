import app from "./app";

/**
 * Activate Server
 */

const port = process.env.PORT || 4400;
app.listen(port, () => {
  console.log(`The application is listening on port ${port}!`);
});
