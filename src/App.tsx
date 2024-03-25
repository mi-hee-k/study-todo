import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

export type Todo = {
  id: string;
  title: string;
  done: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: uuidv4(), title: '할일1', done: false },
    { id: uuidv4(), title: '할일2', done: false },
    { id: uuidv4(), title: '할일3', done: true },
  ]);

  const [titleInput, setTitleInput] = useState<string>('');

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInput(e.target.value);
  };

  // 추가
  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setTitleInput('');
  };

  // 삭제
  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };

  // 수정
  const changeTodo = (id: string) => {
    const changeTodos = todos.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    setTodos(changeTodos);
  };

  return (
    <div className='w-[70%] m-auto flex flex-col justify-center items-center'>
      <h1 className='mt-4 mb-4 text-3xl font-bold'>TodoList</h1>
      <AddTodo
        addTodo={addTodo}
        titleInput={titleInput}
        changeInput={changeInput}
      />

      <TodoList
        todos={todos}
        changeTodo={changeTodo}
        deleteTodo={deleteTodo}
        isDone={false}
      />
      <TodoList
        todos={todos}
        changeTodo={changeTodo}
        deleteTodo={deleteTodo}
        isDone={true}
      />
    </div>
  );
}

export default App;
