
const sql = require("mssql/msnodesqlv8");
const pool = require("../database").pool;
// '/tasks' endpoint
router.get("/", async (req, res) => {
  try {
    const result = await pool.request().query("SELECT * FROM security_scan");
    result.recordset.forEach((task) => {
      task.Findings = JSON.parse(task.Findings);
    });
    res.send(result.recordset);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});


