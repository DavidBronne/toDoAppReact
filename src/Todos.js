import React from 'react';

const Todos = ({todos, handleDelete}) => {
    
    const todoList = todos.length ? (
        todos.map( todo => {
                    return  (
                        <div className="collection-item" key={todo.id}>
                            <span className="center" onClick={()=>{handleDelete(todo.id)}}>{todo.content}</span>
                        </div>
                    )
                }
            )
        ) : (
            <p className="center">Todos completed</p>
        )
    
    
    
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos