 
 
function TodoInput({onChange, onClick , value}){
  
  
 return(
    <form className='form'>
    <input onChange={onChange} type='text' className='input' placeholder='Add a task' value={value}/>
    <button onClick={onClick} type='submit' className='button' disabled={ value === ""}>Add Task </button>
    
  </form>
 )   
 
}

export default TodoInput;