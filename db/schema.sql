DROP DATABASE IF EXISTS ToDoListDB;
CREATE DATABASE ToDoListDB;

USE ToDoListDB;

CREATE TABLE todos (
    todo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    todo_item VARCHAR(255) NOT NULL
);
