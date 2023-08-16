
import todosModel from "../model/todo.js";

const todoController={
    getAll: (req,res)=>{
        const todos = todosModel.getAllTodo();
        return res.json(todos);
    },
    getTodoById: (req,res)=>{
        const todosID = todosModel.getTodoById(req.params.id);
        return res.json(todosID);
    },
    createNewTodo: (req,res)=>{
        const todoTitle=todosModel.createNewTodo(req.params.title);
        const todoDescription= todosModel.createNewTodo(req.params.description)
        return res.json(todoTitle,todoDescription);
    }

};

export default todoController;