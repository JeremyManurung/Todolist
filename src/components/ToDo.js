

function ToDo({ todo, togelData, hapusData }) {
    return (
        <div key={todo.id} className="item-todo">
            <div 
                className={todo.complete ? "item-text strike" : "item-text"}
                onClick={() => togelData(todo.id)}
                >
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => hapusData(todo.id)}>
                delete
            </div>
        </div>
    )
}

export default ToDo