let con = require("./index.js");

let db = {
  get: (callback) => {
    let queryString = `SELECT * FROM todos;`;
    con.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      }
      callback(results);
    });
  },

  post: (data, callback) => {
    let queryString = `INSERT INTO todos (todo_item) VALUES ('${data.todo_item}');`;
    con.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(results);
      }
    });
  },

  delete: (index, callback) => {
    let queryString = `DELETE FROM todos WHERE todo_id = ${index};`;
    con.query(queryString, (err, results) => {
      if (err) {
        callback(err);
      }
      callback(null, results);
    });
  },
};

module.exports = db;
