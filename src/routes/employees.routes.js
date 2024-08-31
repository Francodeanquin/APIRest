import { Router } from "express";
import { pool } from "../db.js";
import {
  createEmployees,
  deleteEmployees,
  getEmployee,
  getEmployees,
  updateEmployees,
} from "../controllers/employees.controllers.js";

const router = Router();

router.get("/", getEmployees);  

router.get("/:id", getEmployee);

router.post("/", createEmployees);

router.patch("/:id", updateEmployees);

router.delete("/:id", deleteEmployees);

export default router;
