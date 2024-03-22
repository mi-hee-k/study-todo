import './App.css';

const todos = [
  { title: '할일1', content: '씻기', done: false },
  { title: '할일2', content: '스터디', done: false },
  { title: '할일3', content: '멘토링', done: false },
];

function App() {
  return (
    <div className='w-[70%] m-auto flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold mb-4 mt-4'>TodoList</h1>
      <form className='flex items-center w-[400px] text-center p-2 mb-8'>
        <input
          type='text'
          placeholder='할 일'
          className='py-1 px-4 bg-slate-200 rounded-md mr-4'
        />
        <button className='py-1 px-4 bg-yellow-500 rounded-md'>등록</button>
      </form>

      <div className='mb-8 w-full'>
        <h2 className='text-xl font-bold text-slate-700 mb-4'>진행중...😊</h2>
        <ul className='flex justify-between'>
          {todos.map((item) => (
            <li>
              <h3 className='font-bold'>{item.title}</h3>
              <p>{item.content}</p>
              <button className='mr-2 font-bold text-green-800'>완료</button>
              <button className='font-bold text-red-800'>삭제</button>
            </li>
          ))}
        </ul>
      </div>

      <div className='mb-8 w-full'>
        <h2 className='text-xl font-bold text-slate-700 mb-4'>완료👌</h2>
        <ul className='flex justify-between'>
          {todos.map((item) => (
            <li>
              <h3 className='font-bold'>{item.title}</h3>
              <p>{item.content}</p>
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
