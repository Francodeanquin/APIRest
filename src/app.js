import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();
app.use(express.json());

app.use("/api/employees", employeesRoutes);
app.use(indexRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not fond",
  });
});

//health
app.get("/health", (req, res) => {
  res.send("Api is working fine");
});

export default app;
