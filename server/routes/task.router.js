const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
    let newTask = req.body.task;
    let newStatus = req.body.status;

    let sqlText = `
      INSERT INTO "to-do-list"
      ("tasks", "status")
      VALUES
      ($1, $2);
      `;
    let sqlValues = [newTask, newStatus]
    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      console.log('New task was added!')
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log('POST /tasks error:', dbErr);
      res.sendStatus(500);
    })
});

module.exports = router;
