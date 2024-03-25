import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

type Todo = {
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
  const deleteAdd = (id: string) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className='w-[70%] m-auto flex flex-col justify-center items-center'>
      <h1 className='mt-4 mb-4 text-3xl font-bold'>TodoList</h1>
      <form
        className='flex items-center w-[400px] text-center p-2 mb-8'
        onSubmit={addTodo}
      >
        <input
          type='text'
          value={titleInput}
          onChange={changeInput}
          placeholder='할 일'
          className='px-4 py-1 mr-4 rounded-md bg-slate-200'
        />
        <button className='px-4 py-1 bg-yellow-500 rounded-md'>등록</button>
      </form>

      <div className='w-full mb-8'>
        <h2 className='mb-4 text-xl font-bold text-slate-700'>진행중...😊</h2>
        <ul className='flex flex-wrap w-full'>
          {todos.map((item) => (
            <li className='w-[20%]' key={item.id}>
              <h3 className='font-bold'>{item.title}</h3>
              <button className='mr-2 font-bold text-green-800'>완료</button>
              <button
                className='font-bold text-red-800'
                onClick={() => deleteAdd(item.id)}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className='w-full mb-8'>
        <h2 className='mb-4 text-xl font-bold text-slate-700'>완료👌</h2>
        <ul className='flex flex-wrap w-full'>
          {todos.map((item) => (
            <li className='w-[20%]' key={item.id}>
              <h3 className='font-bold'>{item.title}</h3>
              <p>{item.title}</p>
              <button className='mr-2 font-bold text-green-800'>완료</button>
              <button className='font-bold text-red-800'>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
