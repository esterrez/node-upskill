import app from "./app";
export const port = Number(process.env.PORT);

if (process.env.NODE_ENV !== "development") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require("dotenv").config();
}

app.listen(port, () => {
  console.log(`Application listening on port: ${port}`);
});

export default app;
