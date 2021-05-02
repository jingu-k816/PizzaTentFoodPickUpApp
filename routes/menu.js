const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT *
    FROM food_items
    ORDER BY category_id;`)
      .then(data => {
        const foods = data.rows;
        res.json(foods);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};

