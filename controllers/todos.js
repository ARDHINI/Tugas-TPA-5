import Todos from "../models/todos.js";

export const GetTodo = async (req, res) => {
  try {
    const todos = await Todos.find();
    res.status(200).json({
      message: "success",
      data: todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server bermasalah");
  }
};

export const CreateTodos = async (req, res) => {
  try {
    const todos = await Todos.create(req.body);
    res.status(200).json({
      message: "success",
      data: todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server bermasalah");
  }
};

export const GetTodobyid = async (req, res) => {
  try {
    const todos = await Todos.findById(req.params.id);

    if (!todos) {
      return res.status(404).json({ message: "Not found " });
    }
    res.status(200).json({
      message: "success",
      data: todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server bermasalah");
  }
};

export const DeleteTodobyId = async (req, res) => {
  try {
    const todos = await Todos.findByIdAndRemove(req.params.id);
    console.log(todos);
    if (!todos) {
      return res.status(404).json({ message: "Not found " });
    }
    res.status(200).json({
      message: "success",
      data: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server bermasalah");
  }
};

export const updateTodobyid = async (req, res) => {
  try {
    let todos = await Todos.findById(req.params.id);
    console.log(todo);
    if (!todos) {
      return res.status(404).json({ message: "Not found " });
    }

    todo = await Todos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      message: "success",
      data: todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server bermasalah");
  }
};

export const DeleteTodoAll = async (req, res) => {
  try {
    const todos = await Todos.deleteMany();
    console.log(todos);
    if (!todos) {
      return res.status(404).json({ message: "Not found " });
    }
    res.status(200).json({
      message: "success",
      data: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server bermasalah");
  }
};

