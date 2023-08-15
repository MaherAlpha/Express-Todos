
import todosModel from "../model/todo.js";

const todoController={
    getAll: (req,res)=>{
        const todos = todosModel.getAllTodo();
        return res.json(todos);
    }
};

export default todoController;