let db = require("./index.js");

let seedData = [
  {
    todo_item: "add more items",
  },
  {
    todo_item: "add even more items",
  },
];

let seedFunction = () => {
  seedData.forEach((item, index) => {
    db.query(`INSERT INTO todos (todo_item) VALUES ('${item.todo_item}');`);
  });
  console.log("Seeded into Database!");
};

seedFunction();
