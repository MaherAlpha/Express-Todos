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
        return todos
    }

}

export default todosModel;