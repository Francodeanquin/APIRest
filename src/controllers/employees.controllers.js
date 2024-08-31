import { pool } from "../db.js";

const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * from employee");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ mesage: "Something went wrong" });
  }
};

const getEmployee = async (req, res) => {
try {
  const id = req.params.id;
  const [rows] = await pool.query("SELECT * from employee where id = ?", [id]);

  if (rows.length <= 0) {
    return res.status(404).json({ message: "Employee not found" });
  }

  res.json(rows[0]);
} catch (error) {
  res.status(500).json({message: 'Something went wronf'})
}
};

const createEmployees = async (req, res) => {
try {
  const { name, salary } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO employee (name, salary) VALUES(?,?)",
    [name, salary]
  );
  res.send({
    id: rows.insertId,
    name,
    salary,
  });
} catch (error) {
  res.status(500).json({message: 'Something went wrong'})
}
};
const deleteEmployees = async (req, res) => {
 try {
  const [result] = await pool.query("DELETE FROM employee where id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows <= 0)
    return res.status(404).json({
      message: "Employee not found",
    });

  res.sendStatus(204);
 } catch (error) {
res.status(500).json({message: 'Something went wrong'})
 }
};

const updateEmployees = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;

  const [result] = await pool.query(
    "UPDATE employee SET name= IFNULL(?, name), salary = IFNULL(?, salary) where id = ?",
    [name, salary, id]
  );

  if (result.affectedRows === 0)
    return res.status(404).json({
      message: "Employee not found",
    });

  const [rows] = await pool.query("SELECT * from employee where id=?", [id]);
  res.json(rows[0]);
};

export {
  getEmployees,
  createEmployees,
  updateEmployees,
  deleteEmployees,
  getEmployee,
};
