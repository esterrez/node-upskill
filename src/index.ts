import app from "./app";
export const port = Number(process.env.PORT_APP) || 3000;

app.listen(port, () => {
  console.log(`Application listening on port: ${port}`);
});

export default app;
