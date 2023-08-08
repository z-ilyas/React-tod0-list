const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res) => {
  console.log('Here is the data we are recieving', req.body);
  let newTask = req.body.task;
  let newStatus = req.body.status;
  console.log(newTask, newStatus);

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

router.post('/:id', (req, res) => {

  const id = req.params.id;

  const sqlText = `
    UPDATE "to-do-list"
    SET "status"= 'complete'
    WHERE "id" = $1;
  `;
  pool.query (sqlText, [id])
    .then(dbRes => {
      res.sendStatus(200)
    })
    .catch(dbErr => {
      console.log('Error iside PUT /id:', dbErr);
      res.sendStatus(500);
    })
});


router.delete('/:id', (req, res) => {
  const id = req.params.id

  const sqlText = `
    DELETE FROM "to-do-list"
      WHERE id=$1;
  `;
  pool.query(sqlText, [id])
    .then(dbRes => {
      res.sendStatus(200);
    })
    .catch(dbErr => {
      console.log('Error iside DELETE /favorite/:favid:', dbErr);
      res.sendStatus(500);
    })
});

module.exports = router;
