import './Todo.css'
function Todo({name,para}){


    function Delete(id){
        console.log('delete me!!',name.toUpperCase())
    }
    return(
        
            <div className="todo">
        <h2>{ name}</h2>
        <p>{para}</p>
        <button onClick={ () => Delete(1)}>Delete</button>
        </div> 
        
)
}
export default Todo