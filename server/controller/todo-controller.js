import todo from '../model/Todo.js';

export const addTodo = async (request, response) => {
  try {
    const newTodo = await todo.create({
      data: request.body.data,
      createdAt: Date.now(),
    });

    await newTodo.save();

    return response.status(200).json(newTodo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getTodos = async (request, response) => {
  try {
    const allTodos = await todo.find({}).sort({ createdAt: -1 });

    return response.status(200).json(allTodos);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const toggleTodoDone = async (request, response) => {
  try {
    const todoRef = await todo.findById(request.params.id);

    const updatedTodo = await todo.findOneAndUpdate(
      { _id: request.params.id },
      { done: !todoRef.done }
    );

    await updatedTodo.save();

    return response.status(200).json(updatedTodo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const updateTodo = async (request, response) => {
  try {
    await todo.findOneAndUpdate(
      { _id: request.params.id },
      { data: request.body.data }
    );

    const updatedTodo = await todo.findById(request.params.id);

    return response.status(200).json(updatedTodo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const deleteTodo = async (request, response) => {
  try {
    const updatedTodo = await todo.findByIdAndDelete(request.params.id);

    return response.status(200).json(updatedTodo);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};
