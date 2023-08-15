
import todosModel from "../model/todo.js";

const todoController={
    getAll: (req,res)=>{
        const todos = todosModel.getAllTodo();
        return res.json(todos);
    },
    getTodoById: (req,res)=>{
        const todosID = todosModel.getTodoById();
        return res.json(todosID);
    }

};

export default todoController;