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

router.get ('/', (req, res) => {
  const query = `
  SELECT * FROM "to-do-list" 
  WHERE "status" = 'pending';
  `;
  pool.query(query)
  .then( result => {
    res.send(result.rows);
    console.log('here is the data from the database', result.rows);
  })
  .catch(err => {
    console.log('ERROR: Get all execises', err);
    res.sendStatus(500)
  })

});
module.exports = router;
