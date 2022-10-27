import express, { Router } from 'express';
import {
  addTodo,
  deleteTodo,
  getTodos,
  toggleTodoDone,
  updateTodo,
} from '../controller/todo-controller.js';

const route = express.Router();

route.post('/todos', addTodo);
route.get('/todos', getTodos);
route.get('/todos/:id', toggleTodoDone);
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo);

export default route;
