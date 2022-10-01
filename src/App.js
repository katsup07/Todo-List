import Todo from './components/Todo.js';

import { useState, useRef } from 'react';

function App() {
	const description = useRef(null);
  // an array of object, where each object has an id and component property
	const [todoList, setTodoList] = useState([]);
  // for each todo's id
  const [ counter, setCounter ]= useState(0); 

	function addTodo(descText) {
    setCounter(prevCounter => (prevCounter + 1));
    const updatedTodoList = prevTodoList => [
      ...prevTodoList, {id:counter, component: <Todo removeTodoFromList={handleRemoveTodoFromList} title={descText} />
  }];
    setTodoList( updatedTodoList );
	}

  function handleRemoveTodoFromList(title){
    console.log('removing todo from list..');
    setTodoList(prevTodoList => prevTodoList.filter( todo => title !== todo.component.props.title));
  }



	function getJSX() {
		return (
			<div>
				<h1>Todo List</h1>
				<input type='text' name='todo' ref={description} />
				<button
					onClick={() => addTodo(description.current.value)}
					className='btn'>
					add todo
				</button>
				{todoList.map((todo) => (
					<div key={todo.id} id={todo.id}>{todo.component}</div>
				))}
			</div>
		);
	}

	return <div>{getJSX()}</div>;
}

export default App;
