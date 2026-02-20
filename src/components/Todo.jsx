import './Todo.css'
function Todo({name,para}){

    return(
        
            <div className="todo">
        <h2>{ name}</h2>
        <p>{para}</p>
        <button>Delete</button>
        </div> 
        
)
}
export default Todo