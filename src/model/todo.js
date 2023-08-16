const todos=[
    {
        "id": 1,
        "title": "Make Lachi Tea",
        "description": "Ingredients you need are : tea leaves, milk, lachi, sugar",
        "completed": false
    }
]
const todosModel={
    // function calls which we are required to do for todos
    getAllTodo: ()=>{
        return todos;
    },
    getTodoById: (id)=>{
        if(find(todos.id)===id){
            return todos.id;
        }
    },
    createNewTodo: (title,description)=>{
        const newTodo =
            {
                title,
                description
            }
            return newTodo;
    },
    updateTodo: (id,title,description,completed)=>{
        const update={};
        if(find(todos.id)===id){
            return update={
            
        }
    } 
    }
}

export default todosModel;