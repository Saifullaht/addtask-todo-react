function TodoList({ todos }) {
    return (
      <>
        {todos.map((todo, ind) => (
          <div key={todo.id}>
            <h3 className="tasks">{todo.todo}</h3>
          </div>
        ))}
      </>
    );
  }
  
  export default TodoList;
  