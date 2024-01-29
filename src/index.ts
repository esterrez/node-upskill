import app from "./app";

if (process.env.NODE_ENV !== "production") {
  console.log("defining environment variables for development/local mode");
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("dotenv").config();
}

const port = Number(process.env.PORT);

app.listen(port, () => {
  console.log(`Application listening on port: ${port}`);
});

export default app;
