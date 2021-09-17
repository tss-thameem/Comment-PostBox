import React from 'react';
const Todolist =({todos, setTodos, setEditTodo})=>{
    const handleComplete =(todo) =>{
        setTodos(
            todos.map((item)=>{
                if(item.id ===todo.id){
                    return{...item, completed: !item.completed}
                }
                return item;
            }
        ));
    };    

    const handleEdit =({id}) =>{
      const findTodo = todos.find(todo => todo.id ===id);
      setEditTodo(findTodo);
    };

    const handleDelete =({id}) =>{
        setTodos(todos.filter((todo)=> todo.id !== id));  

    };
    return (
        <div>
            {todos.map((todo) =>(
             <span key = {todo.id}>
                 <textarea type = 'text' 
                        value = {todo.title} 
                        className={todo.completed ?'complete':''}
                        onChange ={(event)=>event.preventDefault()}
                 />
                 <div>
        {/* <button onClick ={()=>handleComplete(todo)}>Check</button> */}
        <button onClick ={()=> handleEdit(todo)}>Edit</button>
        <button onClick ={()=>handleDelete(todo)}>Delete</button>
        </div>

             </span>
            )
            )}
        </div>
        
    );
};
export default Todolist;